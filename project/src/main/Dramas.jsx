import React from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import {
  getAiringDramas,
  getOntheAirDramas,
  getPopularDramas,
  getTopRatedDramas,
} from '../api/api';
import BigSlider from '../components/BigSlider';
import Slider from '../components/Slider';

const Wrapper = styled.div`
  padding: var(--default-padding-style);
`;

const Dramas = () => {
  const { data: popularDramas, isLoading } = useQuery(['popular'], getPopularDramas);
  const { data: airingDramas } = useQuery(['airing'], getAiringDramas);
  const { data: topRatedDramas } = useQuery(['top_rated_drama'], getTopRatedDramas);
  const { data: on_the_airDramas } = useQuery(['ontheair'], getOntheAirDramas);
  return (
    <Wrapper className="box-border overflow-scroll">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <BigSlider datas={airingDramas} />

          <Slider title={'인기있는 드라마'} datas={popularDramas} />
          <Slider title={'시청률이 높은 드라마는?'} datas={topRatedDramas} />
          <Slider title={'지금 상영중인 드라마!'} datas={on_the_airDramas} />
        </div>
      )}
    </Wrapper>
  );
};

export default Dramas;

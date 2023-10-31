import React from 'react';
import styled from 'styled-components';
import BigSlider from '../../components/slider/BigSlider';
import Slider from '../../components/slider/Slider';
import UseDramas from '../../hooks/UseDramas';

const Wrapper = styled.div`
  padding: var(--default-padding-style);
`;

const Dramas = () => {
  const { popularDramas, airingDramas, topRatedDramas, on_the_airDramas, isLoading } =
    UseDramas();

  const slider_data = [
    {
      title: '인기있는 드라마',
      datas: popularDramas,
    },
    {
      title: '시청률이 높은 드라마는?',
      datas: topRatedDramas,
    },
    {
      title: '지금 상영중인 드라마!',
      datas: on_the_airDramas,
    },
  ];

  return (
    <Wrapper className="box-border overflow-scroll">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <BigSlider datas={airingDramas} />

          {slider_data.map((item) => (
            <Slider title={item.title} datas={item.datas} key={item.title} />
          ))}
        </div>
      )}
    </Wrapper>
  );
};

export default Dramas;

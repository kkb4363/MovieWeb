import React from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import {
  getPopularMovies,
  getTopRatedMovies,
  getTrendingMovies,
  getUpcomingMovies,
} from '../api/api';
import BigSlider from '../components/BigSlider';
import Slider from '../components/Slider';

const Wrapper = styled.div`
  padding: var(--default-padding-style);
`;

const Movies = () => {
  const { data: popularMovies, isLoading } = useQuery(['getMovies'], getPopularMovies);
  const { data: trendingMovies } = useQuery(['getTreding'], getTrendingMovies);
  const { data: top_ratedMovies } = useQuery(['top_rated'], getTopRatedMovies);
  const { data: upcomingMovies } = useQuery(['upcomming'], getUpcomingMovies);

  return (
    <Wrapper className="box-border overflow-scroll">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <BigSlider datas={trendingMovies} />

          <Slider title={'인기있는 영화'} datas={popularMovies} />
          <Slider title={'오늘 뭐 볼까?'} datas={top_ratedMovies} />
          <Slider title={'곧 출시될 영화'} datas={upcomingMovies} />
        </div>
      )}
    </Wrapper>
  );
};

export default Movies;

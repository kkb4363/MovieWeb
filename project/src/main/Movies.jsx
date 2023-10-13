import React from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { getPopularMovies, getTopRatedMovies, getUpcomingMovies } from '../api/api';
import { makeImagePath } from '../utils/utils';
import BigCover from '../components/BigCover';
import Slider from '../components/Slider';

const Wrapper = styled.div`
  padding: var(--default-padding-style);
`;

const Movies = () => {
  const { data: popularMovies, isLoading } = useQuery(['getMovies'], getPopularMovies);
  const { data: top_ratedMovies } = useQuery(['top_rated'], getTopRatedMovies);
  const { data: upcomingMovies } = useQuery(['upcomming'], getUpcomingMovies);

  return (
    <Wrapper className="box-border overflow-scroll">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <BigCover
            src={makeImagePath(popularMovies[0].backdrop_path)}
            title={popularMovies[0].title}
            details={popularMovies[0].overview.slice(0, 100)}
          />

          <Slider title={'인기있는 영화'} datas={popularMovies} />
          <Slider title={'오늘 뭐 볼까?'} datas={top_ratedMovies} />
          <Slider title={'곧 출시될 영화'} datas={upcomingMovies} />
        </div>
      )}
    </Wrapper>
  );
};

export default Movies;

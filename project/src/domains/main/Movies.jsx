import React from 'react';
import styled from 'styled-components';
import BigSlider from '../../components/slider/BigSlider';
import Slider from '../../components/slider/Slider';
import UseMovies from '../../hooks/UseMovies';

const Wrapper = styled.div`
  padding: var(--default-padding-style);
`;

const Movies = () => {
  const { popularMovies, trendingMovies, top_ratedMovies, upcomingMovies, isLoading } =
    UseMovies();

  const slider_data = [
    {
      title: '인기있는 영화',
      datas: popularMovies,
    },
    {
      title: '오늘 뭐 볼까?',
      datas: top_ratedMovies,
    },
    {
      title: '곧 출시될 영화',
      datas: upcomingMovies,
    },
  ];

  return (
    <Wrapper className="box-border overflow-scroll">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <BigSlider datas={trendingMovies} />

          {slider_data.map((item) => (
            <Slider key={item.title} title={item.title} datas={item.datas} />
          ))}
        </div>
      )}
    </Wrapper>
  );
};

export default Movies;

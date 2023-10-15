import { useQuery } from 'react-query';
import {
  getPopularMovies,
  getTopRatedMovies,
  getTrendingMovies,
  getUpcomingMovies,
} from '../api/api';

const UseMovies = () => {
  const { data: popularMovies, isLoading } = useQuery(['getMovies'], getPopularMovies);
  const { data: trendingMovies } = useQuery(['getTreding'], getTrendingMovies);
  const { data: top_ratedMovies } = useQuery(['top_rated'], getTopRatedMovies);
  const { data: upcomingMovies } = useQuery(['upcomming'], getUpcomingMovies);

  return { popularMovies, trendingMovies, top_ratedMovies, upcomingMovies, isLoading };
};

export default UseMovies;

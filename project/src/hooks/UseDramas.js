import { useQuery } from 'react-query';
import {
  getAiringDramas,
  getOntheAirDramas,
  getPopularDramas,
  getTopRatedDramas,
} from '../api/apis';

const UseDramas = () => {
  const { data: popularDramas, isLoading } = useQuery(['popular'], getPopularDramas);
  const { data: airingDramas } = useQuery(['airing'], getAiringDramas);
  const { data: topRatedDramas } = useQuery(['top_rated_drama'], getTopRatedDramas);
  const { data: on_the_airDramas } = useQuery(['ontheair'], getOntheAirDramas);

  return { popularDramas, airingDramas, topRatedDramas, on_the_airDramas, isLoading };
};

export default UseDramas;

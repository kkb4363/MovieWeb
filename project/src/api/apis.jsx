import {
  getAxios,
  getAxiosDefault,
  getDetailsWithAxios,
  getVideosWithAxios,
} from '../utils/utils';

// movie
export async function getTrendingMovies() {
  const data = getAxios('/trending/movie/week');
  return data;
}

export async function getPopularMovies() {
  const data = getAxios('/movie/popular');
  return data;
}

export async function getTopRatedMovies() {
  const data = getAxios('/movie/top_rated');
  return data;
}

export async function getUpcomingMovies() {
  const data = getAxios('/movie/upcoming');
  return data;
}

// drama
export async function getAiringDramas() {
  const data = getAxios('/tv/airing_today');
  return data;
}

export async function getPopularDramas() {
  const data = getAxios('/tv/popular');
  return data;
}

export async function getTopRatedDramas() {
  const data = getAxios('/tv/top_rated');
  return data;
}

export async function getOntheAirDramas() {
  const data = getAxios('/tv/on_the_air');
  return data;
}

// get details
export async function getDetails(series, id) {
  const data = getDetailsWithAxios(`/${series}/${id}`);
  return data;
}

// get videos
export async function getVideos(series, id) {
  const data = getVideosWithAxios(`/${series}/${id}`);
  return data;
}

// popular top-10
export async function getPopular() {
  const data = getAxiosDefault(`/trending/all/day`);
  return data;
}

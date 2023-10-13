import axios from 'axios';

const key = '505148347d18c10aeac2faa958dbbf5c';
const movieUrl = `https://api.themoviedb.org/3`;

export async function getPopularMovies() {
  const response = await axios.get(
    `${movieUrl}/movie/popular?api_key=${key}&page=2&language=ko-KR`
  );

  return response.data.results;
}

export async function getTopRatedMovies() {
  const response = await axios.get(
    `${movieUrl}/movie/top_rated?api_key=${key}&page=1&language=ko-KR`
  );

  return response.data.results;
}

export async function getUpcomingMovies() {
  const response = await axios.get(
    `${movieUrl}/movie/upcoming?api_key=${key}&page=1&language=ko-KR`
  );

  return response.data.results;
}

export async function getPopularDramas() {
  const response = await axios.get(
    `${movieUrl}/tv/popular?api_key=${key}&page=1&language=ko-KR`
  );

  return response.data.results;
}

export async function getTopRatedDramas() {
  const response = await axios.get(
    `${movieUrl}/tv/top_rated?api_key=${key}&page=1&language=ko-KR`
  );

  return response.data.results;
}

export async function getOntheAirDramas() {
  const response = await axios.get(
    `${movieUrl}/tv/on_the_air?api_key=${key}&page=1&language=ko-KR`
  );

  return response.data.results;
}

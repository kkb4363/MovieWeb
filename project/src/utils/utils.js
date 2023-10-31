import axios from 'axios';
const key = '505148347d18c10aeac2faa958dbbf5c';
const movieUrl = `https://api.themoviedb.org/3`;

export function makeImagePath(id, size) {
  return `https://image.tmdb.org/t/p/${size ? size : 'original'}${id}`;
}

export async function getAxios(src) {
  try {
    const res = await axios.get(`${movieUrl}${src}?api_key=${key}&page=1&language=ko-KR`);
    return res.data.results;
  } catch (error) {
    console.log('api Error=', error);
  }
}

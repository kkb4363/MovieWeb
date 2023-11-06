import axios from 'axios';

const key = '505148347d18c10aeac2faa958dbbf5c';
const movieUrl = `https://api.themoviedb.org/3`;

export function makeImagePath(id, size) {
  return `https://image.tmdb.org/t/p/${size ? size : 'original'}${id}`;
}

export async function getAxiosDefault(src) {
  try {
    const res = await axios.get(`${movieUrl}${src}?api_key=${key}&language=ko-KR`);
    return res.data;
  } catch (err) {
    console.log('api_default_error=', err);
  }
}

export async function getAxios(src) {
  try {
    const res = await axios.get(`${movieUrl}${src}?api_key=${key}&page=1&language=ko-KR`);
    return res.data.results;
  } catch (error) {
    console.log('api Error=', error);
  }
}

export async function getDetailsWithAxios(src) {
  try {
    const res = await axios.get(`${movieUrl}${src}?api_key=${key}&language=ko-KR`);
    return res.data;
  } catch (error) {
    console.log('get details error=,', error);
  }
}

export async function getVideosWithAxios(src) {
  try {
    const res = await axios.get(`${movieUrl}${src}/videos?api_key=${key}`);
    return res.data.results;
  } catch (error) {
    console.log('get videos error=,', error);
  }
}

export function getTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const day = now.getDate().toString().padStart(2, '0');
  let period;

  if (hours < 12) period = '오전';
  else period = '오후';

  const currentTime_00_00 = `${period} ${hours}:${minutes}`;
  const currentDate_YEAR_MM_DD = `${year}.${month}.${day}`;
  return { currentTime_00_00, currentDate_YEAR_MM_DD };
}

export function makeImagePath(id, size) {
  return `https://image.tmdb.org/t/p/${size ? size : 'original'}${id}`;
}

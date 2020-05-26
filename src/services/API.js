import axios from 'axios';

function parseTex(str) {
  return str.replace(/\$([^$]+)\$/g, (_, content) => {
    return `\\(${content}\\)`;
  });
}

export async function getPosters() {
  const { data } = await axios.get(`${process.env.REACT_APP_API_HOST}/posters`);
  const titles = data.map(poster => parseTex(poster.SubSessionName));
  return titles;
}

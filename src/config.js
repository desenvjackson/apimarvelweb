import axios from 'axios';
import md5 from 'js-md5'

// Parametros.
const marvelURL = 'https://gateway.marvel.com/v1/public/',
const publicKey =  '0bff0ad93abec2000df21d3f2f9a30ab';
const privateKey = '98ad41ff27e6b4c2e5fa4d8776146def1a37a0f7';
const hash = md5(publicKey + privateKey);

console.log (hash);

const api = axios.create({
  baseURL: marvelURL,
  params: {
    ts: '1',
    apikey: publicKey,
    hash: hash,
  },
});

export default api;
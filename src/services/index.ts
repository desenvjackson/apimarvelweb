import axios from 'axios';
import * as myConst from '../constants/listconstants'

const marvelURL =  myConst.URL_MARVEL;
const publicKey =  myConst.KEY_PUBLIC;
const privateKey = myConst.KEY_PRIVATE;

const ts = Math.floor(Date.now()/1000)
const CryptoJS = require("crypto-js");
const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();

const api = axios.create({
  baseURL: marvelURL,
  params: {
    ts: ts,
    apikey: publicKey,
    hash: hash,
  },
});

export default api;


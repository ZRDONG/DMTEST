// src/api/apiClient.js

import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://47.121.130.231:5000', // 后端地址

  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  responseType: "arraybuffer",
});
//
// const imgClient = axios.create({
//     baseURL: 'http://47.121.130.231:5000', // 后端地址
//
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
//   responseType: 'arraybuffer'
// })

export default apiClient;
// export default imgClient;

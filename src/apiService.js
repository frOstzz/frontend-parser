const axios = require('axios');
const qs = require('qs');

const apiService = axios.create({
  baseURL: 'https://api.vk.com/method/',
  responseType: 'json',
  paramsSerializer: function (params) {
    return qs.stringify(params, { arrayFormat: 'brackets', encode: false });
  }
});

export default apiService;
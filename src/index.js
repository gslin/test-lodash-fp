const axios = require('axios');
const fp = require('lodash/fp');

const neko = async () => {
  return axios.get('https://nekos.best/api/v2/neko');
};

(async () => {
  console.log(await neko());
})();

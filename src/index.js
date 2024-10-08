const _ = require('lodash');
const axios = require('axios');
const fp = require('lodash/fp');

const neko = async () => {
  return axios.get('https://nekos.best/api/v2/neko?amount=2').then(
    fp.flow(
      fp.get('data.results'),
      fp.map('url'),
      fp.tap(x => console.log('neko(): ', x)),
    ),
  );
};

(async () => {
  console.log(await neko());
})();

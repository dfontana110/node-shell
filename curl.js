const request = require('request');

const curl = url => {
  console.log(request(url));
};

module.exports = curl;

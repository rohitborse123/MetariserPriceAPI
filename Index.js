const axios = require("axios");

axios
  .get(
    "https://cors-anywhere.herokuapp.com/https://api.coinmarketcap.com/dexer/v3/dexer/pair-list?base-address=0xe2161b01c79c3ca2079c1ba8d0fd6423fc726b67&start=1&limit=10&platform-id=14"
  )
  .then(function (response) {
    console.log("res***cl", response.data.data[0].priceUsd);
  })
  .catch(function (error) {
    console.error(error);
  });
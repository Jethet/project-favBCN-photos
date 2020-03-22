const axios = require("axios");

// SIMPLE GET REQUEST
// axios.get("http://webcode.me").then(resp => {
//   console.log(resp.data);
// });

// ASYNC/AWAIT GET REQUEST
async function makeGetRequest() {
  let res = await axios.get("http://webcode.me");

  let data = res.data;
  console.log(data);
}

makeGetRequest();

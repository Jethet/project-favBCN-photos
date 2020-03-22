const axios = require("axios");

async function makeGetRequest() {
  try {
    const res = await axios.get("http://localhost:3000/users/");
    const data = res.data;
    console.log(data);
  } catch (e) {
    console.error("Failure!");
    console.error(e.response.status);
  }
}

makeGetRequest();

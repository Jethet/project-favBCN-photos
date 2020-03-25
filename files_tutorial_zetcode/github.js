const axios = require("axios");

async function getNumberOfFollowers() {
  let res = await axios.get("https://api.github.com/users/janbodnar");

  let numOfFollowers = res.data.followers;
  let location = res.data.location;

  console.log(`# of followers: ${numOfFollowers}`);
  console.log(`Location: ${location}`);
}

getNumberOfFollowers();

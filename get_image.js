const axios = require("axios");
const fs = require("fs");

var config = {
  responseType: "stream"
};

let url = "https://www.euttarakhand.com/wp-content/uploads/2016/11/kumaoni_food.jpg";

async function getImage() {
  let resp = await axios.get(url, config);
  resp.data.pipe(fs.createWriteStream("image_food.jpg"));
}

getImage();

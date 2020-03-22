const axios = require("axios");
const fs = require("fs");

var config = {
  responseType: "stream"
};

async function getMultipleImages() {
  let [img1, img2] = await Promise.all([
    axios.get(
      "https://g.foolcdn.com/editorial/images/167482/vegetables-colorful-array.jpg",
      config
    ),
    axios.get(
      "https://cdn.funcheap.com/wp-content/uploads/2016/11/3697-Slogans-On-Healthy-Food1.jpg",
      config
    )
  ]);
  resp.data.pipe(fs.createWriteStream("image_food3.jpg", "image_food4.jpg"));
}

getMultipleImages();

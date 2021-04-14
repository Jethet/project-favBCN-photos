
let imagesArray = [
  "https://www.barcelonaborne.com/wp-content/uploads/2019/02/Ajuntament_de_Barcelona_-e1493376692916-760x428.jpg",
  "https://cdn.thecrazytourist.com/wp-content/uploads/2016/07/Barcelona-City-Beach.jpg",
  "https://www.citylifebarcelona.com/wp-content/uploads/barcab.jpg",
  "https://clickstay.s3-eu-west-1.amazonaws.com/images/blog/post/Barcelona%20beach.jpg",
  "https://wallpapercave.com/wp/wp1825789.jpg",
  "https://wallpapercave.com/wp/wp1825805.jpg",
  "https://2.bp.blogspot.com/-lPfS-jj6nog/Tok3FT1Nb2I/AAAAAAAADn0/ODXxQkGxXY8/s1600/barcelona-city-2011-photo-4.jpg",
  "https://urbansurf.me/wp-content/uploads/2019/05/Barcelona-City-Attractions.jpg",
  "https://www.cooltur.org/wp-content/uploads/2018/10/COOLTUR-Turisme-Cultural-ENTRADA-ROMANA-CATEDRAL-BARCELONA.jpg",
];

let buttonForward = document.querySelector("#forwardButton");
buttonForward.addEventListener("click", slideForward);

let buttonBack = document.querySelector("#backButton");
buttonBack.addEventListener("click", slideBack);

let slide = document.querySelector("#image");
let currentSlide = 0;
slide.setAttribute("src", imagesArray[currentSlide]);

function slideForward() {
  currentSlide = currentSlide + 1;
  if (currentSlide > imagesArray.length - 1) {
    currentSlide = 0;
  }
  slide.setAttribute("src", imagesArray[currentSlide]);
}

function slideBack() {
  currentSlide = currentSlide - 1;
  if (currentSlide > imagesArray.length - 1) {
    currentSlide = 0;
  }
  slide.setAttribute("src", imagesArray[currentSlide]);
}

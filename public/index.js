let imagesArray = [
  "https://1.bp.blogspot.com/-9OxXyVavxoI/T1TsRCO5OlI/AAAAAAAAHjc/qqNGhDmiCBw/s1600/ES_Bar_PanoramawSagrada.jpg",
  "https://www.barcelonaborne.com/wp-content/uploads/2019/02/Ajuntament_de_Barcelona_-e1493376692916-760x428.jpg",
  "https://cdn.thecrazytourist.com/wp-content/uploads/2016/07/Barcelona-City-Beach.jpg",
  "https://www.citylifebarcelona.com/wp-content/uploads/barcab.jpg",
  "https://clickstay.s3-eu-west-1.amazonaws.com/images/blog/post/Barcelona%20beach.jpg",
  "https://wallpapercave.com/wp/wp1825789.jpg",
  "https://wallpapercave.com/wp/wp1825805.jpg",
  "https://2.bp.blogspot.com/-lPfS-jj6nog/Tok3FT1Nb2I/AAAAAAAADn0/ODXxQkGxXY8/s1600/barcelona-city-2011-photo-4.jpg",
  "https://urbansurf.me/wp-content/uploads/2019/05/Barcelona-City-Attractions.jpg",
  "https://www.cooltur.org/wp-content/uploads/2018/10/COOLTUR-Turisme-Cultural-ENTRADA-ROMANA-CATEDRAL-BARCELONA.jpg",
  "https://www.pride.com/sites/www.pride.com/files/2015/12/23/sagradafamilia.jpg",
  "https://media.timeout.com/images/101851347/image.jpg",
  "https://getwallpapers.com/wallpaper/full/6/7/b/1087965-full-size-barcelona-city-wallpapers-2941x1961-for-hd-1080p.jpg",
  "https://wallpapercave.com/wp/wp1825724.jpg",
  "https://getwallpapers.com/wallpaper/full/a/d/e/1088400-barcelona-city-wallpapers-1920x1080-ipad-retina.jpg",
  "https://wallpapercave.com/wp/wp1825725.jpg",
  "https://getwallpapers.com/wallpaper/full/1/5/e/1088009-free-download-barcelona-city-wallpapers-1920x1080-retina.jpg",
  "http://blog.via.com/wp-content/uploads/2016/06/barcelona.jpg",
  "https://www.barcelona.com/var/plain/storage/images/barcelona_hotels/hotel_barcelona_city_centre/header_container_city_center/header_images_centre_2/9248722-2-eng-GB/header_images_centre_2_header.jpg",
];

//  https://api.unsplash.com/

let buttonForward = document.querySelector("#forwardButton");
buttonForward.addEventListener("click", slideForward);

let autoForward = document.querySelector("#autoForwardButton");
autoForward.addEventListener("click", slideAutoForward);

let buttonBack = document.querySelector("#backButton");
buttonBack.addEventListener("click", slideBack);

let autoBack = document.querySelector("#autoBackButton");
autoBack.addEventListener("click", slideAutoBack);

let stopButton = document.querySelector("#stopButton");
stopButton.addEventListener("click", stopSlide);

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

function slideAutoForward() {
  let autoSlide = setInterval(() => {
    slideForward();
  }, 1000);
  if (currentSlide === imagesArray.length - 1) {
    console.log(currentSlide);
    
    clearInterval(autoSlide);
  }
}

function slideAutoBack() {}

function stopSlide() {
  clearInterval(autoSlide);
}

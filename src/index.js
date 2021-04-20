let imagesArray = [
  "https://1.bp.blogspot.com/-9OxXyVavxoI/T1TsRCO5OlI/AAAAAAAAHjc/qqNGhDmiCBw/s1600/ES_Bar_PanoramawSagrada.jpg",
  "https://www.europelanguagejobs.com/uploads/posts/Barcelona-city-flats.jpg",
  "https://www.barcelonaborne.com/wp-content/uploads/2019/02/Ajuntament_de_Barcelona_-e1493376692916-760x428.jpg",
  "https://cdn.thecrazytourist.com/wp-content/uploads/2016/07/Barcelona-City-Beach.jpg",
  "https://www.citylifebarcelona.com/wp-content/uploads/barcab.jpg",
  "https://clickstay.s3-eu-west-1.amazonaws.com/images/blog/post/Barcelona%20beach.jpg",
  "https://wallpapercave.com/wp/wp1825789.jpg",
  "https://wallpapercave.com/wp/wp1825805.jpg",
  "https://2.bp.blogspot.com/-lPfS-jj6nog/Tok3FT1Nb2I/AAAAAAAADn0/ODXxQkGxXY8/s1600/barcelona-city-2011-photo-4.jpg",
  "https://urbansurf.me/wp-content/uploads/2019/05/Barcelona-City-Attractions.jpg",
  "https://www.pride.com/sites/www.pride.com/files/2015/12/23/sagradafamilia.jpg",
  "https://media.timeout.com/images/101851347/image.jpg",
  "https://getwallpapers.com/wallpaper/full/6/7/b/1087965-full-size-barcelona-city-wallpapers-2941x1961-for-hd-1080p.jpg",
  "https://wallpapercave.com/wp/wp1825724.jpg",
  "https://getwallpapers.com/wallpaper/full/a/d/e/1088400-barcelona-city-wallpapers-1920x1080-ipad-retina.jpg",
  "https://wallpapercave.com/wp/wp1825725.jpg",
  "https://getwallpapers.com/wallpaper/full/1/5/e/1088009-free-download-barcelona-city-wallpapers-1920x1080-retina.jpg",
  "http://blog.via.com/wp-content/uploads/2016/06/barcelona.jpg",
  "https://www.barcelona.com/var/plain/storage/images/barcelona_hotels/hotel_barcelona_city_centre/header_container_city_center/header_images_centre_2/9248722-2-eng-GB/header_images_centre_2_header.jpg",
  "https://media.cntraveler.com/photos/588b6be07e8a8a141391707e/master/pass/la-rambla-barcelona-from-above-GettyImages-525241683.jpg",
  "https://getwallpapers.com/wallpaper/full/6/4/a/1088355-top-barcelona-city-wallpapers-1920x1080-for-phones.jpg",
  "https://xceed.me/blog/wp-content/uploads/2018/01/Barcelona-best-clubs-2019-at-xceed.png",
  "https://images.trvl-media.com/media/content/shared/images/travelguides/Barcelona-and-vicinity-179992-smalltabletRetina.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/b/b1/Front_view_of_the_central_building_of_the_Port_of_Barcelona._Barcelona%2C_Catalonia%2C_Spain.jpg",
  "https://thecoffeevine.com/wp-content/uploads/2017/03/barcelona1.jpg",
  "https://www.migratingmiss.com/wp-content/uploads/2016/06/Gaudi-Building-Barcelona.jpg",
  "https://duckduckgo.com/?t=ffab&q=barcelona+pictures&atb=v197-1&iax=images&ia=images&iai=https%3A%2F%2Fcbsnews1.cbsistatic.com%2Fhub%2Fi%2F2017%2F09%2F12%2F471eed98-002b-4adb-8513-ffdd76c7e856%2Fsagrada.jpg",
  "https://duckduckgo.com/?t=ffab&q=barcelona+pictures&atb=v197-1&iax=images&ia=images&iai=https%3A%2F%2Fimages.trvl-media.com%2Fmedia%2Fcontent%2Fshared%2Fimages%2Ftravelguides%2Fdestination%2F179992%2FBarcelona-52293.jpg",
  "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/Spain/Barcelona/Barcelona--parc-de-la-ciutadella-xlarge.jpg",
  "https://www.eh.ub.edu/img/barcelona/5.jpg",
  "https://bonavista-apartments.com/blog/wp-content/uploads/2014/05/casa-batllo-barcelona.jpg",
  "https://www.youstylish.com/wp-content/uploads/2018/11/180528121348-04-barcelona-beach-guide-1245x700.jpg",
  "https://devourbarcelonafoodtours.com/wp-content/uploads/2016/06/WE-love-Gracia.png",
  "https://www.orangesmile.com/common/img_cities_original/barcelona--372490-5.jpg",
  "https://brightsidetours.com/wp-content/uploads/2019/10/BrightSideTours-barcelona-night-tour-3.jpg",
  "http://www.heybrian.com/lib/images/travels/spain/barcelona_harbor_view.jpg",
  "https://meet.barcelona.cat/sites/default/files/facebook-og/la-barcelona-medieval_0.jpg",
  "https://room-matehotels.com/images/img/pau/large/slide_04.jpg",
  "http://www.xarj.net/wp-content/uploads/2007/04/gaudi3-barcelona.jpg",
  "https://farm4.static.flickr.com/3016/2408864976_3a17ec2643_o.jpg",
  "https://www.citytoursbarcelona.com/img/tours/tapas_and_wine/barcelonas_gothic_quarter.jpg",
  "https://duckduckgo.com/?t=ffab&q=mercat+santa+caterina&atb=v197-1&ia=images&iax=images&iai=https%3A%2F%2Fwww.barcelonacheckin.com%2Fimg%2Fstored_images%2Fbarcelona%2Fmappoints%2Fmercado-de-santa-caterina.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/050529_Barcelona_027.jpg/1200px-050529_Barcelona_027.jpg"
];

//  https://api.unsplash.com/

let slide = document.querySelector("#image");
let currentSlide = 0;
slide.setAttribute("src", imagesArray[currentSlide]);
let autoSlide;

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

function startApp() {
  slide.setAttribute("src", imagesArray[0]);
}

function slideForward() {
  currentSlide = currentSlide + 1;
  if (currentSlide > imagesArray.length - 1) {
    currentSlide = 0;
  }
  slide.setAttribute("src", imagesArray[currentSlide]);
  if (currentSlide === imagesArray.length - 1) {
    slideForward();
  }
}

function slideBack() {
  currentSlide = currentSlide - 1;
  if (currentSlide < 0) {
    currentSlide = imagesArray.length-1
  }
  slide.setAttribute("src", imagesArray[currentSlide]);
}

function slideAutoForward() {
  autoSlide = setInterval(slideForward, 1500);
}

function slideAutoBack() {
  autoSlide = setInterval(slideBack, 1500);
}

function stopSlide() {
  slide.setAttribute("src", imagesArray[0]);
  clearInterval(autoSlide);
}

// WEATHER
fetch("https://api.weatherbit.io/v2.0/current?city=Barcelona&country=Spain&key=2ac7e0a6ea244c14ae97c936f6d045c1")
.then((result) => result.json())
.then((weather) => {
  let bcnWeather = document.querySelector("weather-box")
  let todayWeather = weather[0].city_name
  bcnWeather.innerHTML = todayWeather
})


startApp();

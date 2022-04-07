     // dependencia jquery !!
 const prodArea = $(`#sc1.swiper-wrapper`);
 const thumbArea = $(`#sc2.swiper-wrapper`);

function CrearImagenSwiper(data) {
    if(data.image.length >= 1) {
      data.image.forEach(function(imageURL) {
        prodArea.append($('<div>', {
          class: "swiper-slide sw1 spotlight",
          'data-src': imageURL,
          'data-animation': "fade",
          'data-control': "page,zoom,download,fullscreen,close"
        }).prepend(`<img src="${imageURL}">`));
        thumbArea.append($('<div>', {
          class: "swiper-slide sw2"
        }).prepend(`<img src="${imageURL}">`));
      });
    }
}

function CrearVideoSwiper(data) {

    if(data.video.length >= 1) {
      data.video.forEach(function(videoURL) {
        prodArea.append($('<div>', {
          class: "swiper-slide flexLayout video_sl sw1"
        }).prepend(`
        <video class="op-player__media" id="player" controls playsinline autoplay muted loop>
        <source src='${videoURL}' type="video/mp4" />`));
        thumbArea.append($('<div>', {
          class: "swiper-slide sw2"
        }).prepend(`
        <div class='dark'></div>
        <div class='thumb_element'>
        <svg xmlns='http://www.w3.org/2000/svg' width='27' height='27' viewbox='0 0 24 24' fill='none' stroke='#fff' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'>
        <path d='M15.6 11.6L22 7v10l-6.4-4.5v-1zM4 5h9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2z'/></svg>
        </div>
        `));
      });
  }
}
     
     function SwiperInit() {
 Swiper.defaults.spaceBetween = 0;
  Swiper.defaults.direction = 'horizontal';


    var galleryThumbs = new Swiper('.product-thumbs', {
      spaceBetween: 10,
      slidesPerView: 5,
      freeMode: true
    });
    var galleryTop = new Swiper('.product-slider', {
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs: {
        swiper: galleryThumbs
      }
    });
}

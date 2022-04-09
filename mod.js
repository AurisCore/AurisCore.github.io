// dependencia jquery !!
 const prodArea = $(`#sc1.swiper-wrapper`);
 const thumbArea = $(`#sc2.swiper-wrapper`);
 const prod_div = $(".pro_details");
// -------------------------
// -------------------------
// -------------------------
// -------------------------
// -------------------------
// -------------------------
// -------------------------
// -------------------------
// -------------------------
// -------------------------
var externosObj = {
  "modo": "https://api.whatsapp.com/send?phone=",
  "numero": "091900333",
  "donar_url": "test.com",
  "mail": "vivenus@mail.com",
  "media_link": "youtube.com",
  "social_link": "s//n",
  "numero_apped": "59895330453"
}
// -------------------------
// -------------------------
// -------------------------
// -------------------------
// -------------------------
// -------------------------
// -------------------------
// -------------------------
// -------------------------
// -------------------------

var raw_e = {
    modo_sendForm:externosObj.modo,
    numero_apped:externosObj.numero_apped,
    mail:externosObj.mail,
    medialnk:externosObj.media_link,
    donarlnk:externosObj.donar_url
  }

function sendFormData() {
var pais = $("[name='pais']").val();
var region = $("[name='region']").val();
var ub_total = $("[name='ub_total']").val();
var producto = $("[name='producto']").val();
var mi_nombre = $("[name='nombre']").val();

window.location.href =
  `
  ${raw_e.modo_sendForm}${raw_e.numero_apped}&text=Hola, soy ${mi_nombre}. Estoy con interés en adquirir el producto[${producto}],
  estoy en ${region}, ${pais} ${ub_total}, cuanto me costaría un envío allí. Gracias.
  `;
}


function CrearProDetails(data,tmpl=false) {
  
  // default Template
  if (!tmpl) {
    tmpl = `
    <div class="g-column description"><div class="product-name" id="prod_name"><h1>${data.nombre}</h1></div><div class="price-box mb-2"><span class="regular-price"><span class="price" id="prod_price">${data.precio + data.currency}</span></span></div><small class="text-primary badge">${data.estado}</small><p class="dispo"><span>disponibles:</span><strong class="text-uppercase text-dark font-weight-bold" id="prod_disponibles">${data.disponibles}</strong></p></div><div class="g-column py-2"><div class="flexLayout envios"><svg fill="none" height="28" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewBox="0 0 24 24" width="28"><rect height="13" width="15" x="1" y="3"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg><span>Seleccione una ubicación de entrega</span></div><form method="post" action="javascript:void(0);" onsubmit="sendFormData()" class="form"><div class="field form-inline"><select class="crs-country form-select" name="pais" data-whitelist="${data.regiones_habiles}" data-region-id="one" required></select><select class="form-select" name="region" id="one" required></select><input type="text" name="ub_total" placeholder="localidad &
     calle" required></div><div class="field form-inline"><input type="text" name="nombre" placeholder="Nombre completo" aria-label="Nombre" required></div><input type="hidden" name="producto" value="${data.nombre}" hidden> <input type="submit" class="btn-cotizar" value="cotizar"></form><div class="m6"><img src="https://auriscore.github.io/images/Mercadopago-logo.png" width="98"> <img src="https://auriscore.github.io/images/mastercard-curved-64px.png" width="48"> <img src="https://auriscore.github.io/images/visa-curved-64px.png" width="48"></div>${data.extra_html}</div>
    `;
  }

  prod_div.append(tmpl);
  }

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

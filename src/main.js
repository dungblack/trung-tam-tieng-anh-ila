const listSlider = [
  {
    id: 1,
    height: "500px",
    background: "url(/src/imgs/JS-desktop-banner.png)"
  },
  {
    id: 2,
    height: "500.001px",
    background: "url(/src/imgs/SJ-desktop-banner.png)"
  },
  {
    id: 3,
    height: "500.002px",
    background: "url(/src/imgs/ST-desktop-banner.png)"
  },
  {
    id: 4,
    height: "500px",
    background: "url(/src/imgs/Banner-1901x626.png)"
  },
  {
    id: 5,
    height: "500px",
    background: "url(/src/imgs/ILO_banner_ILAwebsite-01.jpg)"
  },
];
let current = 0;
let currentSlider = listSlider[current];
const slider = document.getElementById("slider");
if (slider) {
  slider.innerHTML = `
    <div class="slider-item" style="background-image: ${currentSlider.background}; height: ${currentSlider.height}">
    </div>
  `;
}
const nextSl = () => {
  const next = document.getElementById("next");
  if (next) {
    next.onclick = () => {
      current++;
      currentSlider = listSlider[current];
      if (current > listSlider.length - 1) {
        current = 0;
        currentSlider = listSlider[current];
      }
      console.log("current", current);

      slider.innerHTML = `
    <div class="slider-item" style="background-image: ${currentSlider.background};height: ${currentSlider.height}">
    </div>
  `;
    };
  }
};
nextSl();
const prevSl = () => {
  const prev = document.getElementById("prev");
  if (prev) {
    prev.onclick = () => {
      current--;
      currentSlider = listSlider[current];
      if (current < 0) {
        current = listSlider.length - 1;
        currentSlider = listSlider[current];
      }
      console.log("current", current);

      slider.innerHTML = `
    <div class="slider-item" style="background-image: ${currentSlider.background};height: ${currentSlider.height}">
    </div>
  `;
    };
  }
};
prevSl();
setInterval(() => {
  current++;
  currentSlider = listSlider[current];
  if (current > listSlider.length - 1) {
    current = 0;
    currentSlider = listSlider[current];
  }

  slider.innerHTML = `
    <div class="slider-item" style="background-image: ${currentSlider.background};height: ${currentSlider.height}">
    </div>
  `;
}, 4000);

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  autoPlay: 2000,
  freeScroll: true,
wrapAround: true
});

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  }
  else {toTop.classList.remove("active");}
})

var elem = document.querySelector('.employees');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  autoPlay: 4500,
  freeScroll: true,
wrapAround: true
});
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  }
  else {toTop.classList.remove("active");}
});
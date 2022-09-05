document.addEventListener("DOMContentLoaded", function () {
  var main = new Splide("#main-carousel", {
    type: "fade",
    rewind: true,
    pagination: false,
    arrows: true,
    heightRatio: 0.3,
  });

  var thumbnails = new Splide("#thumbnail-carousel", {
    fixedWidth: 100,
    fixedHeight: 60,
    gap: 10,
    rewind: true,
    arrows: false,
    pagination: false,
    isNavigation: true,
    breakpoints: {
      600: {
        fixedWidth: 60,
        fixedHeight: 44,
      },
    },
  });

  main.sync(thumbnails);
  main.mount();
  thumbnails.mount();

  var splide = new Splide(".splideloop", {
    type: "loop",
    drag: "free",
    focus: "center",
    perPage: 3,
    grid: {
      row: 2,
      col: 4,
    },
    autoScroll: {
      speed: 1,
    },
  }).mount(window.splide.Extensions);
});

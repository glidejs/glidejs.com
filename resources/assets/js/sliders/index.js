import Coverflow from './components/coverflow'

new Glide('[data-component="hero"]', {
  focusAt: 'center',
  startAt: 7,
  perView: 6,
  peek: 50,
  gap: 30,
  autoplay: 2500,
  hoverpause: false,
  animationDuration: 1000,
  rewindDuration: 2000,
  touchRatio: 0.25,
  perTouch: 1,
  breakpoints: {
    480: {
      gap: 15,
      peek: 75,
      perView: 1
    },
    768: { perView: 2 },
    1360: { perView: 3 },
    1600: { perView: 4 },
    1960: { perView: 5 },
  }
}).mount({ Coverflow })

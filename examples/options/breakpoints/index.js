var glide = new Glide('#{{ id }}', {
  perView: 3,
  breakpoints: {
    1024: {
      perView: 2
    },
    600: {
      perView: 1
    }
  }
})

glide.mount()

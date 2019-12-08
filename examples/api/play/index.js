var button = document.querySelector('#{{ id }}-button')

var glide = new Glide('#{{ id }}', {
  startAt: 0,
  perView: 3,
  autoplay: false
})

button.addEventListener('click', function () {
  glide.play(1500)
})

glide.mount()
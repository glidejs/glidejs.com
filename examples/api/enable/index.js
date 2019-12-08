var button = document.querySelector('#{{ id }}-button')

var glide = new Glide('#{{ id }}', {
  startAt: 0,
  perView: 3
})

glide.disable()

button.addEventListener('click', function () {
  glide.enable()
})

glide.mount()
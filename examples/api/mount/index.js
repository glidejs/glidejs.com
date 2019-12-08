var button = document.querySelector('#{{ id }}-button')

var glide = new Glide('#{{ id }}', {
  startAt: 0,
  perView: 3
})

button.addEventListener('click', function () {
  glide.mount()
})
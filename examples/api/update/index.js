var button = document.querySelector('#{{ id }}-button')

var glide = new Glide('#{{ id }}', {
  startAt: 0,
  perView: 3
})

button.addEventListener('click', function () {
  glide.update({
    type: 'carousel',
    focusAt: 'center',
    startAt: 1,
    perView: 4
  })
})

glide.mount()
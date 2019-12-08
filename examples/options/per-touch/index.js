var input = document.querySelector('#{{ id }}-input')

var glide = new Glide('#{{ id }}', {
  perTouch: input.value,
  perView: 4,
  touchRatio: 1
})

input.addEventListener('input', function (event) {
  glide.update({
    perTouch: (event.target.value != 0) ? event.target.value : false
  })
})

glide.mount()

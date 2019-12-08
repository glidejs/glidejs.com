var input = document.querySelector('#{{ id }}-input')

var glide = new Glide('#{{ id }}', {
  touchRatio: input.value,
  perTouch: false,
  perView: 3
})

input.addEventListener('input', function (event) {
  glide.update({
    touchRatio: event.target.value
  })
})

glide.mount()

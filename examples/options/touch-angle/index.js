var input = document.querySelector('#{{ id }}-input')

var glide = new Glide('#{{ id }}', {
  touchAngle: input.value,
  perView: 3
})

input.addEventListener('input', function (event) {
  glide.update({
    touchAngle: event.target.value
  })
})

glide.mount()

var input = document.querySelector('#{{ id }}-input')

var glide = new Glide('#{{ id }}', {
  animationDuration: input.value,
  perView: 3
})

input.addEventListener('input', function (event) {
  glide.update({
    animationDuration: event.target.value
  })
})

glide.mount()

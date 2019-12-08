var input = document.querySelector('#{{ id }}-input')

var glide = new Glide('#{{ id }}', {
  perView: input.value
})

input.addEventListener('input', function (event) {
  glide.update({
    perView: event.target.value
  })
})

glide.mount()

var input = document.querySelector('#{{ id }}-input')

var glide = new Glide('#{{ id }}', {
  perView: 3,
  bound: true,
})

input.addEventListener('input', function (event) {
  glide.update({
    perView: event.target.value
  })
})

glide.mount()

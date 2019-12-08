var input = document.querySelector('#{{ id }}-input')

var glide = new Glide('#{{ id }}', {
  startAt: input.value,
  perView: 3
})

input.addEventListener('input', function (event) {
  glide.update({
    startAt: event.target.value
  })
})

glide.mount()

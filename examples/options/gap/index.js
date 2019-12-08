var input = document.querySelector('#{{ id }}-input')

var glide = new Glide('#{{ id }}', {
  gap: input.value,
  perView: 3
})

input.addEventListener('input', function (event) {
  glide.update({
    gap: event.target.value
  })
})

glide.mount()

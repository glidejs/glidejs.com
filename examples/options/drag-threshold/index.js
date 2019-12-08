var input = document.querySelector('#{{ id }}-input')

var glide = new Glide('#{{ id }}', {
  dragThreshold: input.value,
  perView: 3
})

input.addEventListener('input', function (event) {
  glide.update({
    dragThreshold: (event.target.value != 0) ? event.target.value : false
  })
})

glide.mount()

var input = document.querySelector('#{{ id }}-input')

var glide = new Glide('#{{ id }}', {
  swipeThreshold: input.value,
  perView: 3
})

input.addEventListener('input', function (event) {
  glide.update({
    swipeThreshold: (event.target.value != 0) ? event.target.value : false
  })
})

glide.mount()

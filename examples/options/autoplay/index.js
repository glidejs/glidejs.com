var input = document.querySelector('#{{ id }}-input')

var glide = new Glide('#{{ id }}', {
  autoplay: input.value,
  hoverpause: false,
  perView: 3
})

input.addEventListener('input', function (event) {
  glide.update({
    autoplay: (event.target.value != 0) ? event.target.value : false
  })
})

glide.mount()

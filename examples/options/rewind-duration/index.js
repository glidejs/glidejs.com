var input = document.querySelector('#{{ id }}-input')

var glide = new Glide('#{{ id }}', {
  rewindDuration: input.value,
  startAt: 9,
  perView: 3
})

input.addEventListener('input', function (event) {
  glide.update({
    rewindDuration: event.target.value
  })
})

glide.mount()

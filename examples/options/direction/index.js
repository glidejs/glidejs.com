var select = document.querySelector('#{{ id }}-select')

var glide = new Glide('#{{ id }}', {
  direction: select.value,
  perView: 3
})

select.addEventListener('change', function (event) {
  glide.update({
    direction: event.target.value
  })
})

glide.mount()

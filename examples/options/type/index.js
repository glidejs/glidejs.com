var select = document.querySelector('#{{ id }}-select')

var glide = new Glide('#{{ id }}', {
  type: select.value,
  focusAt: 'center',
  perView: 3
})

select.addEventListener('change', function (event) {
  glide.update({
    type: event.target.value
  })
})

glide.mount()

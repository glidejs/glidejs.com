var checkbox = document.querySelector('#{{ id }}-checkbox')

var glide = new Glide('#{{ id }}', {
  rewind: checkbox.checked,
  perView: 3
})

checkbox.addEventListener('change', function () {
  glide.update({
    rewind: checkbox.checked
  })
})

glide.mount()

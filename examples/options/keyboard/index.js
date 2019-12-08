var checkbox = document.querySelector('#{{ id }}-checkbox')

var glide = new Glide('#{{ id }}', {
  keyboard: checkbox.checked,
  perView: 3
})

checkbox.addEventListener('change', function () {
  glide.update({
    keyboard: checkbox.checked
  })
})

glide.mount()

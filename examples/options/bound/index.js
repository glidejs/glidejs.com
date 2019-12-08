var checkbox = document.querySelector('#{{ id }}-checkbox')

var glide = new Glide('#{{ id }}', {
  bound: checkbox.checked,
  startAt: 7,
  perView: 3
})

checkbox.addEventListener('change', function () {
  glide.update({
    bound: checkbox.checked
  })
})

glide.mount()

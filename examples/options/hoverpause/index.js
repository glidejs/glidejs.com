var checkbox = document.querySelector('#{{ id }}-checkbox')

var glide = new Glide('#{{ id }}', {
  hoverpause: checkbox.checked,
  autoplay: 2000,
  perView: 3
})

checkbox.addEventListener('change', function () {
  glide.update({
    hoverpause: checkbox.checked
  })
})

glide.mount()

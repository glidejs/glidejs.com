var select = document.querySelector('#{{ id }}-select')

var glide = new Glide('#{{ id }}', {
  animationTimingFunc: select.value,
  animationDuration: 800,
  perView: 3
})

select.addEventListener('change', function (event) {
  glide.update({
    animationTimingFunc: event.target.value
  })
})

glide.mount()

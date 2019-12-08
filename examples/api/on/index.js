var output = document.querySelector('#{{ id }}-output')

var glide = new Glide('#{{ id }}', {
  startAt: 0,
  perView: 3
})

glide.on(['mount.after', 'run'], function () {
  output.innerHTML = glide.index
})

glide.mount()
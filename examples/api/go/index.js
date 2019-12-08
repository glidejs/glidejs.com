var end = document.querySelector('#{{ id }}-end')
var jump = document.querySelector('#{{ id }}-jump')
var forward = document.querySelector('#{{ id }}-forward')
var backward = document.querySelector('#{{ id }}-backward')
var beginning = document.querySelector('#{{ id }}-beginning')

var glide = new Glide('#{{ id }}', {
  startAt: 0,
  perView: 3
})

forward.addEventListener('click', function () {
  glide.go('>')
})

backward.addEventListener('click', function () {
  glide.go('<')
})

jump.addEventListener('click', function () {
  glide.go('=2')
})

beginning.addEventListener('click', function () {
  glide.go('<<')
})

end.addEventListener('click', function () {
  glide.go('>>')
})

glide.mount()
var before = document.querySelector('#{{ id }}-before')
var after = document.querySelector('#{{ id }}-after')

var glide = new Glide('#{{ id }}', {
  startAt: 1,
  perView: 3,
  peek: {
    before: before.value,
    after: after.value
  }
})

function peek () {
  glide.update({
    peek: {
      before: before.value,
      after: after.value
    }
  })
}

before.addEventListener('input', peek)
after.addEventListener('input', peek)

glide.mount()

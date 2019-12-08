var input = document.querySelector('#{{ id }}-input')
var checkbox = document.querySelector('#{{ id }}-checkbox')

var glide = new Glide('#{{ id }}', {
  focusAt: input.value,
  perView: 4
})

function focus () {
  glide.update({
    focusAt: (checkbox.checked) ? checkbox.value : input.value
  })
}

input.addEventListener('input', focus)
checkbox.addEventListener('change', function () {
  input.disabled = checkbox.checked

  focus()
})

glide.mount()

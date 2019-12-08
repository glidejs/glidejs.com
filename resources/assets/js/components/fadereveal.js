import scrollreveal from './reveal'

const ELEMENT_SELECTOR = '[data-ref="fadereveal[el]"]'
const COMPONENT_SELECTOR = '[data-component="fadereveal"]'

let components = document.querySelectorAll(COMPONENT_SELECTOR)

for (var i = 0; i < components.length; i++) {
  let elements = components[i].querySelectorAll(ELEMENT_SELECTOR)

  scrollreveal.reveal(elements, {
    duration: 1000,
    scale: 1,
    distance: '0px',
    viewFactor: 0,
  }, 100)
}

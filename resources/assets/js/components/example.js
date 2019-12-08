const TOGGLE_SELECTOR = '[data-ref="example[toggle]"]'
const COMPONENT_SELECTOR = '[data-component="example"]'

let components = document.querySelectorAll(COMPONENT_SELECTOR)

for (let i = 0; i < components.length; i++) {
  let component = components[i]

  let toggle = component.querySelector(TOGGLE_SELECTOR)

  toggle.addEventListener('click', (event) => {
    component.classList.toggle(components[i].dataset.activeClass)
  })
}

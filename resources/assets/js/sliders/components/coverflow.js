import { prevSiblings, nextSiblings } from '../../utils/html'

const ELEMENT_SELECTOR = '[data-ref="hero[el]"]'

export default function (Glide, Components, Events) {
  const COVERFLOW = {
    tilt (current) {
      // Reset transformations of the currently active element.
      current.querySelector(ELEMENT_SELECTOR).style.transform = `perspective(1500px) rotateY(0deg)`

      // Transform next and previous siblings of the currently active element
      this.tiltPrevElements(current)
      this.tiltNextElements(current)
    },

    tiltPrevElements (current) {
      let prev = prevSiblings(current)

      for (let i = 0; i < prev.length; i++) {
        let el = prev[i].querySelector(ELEMENT_SELECTOR)

        el.style.transformOrigin = '100% 50%'
        el.style.transform = `perspective(1500px) rotateY(${(Math.max(i, 2) * 20)}deg)`
      }
    },

    tiltNextElements (current) {
      let next = nextSiblings(current)

      for (let i = 0; i < next.length; i++) {
        let el = next[i].querySelector(ELEMENT_SELECTOR)

        el.style.transformOrigin = '0% 50%'
        el.style.transform = `perspective(1500px) rotateY(${-(Math.max(i, 2) * 20)}deg)`
      }
    }
  }

  Events.on(['mount.after', 'run'], () => {
    COVERFLOW.tilt(Components.Html.slides[Glide.index])
  })

  return COVERFLOW
}

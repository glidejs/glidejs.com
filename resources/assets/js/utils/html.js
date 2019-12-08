export function nextSiblings (el) {
    let siblings = []

    if (el) {
      while (el = el.nextElementSibling) {
      siblings.push(el);
    }
    }

    return siblings
}

export function prevSiblings (el) {
    let siblings = []

    if (el) {
      while (el = el.previousElementSibling) {
        siblings.push(el)
      }
    }

    return siblings
}

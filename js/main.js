/* global TimelineMax Power3 */

const rearrange = e => {
  const grid = e.currentTarget
  const items = Array.from(grid.children)
  const title = items.find(el => el.dataset.content === 'Title text')
  const input = items.find(el => el.dataset.content === 'Input')
  const label = items.find(el => el.dataset.content === 'Label')
  const button = items.find(el => el.dataset.content === 'Button')

  const tl = new TimelineMax({delay: 0})
  tl.add('start')
  tl.addCallback(_ => { label.firstElementChild.innerHTML = 'Your email' })
  tl.addCallback(_ => { button.firstElementChild.innerHTML = 'send it over!' })
  tl.addCallback(_ => { input.firstElementChild.value = 'awesome@email.com' })
  tl.addCallback(_ => grid.classList.add('has-rearranged'), '+=0.15')
  tl.add('opacity', '+=0.15')
  tl.to(title, 1.3, {x: -300, y: -200, ease: Power3.easeOut}, 'opacity')
  tl.to(label, 1.3, {x: -300, y: 20, ease: Power3.easeOut}, 'opacity')
  tl.to(input, 1.3, {x: 200, y: 70, ease: Power3.easeOut}, 'opacity')
  tl.to(button, 1.3, {x: 600, y: -74, ease: Power3.easeOut}, 'opacity')
}

const jsRearranges = document.querySelectorAll('.jsRearrange')
jsRearranges.forEach(msDemo => {
  msDemo.addEventListener('click', rearrange)
})

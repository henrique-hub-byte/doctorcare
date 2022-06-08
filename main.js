window.addEventListener('scroll', onScroll)
onScroll()
showBackToTopButtonOnScroll()
function onScroll() {
  //navigation.clasList.add('scroll')
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
  //activateMenuAtCurrentSection(services)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  //verificar se a sessão passou da linha
  //quais dados vou precisar?
  //top da sessão
  const sectionTop = section.offsetTop
  //altura da sessão
  const sectionHeight = section.offsetHeight

  //o topo da sesseão chegou ou ultrapassou a linha alvo
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  //verificar se base está abaixo
  //quais dados vou presicas
  //a seção termina onde?
  const sectionEndsAt = sectionTop + sectionHeight
  //o final da seção passou da linha alvo
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  //limites da sessão
  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  //procurando na sessão o atributo id
  const sectionId = section.getAttribute('id')

  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    console.log('estou na home')
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 400) {
    /* console.log('estou no if') */
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'bottom',
  distance: '30px',
  duration: 700
}).reveal(
  '#home, #home img, #home .stats, #services, #services header, #services .cards, #services .card, #about, #about header, #about .content'
)

const navigation = document.getElementById('navigation')

window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackButtonOnScroll()
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackButtonOnScroll() {
  if (scrollY > 500) {
    backButton.classList.add('show')
  } else {
    backButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}
function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`#home,
 #home img,
 #home .stats,
 #services,
 #services header,
 #services .card,
 #about,
 #about header,
 #about .content`)

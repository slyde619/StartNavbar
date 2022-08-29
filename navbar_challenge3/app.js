const hamburgerBtn = document.querySelector('#hamburgerBtn')
const navList = document.querySelectorAll('.nav__list')

hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('active')
    navList.forEach(nav => {
        nav.classList.toggle('active')
    })
})

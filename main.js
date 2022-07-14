const buttons = document.querySelectorAll('.switch-btn') 
let video = document.querySelector('.video')

buttons.forEach(button => button.addEventListener('click', ()=>{
    let src = button.getAttribute('data-src');
    video.src = src 
}))


const toggleButton = document.querySelector('.menu-btn')
const navbarLinks = document.querySelector('.nav-list')

toggleButton.addEventListener('click', () =>{
    navbarLinks.classList.toggle('active')
})
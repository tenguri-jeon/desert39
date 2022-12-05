const header = document.querySelector('header');
const headerNav = document.querySelector('nav');
const innerli = document.querySelector('inner-nav');


header.addEventListener('mouseover', ()=>{
    header.classList.add('active');
    innerli.style.display = 'block'
})

headerNav.addEventListener('mouseleave', ()=>{
    header.classList.remove('active');
})
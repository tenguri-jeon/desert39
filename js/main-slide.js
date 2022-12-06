const header = document.querySelector('header');
const headerNav = document.querySelector('nav');
const innerli = document.querySelector('inner-nav');
const slideWrapper = document.querySelector('.contents-wrwapper');
const content = document.getElementsByClassName('content');
const slideCount = slideWrapper.childElementCount;
const slideWith = document.querySelector('#main-slide-area').clientWidth;
let contentWidth = slideWith - 


header.addEventListener('mouseover', ()=>{
    header.classList.add('active');
    innerli.style.display = 'block'
})

headerNav.addEventListener('mouseleave', ()=>{
    header.classList.remove('active');
})


function slide() {
    slideWrapper.style.transform = translateX(`-${contentWidth}`)
}

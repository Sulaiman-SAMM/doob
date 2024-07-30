'use strict'
// -6-  btn-mobile

const btnMobile = document.getElementById('btn-mobile');
const navbar = document.getElementById('navbar');
const bgMobile = document.getElementById('bg-mobile');

btnMobile.addEventListener('click',function(){
    navbar.classList.toggle('active')
    bgMobile.classList.toggle('active')
})
bgMobile.addEventListener('click',function(){
    navbar.classList.remove('active')
    bgMobile.classList.remove('active')
})

//  -1-     link-language
const linkDrop = document.getElementById('link-language');

linkDrop.addEventListener('click',function(e){
    e.preventDefault();

    document.querySelector('.sub-menu').classList.toggle('show');
})

// -2-     Initialize Swiper   Section-02

const Section02swiper = new Swiper('.section-02 .swiper', {
    loop: true,

    navigation: {
        nextEl: '.section-02 .button-next',
        prevEl: '.section-02 .button-prev',
    },

    });
// -3-     Initialize Swiper   Section-03

const Section03swiper = new Swiper('.section-03 .swiper', {
    loop: true,

    navigation: {
        nextEl: '.section-03 .button-next',
        prevEl: '.section-03 .button-prev',
    },

    });
// -4-     Initialize Swiper   Section-04

const Section04swiper = new Swiper('.section-04 .swiper', {
    loop: true,

    navigation: {
        nextEl: '.section-04 .button-next',
        prevEl: '.section-04 .button-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 0
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 0
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 3,
            spaceBetween: 0
        }
    }
});
// -5-  scroll down
const header = document.getElementById('header');
const offsetHeader = header.offsetTop;

window.onscroll = function(){
    FiexedHeader( )
}

function FiexedHeader( ){
    if(window.pageYOffset > offsetHeader){
        header.classList.add('header-bg');
    }else{
        header.classList.remove('header-bg');
    }
};
// -6-  Dark Mode

let btn_dark = document.getElementById('btn-dark');

// btn_dark.addEventListener('click',function(){
// })
function darkTheme( ) {
    btn_dark.classList.toggle('active')
    document.body.classList.toggle('dark-theme');


    if(localStorage.getItem('theme') == 'dark') {
        localStorage.setItem('theme','light')
    }else{
        localStorage.setItem('theme','dark')
    }
}
if(localStorage.getItem('theme') == 'light') {
    btn_dark.classList.remove('active')
}else if(localStorage.getItem('theme') == 'dark') {
    btn_dark.classList.add('active')
    document.body.classList.add('dark-theme');
}else{
    localStorage.setItem('theme','light')
}
// -7-  Read More
const preentContainer = document.querySelector('.read-more-item');

preentContainer.addEventListener('click', event=>{

    const current = event.target;

    const isReadMoreBtn = current.className.includes('read-more-btn');

    if(!isReadMoreBtn) return;

    const currentText = event.target.parentNode.querySelector('.read-more-text');

    currentText.classList.toggle('read-more-text-show');

    // current.textContant = current.textContant.includes('Read More') ?
    // "Read Less..." : "Read More...";
})
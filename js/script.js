function menuOpen(){
    let hamburger=document.querySelector('#hamburger');
    let navElements=document.querySelector('#nav__elements');
    let body=document.querySelector('#body');
    hamburger.onclick=function(){
        hamburger.classList.toggle('hamburger_active');
        navElements.classList.toggle('nav__elements_active');
        body.classList.toggle('scroll_none');
    }
    let navLinks=document.querySelectorAll('#nav__elements a');
    navLinks.forEach(function(navLink){
        navLink.onclick=function(){
            hamburger.classList.remove('hamburger_active');
            navElements.classList.remove('nav__elements_active')
            body.classList.remove('scroll_none')
        }
    })
}
menuOpen();



new Swiper('.swiper',{
    autoplay:{
        delay:2000,
        stopOnlastSlide: false,
        disableOnInteraction: false,
    },
    loop:true,
    speed: 1500,
    effect:'coverflow',
    navigation: { //добавляем стрелки
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: { //добавляем булиты
        el: '.swiper-pagination', //добавляем елемент
        type: 'bullets', //добавляем тип 
        clickable: true, //добавляем нажатие
        dynamicBullets: true, //добавляем трансформацию булитов
      },    
});
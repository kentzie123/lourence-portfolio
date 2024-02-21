const menuBtn = document.querySelector('.menu-btn-container'),
navMenu = document.querySelector('.left-navigations'),
navBtns = navMenu.querySelectorAll('li');

menuBtn.addEventListener('click',function(){
    menuBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
})

navBtns.forEach(function(btn){
    btn.addEventListener('click',function(){
        menuBtn.classList.remove('active');
        navMenu.classList.remove('active');
    })
})
const educations = document.querySelectorAll('.education'),
hobbies = document.querySelectorAll('.hobby'),
aboutInfo = document.querySelector('.about-info');
let itemsToReveal = [];

function addScrollReveal(element) {
    window.addEventListener('scroll', () => { 
        const elementRect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // console.log(`Element Top = ${elementRect.top}`);
        // console.log(`Element Bottom = ${elementRect.bottom}`);
        // console.log(`Reveal Threshold = ${windowHeight}`);
        // console.log(`Window Height = ${windowHeight}`);

        if (elementRect.top <= windowHeight * .75 && elementRect.bottom >= 0) {
            element.classList.add('reveal')
            // console.log('reveal');
        } else {
            element.classList.remove('reveal');
            // console.log('unreveal');
        }
    });
}

educations.forEach(function(educ){
    addScrollReveal(educ);
});


hobbies.forEach(function(hobby){
    addScrollReveal(hobby);
})

addScrollReveal(aboutInfo);

const bodyElement = document.querySelector('body');


const hamburger = document.querySelector(".fa-bars");

hamburger.addEventListener('click', () => {
    document.body.classList.toggle('change')
    document.body.classList.remove('toggle-side-account')

})

const hamburgerOff = document.querySelector(".fa-times");

hamburgerOff.addEventListener('click', () => {
    document.body.classList.remove('change')
    document.body.classList.remove('change-esports-list')
    document.body.classList.remove('change-games-list')

})

const myAccountSide = document.querySelector('.nav-space')

myAccountSide.addEventListener('click', () => {
    document.body.classList.toggle('toggle-side-account')
    document.body.classList.remove('change')


})

const accountOff = document.querySelector('.fa-times2')

accountOff.addEventListener('click', () => {
    document.body.classList.remove('toggle-side-account')
    document.body.classList.remove('change-esports-list')
    document.body.classList.remove('change-games-list')
})


const toggleCollapse = document.querySelector(".toggle-games-dropdown")

toggleCollapse.addEventListener('click', () => {
    document.body.classList.toggle('change-games-list')
    document.body.classList.remove('change-esports-list')

})

const toggleESportsCollapse = document.querySelector(".toggle-esports-collapse")

toggleESportsCollapse.addEventListener('click', () => {
    document.body.classList.toggle('change-esports-list')
    document.body.classList.remove('change-games-list')
})


const gamesDesktop = document.querySelector(".games-desktop");


gamesDesktop.addEventListener('click', () => {
    document.body.classList.remove('change-esports-list-desktop')
    document.body.classList.remove('change-account-list-desktop')
    document.body.classList.toggle('change-games-list-desktop')
    document.querySelector('.esports').style.color = 'green';


})

const esportsDesktop = document.querySelector(".esports-desktop");

esportsDesktop.addEventListener('click', () => {
    document.body.classList.remove('change-games-list-desktop')
    document.body.classList.remove('change-account-list-desktop')
    document.body.classList.toggle('change-esports-list-desktop')

})


const myAccount = document.querySelector('.my-account-toggle')

myAccount.addEventListener('click', () => {
    document.body.classList.remove('change-games-list-desktop')
    document.body.classList.remove('change-esports-list-desktop')
    document.body.classList.toggle('change-account-list-desktop')

})











const nextBtn = document.querySelector('.next-but')
const prevBtn = document.querySelector('.prev-but')
const slides = document.querySelectorAll('.slide')
const slideIcons = document.querySelectorAll('.slide-icon')
const numberOfSlices = slides.length;

let slideNumber = 0;


const careersBackground = document.querySelector('.explore-career-container')

numbersCareers = 1;
animationCount = 1;
setInterval(function intervalsSet() {
    animationCount++
    numbersCareers++

    if (numbersCareers > 4) {
        numbersCareers = 1;
    }

    if (animationCount > 4) {
        animationCount = 1;
    }


    function addAnimation() {
        careersBackground.style.background = `url(careers/careers${numbersCareers}.png)`
        careersBackground.style.backgroundSize = "cover";

    }

    addAnimation()

}, 3500)


const intervalSite = setInterval(function intervalSet() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove('active')
        slideIcons[slideNumber].classList.remove('current-slide-prevent')
    })
    slideNumber++
    if (slideNumber > 5) {
        slideNumber = 0;
    }
    slides[slideNumber].classList.add('active');
    slideIcons[slideNumber].classList.add('active');

}, 5000)



const headerTwo = document.querySelectorAll('h2')

nextBtn.addEventListener('click', () => {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove('active')
        slideIcons[slideNumber].classList.remove('current-slide-prevent')
    })
    slideNumber++;
    if (slideNumber > (numberOfSlices - 1)) {
        slideNumber = 0;
    }
    if (slideNumber == 0) {
        slideIcons[5].style.backgroundColor = '#B6B7B8'
    }
    slides[slideNumber].classList.add('active');
    headerTwo[slideNumber].classList.add('toggled-class')
    slideIcons[slideNumber].classList.add('current-slide-prevent')
    slideIcons[slideNumber].style.backgroundColor = '#00c3ff'
    slideIcons[slideNumber - 1].style.backgroundColor = '#B6B7B8'
    clearInterval(intervalSite)

})




prevBtn.addEventListener('click', () => {


    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove('active')
        slideIcons[slideNumber].classList.remove('current-slide-prevent')
    })
    slideNumber--;
    if (slideNumber < 0) {
        slideNumber = numberOfSlices - 1;
    }
    if (slideNumber == 5) {
        slideIcons[0].style.backgroundColor = '#B6B7B8'
    }
    slides[slideNumber].classList.add('active');

    slideIcons[slideNumber].classList.add('current-slide-prevent')
    slideIcons[slideNumber].style.backgroundColor = '#00c3ff'
    slideIcons[slideNumber + 1].style.backgroundColor = '#B6B7B8'
    clearInterval(intervalSite)



})











/*

function Here() {
    for (let i = 0, len = slideIcons.length; i < len; i++) {

        slideIcons[i].addEventListener('click', (e) => {
            slides.forEach((slide) => {

                slide.classList.remove('active')

            })
            slideIcons.forEach((slideIcon) => {
                if (slideIcons[i] != this) {
                    slideIcon.classList.remove('active')
                    slideIcon.classList.remove('current-slide-prevent')
                }
            })
            slides[i].classList.add('active');
            slideIcons[i].classList.add('active')
            slideIcons[i].classList.add('current-slide-prevent')
            slideIcons[i != this].style.backgroundColor = '#B6B7B8'
        })
    }


    //FROM HERE TO BELOW COULD BE DELETED RIGHT



}

Here()
*/





/*
slideIcons[1].addEventListener('click', (e) => {

    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove('active')
        slideIcons[slideNumber].classList.remove('current-slide-prevent')
    })
    slides[1].classList.add('active');
    slideIcons[1].classList.add('active')
})


slideIcons[2].addEventListener('click', (e) => {
    slides[2].classList.add('active');
    slideIcons[2].classList.add('active')
})
slideIcons[3].addEventListener('click', (e) => {
    alert('ololololo')
})
slideIcons[4].addEventListener('click', (e) => {
    alert('ololololo')
})
slideIcons[5].addEventListener('click', (e) => {
    alert('ololololo')
})
*/

// FINISH OFF
// FINISH OFF
// FINISH OFF
// FINISH OFF
// FINISH OFF
// FINISH OFF
// FINISH OFF
// FINISH OFF
// FINISH OFF
// FINISH OFF
// FINISH OFF
// FINISH OFF
// FINISH OFF
// FINISH OFF
// FINISH OFF
// FINISH OFF
// FINISH OFF
// FINISH OFF
// FINISH OFF




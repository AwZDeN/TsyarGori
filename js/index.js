document.addEventListener('DOMContentLoaded', function() {
    const btnPrev = document.getElementById('btn__prev');
    const btnNext = document.getElementById('btn__next');
    const rewiewsText = document.getElementById('rewiews__text');
    const rewiewsAuthor = document.getElementById('rewiews__author');
    const rewiewsPhoto = document.getElementById('rewiews__photo');
    const reviewItem = document.querySelector('.rewiews__item')
    const reviews = [
        {
            text: '«Здесь я учусь не цепляться за прошлые успехи, а каждый раз находить новую точку опоры для будущих побед»',
            author: 'Давыдова Анна',
            photo: 'images/2.jpg'
        },
        {
            text: '«Скалодром — это место, где страх превращается в следующую зацепку. Просто нужно до неё дотянуться»',
            author: 'Копёнкин Александр',
            photo: "images/1.jpg"
        },
        {
            text: '«Скалолазание — это разговор со стеной на языке баланса и доверия к своему собственному телу»',
            author: 'Ника Болдырева',
            photo: "images/3.jpg"
        }

    ];
    if (rewiewsText){
    let currentIndex = 0;

 
    function updateReview() {
        rewiewsText.textContent = reviews[currentIndex].text;
        rewiewsAuthor.textContent = reviews[currentIndex].author;
        rewiewsPhoto.src = reviews[currentIndex].photo;
    }


    btnPrev.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
        updateReview();

        reviewItem.classList.remove('fade-in');
  
    void reviewItem.offsetWidth; 
  
    reviewItem.classList.add('fade-in');
    });


    btnNext.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % reviews.length;
        updateReview();


    reviewItem.classList.remove('fade-in');
  
    void reviewItem.offsetWidth; 
  
    reviewItem.classList.add('fade-in');
})};


const accordionBtns = document.querySelectorAll('.accordion__header');
const accordionContents = document.querySelectorAll('.accordion__content');
const accordion = document.querySelectorAll('.accordion__item')
if(accordion){accordionBtns.forEach((btn, index) => {

    btn.addEventListener('click', function() {

        accordionContents[index].classList.toggle('show');
        accordion[index].classList.toggle('active')
        btn.classList.toggle('active');
    });

})};
const burgerBtn = document.querySelectorAll('.burger__button')
const burger = document.querySelector('.burger')
const body = document.querySelector('body')
if (burger){burgerBtn.forEach((btn) => {
    btn.addEventListener('click', function() {
        burger.classList.toggle('show')

        if (burger.classList.contains('show')) {
        
            body.style.overflow = "hidden"

}       else {
            body.style.overflow = ""
}

    })

})}

const navLink = document.querySelectorAll('.burger-class-remove')
    navLink.forEach((btn, index) => {
        btn.addEventListener('click', function() {
            burger.classList.remove('show')
            body.style.overflow = ''
        })
    })
    

window.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
     burgerBtn.forEach(btn => {
           if (scrolled >= 500) {
        btn.classList.add('show')
    } else {
        btn.classList.remove('show')
    }
     
        })
})
})


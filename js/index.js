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
            photo: 'https://sun9-38.userapi.com/s/v1/ig2/Y7lUe4ykrLVrThT7zLkLYdRPQhNWYSzGytMCz2tR6mBW_oYXvU1-_s38wsIXKV-2r-HkNqi8v1NXnv_OnM9vHHlO.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&cs=1280x0'
        },
        {
            text: '«Скалодром — это место, где страх превращается в следующую зацепку. Просто нужно до неё дотянуться»',
            author: 'Копёнкин Александр',
            photo: 'https://sun9-20.userapi.com/s/v1/ig2/_qKIzhWfQQBcoA5SSTcSdKBdzuz8oRzLKuITFoSr1K5zZniH40tdEU5yRNPPY1ep9jcu60J1H-7ooEfpkiJIDJ4E.jpg?quality=95&crop=0,0,1168,1440&as=32x39,48x59,72x89,108x133,160x197,240x296,360x444,480x592,540x666,640x789,720x888,1080x1331,1168x1440&from=bu&cs=1168x0'
        },
        {
            text: '«Скалолазание — это разговор со стеной на языке баланса и доверия к своему собственному телу»',
            author: 'Ника Болдырева',
            photo: 'https://sun9-6.userapi.com/s/v1/ig2/UTZ2fxxG08Uv7irQ4PD90L9ktYyIgG-tVYcxk_mjULZqinBACgGLidiHPC4_20n2lSXYGxjZn8b3vLAyjqCKWV3l.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&cs=1280x0'
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


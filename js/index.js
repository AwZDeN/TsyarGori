document.addEventListener('DOMContentLoaded', function() {
    const btnPrev = document.getElementById('btn__prev');
    const btnNext = document.getElementById('btn__next');
    const rewiewsText = document.getElementById('rewiews__text');
    const rewiewsAuthor = document.getElementById('rewiews__author');
    const rewiewsPhoto = document.getElementById('rewiews__photo');
    const reviewItem = document.querySelector('.rewiews__item');

    const reviews = [
        {
            text: '«Здесь я учусь не цепляться за прошлые успехи, а каждый раз находить новую точку опоры для будущих побед»',
            author: 'Давыдова Анна',
            photo: 'images/2.jpg'
        },
        {
            text: '«Крутое место! Спортивный инвентарь новый, персонал вежливый. Есть детский уголок, так что можно приходить всей семьей. Цены адекватные, абонементы выгодные. Лазать одно удовольствие — залипаешь на пару часов и забываешь о делах. Советую!»',
            author: 'Комаров Никита',
            photo: "images/1.jpg"
        },
        {
            text: '«Скалолазание — это разговор со стеной на языке баланса и доверия к своему собственному телу»',
            author: 'Ника Болдырева',
            photo: "images/3.jpg"
        }
    ];

    if (rewiewsText && rewiewsAuthor && rewiewsPhoto) {
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
        });
    }

    const accordionBtns = document.querySelectorAll('.accordion__header');
    const accordionContents = document.querySelectorAll('.accordion__content');
    const accordionItems = document.querySelectorAll('.accordion__item');

    if (accordionItems.length) {
        accordionBtns.forEach((btn, index) => {
            btn.addEventListener('click', function() {
                accordionContents[index].classList.toggle('show');
                accordionItems[index].classList.toggle('active');
                btn.classList.toggle('active');
            });
        });
    }

    const burgerBtns = document.querySelectorAll('.burger__button');
    const burger = document.querySelector('.burger');
    const body = document.querySelector('body');

    if (burger) {
        burgerBtns.forEach((btn) => {
            btn.addEventListener('click', function() {
                burger.classList.toggle('show');
                body.style.overflow = burger.classList.contains('show') ? 'hidden' : '';
            });
        });
    }

    const burgerLinks = document.querySelectorAll('.burger__link');
    burgerLinks.forEach((link) => {
        link.addEventListener('click', function() {
            burger.classList.remove('show');
            body.style.overflow = '';
        });
    });
});
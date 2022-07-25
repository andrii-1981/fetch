(function () {

    const slides = [
        `<div class="product__slide"> 
            <img src="img/baby-yoda.svg" alt="Baby Yoda">
        </div>`,
        `<div class="product__slide"> 
            <img src="img/banana.svg" alt="Banana">
        </div>`,
        `<div class="product__slide"> 
            <img src="img/viking.svg" alt="Viking">
        </div>`,
        `<div class="product__slide"> 
            <img src="img/girl.svg" alt="Girl">
        </div>`
    ];

    let currentSlideIdx = 0;

    function renderCarousel() {
        const slideContainer = document.querySelector('.products-carousel__slides');
        slideContainer.innerHTML = slides[currentSlideIdx];
        if (window.innerWidth > 600) {
            const secondSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
            slideContainer.innerHTML += slides[secondSlideIdx];
            if (window.innerWidth > 900) {
                const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
                slideContainer.innerHTML += slides[thirdSlideIdx];
            }
        }
    }

    function prev() {
        currentSlideIdx = currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
        renderCarousel();
    }

    function next() {
        currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
        renderCarousel();
    }

    setInterval(next, 3000);

    const prevButton = document.querySelector('.products-carousel__btn-prev');
    prevButton.addEventListener('click', prev);

    const nextButton = document.querySelector('.products-carousel__btn-next');
    nextButton.addEventListener('click', next);

    renderCarousel();

    window.addEventListener('resize', renderCarousel);

})();

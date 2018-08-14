let carouselList = $('.carousel__list');

function moveFirstSlide() {
    let firstItem = carouselList.find('.carousel__list-item:first');
    let lastItem = carouselList.find('.carousel__list-item:last');
    lastItem.after(firstItem);
    carouselList.css({marginLeft:0});
}

function changeSlide() {
    carouselList.animate({'marginLeft':-600}, 1000, moveFirstSlide);
}

setInterval(changeSlide, 4000);
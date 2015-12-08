function rewiewsGallery() {
    $('.reviews-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:true,
        dots:false
    });
}

$(document).ready(function(){

    rewiewsGallery();

});

$(window).load(function(){

});

$(window).resize(function(){

});
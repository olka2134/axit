$(function(){
    // tabs
    var tabsSliderBtns = $('.js--tabs__btn');
    var tabsSlider = $('.js--tabs__slider');
    
    tabsSlider.slick({
        fade: true,
        adaptiveHeight: true,
        arrows: false,
        accessibility: false,
        swipe: false,
    });

    tabsSliderBtns.on('click', function(e){
        var clickedBtn = $(e.currentTarget);
        var clickedBtnIndex = tabsSliderBtns.index(clickedBtn);
        tabsSlider.slick('slickGoTo', clickedBtnIndex);

        tabsSliderBtns.removeClass('_active');
        clickedBtn.addClass('_active');
    });


    // anchor links
    var links = $('.js--anchor-link');
    
    links.on('click', function(e) {
        var targetID = $(e.currentTarget).attr('href');
        
        $('html, body').animate({
            scrollTop: $(targetID).offset().top
        },800);
    });


    // reviews slider //
    var reviewsSlider = $('.js--reviews__slider');
    reviewsSlider.slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        adaptiveHeight: true,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });


    // pricing slider //
    var pricingSlider = $('.js--pricing__slider');
    pricingSlider.slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        adaptiveHeight: true,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });
});

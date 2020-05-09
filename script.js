$(function(){
    // tabs
    var tabsSliderBtns = $('.js--tabs__btn');
    var tabsSliderSelect = $('.js--tabs__select');
    var tabsSlider = $('.js--tabs__slider');
    
    tabsSlider.slick({
        fade: true,
        adaptiveHeight: true,
        arrows: false,
        accessibility: false,
        swipe: false,
    });

    tabsSlider.on('beforeChange', (e, slick, currentSlide, nextSlide) => {
        tabsSliderBtns.removeClass('_active');
        tabsSliderBtns.filter(':nth-child(' + (nextSlide + 1)+ ')').addClass('_active');
        tabsSliderSelect.val(nextSlide + 1);
    });

    tabsSliderBtns.on('click', function(e){
        var clickedBtn = $(e.currentTarget);
        var clickedBtnIndex = tabsSliderBtns.index(clickedBtn);
        tabsSlider.slick('slickGoTo', clickedBtnIndex);
    });

    tabsSliderSelect.on('change', (e) => {
        tabsSlider.slick('slickGoTo', e.target.value - 1);
    });


    // anchor links
    var links = $('.js--anchor-link');
    
    links.on('click', function(e) {
        var targetID = $(e.currentTarget).attr('href');

        drawer.close();
        
        $('html, body').animate({
            scrollTop: $(targetID).offset().top - $('.js--site-header').height(),
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


    // mobile menu
    var mobileMenu = $('.js--mobile-menu').clone(true);
    var mobileMenuToggler = $('.js--mobile-menu-toggler');

    var menu = new MmenuLight(mobileMenu[0]);
    var navigator = menu.navigation({
        theme: 'dark'
    });
    const drawer = menu.offcanvas({
        position: 'right',
    });

    mobileMenuToggler.on('click', function() {
        drawer.open();
    });
});

var App = App || [];

// Module Tabs
App.tabs = (function() {
    var tabsSliderBtns = $('.js--tabs__btn');
    var tabsSliderSelect = $('.js--tabs__select');
    var tabsSlider = $('.js--tabs__slider');

    function _init() {
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
    }

    return {
        init: _init,
    };
}());


// Module Anchor links
App.anchorLinks = (function() {
    var duration = 800;

    function _init(callback) {
        $(document).on('click touchend', '.js--anchor-link', function(e) {
            var targetID = $(e.currentTarget).attr('href');
    
            if (callback) {
                callback();
            }
            
            $('html, body').animate({
                scrollTop: $(targetID).offset().top - $('.js--site-header').height(),
            }, duration);
        });
    }
    
    return {
        init: _init,
    };
}());


// Module Reviews
App.reviews = (function() {
    var reviewsSlider = $('.js--reviews__slider');
    
    function _init(){
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
    }

    return {
        init: _init,
    };
}());


// Module Pricing
App.pricing = (function() {
    var pricingSlider = $('.js--pricing__slider');
    
    function _init(){
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
    }

    return {
        init: _init,
    };
}());


// Module Mobile Menu
App.mobileMenu = (function() {
    var mobileMenu = $('.js--mobile-menu').clone(true);
    var mobileMenuToggler = $('.js--mobile-menu-toggler');
    var drawer;

    function _init() {
        var menu = new MmenuLight(mobileMenu[0]);
        var navigator = menu.navigation({
            theme: 'dark'
        });
        drawer = menu.offcanvas({
            position: 'right',
        });

        mobileMenuToggler.on('click', function() {
            drawer.open();
        });
    }
    
    function _close() {
        drawer.close();
    }

    return {
        init: _init,
        close: _close,
    };
}());


$(function () {
    App.mobileMenu.init();
    App.tabs.init();
    App.anchorLinks.init(App.mobileMenu.close);
    App.reviews.init();
    App.pricing.init();     
});

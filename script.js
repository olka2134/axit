$(function(){
    // tabs
    var btns = $('.js--tabs__btn');
    var slider = $('.js--tabs__slider');
    
    slider.slick({
        fade: true,
        adaptiveHeight: true,
        arrows: false,
        accessibility: false,
        swipe: false,
    });

    btns.on('click', function(e){
        var clickedBtn = $(e.currentTarget);
        var clickedBtnIndex = btns.index(clickedBtn);
        slider.slick('slickGoTo', clickedBtnIndex);

        btns.removeClass('_active');
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
});

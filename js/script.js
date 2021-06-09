(function($) {
    "use strict";

    // Windows load

    $(window).on("load", function() {

        // Site loader 

        $(".loader-inner").fadeOut();
        $(".loader").delay(200).fadeOut("slow");

    });


    // Site navigation setup

    var header = $('.header'),
        pos = header.offset();

    $(window).scroll(function() {
        if ($(this).scrollTop() > pos.top + 50 && header.hasClass('default')) {
            header.fadeOut('fast', function() {
                $(this).removeClass('default').addClass('switched-header').fadeIn(200);
                $('.scroll-to-top').addClass('active');
            });
        } else if ($(this).scrollTop() <= pos.top + 50 && header.hasClass('switched-header')) {
            header.fadeOut('fast', function() {
                $(this).removeClass('switched-header').addClass('default').fadeIn(100);
                 $('.scroll-to-top').removeClass('active');
            });
        }
    });


    // Scroll to

    $('a.scroll').smoothScroll({
        speed: 800,
        offset: -120
    });


    //Popup elements

    $('.popup-image').magnificPopup({
        type: 'image',
        fixedContentPos: false,
        fixedBgPos: false,
        mainClass: 'mfp-no-margins mfp-with-zoom',
        image: {
            verticalFit: true
        },
        zoom: {
            enabled: true,
            duration: 300
        }
    });


    $('.popup-youtube, .popup-vimeo').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });



    // Portfolio filters

    $('.filter li a').on("click", function() {

        $(this).addClass('active');
        $(this).parent().siblings().find('a').removeClass('active');



        var filters = $(this).attr('data-filter');
        $(this).closest('.portfolio').find('.grid-item').removeClass('disable');

        if (filters !== 'all') {




            var selected = $(this).closest('.portfolio').find('.grid-item');

            for (var i = 0; i < selected.length; i++) {

                if (!selected.eq(i).hasClass(filters)) {
                    selected.eq(i).addClass('disable');
                }

            }

            return false;

        }


    });



      // Countdown setup

    $('.countdown').countdown('2020/4/25 09:00:00').on('update.countdown', function(event) {
  var $this = $(this).html(event.strftime(''
    + '<div class="p-2"><span class="counter mb-1 ">%D</span> <span class="label ">Day%!d</span></div> '
    + '<div class="p-2"><span class="counter mb-1">%H</span> <span class="label">Hour%!H</span></div> '
    + '<div class="p-2"><span class="counter mb-1">%M</span> <span class="label">Minute%!M</span></div> '
    + '<div class="p-2"><span class="counter mb-1">%S</span> <span class="label">Second%!S</span></div>'));
});





    // Jarallax setup


    jarallax(document.querySelectorAll('.jarallax'), {
        speed: 0.5,
        disableParallax: /iPad|iPhone|iPod|Android/,
        disableVideo: /iPad|iPhone|iPod|Android/
    });


      


})(jQuery);

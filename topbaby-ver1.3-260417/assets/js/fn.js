$(document).ready(function($) {
    $(window).on("resize", function() {
        if ($(this).width() >= 768) {
            $('ul.nav li.dropdown').hover(function() {
                $(this).addClass('open');
                $(this).find('.dropdown-menu').stop(true, true).show();
            }, function() {
                $(this).removeClass('open');
                $(this).find('.dropdown-menu').stop(true, true).hide();
            });
        }
    }).resize();

    $('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
        e.target
        e.relatedTarget
        $(".tab-pane .owl-carousel").trigger('refresh.owl.carousel');
    });
});
// #.Ready

$(".tab-pane .owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
});


$('.brand').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    dots: false,
    responsive: {
        0: {
            items: 3
        },
        400: {
            items: 4
        },
        500: {
            items: 6
        },
        600: {
            items: 8
        },
        1000: {
            items: 10
        }
    }
});

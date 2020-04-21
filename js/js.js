$('.sl').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }
    ]
});

$(document).ready(function () {
    $("body").on("click", "a", function (event) {
        let id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

(function ($) {
    $(function () {

        $('#up').click(function () {
            $('html, body').animate({scrollTop: 0}, 1500);
            return false;
        })

    })
})(jQuery);
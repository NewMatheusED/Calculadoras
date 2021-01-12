$(function(){
    $('.mosaico-wraper').slick({
        centerMode: false,
        slidesToShow: 6,
        arrows: false,
        responsive: [
            {
                breakpoint: 769, //quando a tela chegar nessa medida em px
                settings: {
                    centerMode: true,
                    arrows: false,
                    slidesToShow: 3
                }

            },
                {

                breakpoint: 581,
                settings: {
                    slidesToShow: 2,
                    centerMode: true,
                    arrows: false
                }

            },

                {
                    breakpoint: 381,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        slidesToShow: 1
                    }
                }
        ]
    });

    $('.tratamentos .container').slick({
        centerMode: false,
        slidesToShow: 3,
        arrows: false,
        infinite: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    arrows: false,
                    dots: true,
                    infinite: false,
                    slidesToShow: 1,
                    centerMode: false

                }
            }
        ]
    });

    $('.depoimentos .container').slick({
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        centerMode: false,
        autoplay: true,
        autoplaySpeed: 5000
    });

    $('.mosaico-social').slick({
        arrows: false,
        infinite: true,
        slidesToShow: 9,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    arrows: false,
                    infinite: true,
                    slidesToShow: 6,   
                }
            },

            {
                breakpoint: 769,
                settings: {
                    arrows: false,
                    infinite: true,
                    slidesToShow: 4,
                }
            },

            {
                breakpoint: 451,
                settings: {
                    arrows: false,
                    infinite: true,
                    slidesToShow: 2,
                }
            }
        ]
    })
    
})
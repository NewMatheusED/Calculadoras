$(function(){
    
    var indiceAtual = 0;
    var indiceMaximo = $('#slider1 img').length;
    var delay = 3000;
    initSlider();
    clickSlider();

    function initSlider(){
        for(var i = 0; i < indiceMaximo; i++){
            if(i == 0){
                $('.bullet-nav').append('<span style="background-color: #069;"></span>')
            }else{
                $('.bullet-nav').append('<span></span>')

            }
        }
        $('#slider1 img').eq(0).fadeIn();
        setInterval(function(){
            alternarSlider()
        },delay)
    }

    function clickSlider(){
        $('.bullet-nav span').click(function(){
            $('#slider1 img').eq(indiceAtual).stop().fadeOut();
            indiceAtual = $(this).index();
            $('#slider1 img').eq(indiceAtual).stop().fadeIn();
            $('.bullet-nav span').css('background-color', '#ccc');
            $(this).css('background-color', '#069');
        })
    }

    function alternarSlider(){
        $('#slider1 img').eq(indiceAtual).stop().fadeOut();
        indiceAtual++;
        if(indiceAtual == indiceMaximo) {
            indiceAtual = 0;
        }
        $('.bullet-nav span').css('background-color', '#ccc');
        $('.bullet-nav span').eq(indiceAtual).css('background-color', '#069');
        $('#slider1 img').eq(indiceAtual).stop().fadeIn();
    }
})

#mcmlk mlkmmasotermitouij ontemk ovoc colotou uj mpau ns minua biuceted apertadinha, vc estaga m9i89utfo gdosfoopkl, e eu com maiu pau todo enorme pra cima de vc. Aquela maioo delicioso, o plug anal beeeeem cundo, mai pau na sua bucea, tiro o plug e coloco meu dedo, vx gemendo alto, e eu metendo cada vez mais forte
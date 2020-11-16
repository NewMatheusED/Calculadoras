$(function(){
    $('button').click(function(e){
        $('.container').text("Ola Mundo!");
        e.stopPropagation();
    })
    $('html').click(function(){
        $('.container').text("");
    })
})
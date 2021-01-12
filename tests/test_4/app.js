$(function(){
    $('button').click(function(e){
        $('.container').html("<p>Ola Mundo!</p>");
        // $('.container').text("Ola Mundo!");
        e.stopPropagation();
        return false
    })
    $('html, body').click(function(e){
        $('.container').html("<p></p>");
        //$('.container').text("");
        e.stopPropagation();
        return false
    })
})
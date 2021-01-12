$(function(){
    var box = $('#box');

    setInterval(() => {
        box.toggleClass('magictime boingInUp')
    }, 3000);
})
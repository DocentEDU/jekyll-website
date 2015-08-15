$( document ).ready(function() {
    $('.video1').click(function() {
        $('#video1').get(0).pause();
        $('#video1').get(0).currentTime=0;
        $('#video1').get(0).play();
    });
    
    $('.video2').click(function() {
        $('#video2').get(0).pause();
        $('#video2').get(0).currentTime=0;
        $('#video2').get(0).play();
    });
    
    $('.video3').click(function() {
        $('#video3').get(0).pause();
        $('#video3').get(0).currentTime=0;
        $('#video3').get(0).play();
    });
});

$('body').scrollspy({ target: '#navbar-example' })

$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
})

$("#nav ul li a[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 300, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});
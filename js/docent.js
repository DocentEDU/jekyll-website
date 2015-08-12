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


//Questions
jQuery("#videoPlayer1").tubeplayer({
	width: 480, // the width of the player
	height: 320, // the height of the player
	allowFullScreen: "true", // true by default, allow user to go full screen
	initialVideo: "75SsDVZNipY", // the video that is loaded into the player
	preferredQuality: "default",// preferred quality: default, small, medium, large, hd720
	onPlay: function(id){}, // after the play method is called
	onPause: function(){}, // after the pause method is called
	onStop: function(){}, // after the player is stopped
	onSeek: function(time){}, // after the video has been seeked to a defined point
	onMute: function(){}, // after the player is muted
	onUnMute: function(){} // after the player is unmuted
});

$(".video1").click(function(){
    $("#videoPlayer1").tubeplayer("pause");
    $("#videoPlayer1").tubeplayer("seek",0);
    $("#videoPlayer1").tubeplayer("play");
});


//Discussions
jQuery("#videoPlayer2").tubeplayer({
	width: 480, // the width of the player
	height: 320, // the height of the player
	allowFullScreen: "true", // true by default, allow user to go full screen
	initialVideo: "5HkPUz_2cco", // the video that is loaded into the player
	preferredQuality: "default",// preferred quality: default, small, medium, large, hd720
	onPlay: function(id){}, // after the play method is called
	onPause: function(){}, // after the pause method is called
	onStop: function(){}, // after the player is stopped
	onSeek: function(time){}, // after the video has been seeked to a defined point
	onMute: function(){}, // after the player is muted
	onUnMute: function(){} // after the player is unmuted
});

$(".video2").click(function(){
    $("#videoPlayer2").tubeplayer("pause");
    $("#videoPlayer2").tubeplayer("seek",0);
    $("#videoPlayer2").tubeplayer("play");
    $("#videoPlayer2").tubeplayer("mute");
});

//Insight
jQuery("#videoPlayer3").tubeplayer({
	width: 480, // the width of the player
	height: 320, // the height of the player
	allowFullScreen: "true", // true by default, allow user to go full screen
	initialVideo: "rSfwgK-k_z0", // the video that is loaded into the player
	preferredQuality: "default",// preferred quality: default, small, medium, large, hd720
	onPlay: function(id){}, // after the play method is called
	onPause: function(){}, // after the pause method is called
	onStop: function(){}, // after the player is stopped
	onSeek: function(time){}, // after the video has been seeked to a defined point
	onMute: function(){}, // after the player is muted
	onUnMute: function(){} // after the player is unmuted
});

$(".video3").click(function(){
    $("#videoPlayer3").tubeplayer("pause");
    $("#videoPlayer3").tubeplayer("seek",0);
    $("#videoPlayer3").tubeplayer("play");
});

// ------------------------------
// Scroll Nav
// http://twitter.com/mattsince87
// http://codepen.io/mattsince87/pen/exByn
// ------------------------------

function scrollNav() {
  $('.nav-top a').click(function(){  
    //Toggle Class
    $(".active").removeClass("active");      
    $(this).closest('li').addClass("active");
    var theClass = $(this).attr("class");
    $('.'+theClass).parent('li').addClass('active');
    //Animate
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href').slice(1) ).offset().top - 30
    }, 400);
    $('#navbar-collapse-1').collapse('hide');
    return false;
  });
  $('.scrollTop a').scrollTop();
}
scrollNav();

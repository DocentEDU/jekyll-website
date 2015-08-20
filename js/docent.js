
function setupVideoPlayer($videoPlayer, $videoStarter, initialVideo) {
	$videoPlayer.tubeplayer({
		width: 480, // the width of the player
		height: 320, // the height of the player
		allowFullScreen: "true", // true by default, allow user to go full screen
		initialVideo: initialVideo, // the video that is loaded into the player
		preferredQuality: "default",// preferred quality: default, small, medium, large, hd720
		protocol: "https",//set to "https" for compatibility on SSL-enabled pages
		onPlay: function(id){}, // after the play method is called
		onPause: function(){}, // after the pause method is called
		onStop: function(){}, // after the player is stopped
		onSeek: function(time){}, // after the video has been seeked to a defined point
		onMute: function(){}, // after the player is muted
		onUnMute: function(){} // after the player is unmuted
	});
	$videoStarter.on('click', function() {
		startVideoPlayer($videoPlayer);	
	});
}

function startVideoPlayer($videoPlayer) {
	$('.jquery-youtube-tubeplayer').each(function() {
		$(this).tubeplayer("pause");
	});
	$videoPlayer.tubeplayer("seek",0).tubeplayer("mute").tubeplayer("play");
}

//Questions
setupVideoPlayer($("#videoPlayer1"), $(".video1"), "75SsDVZNipY");

//Discussions
setupVideoPlayer($("#videoPlayer2"), $(".video2"), "5HkPUz_2cco");

//Insight
setupVideoPlayer($("#videoPlayer3"), $(".video3"), "rSfwgK-k_z0");

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
    //Make sure at least one video is showing
    if ($(".active > .jquery-youtube-tubeplayer").length == 0) {
    	$("#videoPlayer1").parent().add(".video1").addClass("active");
    }
    return false;
  });
  $('.scrollTop a').scrollTop();
}
scrollNav();

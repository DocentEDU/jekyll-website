$(window).on('message', function(event) {
	event = event.originalEvent;
	if (event.origin === 'https://insertlearning.com') {
		if (event.data == 'showArrow') {
			$('#arrow').show();	
		}
		else if (event.data == 'hideArrow') {
			$('#arrow').hide();
		}
	}
});
$(document).ready(function() {
	function installExtension() {
		if (window.InstallTrigger) {
			var xpi = {
				InsertLearning: 'https://insertlearning.com/v1/firefox/?src=signup'
			};
			InstallTrigger.install(xpi);
			$('<button id="extension-installed">').hide().on('click', onExtensionInstalled).appendTo('body');
		}
        else if (document.body.dataset.extensionVersion) {
            location.href = 'https://insertlearning.com/v1/' + location.search;
        }
		else {
            try {
                sessionStorage.setItem('acquisitionSource', document.body.dataset.acquisitionSource || '');
            }
            catch (error) {
                console.log(error.message);
            }
			window.open('https://chrome.google.com/webstore/detail/dehajjkfchegiinhcmoclkfbnmpgcahj', '_blank');
		}
		if (window.ga) {
			ga('send', 'event', 'Buttons', 'click', 'Add to Chrome');	
		}
	}
	function onExtensionInstalled() {
		if (typeof(window.goog_report_conversion) == 'function') {
			goog_report_conversion();
		}
		location.href = 'https://insertlearning.com/v1/' + location.search;	
	}
	$('.add-to-chrome').on('click', installExtension);
	
	$(window).on('scroll', function(event) {
		var $button = $('header .add-to-chrome');
		if ($(window).scrollTop() <= 0) {
			$button.addClass('zero-opacity');
		}
		else {
			$button.removeClass('zero-opacity');
		}
	});
	
	if (window.InstallTrigger) {
		$('.add-to-chrome').html(function() {
			return $(this).html().replace('Chrome', 'Firefox');
		});
	}
});

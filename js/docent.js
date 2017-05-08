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
		if (window.chrome && chrome.webstore && chrome.webstore.install) {
			chrome.webstore.install('https://chrome.google.com/webstore/detail/dehajjkfchegiinhcmoclkfbnmpgcahj', onExtensionInstalled);
		}
		else if (window.InstallTrigger) {
			var xpi = {
				InsertLearning: 'https://insertlearning.com/v1/firefox/?src=signup'
			};
			InstallTrigger.install(xpi);
			$('<button id="extension-installed">').hide().on('click', onExtensionInstalled).appendTo('body');
		}
		else {
			window.open('https://chrome.google.com/webstore/detail/dehajjkfchegiinhcmoclkfbnmpgcahj', '_blank');
		}
		if (window.ga) {
			ga('send', 'event', 'Buttons', 'click', 'Add to Chrome');	
		}
	}
	function onExtensionInstalled() {
		location.href = 'https://insertlearning.com/v1/' + location.search;	
	}
	$('#add-to-chrome').on('click', installExtension);
});

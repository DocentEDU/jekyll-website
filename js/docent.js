$(window).on('message', function(event) {
	console.log('Message:', event);
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

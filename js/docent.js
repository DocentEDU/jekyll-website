$(window).on('message', function(event) {
	console.log('Message:', event);
	event = event.originalEvent;
	if (event.origin === 'https://insertlearning.com' && event.data == 'hideArrow') {
		$('#arrow').hide();
	}
});

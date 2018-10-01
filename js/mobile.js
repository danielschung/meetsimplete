$(document).ready (function() {
	
	$('img.mobile-nav').on('click', function() {
		$('div.nav-reveal').toggleClass('open');
	});

	if ( $(window).scrollTop() > 1 ) {
		$('div.nav-reveal').toggleClass('open', false);
	}

});
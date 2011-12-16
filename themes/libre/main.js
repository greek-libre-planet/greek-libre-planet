$(document).ready(function(){

	// hide #back-top first
	$("#back-top").hide();
	
	//image floating automation
	if ($("img").width() > 400) {
	    $("img").css("float", "none");
	}
	
	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 200) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});
	
	$('a#addform').click(function() {
	    $('#editformbox').hide();
	    $('#addformbox').toggle();
	return false;
    });
	
	$('a#editform').click(function() {
	    $('#editformbox').toggle();
	    $('#addformbox').hide();
	return false;
    });

});

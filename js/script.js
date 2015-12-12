var main = function() {
	$('p#navBut').click(function() {
			$('#naviFixed').css('padding-bottom', '20px');
		if ($('#dropCont').hasClass('open')) {
			$('#dropCont').removeClass('open');
			$('p#navBut').css('color', 'white');
			$('p#navBut').css('border', '1px solid white');
			$('#dropCont').toggle();
			$()
			console.log('in');
		} else {
			$('#naviFixed').css('padding-bottom', '0');
			$('#dropCont').addClass('open');
			$('p#navBut').css('color', '#3FA9F5');
			$('p#navBut').css('border', '1px solid #3FA9F5');
			$('#dropCont').toggle();
		}
	});

	$(window).resize(function() {
		var re = $(window).width();
		if (re > 580) {
			if ($('#dropCont').hasClass('open')) {
				$('#dropCont').toggle();
				$('#dropCont').removeClass('open');
				$('#naviFixed').css('padding-bottom', '20px');
			}
		}
	});

	$(window).scroll(function() {
		if ($('#dropCont').hasClass('open')) {
			$('#dropCont').hide();
			$('#dropCont').removeClass('open');
			$('#naviFixed').css('padding-bottom', '20px');
			$('p#navBut').css('color', 'white');
			$('p#navBut').css('border', '1px solid white');
		}
	});
};

$(document).ready(main);
$(document).ready(function() {
	$('.ryu').on("mouseenter", function() {
		// alert('mouse entered .ryu div');
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.on("mouseleave", function() {
		$('.ryu-still').show();
		$('.ryu-ready').hide();
	});
	$('.ryu').on("mousedown", function() {
		// console.log('mousedown');
		$('.ryu-throwing').show();
		$('.ryu-ready').hide();
		$('.hadouken').show().animate(
			{'left': '1020px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '520px');
			}
		);
		// $('.')
		// play hadouken sound
		// animate hadouken
	})
	.on("mouseup", function() {
		// console.log('mouseup');
		$('.ryu-thowing').hide();
		$('.ryu-ready').show();
		// $('.hadouken').hide();
	});

	$('.volume-control').on("click", function() {
		$('.volume-control').toggleClass("fa-volume-up fa-volume-off")
	});
});

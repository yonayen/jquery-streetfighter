$(document).ready(function() {
	$('.ryu').on("mouseenter", function() {
		// alert('mouse entered .ryu div');
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	});
	$('.ryu').on("mouseleave", function() {
		$('.ryu-still').show();
		$('.ryu-ready').hide();
	});
	$('.volume-control').on("click", function() {
		$('.volume-control').toggleClass("fa-volume-up fa-volume-off")
	})
});

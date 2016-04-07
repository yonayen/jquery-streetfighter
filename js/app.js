$(document).ready(function() {
	$('.ryu-still').show();
})

//  --- MOUSE ENTER AND LEAVE --- //
$('.ryu').on("mouseenter", function() {
	$('.ryu-still').hide();
	$('.ryu-ready').show();
})

$('.ryu').on("mouseleave", function() {
	$('.ryu-still').show();
	$('.ryu-ready').hide();
});

//  --- MOUSEDOWN ACTIONS --- //

$('.ryu').on("mousedown", function() {
	// console.log('mousedown');
	playHadouken();
	$('.ryu-throwing').show();
	$('.ryu-ready').hide();
	$('.hadouken').finish().show().animate(
		{'left': '1020px'},
		500,
		function() {
			$(this).hide();
			$(this).css('left', '520px');
		}
	);
})

// $('.ryu').on("mouseup", function() {
// 	// console.log('mouseup');
// 	$('.ryu-throwing').hide();
// 	$('.ryu-ready').show();
// });

//  $(document).keydown(function(event) {
//   if (event.keyCode == 88) {
//     // playCool();
//     // $('.ryu-action').hide();
//     $('.ryu-cool').show();
//   }   
//   })
//  else
//  	.keyup(function(event) {
//     if (event.keyCode == 88) {
//       $('#cool')[0].pause();
//       $('#cool')[0].load();
//       $('.ryu-cool').hide();
//       $('.ryu-still').show();
//     }
//   });

// 	$('.volume-control').on("click", function() {
// 		$('.volume-control').toggleClass("fa-volume-up fa-volume-off")
// 	});
// });

// function playHadouken () {
// 		$('#hadouken-sound')[0].volume = 0.5;
// 		$('#hadouken-sound')[0].load();
// 		$('#hadouken-sound')[0].play();
// 	}

$(function() {
	var $imgs = $('#images .carousel'),
		$capt = $('#captions .carousel'),
		$timr = $('#timer');

	$imgs.carouFredSel({
		circular: false,
		scroll: {
			easing: 'quadratic',
			duration: 2,
			timeoutDuration: 3000,
			onBefore: function( data ) {
				$capt.trigger( 'slideTo', [ '.' + data.items.visible.first().attr( 'alt' ) ] );
				$timr.stop().animate({
					opacity: 0
				}, data.scroll.duration);
			},
			onAfter: function() {
				$timr.stop().animate({
					opacity: 1
				}, 150);
			}
		},
		auto: {
			progress: '#timer'
		},
		pagination: {
			container: '.pager',
			anchorBuilder: function( i ) {
				return '<a class="p' + i + '" href="#"></a>';
			}
		}
	});
	$capt.carouFredSel({
		circular: false,
		auto: false,
		scroll: {
			easing: 'quadratic',
			duration: 2
		}
	});
});

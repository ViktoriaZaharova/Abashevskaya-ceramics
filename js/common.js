$('[name="phone"]').mask('+7 (999) 999-99-99');

// animate scroll
$('.go_to').click(function (e) {
	e.preventDefault();
	var scroll_el = $(this).attr('href');
	if ($(scroll_el).length !== 0) {
		$('html, body').animate({
			scrollTop: $(scroll_el).offset().top
		}, 500);
	}
	return false;
});

// change amount
$('.down').on("click", function () {
	var $input = $(this).parent().find('input');
	var count = parseInt($input.val()) - 1;
	count = count < 1 ? 1 : count;
	$input.val(count);
	$input.change();
	return false;
});
$('.up').on("click", function () {
	var $input = $(this).parent().find('input');
	$input.val(parseInt($input.val()) + 1);
	$input.change();
	return false;
});

// sliders
$('.artists-gallery-slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	variableWidth: true,
	rtl: true,
	autoplay: true,
	autoplaySpeed: 2000,
});

$('.author-slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	variableWidth: true,
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	appendArrows: '.author-slider__nav'
});

$('.product-card__image').slick({
	slidesToShow: 1,
	fade: true,
	arrows: false,
	dots: true,
	autoplay: true,
	autoplaySpeed: 2000,
});

$('.news-slider').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	infinite: false,
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
});

// load more
$('.btn-toggle').on('click', function (e) {
	e.preventDefault();
	$(this).prev('.catalog-wrapper').find('.catalog-col:hidden').slice(0, 5).fadeIn();
	$('.product-card__image').slick('setPosition');

	var onBlock = $(this).prev('.catalog-wrapper').find('.catalog-col:hidden').length;
	if (onBlock <= 0) {
		$(this).hide();
	}
});
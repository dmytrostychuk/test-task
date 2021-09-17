function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('html').classList.add('_webp');
	} else {
		document.querySelector('html').classList.add('_no-webp');
	}
});

// Меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
};

//slider
$('.slider').slick({
	slidesToShow: 1,
	variableWidth: true,
	dots:true,
	appendDots: $('.slider-dots'),
	appendArrows: $('.slider-arrows'),
	prevArrow: '<button class="slick-prev slick-arrow" aria-label="Prev" type="button" style="">Next</button>',
	nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style="">Next</button>',
	responsive:[
		{
			breakpoint: 768,
			settings: {
				dots:true,
				slidesToShow: 1,
				centerMode: true,
				variableWidth: true
			}
		}
	]
});

$('.slider').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
	var i = (currentSlide ? currentSlide : 0) + 1;
	document.querySelector('.slider-count__current').innerHTML = i;
	document.querySelector('.slider-count__total').innerHTML = slick.slideCount;
  });
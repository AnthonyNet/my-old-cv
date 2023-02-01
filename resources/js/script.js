
/* 
LANGUAGE SWITCH
*/


function set_lang(lang)
{
  document.body.className = document.body.className.replace(document.body.className.substring(0,5), lang);
}

/*
Dark/Light switch
*/

document.querySelector('.theme-toggle-button').addEventListener('click', () => {
	document.body.classList.toggle('dark')
})


$(document).ready(function () {
 //
	
	$("#en").on("click", function () {
		$("#mobile-menu-ln1").removeClass("menuActive");
		$("#mobile-menu-ln3").removeClass("menuActive");
		$("#mobile-menu-ln2").addClass("menuActive");
	});

	$("#de").on("click", function () {
		$("#mobile-menu-ln1").removeClass("menuActive");
		$("#mobile-menu-ln2").removeClass("menuActive");
		$("#mobile-menu-ln3").addClass("menuActive");
	});
	$("#cz").on("click", function () {
		$("#mobile-menu-ln2").removeClass("menuActive");
		$("#mobile-menu-ln3").removeClass("menuActive");
		$("#mobile-menu-ln1").addClass("menuActive");
	});




/*
/////////////////
*/

	$("#nezajima").on("click", function () {
		alert("Klikáte špatně");
	});

	$(".js--section-knowledge").waypoint(
		function (direction) {
			if (direction == "down") {
				$("nav").addClass("sticky");
			} else {/*
				$("nav").removeClass("sticky");*/
			}
		},
		{
			offset: "9px",
		}
	);


	/* Scroll on buttons */
	$(".js--scroll-to-section-knowledge").click(function () {
		$("html, body").animate(
			{ scrollTop: $(".js--section-knowledge").offset().top },
			1000
		);
	});






			/*

	NAVIGATION SCROLL

	*/

			$(function () {
				$("a[href*=#]:not([href=#])").click(function () {
					if (
						location.pathname.replace(/^\//, "") ==
							this.pathname.replace(/^\//, "") &&
						location.hostname == this.hostname
					) {
						var target = $(this.hash);
						target = target.length
							? target
							: $("[name=" + this.hash.slice(1) + "]");
						if (target.length) {
							$("html,body").animate(
								{
									scrollTop: target.offset().top,
								},
								1000
							);
							return false;
						}
					}
				});
			});

			/* Animations on scroll */
			$(".js--wp-1").waypoint(
				function (direction) {
					$(".js--wp-1").addClass("animated bounceInLeft");
				},
				{
					offset: "80%",
				}
			);

			$(".js--wp-2").waypoint(
				function (direction) {
					$(".js--wp-2").addClass("animated bounceInRight");
				},
				{
					offset: "80%",
				}
			);

			$(".js--wp-3").waypoint(
				function (direction) {
					$(".js--wp-3").addClass("animated fadeInLeft");
				},
				{
					offset: "80%",
				}
			);

			$(".js--wp-4").waypoint(
				function (direction) {
					$(".js--wp-4").addClass("animated fadeInRight");
				},
				{
					offset: "80%",
				}
			);

			$(".js--wp-5").waypoint(
				function (direction) {
					$(".js--wp-5").addClass("animated fadeInLeft");
				},
				{
					offset: "80%",
				}
			);
		});


		/*

		BACK TO TOP

		*/
var backToTop = $("<a>", {
	href: "#",
	class: "back-to-top",
	html: '	<ion-icon name="caret-up-circle-outline"></ion-icon>',
});

backToTop
	.hide()
	.appendTo("body")
	.on("click", function () {
		$("body").animate({ scrollTop: 0 });
	});

var win = $(window);
win.on("scroll", function () {
	if (win.scrollTop() >= 600) backToTop.fadeIn();
	else backToTop.hide();
});

	$(".back-to-top")
		.hide()
		.click(function () {
			$("html, body").animate({ scrollTop: 0 });

		});

	
	$(".js--nav-icon").click(function () {
		var nav = $(".js--main-nav");
		var icon = $(".js--nav-icon ion-icon");
		icon.attr("name", function (index, attribute) {
			return attribute == "menu-outline" ? "close-outline" : "menu-outline";
		});

		nav.slideToggle(200);
	});


/* GALLERY */
var currIndex;
$(".slider-img:first").fadeIn();
$(".bullets").click(function () {
	$(".bullets").removeClass("selected");
	$(this).addClass("selected");
	currIndex = $(this).index() + 1;
	$(".slider-img").fadeOut(0);
	$(".slider-img:nth-child(" + currIndex + ")").fadeIn();
});


/* NATURE GALLERY */

const body = document.querySelector('.natureBody');
const slides =document.querySelectorAll('.slideNat');

const leftBtn = document.getElementById('natureLeft');
const rightBtn = document.getElementById('natureRight');

let activeSlide = 0;

rightBtn.addEventListener('click', () => {
    activeSlide++;

    if(activeSlide > slides.length -1){
        activeSlide = 0;
    }
    setBgToBody();
    setActiveSlide();

});

leftBtn.addEventListener('click', () => {
    activeSlide--;

    if(activeSlide < 0){
        activeSlide = slides.length -1;
    } 
    setBgToBody();
    setActiveSlide();
    
});

setBgToBody();


function setBgToBody(){
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}


function setActiveSlide(){
    slides.forEach((slide) => slide.classList.remove('active'));

    slides[activeSlide].classList.add('active');
}


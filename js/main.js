
// INICIALIZAÇÃO
$(document).ready(function(){
	//  Menu Mobile 
   $('.sidenav').sidenav();

   // Link Interno
   $(".scrollspy").scrollSpy({
   		scrollOffset: 0
   });

   // Carousel
	$(".carousel.carousel-slider").carousel({
		fullWidth:true
	});  

	// Modal
	$(".modal").modal();

	// Tabs
	$("ul.tabs").tabs();

	// Esconder menu Mobile
	$(".hide-menu").click(function() {
		 $('.sidenav').sidenav('close');
	});

	//Autoplay
	function autoplay(){
		$(".carousel").carousel("next");
		setTimeout(autoplay, 4500);
	}

	autoplay();


});




/*  Navbar Color */
$(window).on("scroll", function(){
	if($(window).scrollTop() > 100){
		$(".navbar").addClass("nav-color");
	}else{
		$(".navbar").removeClass("nav-color");
	}
});



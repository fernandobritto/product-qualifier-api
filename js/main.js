
// INICIALIZAÇÃO
$(document).ready(function(){
	//  Menu Mobile 
   $('.sidenav').sidenav();

   // Carousel
	$(".carousel.carousel-slider").carousel({
		fullWidth:true
	});  


});




/*  Navbar Color */
$(window).on("scroll", function(){
	if($(window).scrollTop() > 100){
		$(".navbar").addClass("nav-color");
	}else{
		$(".navbar").removeClass("nav-color");
	}
});


(function($) {
 "use strict"; // Start of use strict
    
/*------------------------------------------------
 * Preloader 
------------------------------------------------*/  
	$(window).load(function() {
		$('footer>.container').load('assets/footer.html');
		$('.left-menu-placeholder').load('assets/about-left-menu.html');
		$('.service-left-menu-placeholder').load('assets/service-left-menu.html');
		$('#mainNav').load('assets/header.html',function(){
			
            $('#loading').fadeOut();
            $('#preloader').delay(100).fadeOut('slow');
                
        });
	});
 
/*------------------------------------------------
 * baguetteBoxOne map 	
------------------------------------------------*/  
window.onload = function() {
    if(typeof oldIE === 'undefined' && Object.keys)
        hljs.initHighlighting();

    baguetteBox.run('.baguetteBoxOne');
    baguetteBox.run('.baguetteBoxTwo');
    baguetteBox.run('.baguetteBoxThree', {
        animation: 'fadeIn'
    });
    baguetteBox.run('.baguetteBoxFour', {
        buttons: false
    });
    baguetteBox.run('.baguetteBoxFive', {
        captions: function(element) {
            return element.getElementsByTagName('img')[0].alt;
        }
    });
};   
/*------------------------------------------------
 * Affix   
------------------------------------------------*/  
    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })    

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })
/*------------------------------------------------
 * Initialize WOW.js Scrolling Animations 
------------------------------------------------*/  
	
    new WOW().init();
    
/*------------------------------------------------
 * owlCarousel    
------------------------------------------------*/  
$(function () {
             $("#owl-demo").owlCarousel({
                 autoPlay: 3000,
                 items: 4,
                 itemsDesktop: [1199, 3],
                 itemsDesktopSmall: [979, 3]
             });
         
         });
         $(document).ready(function () {
             $("#owl-demo2").owlCarousel({
                 autoPlay: 3000,
                 items: 3,
                 itemsDesktop: [1199, 3],
                 itemsDesktopSmall: [979, 3]
             });         
         });        

})(jQuery); // End of use strict
 

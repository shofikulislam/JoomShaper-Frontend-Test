
jQuery(function ($) {

 /* ----------------------------------------------------------- 
       countdown 
   /* -----------------------------------------------------------*/

   
      $(".countdown").jCounter({
         date: '27 October 2019 12:00:00',
         fallback: function () {
            console.log("count finished!")
         }
      });

   // Author Name: Catalin Berta
   // https://github.com/catalinberta/jCounter/

/* ---------------------------------------------
               team carousel
   ------------------------------------------------ */

      $(".team-members").owlCarousel({
         items: 3,
         loop: true,
         autoplay: true,
         nav: false,
         dots: false,
         autoplayTimeout: 8000,
         autoplayHoverPause: true,
         mouseDrag: true,
         touchDrag: true,
         smartSpeed: 900,
         margin: 30,
         responsive: {
            0: {
               items: 1,
               nav: false,
            },
            600: {
               items: 2,
               nav: false,
            },
            1000: {
               nav: false,
            }
         }
   
      });

   // Author Name: David Deutsch
   // https://owlcarousel2.github.io/OwlCarousel2/
});
     

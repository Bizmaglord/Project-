


/////////////////////// ready
$(document).ready(function() {
  "use strict";

  /*----------------------------------------------------*/
  /* MOBILE DETECT FUNCTION
   /*----------------------------------------------------*/
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

  /*----------------------------------------------------*/
  // carouFredSel.
  /*----------------------------------------------------*/

  var o = $('#review .carousel.main ul');
  if (o.length > 0) {
    o.carouFredSel({
      auto: {
        timeoutDuration: 8000
      },
      responsive: true,
      pagination: '.review_pagination',
      width: '100%',
      scroll: {
        // fx : "crossfade",
        items: 1,
        duration: 1000,
        easing: "easeOutExpo"
      },
      items: {
            width: '600',
        height: 'variable', //  optionally resize item-height
        visible: {
          min: 1,
          max: 1
        }
      },
      mousewheel: false,
      swipe: {
        onMouse: true,
        onTouch: true
        }
    });
  };




  $(window).on("resize",updateSizes_vat).on("load",updateSizes_vat);
  function updateSizes_vat(){

    $('#review .carousel.main ul').trigger("updateSizes");

  }
  updateSizes_vat();

  /*----------------------------------------------------*/
  // Sticky.
  /*----------------------------------------------------*/
  $("#top2").sticky({
    topSpacing:0,
    getWidthFrom: 'body',
    responsiveWidth: true
  });


	/*----------------------------------------------------*/
	// PARALLAX CALLING
	/*----------------------------------------------------*/
	$(window).on('load', function () {
		parallaxInit();
	});
	function parallaxInit() {
	    var testMobile;
		testMobile = isMobile.any();

		if (testMobile == null)
		{
			$('.parallax .bg1').addClass("bg-fixed").parallax("50%", 0.5);


		}
	}
	parallaxInit();

  /*----------------------------------------------------*/
  // Superslides
  /*----------------------------------------------------*/
  var height = $(window).height() - 150; // 55px + 95px its height of top block.
  $('#home').height(height);

  $('#slides').superslides({
    play: 7000,
    animation: 'fade', // slide
    pagination: false,
    inherit_height_from: '#home',
  });

  // Select2.
  $('.select2').select2({
    // containerCss: ".eeeeeee",
    minimumResultsForSearch: Infinity,

  });

  // Slider range.
  $( "#slider-range" ).slider({
    range: true,
    min: 0,
    max: 120000,
    values: [ 4500, 100200 ],
    slide: function( event, ui ) {
      $( "#amount" ).val( "$" + ui.values[ 0 ]);
      $( "#amount2" ).val( "$" + ui.values[ 1 ] );
    }
  });
  $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) );
  $( "#amount2" ).val( "$" + $( "#slider-range" ).slider( "values", 1 ) );

  // Tabs.
  var index = $('.tabs1 .tabs1_tabs ul').find(".active").index();
  $( ".tabs1" ).tabs({
    active: index
  });

  // Tabs 2.
  // $('.tabgroup > div').hide();
  // $('.tabgroup > div:first-of-type').show();
  $(document).on('click', '.tabs a', function(e){
    e.preventDefault();
      var $this = $(this),
          tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
          others = $this.closest('li').siblings(),
          target = $this.attr('href');

      others.removeClass('active');
      $this.closest('li').addClass('active');
      $(tabgroup).children('div').hide();
      $(target).show();

      // Fix for G MAP.
      var o = $('#google_map');
      if (o.length > 0) {
        googlemapinit();
      }

  });
  $('.tabs .active a').trigger('click');







  /*----------------------------------------------------*/
  // MENU SMOOTH SCROLLING
  /*----------------------------------------------------*/
  $(".navbar_ .nav a, .menu_bot a, .scroll-to").on('click',function(event){

      //$(".navbar_ .nav a a").removeClass('active');
      //$(this).addClass('active');
      // var headerH = $('#top1').outerHeight();
      var headerH = $('#top2').outerHeight();

      if ($(this).attr("href")=="#home") {
        $("html, body").animate({
          scrollTop: 0 + 'px'
          // scrollTop: $($(this).attr("href")).offset().top + 'px'
        }, {
            duration: 1200,
            easing: "easeInOutExpo"
        });
      }
      else {
        $("html, body").animate({
          scrollTop: $($(this).attr("href")).offset().top - headerH + 'px'
          // scrollTop: $($(this).attr("href")).offset().top + 'px'
        }, {
            duration: 1200,
            easing: "easeInOutExpo"
        });
      }



      event.preventDefault();
  });

  /*----------------------------------------------------*/
  // Appear
  /*----------------------------------------------------*/
  $('.animated').appear(function() {
    // console.log("111111111111");
      var elem = $(this);
      var animation = elem.data('animation');
      if ( !elem.hasClass('visible') ) {
        var animationDelay = elem.data('animation-delay');
        if ( animationDelay ) {
          setTimeout(function(){
              elem.addClass( animation + " visible" );
          }, animationDelay);
        } else {
          elem.addClass( animation + " visible" );
        }
      }
  });

  // Animate number
  $('.animated-number').appear(function() {
    var elem = $(this);
    var b = elem.text();
    var d = elem.data('duration');
    var animationDelay = elem.data('animation-delay');
    if ( !animationDelay ) { animationDelay = 0; }
    elem.text("0");

    setTimeout(function(){
      elem.animate({ num: b }, {
        duration: d,
        step: function (num){
          this.innerHTML = (num).toFixed(0)
        }
      });
    }, animationDelay);
  });






});

/////////////////////// load
$(window).load(function() {

  /*----------------------------------------------------*/
  // flexslider
  /*----------------------------------------------------*/




  /////// flexslider
  var o = $('#carousel');
  if (o.length > 0) {
    o.flexslider({
      animation: "slide",
      controlNav: false,
      animationLoop: false,
      slideshow: false,
      itemWidth: 121,
      itemMargin: 13,
      asNavFor: '#gslider'
    });
  };



  var o = $('#gslider');
  if (o.length > 0) {
    o.flexslider({
      animation: "slide",
      controlNav: false,
      animationLoop: false,
      slideshow: false,
      sync: "#carousel",
      start: function(slider){
        // $('body').removeClass('loading');
      }
    });
  }





});
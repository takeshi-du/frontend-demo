// javascript
window.addEventListener('load', function() {
  // ------------------------------------
  // switch
  // ------------------------------------
  var btnSwitch = document.querySelectorAll('[data-toggle="switch"]');
  // overlay event
  for (var i = 0, len = btnSwitch.length; i < len; i++) {
    btnSwitch[i].addEventListener('click', function(event) {
      // prevent link
      event.preventDefault();
      // set Target
      var switchTarget = document.getElementById(event.target.getAttribute('data-target'));
      // when null
      if (!switchTarget) return;
      // toggle Class on Target
      switchTarget.classList.toggle('is-active');
    });
  }
  // ------------------------------------
  // drawer
  // ------------------------------------
  var btnDrawer = document.querySelectorAll('[data-toggle="drawer"]');
  // overlay event
  for (var i = 0, len = btnDrawer.length; i < len; i++) {
    btnDrawer[i].addEventListener('click', function(event) {
      // prevent link
      event.preventDefault();
      // set Target
      var drawerTarget = document.getElementById(event.target.getAttribute('data-target'));
      // when null
      if (!drawerTarget) return;
      // toggle Class on Target
      drawerTarget.classList.toggle('drawer-active');
      // toggle Class on body tag
      document.body.classList.toggle('is-overlay');
    });
  }
  // ------------------------------------
  // ScrollTrigger
  // ------------------------------------
  const trigger = new ScrollTrigger.default({
    trigger: {
      once: true
    }
  })
  trigger.add('[data-trigger]');

  // ------------------------------------
  // Lazyload
  // ------------------------------------
  var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy",
    load_delay: 800
  });

  // ------------------------------------
  // SmoothScroll
  // ------------------------------------
  var scroll = new SmoothScroll('a[href*="#"]',{
    offset: 80
  });
});

// jQuery
$(document).ready(function(){
  // ------------------------------------
  // SlickSlider
  // ------------------------------------
  $('.slick-slideshow').slick({
    autoplay: true,
    autoplaySpeed: 2000,
  });
  // ------------------------------------
  // Parallax
  // ------------------------------------
  $('.parallax-window').parallax();
  // ------------------------------------
  // ScrollTop
  // ------------------------------------
  var status = "";
	var b_head = $(".block-header").height();
	$(window).scroll(function() {
		
		var top = $(window).scrollTop();
		
		if (top > b_head && status != "white") {
			$(".block-header").addClass("is-active");
			status = "white";
		} else if (top <= b_head && status != "transparent") {
			$(".block-header").removeClass("is-active");
			status = "transparent";
		}
	});
});

window.addEventListener("load", function(){
  // ------------------------------------
  // ScrollTrigger
  // ------------------------------------
  const trigger = new ScrollTrigger.default({
    trigger: {
      once: true
    }
  })
  trigger.add('[data-trigger]');
});

// header sticky
// スクロールイベント
window.addEventListener("scroll", headerSticky);

var lastScrollTop = 0;
function headerSticky() {
var siteHeader = document.getElementById('siteHeader');
  // トップから200px以上スクロールで
  if(window.pageYOffset > 150) {
    // スクロール戻すと
    siteHeader.classList.add('is-hide');
    var st = window.pageYOffset;
    if (st < lastScrollTop){
      // addClass(is-show)
      // console.log('スクロールバック！');
      siteHeader.classList.add('is-show');
    } else {
      // console.log('スクロールダウン！');
      if(siteHeader.classList.contains('is-show')) {
        siteHeader.classList.remove('is-show');
      }
    }
    lastScrollTop = st <= 0 ? 0 : st;
  } else {
    // 200未満で
    if(siteHeader.classList.contains('is-hide')) {
      siteHeader.classList.remove('is-hide');
    }
    // removeClass(is-show)
    if(siteHeader.classList.contains('is-show')) {
      siteHeader.classList.remove('is-show');
    }
  }
  // console.log(window.pageYOffset);
}
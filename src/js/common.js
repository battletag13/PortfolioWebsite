// Scrolling navbar
let atTop = true;

document.onscroll = () => {
  let scrollTop = document.documentElement.scrollTop;

  if (scrollTop > 0 && atTop) {
    $('.depth').removeClass('hide');
    $('.depth').removeClass('fadeOut');
    $('.depth').removeClass('very-fast');
    $('.depth').addClass('fadeIn');
    $('.depth').addClass('faster');
  }
  else if (scrollTop == 0 && !atTop) {
    $('.depth').removeClass('fadeIn');
    $('.depth').removeClass('faster');
    $('.depth').addClass('fadeOut');
    $('.depth').addClass('very-fast');
  }

  if (scrollTop == 0) atTop = true;
  else atTop = false;
};

// Setup materialize.css
$(document).ready(function() {
  $('.tabs').tabs();
  $('.sidenav').sidenav();
  $('.scrollspy').scrollSpy({
    scrollOffset: 100,
  });
});

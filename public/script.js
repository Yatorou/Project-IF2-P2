$(window).on("load", function () {
  $("#loading").hide();
});


var stickyNavTop = $("nav").offset().top;

var stickyNav = function () {
  var scrollTop = $(window).scrollTop(); 
  if (scrollTop > stickyNavTop) {
    $("nav").addClass("sticky");
    $("ul").addClass("stickys");
  } else {
    $("nav").removeClass("sticky");
    $("ul").removeClass("stickys");
  }
};

$(window).scroll(function () {
  stickyNav();
});

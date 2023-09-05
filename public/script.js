$(window).on("load", function () {
  $("#loading").hide();
});

// Sticky
var stickyNavTop = $("nav").offset().top;

var stickyNav = function () {
  var scrollTop = $(window).scrollTop(); 
  if (scrollTop > stickyNavTop) {
    $("nav").addClass("sticky");
    $(".main").addClass("tam");
  } else {
    $("nav").removeClass("sticky");
    $(".main").removeClass("tam");
  }
};

$(window).scroll(function () {
  stickyNav();
});

//Dropdown
$(document).ready(function () {
  $(document).on("click", function (e) {
    const dropdown = $(".dropdown-menu");
    const menuBtn = $("#menu-btn");

    if (dropdown.length && menuBtn.length && !menuBtn.is(e.target)) {
      dropdown.hide();
      menuBtn.prop("checked", false);
    }
  });
});

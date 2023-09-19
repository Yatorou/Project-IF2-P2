$(window).on("load", function () {
  $("#loading").hide();
  $('input[type="checkbox"]').each(function(){
  	$(this).prop('checked', false);
  });
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

//Preview
$(document).ready(function () {
  var iname = $("#Name");
  var oname = $("#bnavbars");
  iname.on("keyup", function () {
    var inamev = iname.val();
    oname.text(inamev);
  });

  var imail = $("#Email");
  var omail = $("#oemail");

  imail.on("keyup", function () {
    var imailv = imail.val();
    omail.text(imailv);
  });

  var iaddress = $("#Address");
  var oaddress = $("#oaddress");

  iaddress.on("keyup", function () {
    var iaddressv = iaddress.val();
    oaddress.text(iaddressv);
  });

  $("#wbprvw").on("click", function () {
    if ($(this).is(":checked")) {
      $(".preview").removeClass("hide");
    } else {
      $(".preview").addClass("hide");
    }
  });
});


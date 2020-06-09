$(function () {

  $(' .modal-body .nav-tabs li a').click(function () {

    $(this).eq(2).addClass("active").parent().siblings().removeClass("active");

  });

  $(".gear-check").click(function () {

    $(".color-option").fadeToggle();

  });

  var colorli = $(".color-option ul li");

  colorli.eq(0).css("backgroundColor", "#0895D1").end()
    .eq(1).css("backgroundColor", "#E41B17").end()
    .eq(2).css("backgroundColor", "#E426D5").end()
    .eq(3).css("backgroundColor", "#0b08d1").end()
    .eq(4).css("backgroundColor", "#9f28a7");

  colorli.click(function () {

    $("link[href *='default']").attr("href", $(this).attr("data-value"));

  });

  $(".loading-overlay .spinner").fadeOut(1000, function () {

    $(this).parent().fadeOut(1000, function () {

      $(this).remove();
    });

  });

  var scrollicon = $("#scrolltop")

  $(window).scroll(function () {

    if ($(this).scrollTop() >= 700) {
      scrollicon.show();
    } else {

      scrollicon.hide();
    }

  });
  scrollicon.click(function () {

    $("html,body").animate({
      scrollTop: 0
    }, 1000);

  });

});

$(document).ready(function () {

  $("#owl-example").owlCarousel();

});
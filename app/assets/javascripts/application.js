// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery
//= require turbolinks
//= require_tree .

$(function() {

  // Activate box-shadow navbar once scrolled
  $(window).scroll(function() {
      var height = $(window).scrollTop();
      var navBar = $('.navbar');

      if(height  > 5) {
        navBar.addClass('box-shadow');
      } else {
        navBar.removeClass('box-shadow');
      }
  });

  // Scroll to Top on Yesca logo click
  $(".yesca-title").on("click",function(){
      $("html, body").animate({ scrollTop: 0 }, 500);
      return false;
  });

  // Disable Scroll on Pop-up page
  var popUpPage = $("#pop-up").parent();

  popUpPage.css({
    "overflow-y":"hidden"
  })


});
// END OF JQUERY

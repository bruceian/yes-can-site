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

    // Check If Email Valid
    $('#mce-EMAIL').on('input', function() {
      var input = $(this);
      var re = /^([A-Za-z0-9_\-\.])+\@(?!(?:[A-Za-z0-9_\-\.]+\.)?([A-Za-z]{2,4})\.\2)([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      var is_email = re.test(input.val());

      if(is_email) {
        $(this).removeClass('invalid');
      } else {
        $(this).addClass('invalid');
      }
    });

    var inputq1 = $('#mce-FNAME');
    var inputq2 = $('#mce-LNAME');
    var inputq3 = $('#mce-EMAIL');

    $("#mc-embedded-subscribe").click(function(event) {
      if ($("#mce-EMAIL").hasClass("invalid")) {
        event.preventDefault();
        $('#input-msg').text('Please provide valid email');
      } else if(inputq1 == '' || inputq2 == '' || inputq3 == ''){
        event.preventDefault();
        $('#input-msg').text('Please provide valid email');
      } else {
        return true
      }
    });

    // Disable Scroll on Pop-up page
    var popUpPage = $("#pop-up").parent();

    popUpPage.css({
      "overflow-y":"hidden"
    });

    // Open and Close Pop-Up
    $("button.sign-up").click(function () {
        $('.pop-up').fadeIn(400);
      });

    $(".close").click(function () {
      $( "#post_email" ).val("");
      $('.pop-up').fadeOut(200);
    });

});

document.addEventListener('turbolinks:load', function() {
  // Send Form to Google Sheet
  $('#mc-embedded-subscribe').click(function(event){

    var inputq1 = encodeURIComponent($('#mce-FNAME').val());
    var inputq2 = encodeURIComponent($('#mce-LNAME').val());
    var inputq3 = encodeURIComponent($('#mce-EMAIL').val());
    var q1ID = "entry.911507023"
    var q2ID = "entry.14723826"
    var q3ID = "entry.138845559"

    var baseURL = "https://docs.google.com/forms/d/e/1FAIpQLSeVBu7dp3WNkSuwfQ450VloVk5D0K5bKSHE3Lfhwc_uxb18Pw/formResponse?";
    var submitRef = "&submit=1111395812031556201"
    var submitURL = (baseURL + q1ID + "=" + inputq1 + "&" + q2ID + "=" + inputq2 + "&" + q3ID + "=" + inputq3 + submitRef);
    $('#mc-embedded-subscribe-form')[0].action = submitURL;

     //Check If Input Blank
      if ( inputq1 == '' || inputq2 == '' || inputq3 == '') {
        event.preventDefault();
        $('#input-msg').text('Fields cannot be blank');
      } else if ($('#mce-EMAIL').hasClass('invalid')) {
        event.preventDefault();
        $('#input-msg').text('Please provide valid email');
      } else {
        $('#input-msg').text('Thanks!');
        // $('#input-msg').fadeOut(100);
        $('#mc-embedded-subscribe-form').fadeOut(100);
      }

  });
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

  // Check If Email Valid
  $('#mce-EMAIL').on('input', function() {
    var input = $(this);
    var re = /^([A-Za-z0-9_\-\.])+\@(?!(?:[A-Za-z0-9_\-\.]+\.)?([A-Za-z]{2,4})\.\2)([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var is_email = re.test(input.val());

    if(is_email) {
      $(this).removeClass('invalid');
    } else {
      $(this).addClass('invalid');
    }
  });

  var inputq1 = $('#mce-FNAME');
  var inputq2 = $('#mce-LNAME');
  var inputq3 = $('#mce-EMAIL');

  $("#mc-embedded-subscribe").click(function(event) {
    if ($("#mce-EMAIL").hasClass("invalid")) {
      event.preventDefault();
      $('#input-msg').text('Please provide valid email');
    } else if(inputq1 == '' || inputq2 == '' || inputq3 == ''){
      event.preventDefault();
      $('#input-msg').text('Please provide valid email');
    } else {
      return true
    }
  });

  // Disable Scroll on Pop-up page
  var popUpPage = $("#pop-up").parent();

  popUpPage.css({
    "overflow-y":"hidden"
  });

  // Open and Close Pop-Up
  $("button.sign-up").click(function () {
      $('.pop-up').fadeIn(400);
    });

  $(".close").click(function () {
    $( "#post_email" ).val("");
    $('.pop-up').fadeOut(200);
  });
});
// END OF JQUERY

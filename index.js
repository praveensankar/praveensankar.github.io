$(document).ready(function() {
    "use strict";
    console.log("test");
    $('.nav-wrapper > ul > li').click(function(e) {
      
      $('.nav-wrapper > ul > li').removeClass('active');
      $(this).addClass('active');
    });
  });
$(function() { // Same as document.addeventlistener()DOMContentLoaded.."

// Same as document.querySelector("#navbarToggle")()

$("#navbarToggle").blur(function (event){

var screenWidth = window.innerWidth;

if (screenWidth < 768){

  $("#collapsable-nav").collapse('hide');
}

});
$("#navbarToggle").click(function (event){

  $(event.target).focus();
})

});

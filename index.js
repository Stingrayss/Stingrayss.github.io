OverlayScrollbars(document.querySelectorAll("body"), {} );

document.addEventListener("DOMContentLoaded", function() {
  //The first argument are the elements to which the plugin shall be initialized
	//The second argument has to be at least a empty object or a object with your desired options
  OverlayScrollbars(document.querySelectorAll("body"), {className : "os-theme-light"});

  $(document).ready(function () { $('body').hide().fadeIn(1500).delay(10000)});
});
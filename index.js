OverlayScrollbars(document.querySelectorAll("body"), {} );

document.addEventListener("DOMContentLoaded", function() {
  //The first argument are the elements to which the plugin shall be initialized
	//The second argument has to be at least a empty object or a object with your desired options
  OverlayScrollbars(document.querySelectorAll("body"), {className : "os-theme-light"});

  $(document).ready(function () { $('body').hide().fadeIn(1500).delay(10000)});
});

function height(id) {
  document.getElementById(id).style.height = "100%";
}

function unheight(id) {
  document.getElementById(id).style.height = "0";
  document.getElementById('creditButton').style.visibility = "visible";
}

var containers = document.getElementsByClassName('project-container');

var closeButtons = document.getElementsByClassName('close-button');

var overlayCheck = false;


document.getElementById('creditButton').addEventListener('click', function(element) {
  if(!overlayCheck) {
    height('credits');
    document.getElementById('creditButton').style.visibility = "hidden";
    overlayCheck = true
  };
});

//separates each panel for their respective overlays
for(var i = 0; i < containers.length; i++) {
  containers[i].addEventListener('click', function(element) {
    var idString = element.srcElement.id;
    idString = idString.replace('-container', '');
    if(!overlayCheck) {
      height(idString);
      overlayCheck = true
    };
  }, false);
}

//separates each close button for their respective overlays
for(var i = 0; i < closeButtons.length; i++) {
  closeButtons[i].addEventListener('click', function(element) {
    var idString = element.srcElement.id;
    idString = idString.replace('Close', '');
    unheight(idString);
    if(overlayCheck) overlayCheck = false;
  }, false);
}

document.addEventListener("DOMContentLoaded", function() {

  //Create the custom scrollbars for the body and overlay content

  //OverlayScrollbars library: https://github.com/KingSora/OverlayScrollbars
  OverlayScrollbars(document.querySelectorAll("body"), {
    className: "os-theme-light",
    scrollbars : {
      visibility : 'visible'
    }
  });
  
  OverlayScrollbars(document.querySelectorAll(".project-content"), {
    className: "os-theme-light",
    scrollbars: {
      autoHide: "move",
    }
  });

  //Fade in all elements after loading the page
  $(document).ready(function () { $('body').hide().fadeIn(1500).delay(10000)});

});

//sets the body scrollbar to hidden
function hideScroll() {
  OverlayScrollbars(document.querySelectorAll("body"), {
    scrollbars : {
      visibility : 'hidden'
    }
  });
}

//sets the body scrollbar to visible
function showScroll() {
  OverlayScrollbars(document.querySelectorAll("body"), {
    scrollbars : {
      visibility : 'visible'
    }
  });
}

//sets the overlay to cover the height of the page
function height(id) {
  document.getElementById(id).style.height = "100%";
  hideScroll();
}

//sets the overlay height back to 0
function unheight(id) {
  document.getElementById(id).style.height = "0";
  //set the credits button tag back to default css
  document.getElementById('credit-button').style.opacity = "1";
  document.getElementById('credit-button').style.cursor = "pointer";
  showScroll();
}

var containers = document.getElementsByClassName('project-container');

var closeButtons = document.getElementsByClassName('close-button');

//bool to check if there is an open overlay or not
var overlayCheck = false;

//add an onclick function to the credit button
document.getElementById('credit-button').addEventListener('click', function(element) {
  if(!overlayCheck) {
    height('credits');
    document.getElementById('credit-button').style.opacity = "0";
    document.getElementById('credit-button').style.cursor = "default";
    overlayCheck = true
  };
});

//adds an onclick function for each project panel
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

//adds an onclick function for each project-overlay close button
for(var i = 0; i < closeButtons.length; i++) {
  closeButtons[i].addEventListener('click', function(element) {
    var idString = element.srcElement.id;
    idString = idString.replace('-close', '');
    unheight(idString);
    if(overlayCheck) overlayCheck = false;
  }, false);
}

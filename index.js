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

function preloadImages(imageSources) {
  for (var i = 0; i < imageSources.length; i++) {
      var img = new Image();
      img.src = imageSources[i];
  }
}

$(document).ready(function() {
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

  var imageSources = [
    "images/github_hover.png",
    "images/linkedin_hover.png",
    "images/instagram_hover.png",
    "images/youtube_hover.png"
  ];
  
  preloadImages(imageSources);

  var containers = document.getElementsByClassName('project-container');
  var closeButtons = document.getElementsByClassName('close-button');
  var overlayCheck = false; //bool to check if there is an open overlay or not

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
});

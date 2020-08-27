// Menu toggle
const menu = document.querySelector(".js-menu");
const nav = document.querySelector(".js-nav");

menu.onclick = function () {
  nav.classList.toggle("navigation__links--hidden");
  menu.classList.toggle("close");
};
// Menu toggle end

// Animation on page scroll
var animateHTML = function () {
  var elems;
  var windowHeight;

  function init() {
    elems = document.querySelectorAll(".hidden");
    windowHeight = window.innerHeight;
    addEventHandlers();
    checkPosition();
  }

  function addEventHandlers() {
    window.addEventListener("scroll", checkPosition);
    window.addEventListener("resize", init);
  }

  function checkPosition() {
    for (var i = 0; i < elems.length; i++) {
      var positionFromTop = elems[i].getBoundingClientRect().top;
      if (positionFromTop - windowHeight <= 0) {
        elems[i].className = elems[i].className.replace(
          "hidden",
          "animate-element"
        );
      }

      if (positionFromTop - windowHeight > 1 || positionFromTop < 0) {
        elems[i].className = elems[i].className.replace(
          "animate-element",
          "hidden"
        );
      }
    }
  }

  return {
    init: init,
  };
};
// Animation on page scroll end

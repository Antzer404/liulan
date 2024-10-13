document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".fade-in");
    elements.forEach(function(element) {
      element.classList.add("show");
    });
  });

  window.onload = function() {
    setTimeout(function() {
      var topBg = document.getElementById('top-bg');
      topBg.classList.add('loaded');
    }, 100);
  };

  window.addEventListener('scroll', function() {
    var aboutElement = document.getElementById('about');
    var navElement = document.querySelector('nav');
    if (aboutElement.getBoundingClientRect().top <= 60) {
        navElement.classList.add('hide-nav');
        // setTimeout(function() {
        //   navElement.classList.add('hide-nav2');
        // }, 200);
    } else {
        // navElement.classList.remove('hide-nav2');
        // this.setTimeout(function() {
          navElement.classList.remove('hide-nav');
        // }, 200);
    }
});
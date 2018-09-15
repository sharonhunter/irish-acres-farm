// Provides back-to-top functionality for `Back to Top` link

// Returns an element's distance in pixels from the top of the page
// from https://gomakethings.com/get-distances-to-the-top-of-the-document-with-native-javascript/

function getElementDistance(element) {
    var distance = 0;
    if (element.offsetParent) {
        do {
            distance += element.offsetTop;
            element = element.offsetParent;
        } while (element);
    }
    return distance >= 0 ? distance : 0;
}

(function () {
  document.addEventListener('click', function(event) {
    var element = document.querySelector('.js-header');
    var distanceToScroll = getElementDistance(element);
    if (event.target.matches('.js-back-to-top')) {
      window.scrollTo({
        top: distanceToScroll,
        behavior: 'smooth'
      });
    }
  }, false);
})();
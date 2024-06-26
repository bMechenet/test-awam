var animatingClassName = 'animate__animated';

var observerOptions = {
  root: null,
  /** @type {String} */
  rootMargin: '0px',
  /** @type {Number} */
  threshold: 0.2
};

function intersectionCallback(intersectingEntries) {
  for (var j = 0; j < intersectingEntries.length; j++) {
      if (intersectingEntries[j].isIntersecting && intersectingEntries[j].intersectionRatio > observerOptions.threshold) {
      if (intersectingEntries[j].target && intersectingEntries[j].target.classList) {
        var animationClassName = intersectingEntries[j].target.dataset.animationclass;
        intersectingEntries[j].target.classList.add(animatingClassName, animationClassName);
      }
    }
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var observer = new IntersectionObserver(intersectionCallback, observerOptions);
  var elementsAnimatedOnVisibility = document.getElementsByClassName('animate--on-visibility');
  for (var i = 0; i < elementsAnimatedOnVisibility.length; i++) {
    observer.observe(elementsAnimatedOnVisibility[i]);
  }
});

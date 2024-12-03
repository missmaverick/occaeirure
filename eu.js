let fragmentByStart = new Array();

// Example fragment objects with color properties
fragmentByStart.push({ startColor: 'red', endColor: 'blue' });
fragmentByStart.push({ startColor: 'green', endColor: 'yellow' });

// Function to apply the color transition to elements
function applyColorTransition(elements, fragments) {
  elements.forEach((element, index) => {
    let fragment = fragments[index];
    element.style.background = `linear-gradient(${fragment.startColor}, ${fragment.endColor})`;
  });
}

// Example usage
document.addEventListener('DOMContentLoaded', () => {
  let elements = document.querySelectorAll('.color-transition');
  applyColorTransition(elements, fragmentByStart);
});

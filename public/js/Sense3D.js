// Sense3D.js

// Wrap your code in an event listener for when the DOM is ready
document.addEventListener('DOMContentLoaded', function () {
  // Get all elements with class 'container1'
  const elements = document.getElementsByClassName('container1');

  // Loop through each element and add event listeners
  for (let i = 0; i < elements.length; i++) {
    const el = elements[i];
    console.log(el);

    // Get the height and width of the element
    const height = el.clientHeight;
    const width = el.clientWidth;

    // Add a listener for the mousemove event
    el.addEventListener('mousemove', handleMove);

    // Define function handleMove for each element
    function handleMove(e) {
      const xVal = e.layerX;
      const yVal = e.layerY;

      const yRotation = 20 * ((xVal - width / 2) / width);
      const xRotation = -20 * ((yVal - height / 2) / height);
      const string =
        'perspective(500px) scale(1.1) rotateX(' +
        xRotation +
        'deg) rotateY(' +
        yRotation +
        'deg)';
      el.style.transform = string;
    }

    // Add listener for mouseout event
    el.addEventListener('mouseout', function () {
      el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)';
    });

    // Add listener for mousedown event
    el.addEventListener('mousedown', function () {
      el.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)';
    });

    // Add listener for mouseup event
    el.addEventListener('mouseup', function () {
      el.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)';
    });
  }
});

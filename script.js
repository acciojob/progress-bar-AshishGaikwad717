//your JS code here. If required.
const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

// Next button click handler
next.addEventListener("click", () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  update();
});

// Previous button click handler
prev.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

// Update the progress bar and circle states
function update() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  // Update the progress bar width
  const actives = document.querySelectorAll(".circle.active");
  progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  // Enable/disable buttons
  prev.disabled = currentActive === 1;
  next.disabled = currentActive === circles.length;
}

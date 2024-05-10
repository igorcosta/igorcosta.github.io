// WEBGL animation for a minimalist black and white background effect
let theme = 'light'; // Default theme

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
}

function drawMorphicLines() {
  stroke(theme === 'light' ? 0 : 255);
  beginShape();
  for (let i = 0; i < width; i += 10) {
    let y = noise(i * 0.01, frameCount * 0.01) * height;
    vertex(i, y);
  }
  endShape();
}

function draw() {
  background(theme === 'light' ? 255 : 0);
  drawMorphicLines();
}

// Listen for theme changes
document.addEventListener('themeChange', function(e) {
  theme = e.detail.theme;
  draw(); // Redraw with the new theme
});

// Remove the sphere effect on mouse click
function mousePressed() {
  // This function intentionally left blank
}

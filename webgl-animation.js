// WEBGL animation for a minimalist black and white background effect
let theme = 'light'; // Default theme

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
}

function draw() {
  background(theme === 'light' ? 255 : 0);
  let dirX = (mouseX / width - 0.5) * 2;
  let dirY = (mouseY / height - 0.5) * 2;
  directionalLight(250, 250, 250, -dirX, -dirY, -1);
  translate(-1.5 * width / 4, 0, 0);
  for (let i = 0; i < 3; i++) {
    push();
    translate(i * width / 4, 0, 0);
    rotateY(frameCount * 0.02);
    box(100);
    pop();
  }
}

// Listen for theme changes
document.addEventListener('themeChange', function(e) {
  theme = e.detail.theme;
});

// Create a depression effect on mouse click
function mousePressed() {
  push();
  translate(mouseX - width / 2, mouseY - height / 2);
  sphere(20);
  pop();
}

let xPos = 250;
let yPos = 0;
let xSpeed = 2;
let ySpeed = 2;
let score = 0;

function setup() {
    createCanvas(500, 500);
    noStroke();
    rectMode(CENTER);
}

function draw() {
    background(222);

    // Draw goal
    fill(0, 255, 0);
    rect(250, 490, 60, 20);

    // Draw ball
    fill(255, 0, 255);
    rect(xPos, yPos, 30, 30);

    // Draw score
    fill(18);
    textSize(20);
    text("Score: " + score, 10, 30);

    // Check if in goal
    if (xPos >= 220 && xPos <= 280 && yPos >= 470 && yPos <= 500) {
        score++; // Increment the score
        // Reset position and speed
        xPos = random(30, 470);
        yPos = 0;
        xSpeed = random(-5, 5);
        ySpeed = random(0, 5);
    }

    // Move forward
    xPos += xSpeed;
    yPos += ySpeed;

    // Wrap around if boundary exceeded
    if (xPos < 0) {
        xPos = width;
    }
    if (xPos > width) {
        xPos = 0;
    }
    if (yPos > height) {
        yPos = 0;
        score--;
    }
}

function mouseClicked() {
    xSpeed = random(-5, 5);
    ySpeed = random(0, 5);
}

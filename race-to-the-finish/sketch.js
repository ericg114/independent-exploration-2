let redXPos = 25;
let redYPos = 100;
let blueXPos = 25;
let blueYPos = 200;
let redScore = 0;
let blueScore = 0;
const originalRedY = 100;
const originalBlueY = 200;

function setup() {
    createCanvas(800, 300);
    rectMode(CENTER);
    strokeWeight(3);
}

function draw() {
    background(0, 200, 0);

    // Move both balls in a jagged fashion
    redXPos += random(-1, 5);
    redYPos += random(-1, 1);
    blueXPos += random(-1, 5);
    blueYPos += random(-1, 1);

    // Show scores
    textSize(60);
    fill(255, 0, 0);
    text(redScore, 700, 100);
    fill(0, 0, 255);
    text(blueScore, 700, 225);

    // Show finish line
    stroke(255);
    line(600, 0, 600, 300);

    // Red ball
    fill(255, 0, 0);
    stroke(0); // Black outline
    ellipse(redXPos, redYPos, 20, 20); // Smaller circle

    // Blue ball
    fill(0, 0, 255);
    stroke(0); // Black outline
    ellipse(blueXPos, blueYPos, 20, 20); // Smaller circle

    // Check if crossed the finish line
    if (redXPos > 600) {
        redScore += 1;
        redXPos = 25;
        redYPos = originalRedY;
        blueXPos = 25;
        blueYPos = originalBlueY;
    }
    if (blueXPos > 600) {
        blueScore += 1;
        redXPos = 25;
        redYPos = originalRedY;
        blueXPos = 25;
        blueYPos = originalBlueY;
    }
}

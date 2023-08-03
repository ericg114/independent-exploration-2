let time = 0;

let counterElement = document.getElementById("time");

function updateTime() {
    counterElement.textContent = time;
}

setInterval(() => {
    time++;
    updateTime();
}, 1000);

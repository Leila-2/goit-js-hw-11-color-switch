//Colors
const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

// Refs
const body = document.querySelector('body');
const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');

//Listeners
startBtn.addEventListener("click", startColorPick);
stopBtn.addEventListener("click", stopColorPick);



//Ф-ция для генерации случайного числа 
const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
let intervalId = null

function startColorPick() {

    intervalId = setInterval(() => {

        body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)]
    }, 1000)
    startBtn.removeEventListener("click", startColorPick)
    startBtn.disabled = true;
}
function stopColorPick() {

    clearInterval(intervalId)
    startBtn.addEventListener("click", startColorPick);
    startBtn.disabled = false;
}

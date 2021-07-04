const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    start: document.querySelector('.btn.start-btn'),
    stop: document.querySelector('.btn.stop-btn'),
    body: document.body,
}

refs.start.addEventListener('click', onStartBtnClick)

refs.stop.addEventListener('click', onStopBtnClick)

function onStartBtnClick() {
    refs.start.setAttribute("disabled", "disabled")
 return intervalID = setInterval(() => {
        refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)]
    }, 1000)
}

function onStopBtnClick() {
    refs.start.removeAttribute("disabled")
   clearInterval(intervalID)
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};


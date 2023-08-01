const newClock = document.querySelector('.numberClock') as HTMLDivElement;
let minHtml = newClock.children[0] as HTMLDivElement;
let secHtml = newClock.children[1] as HTMLDivElement;

const secundHandle = document.querySelector('.s') as HTMLDivElement;
const minutesHandle = document.querySelector('.m') as HTMLDivElement;
const hoursHandle = document.querySelector('.h') as HTMLDivElement;

setInterval(() => {
    const time = new Date;
    let min = time.getMinutes();
    let secunds = time.getSeconds();

    let clsecundes = time.getSeconds() * 6;
    let clMinutes = time.getMinutes() * 6;
    let clHours = time.getHours() * 30;
    secundHandle.style.transform = `rotate(${clsecundes}deg)`;
    minutesHandle.style.transform = `rotate(${clMinutes}deg)`;
    hoursHandle.style.transform = `rotate(${clHours}deg)`;

    minHtml.innerHTML = min < 10 ? '0' + min : min + '';
    secHtml.innerHTML = secunds < 10 ? '0' + secunds : secunds + '';
}, 1000)


const clockDiv = document.querySelector('.clock') as HTMLDivElement;
const tabs = document.querySelectorAll('.tabsItem') as NodeListOf<HTMLLIElement>;
const timerDiv = document.querySelector('.stopwatch') as HTMLDivElement;

tabs.forEach(prev => prev.children[0].addEventListener('change', () => {
    tabs.forEach(iterator => {
        const elem = iterator.children[0] as HTMLInputElement;
        if (elem.checked) {
            iterator.classList.add('active');
        } else {
            iterator.classList.remove('active');
        }
    });

    const secondRadioBtn = tabs[1].children[0] as HTMLInputElement;
    if (secondRadioBtn.checked) {
        clockDiv.classList.remove('active');
        timerDiv.classList.add('active');
    } else {
        clockDiv.classList.add('active');
        timerDiv.classList.remove('active');
    }
}))


const swButtons = document.querySelectorAll('.stopwatch__clock-description div') as NodeListOf<HTMLDivElement>;

let myInterval: number;
let secundsSt = 0;
let minutesSt = 0;
let hoursSt = 0;
let started = true;

const activeSpan = document.querySelector('.tabsLink__span') as HTMLLabelElement;
document.querySelector('.stopwatch__btn')?.addEventListener('click', () => {
    if (started) {
        started = false;
        startTime();
        activeSpan.classList.remove('active_clear');
        activeSpan.classList.add('active');
    }
})

document.querySelector('.stopwatch__stop')?.addEventListener('click', () => {
    if (secundsSt > 1) {
        started = true;
        stopTime();
        activeSpan.classList.remove('active');
        activeSpan.classList.add('active_clear');
    }
})

document.querySelector('.stopwatch__recet')?.addEventListener('click', () => {
    started = true;
    recetTime();
    activeSpan.classList.remove('active');
    activeSpan.classList.remove('active_clear');
})

function startTime() {
    myInterval = setInterval(() => {
        secundsSt++;
        if (secundsSt == 60) {
            secundsSt = 0;
            minutesSt++;
        }
        if (minutesSt == 60) {
            minutesSt = 0;
            hoursSt++;
        }
        swButtons[2].innerHTML = secundsSt + '';
        swButtons[1].innerHTML = minutesSt + '';
        swButtons[0].innerHTML = hoursSt + '';
    }, 1000)
}

function stopTime() {
    clearInterval(myInterval);
}

function recetTime() {
    swButtons[0].innerHTML = '0';
    swButtons[1].innerHTML = '0';
    swButtons[2].innerHTML = '0';
    secundsSt = 0;
    minutesSt = 0;
    hoursSt = 0;
    stopTime();
}
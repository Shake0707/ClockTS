var _a, _b, _c;
var newClock = document.querySelector('.numberClock');
var minHtml = newClock.children[0];
var secHtml = newClock.children[1];
var secundHandle = document.querySelector('.s');
var minutesHandle = document.querySelector('.m');
var hoursHandle = document.querySelector('.h');
setInterval(function () {
    var time = new Date;
    var min = time.getMinutes();
    var secunds = time.getSeconds();
    var clsecundes = time.getSeconds() * 6;
    var clMinutes = time.getMinutes() * 6;
    var clHours = time.getHours() * 30;
    secundHandle.style.transform = "rotate(".concat(clsecundes, "deg)");
    minutesHandle.style.transform = "rotate(".concat(clMinutes, "deg)");
    hoursHandle.style.transform = "rotate(".concat(clHours, "deg)");
    minHtml.innerHTML = min < 10 ? '0' + min : min + '';
    secHtml.innerHTML = secunds < 10 ? '0' + secunds : secunds + '';
}, 1000);
var clockDiv = document.querySelector('.clock');
var tabs = document.querySelectorAll('.tabsItem');
var timerDiv = document.querySelector('.stopwatch');
tabs.forEach(function (prev) { return prev.children[0].addEventListener('change', function () {
    tabs.forEach(function (iterator) {
        var elem = iterator.children[0];
        if (elem.checked) {
            iterator.classList.add('active');
        }
        else {
            iterator.classList.remove('active');
        }
    });
    var secondRadioBtn = tabs[1].children[0];
    if (secondRadioBtn.checked) {
        clockDiv.classList.remove('active');
        timerDiv.classList.add('active');
    }
    else {
        clockDiv.classList.add('active');
        timerDiv.classList.remove('active');
    }
}); });
var swButtons = document.querySelectorAll('.stopwatch__clock-description div');
var myInterval;
var secundsSt = 0;
var minutesSt = 0;
var hoursSt = 0;
var started = true;
var activeSpan = document.querySelector('.tabsLink__span');
(_a = document.querySelector('.stopwatch__btn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    if (started) {
        started = false;
        startTime();
        activeSpan.classList.remove('active_clear');
        activeSpan.classList.add('active');
    }
});
(_b = document.querySelector('.stopwatch__stop')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    if (secundsSt > 1) {
        started = true;
        stopTime();
        activeSpan.classList.remove('active');
        activeSpan.classList.add('active_clear');
    }
});
(_c = document.querySelector('.stopwatch__recet')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
    started = true;
    recetTime();
    activeSpan.classList.remove('active');
    activeSpan.classList.remove('active_clear');
});
function startTime() {
    myInterval = setInterval(function () {
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
    }, 1000);
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

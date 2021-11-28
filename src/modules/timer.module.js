import { Module } from "@core/module";
import timerImg from "../assets/Timer-pic.png";

export class TimerModule extends Module {
    trigger() {
        const timer = document.querySelector(".timer");
        timer.style.display = "flex";

        // Настройка таймера
        const timeButtons = document.querySelectorAll(
            ".time-selection__button"
        );
        const timerInput = document.querySelector(".time__selection-input");
        const submitTimerForm = document.querySelector(
            ".timer__body-selection"
        );
        const timerBody = document.querySelector(".timer__body");
        const timerSuccessMessage = document.querySelector(".timer__success");
        const ninjaMessage = document.querySelector(".ninja-message");
        const timerSuccessImg = document.querySelector(".timer__success-img");
        timerSuccessImg.src = timerImg;
        let timerInputValue = 0;

        timeButtons.forEach((button) => {
            button.addEventListener("click", (e) => {
                timerInputValue += Number(e.target.value);
                timerInput.value = timerInputValue;
            });
        });

        timerInput.addEventListener("keydown", () => {
            if (event.keyCode < 48 || event.keyCode > 57) {
                event.returnValue = false;
                timerInput.placeholder = "Введите число";
            }
        });

        submitTimerForm.addEventListener("submit", (e) => {
            // Работа таймера
            e.preventDefault();
            timerInputValue = Number(timerInput.value);
            submitTimerForm.style.display = "none";
            timerBody.style.display = "block";

            const currentTime = timerInputValue * 1000 + Date.parse(new Date());
            function getTimeRemaining() {
                const t = currentTime - Date.parse(new Date()),
                    seconds = Math.floor((t / 1000) % 60),
                    minutes = Math.floor((t / 1000 / 60) % 60);
                return {
                    total: t,
                    minutes: minutes,
                    seconds: seconds,
                };
            }

            function getZero(num) {
                if (num >= 0 && num < 10) {
                    return "0" + num;
                } else {
                    return num;
                }
            }

            function setClock(selector, endtime) {
                const timer = document.querySelector(selector),
                    minutes = timer.querySelector("#minutes"),
                    seconds = timer.querySelector("#seconds"),
                    timeInterval = setInterval(updateClock, 1000);

                updateClock();

                function updateClock() {
                    const t = getTimeRemaining(endtime);

                    minutes.innerHTML = getZero(t.minutes);
                    seconds.innerHTML = getZero(t.seconds);

                    if (t.total <= 0) {
                        clearInterval(timeInterval);
                        timerBody.style.display = "none";
                        ninjaMessage.style.opacity = 1;
                        ninjaMessage.textContent = "Время вышло";
                        timerSuccessMessage.style.display = "flex";
                        setTimeout(() => {
                            ninjaMessage.textContent = "из чата :)";
                        }, 2000);

                        setTimeout(() => {
                            ninjaMessage.style.opacity = 0;
                        }, 4000);
                        removeTimer(10);
                        timer.addEventListener("click", () => {
                            submitTimerForm.style.display = "flex";
                            timerSuccessMessage.style.display = "none";
                        });
                    }
                }
            }
            function removeTimer(time) {
                setTimeout(() => {
                    submitTimerForm.style.display = "flex";
                    timer.style.display = "none";
                    timerSuccessMessage.style.display = "none";
                }, time * 1000);
            }
            setClock(".timer");
        });
    }
}

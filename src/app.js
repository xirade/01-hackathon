import ContextMenu from "./menu";
import { ClicksModule } from "@/modules/clicks.module";
import BackgroundModule from "@/modules/background.module";
import SoundModule from "@/modules/sound.module";
import CustomMessage from "@/modules/customMessage.module";
import { TimerModule } from "./modules/timer.module";
import ninjaImage from "./assets/ninja.png";

import img from "./assets/Hackers.png";
import "./styles.css";

const mainScope = document.querySelector("body");
// MODULES
const contextMenu = new ContextMenu("#menu");
const clicksModule = new ClicksModule("clicks", "total clicks");
const backColor = new BackgroundModule("background", "Change Color");
const sound = new SoundModule("sound", "Melody");
const customMessage = new CustomMessage("custom", "custom message");
const timer = new TimerModule("timer", "Set timer");

// ДОБАВЛЕНИЕ ВСЕХ МОДУЛЕЙ
contextMenu.add([sound, backColor, customMessage, timer, clicksModule]);

// КОНТЕКСТНОЕ МЕНЮ
mainScope.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    const { target } = event;
    if (target) {
        contextMenu.open(event);
    }
});

contextMenu.el.addEventListener("click", (event) => {
    const id = event.target.dataset.type;
    // ЗДЕСЬ ВЫЗЫВАЕМ ОСНОВНЫЕ МЕТОДЫ
    console.log(contextMenu);

    switch (id) {
        case "background":
            backColor.trigger(mainScope);
            break;
        case "sound":
            sound.trigger();
            break;
        case "custom":
            customMessage.trigger();
            break;
        case "timer":
            timer.trigger();
            break;
        case "clicks":
            clicksModule.hide(), clicksModule.trigger();
            break;
        default:
            break;
    }
});
//ОСНОВНЫЕ МЕТОДЫ

const ninja = document.querySelector(".ninja");
const ninjaMessage = document.querySelector(".ninja-message");
const ninjaImg = document.querySelector(".ninja-image");
ninjaImg.src = ninjaImage;  

const messages = [
    "Гоняю тебе за пивом!",
    "Я родился",
    "Вышел за хлебом",
    "Бегу на хакатон",
];
ninja.addEventListener("mouseover", () => {
    ninjaMessage.style.opacity = 1;
    ninjaMessage.textContent = messages[getRandomInt()];
});
ninja.addEventListener("mouseout", () => {
    ninjaMessage.style.opacity = 0;
});

function getRandomInt(max = messages.length) {
    return Math.floor(Math.random() * max);
}

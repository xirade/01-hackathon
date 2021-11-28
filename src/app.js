import ContextMenu from "./menu";
import BackgroundModule from "@/modules/background.module";
import SoundModule from "@/modules/sound.module";
import CustomMessage from "@/modules/customMessage.module";
import { TimerModule } from "./modules/timer.module";

import img from "./assets/Hackers.png";
import "./styles.css";

const mainScope = document.querySelector("body");
// MODULES
const contextMenu = new ContextMenu("#menu");
const backColor = new BackgroundModule("background", "Change Color");
const sound = new SoundModule("sound", "Melody");
const customMessage = new CustomMessage("custom", "custom message");
const timer = new TimerModule("timer", "Set timer");

// ДОБАВЛЕНИЕ ВСЕХ МОДУЛЕЙ
contextMenu.add([sound, backColor, customMessage, timer]);

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

        default:
            break;
    }
});
//ОСНОВНЫЕ МЕТОДЫ
const time = document.querySelector(".timer");

time.addEventListener("keydown", (e) => {
    console.log(e.keyCode);
});

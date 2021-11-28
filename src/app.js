import ContextMenu from "./menu";
import BackgroundModule from "@/modules/background.module";
import SoundModule from "@/modules/sound.module";

import img from "./assets/Hackers.png";
import "./styles.css";

const mainScope = document.querySelector("body");
const contextMenu = new ContextMenu("#menu");
const backColor = new BackgroundModule("background", "Change Color");
const sound = new SoundModule("sound", "Melody");

// ДОБАВЛЕНИЕ ВСЕХ МОДУЛЕЙ
contextMenu.add([sound, backColor]);

// КОНТЕКСТНОЕ МЕНЮ
mainScope.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  const { target } = event;
  if (target) {
    contextMenu.open(event);
    contextMenu.el.addEventListener("click", (event) => {
      const id = event.target.dataset.type;
      // ЗДЕСЬ ВЫЗЫВАЕМ ОСНОВНЫЕ МЕТОДЫ

      switch (id) {
        case "background":
          backColor.trigger(mainScope);
          break;
        case "sound":
          sound.trigger();
          break;

        default:
          break;
      }
    });
    //ОСНОВНЫЕ МЕТОДЫ
  }
});

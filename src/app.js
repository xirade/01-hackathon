import ContextMenu from "./menu";
import { ClicksModule } from "@/modules/clicks.module";
import BackgroundModule from "@/modules/background.module";
import SoundModule from "@/modules/sound.module";
import CustomMessage from "@/modules/customMessage.module";

import img from "./assets/Hackers.png";
import "./styles.css";

const mainScope = document.querySelector("body");
// MODULES
const contextMenu = new ContextMenu("#menu");
const clicksModule = new ClicksModule("clicks", "total clicks")
const backColor = new BackgroundModule("background", "Change Color");
const sound = new SoundModule("sound", "Melody");
const customMessage = new CustomMessage("custom", "custom message");



// ДОБАВЛЕНИЕ ВСЕХ МОДУЛЕЙ
contextMenu.add([sound, backColor, customMessage, clicksModule]);

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
        case "custom":
          customMessage.trigger();
          break;
        case "clicks":
          clicksModule.hide(),
          clicksModule.trigger();
    
          break;

        default:
          break;
      }
    });
    //ОСНОВНЫЕ МЕТОДЫ
  }
});

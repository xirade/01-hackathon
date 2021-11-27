import ContextMenu from "./menu";
import { CustomMessage } from "@/modules/customMessage.module";
import "./styles.css";

const mainScope = document.querySelector("body");
const contextMenu = new ContextMenu("#menu");
const customMessage = new CustomMessage("custom", "custom message");

contextMenu.add(customMessage);

// КОНТЕКСТНОЕ МЕНЮ
mainScope.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  const { target } = event;

  //ОСНОВНЫЕ МЕТОДЫ
  if (target) {
    contextMenu.open(event);
  }
});

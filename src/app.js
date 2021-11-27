import ContextMenu from "./menu";
import "./styles.css";

const mainScope = document.querySelector("body");
const contextMenu = new ContextMenu("#menu");

// КОНТЕКСТНОЕ МЕНЮ
mainScope.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  const { target } = event;

  //ОСНОВНЫЕ МЕТОДЫ
  if (target) {
    contextMenu.open(event);
  }
});
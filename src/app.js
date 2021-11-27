import { BackgroundModule } from './modules/background.module'
import './styles.css'
const backColor = new BackgroundModule('background', 'Фон документа')
backColor.toHTML()
 
 
 
import ContextMenu from "./menu";
import "./styles.css";

const mainScope = document.querySelector("body");
const contextMenu = new ContextMenu("#menu");

mainScope.addEventListener("contextmenu", (event) => {
  event.preventDefault();
// ЗДЕСЬ ВЫЗЫВАЕМ ОСНОВНЫЕ МЕТОДЫ
  console.log(contextMenu.open());
});

import ContextMenu from "./menu"
import { BackgroundModule } from './modules/background.module';

import './styles.css'

const mainScope = document.querySelector("body")
const contextMenu = new ContextMenu("#menu")
const backColor = new BackgroundModule('background', 'Цвет фона')
contextMenu.add()


mainScope.addEventListener("contextmenu", (event) => {
  event.preventDefault()
  const menu = document.querySelector('#menu')
// ЗДЕСЬ ВЫЗЫВАЕМ ОСНОВНЫЕ МЕТОДЫ
  contextMenu.open()
  menu.addEventListener('click', event =>{
    const Id = event.target.dataset.type
    if(Id === 'background') backColor.setColor(mainScope)
  })
})

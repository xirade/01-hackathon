import ContextMenu from "./menu"
import { BackgroundModule } from './modules/background.module';
import { SoundModule } from "./modules/sound.module";

import './styles.css'

const mainScope = document.querySelector("body")
const contextMenu = new ContextMenu("#menu")
const backColor = new BackgroundModule('background', 'Цвет фона')
const sound = new SoundModule('sound', 'Звук')
contextMenu.add(backColor)
contextMenu.add(sound)


mainScope.addEventListener("contextmenu", (event) => {
  event.preventDefault()
  const menu = document.querySelector('#menu')
// ЗДЕСЬ ВЫЗЫВАЕМ ОСНОВНЫЕ МЕТОДЫ
  contextMenu.open()
  menu.addEventListener('click', event =>{
    const id = event.target.dataset.type
    if(id === 'background') backColor.setColor(mainScope)
    if(id === 'sound') sound.play()
    
    contextMenu.close()
  })
})

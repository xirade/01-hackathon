import {Menu} from './core/menu'
import { BackgroundModule } from './modules/background.module';

class ContextMenu extends Menu {
  constructor(selector) {
    super(selector);
  }
  open() {
    this.el.classList.add('open-menu')
    return this.el  
  }

  close() {
    this.el.classList.remove('open-menu')
  }

  add(instanceofModule) {
    const backColor = new BackgroundModule('background', 'Цвет фона')
    this.el.insertAdjacentHTML('afterbegin', backColor.toHTML()) 
  }
}

export default ContextMenu;

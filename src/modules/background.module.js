import {Module} from '../core/module'
import * as Utils from '../core/utils/utils'
export class BackgroundModule extends Module {
  constructor(type, text) {
    super(type, text)
    this.type = type
    this.text = text
  }
  toHTML() {
    return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`
  }


  setColor(element) {
    const colors = ['#c77c7c', '#453d','#003311', '#990022', '#e31o54', '#18D7FF', '#34FF18']
    const color = colors[Utils.random(0, colors.length - 1)]
    element.style.backgroundColor = color
  }
}


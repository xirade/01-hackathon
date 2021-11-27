import {Module} from '../core/module' 
export class BackgroundModule extends Module {
  constructor(type, text){
    super(type, text)
    this.type = type
    this.text = text
  }
  toHTML(){
    const menu = document.querySelector('#menu')
    console.log(menu);
  }
   
}


const colors = ['#c77c7c', '#003311', '#990022', '#e31o54', '#18D7FF', '#34FF18']



function setColor(element) {
	const color = getRandomColor()
	element.style.backgroundColor = color
	element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
	element.style.backgroundColor = '#1e11d1'
	element.style.boxShadow = '0 0 2px #1e11d1'
}

function getRandomColor() {
	const index = Math.floor(Math.random() * colors.length)
	return colors[index]
}

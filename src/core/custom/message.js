import { Menu } from "../menu";

export class Message {
    constructor(type, text){
        this.type = type;
        this.text = text;
    }

    toHTML() {
        return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`
      }
    timer (){
        let minute = '1';
        let sec = '59';
        let interval = setInterval( () => {
         document.getElementById("timer").innerHTML = `${minute} : ${sec}`;
         sec--;
         if (sec < '0') {
           minute --;
           sec = '60';
         if (minute < '0' ) {
            clearTimeout(interval);
            divPopup.remove();
           }
         }
       }, 1000);
      }

      trigger() {
        const ulMenu = document.querySelector('.menu');
        ulMenu.innerHTML = message.toHTML();
        document.querySelector('[data-type = "context"]').addEventListener('click', () => {
    const divPopup = document.createElement('div');
    const div = document.querySelector('#myDIV');
    divPopup.innerHTML = `<div id="myDIV" class='mystyle'><p class = 'p0'>Окно закроется автоматически через <br /> <p class = 'p'><span id="timer">01:60</span> минуты!<br /><p class = 'p1'>Блок можно передвигать</p></p></p></div>`;
    if (div === null) {
    document.body.append(divPopup);
    this.timer()
    const popupDiv = document.querySelector('#myDIV')
      
   popupDiv.onmousedown = function(event) { popupDiv.style.position = 'absolute';
   popupDiv.style.zIndex = 1000;
   moveAt(event.pageX, event.pageY);
      function moveAt(pageX, pageY) {
        popupDiv.style.left = pageX - popupDiv.offsetWidth / 2 + 'px';
        popupDiv.style.top = pageY - popupDiv.offsetHeight / 2 + 'px';
      }
    
      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
      }
    
      document.addEventListener('mousemove', onMouseMove);

    popupDiv.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        popupDiv.onmouseup = null;
      };
    };
  
    popupDiv.ondragstart = function() {
      return false;
    };
   
}
});

}
}
import { Module } from "@core/module";

class CustomMessage extends Module {
  constructor(type, text) {
    super(type, text);
  }
  timer() {
    let minute = "0";
    let sec = "28";
    let interval = setInterval(() => {
      document.getElementById("timer").innerHTML = `${minute} : ${sec}`;
      sec--;
      if (sec < 10) {
      } else if (minute === Number('0')){
        document.getElementById("min").innerHTML = `секунд`;
      }
      if (sec < "00") {
        minute--;
        sec = "60";
        if (minute < "0") {
          clearTimeout(interval);
          document.querySelector("#myDIV").remove();
        }
      }
    }, 1000);
  }
  trigger() {
    const divPopup = document.createElement("div");
    divPopup.id = "myDIV";
    divPopup.className = 'mystyle';
    const popup = document.querySelector("#myDIV");
    divPopup.style.cssText = 'position:absolute; top:0px; left: 0px; margin: 0 auto; z-index:100;';
    divPopup.innerHTML = `<p class = 'p0'>Окно закроется автоматически через <br /> <p class = 'p'><span id="timer">1:59</span> <span id="min">минуты!</span><br /><p class = 'p1'>Блок можно передвигать</p></p></p>`;
    
    if (popup === null) {document.body.append(divPopup);
    this.timer();}
    const popupDiv = document.querySelector("#myDIV");

    popupDiv.onmousedown = function (event) {
      moveAt(event.pageX, event.pageY);
      function moveAt(pageX, pageY) {
        popupDiv.style.left = pageX - popupDiv.offsetWidth / 2 + "px";
        popupDiv.style.top = pageY - popupDiv.offsetHeight / 2 + "px";
      }

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
      }

      document.addEventListener("mousemove", onMouseMove);

      popupDiv.onmouseup = function () {
        document.removeEventListener("mousemove", onMouseMove);
        popupDiv.onmouseup = null;
      };
    };

    popupDiv.ondragstart = function () {
      return false;
    };
    return divPopup;
  }
}

export default CustomMessage;

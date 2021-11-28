import { Module } from "@core/module";

class CustomMessage extends Module {
  constructor(type, text) {
    super(type, text);
  }
  timer() {
    let minute = "00";
    let sec = "10";
    let interval = setInterval(() => {
      document.getElementById("timer").innerHTML = `${minute} : ${sec}`;
      sec--;
      if (sec < 10) {
        sec = "0" + sec;
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
    divPopup.innerHTML = `<div id="myDIV" class='mystyle'><p class = 'p0'>Окно закроется автоматически через <br /> <p class = 'p'><span id="timer">01:60</span> минуты!<br /><p class = 'p1'>Блок можно передвигать</p></p></p></div>`;
    document.body.append(divPopup);
    this.timer();
    const popupDiv = document.querySelector("#myDIV");

    popupDiv.onmousedown = function (event) {
      popupDiv.style.position = "absolute";
      popupDiv.style.zIndex = 1000;
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

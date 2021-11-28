import { Module } from "@core/module";

class CustomMessage extends Module {
  #minute;
  #second;
  #typeTime;

  constructor(type, text) {
    super(type, text);
    this.#minute = 0;
    this.#second = 10;
    this.#typeTime = "секунд";
  }
  tick(minute, second, interval) {
    if (minute > 0) {
      this.#typeTime = "минут";
    }
    if (minute <= 0) {
      this.#typeTime = "секунд";
    }
    document.getElementById("timer").textContent = `
    ${minute < 10 ? `0${minute}` : minute} : ${
      second < 10 ? `0${second}` : second
    } ${this.#typeTime}!
    `;

    if (second === 0 && minute === 0) {
      clearTimeout(interval);
      document.querySelector("#myDIV").remove();
    }
  }
  timer() {
    let minute = this.#minute;
    let second = this.#second;
    let interval = setInterval(() => {
      if (second === 0) {
        minute--;
        second = 60;
      }
      second--;
      this.tick(minute, second, interval);
    }, 1000);
  }
  trigger() {
    const divPopup = document.createElement("div");
    divPopup.id = "myDIV";
    divPopup.draggable = true;
    divPopup.className = "mystyle";
    const popup = document.querySelector("#myDIV");
    divPopup.style.cssText =
      "position:absolute; top:0px; left: 0px; margin: 0 auto; z-index:100;";
    divPopup.innerHTML = `
    <div class="ramka"> <p class = 'p0'>
      Окно закроется автоматически через 
      <br /> 
        <span id="timer"> 
    ${this.#minute < 10 ? `0${this.#minute}` : this.#minute} : ${
      this.#second < 10 ? `0${this.#second}` : this.#second
    } ${this.#typeTime}!
    </span> 
        <br />
        <p class = 'p1'>Блок можно передвигать</p>
      </p>
    </p></div>`;

    if (popup === null) {
      document.body.append(divPopup);
      this.timer();
    }
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

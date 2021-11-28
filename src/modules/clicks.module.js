import { Module } from "@core/module";

export class ClicksModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  hide() {
    const logo = document.querySelector(".main-img");
    const title = document.querySelector(".main-h1");
    const wrapper = document.createElement("div");
    const footer = document.querySelector("footer");

    wrapper.className = "screens_wrapper";
    wrapper.innerHTML = `
    <div class="screen">
      <h1>Catch Hatckers</h1>
      <button class="btn" id="start-btn"><a href="#"></a>Play</button>
    </div>
  
    <div class="screen">
      <h1>Choose a player of Hatckers Okimi </h1>
      <ul class="insects-list">
        <li>
          <button class="choose-insect-btn">
            <p>Daniel</p>
            <img src="https://cdn-icons-png.flaticon.com/512/1150/1150031.png" alt="Daniel">
          </button>
        </li>
        <li>
          <button class="choose-insect-btn">
            <p>Ed</p>
            <img
               src="https://cdn-icons-png.flaticon.com/512/1150/1150028.png"
               alt="Ed"
               />
          </button>
        </li>
        <li>
          <button class="choose-insect-btn">
            <p>Beshil</p>
            <img
               src="https://cdn-icons-png.flaticon.com/512/3819/3819167.png"
               alt="Beshil"
               />
          </button>
        </li>
        <li>
          <button class="choose-insect-btn">
            <p>Natali</p>
            <img
               src="https://cdn-icons-png.flaticon.com/512/1071/1071180.png"
               alt="Natali"
               />
          </button>
        </li>
        <li>
          <button class="choose-insect-btn">
            <p>Anton</p>
            <img
               src="https://cdn-icons-png.flaticon.com/512/4500/4500180.png"
               alt="Anton"
               />
          </button>
        </li>
      </ul>
    </div>
  
    <div class="screen game-container" id="game-container">
      <h3 id="time" class="time">Time: 00:00</h3>
      <h3 id="score" class="score">Score: 0</h3>
    </div>
  
    <div id="message" class="message "></div>`;
    document.querySelector("body").append(wrapper);

    logo.style.display = "none";
    title.style.display = "none";
    footer.style.display = "none";
  }

  trigger() {
    const logo = document.querySelector(".main-img");
    const screens = document.querySelectorAll(".screen");
    const choose_insect_btns = document.querySelectorAll(".choose-insect-btn");
    const start_btn = document.getElementById("start-btn");
    const game_container = document.getElementById("game-container");
    const timeEl = document.getElementById("time");
    const scoreEl = document.getElementById("score");
    const message = document.getElementById("message");
    const title = document.querySelector(".main-h1");

    let seconds = 10;
    let score = 0;
    let selected_insect = {};

    start_btn.addEventListener("click", () => screens[0].classList.add("up"));

    choose_insect_btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const img = btn.querySelector("img");
        const src = img.getAttribute("src");
        const alt = img.getAttribute("alt");
        selected_insect = { src, alt };
        screens[1].classList.add("up");
        setTimeout(createInsect, 1000);
        startGame();
      });
    });

    function startGame() {
      setInterval(increaseTime, 1000);
    }

    function increaseTime() {
      let m = 0;
      let s = seconds % 60;
      m = m < 10 ? `0${m}` : m;
      s = s < 10 ? `0${s}` : s;
      timeEl.innerHTML = `Time: ${m}:${s}`;
      seconds--;
    }

    function createInsect() {
      const insect = document.createElement("div");
      insect.classList.add("insect");
      const { x, y } = getRandomLocation();
      insect.style.top = `${y}px`;
      insect.style.left = `${x}px`;
      insect.innerHTML = `<img src="${selected_insect.src}" alt="${
        selected_insect.alt
      }" style="transform: rotate(${Math.random() * 360}deg)" />`;
      insect.addEventListener("click", catchInsect);

      game_container.appendChild(insect);
    }

    function getRandomLocation() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const x = Math.random() * (width - 200) + 100;
      const y = Math.random() * (height - 200) + 100;
      return { x, y };
    }

    function catchInsect() {
      increaseScore();
      this.classList.add("caught");
      setTimeout(() => this.remove(), 2000);
      addInsects();
    }

    function addInsects() {
      setTimeout(createInsect, 1000);
      setTimeout(createInsect, 1500);
    }

    function increaseScore() {
      score++;
      if (seconds === 0) {
        finishGame();
      }
      scoreEl.innerHTML = `Score: ${score}`;
      setTimeout(removeMessage, 8000);
      setTimeout(show, 10000);
      setTimeout(removeWrapper, 10000);
    }

    function finishGame() {
      game_container.classList.add("hide");
      message.classList.add("visible");
      message.innerHTML = `<h1>Ваш счет: <span class="primary">${score}</span></h1>`;
    }

    function removeMessage() {
      message.classList.remove("visible");
    }
    function show() {
      logo.style.display = "block";
      logo.style.margin = "0 auto";
      title.style.display = "block";
      footer.style.display = "block";
      title.style.margin = "0 auto";
    }

    function removeWrapper() {
      document.querySelector(".screens_wrapper").remove();
      location.reload();
    }
  }
}

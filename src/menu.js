import { Menu } from "@core/menu";

class ContextMenu extends Menu {
  constructor(selector) {
    super(selector);
  }
  open(event) {
    const { clientX: cursorX, clientY: cursorY } = event;

    this.el.style.top = `${cursorY}px`;
    this.el.style.left = `${cursorX}px`;

    this.el.children.forEach((element, index) => {
      this.el.children[index].style.transform =
        "rotateY(0deg) rotateX(0deg) scale(1)";
    });
    this.el.classList.add("open");
    // ЗАКРЫТЬ ОКНО ПРИ КЛИКЕ
    this.el.onclick = () => this.close();
  }
  close() {
    this.el.children.forEach((element, index) => {
      this.el.children[index].style.transform =
        "rotateY(90deg) rotateX(45deg) scale(0)";
      this.el.classList.remove("open");
    });
  }

  add(instanceofModule) {}
}

export default ContextMenu;

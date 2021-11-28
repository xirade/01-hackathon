import { Module } from "@core/module";
import * as Utils from "@core/utils/utils";

class BackgroundModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger(element) {
    const r = Utils.random(1, 256),
      g = Utils.random(1, 256),
      b = Utils.random(1, 256),
      a = Utils.random(1, 100).toFixed(1) / 100;
    element.style.backgroundColor = `rgba(${r},${g},${b},${a})`;
  }
}

export default BackgroundModule;

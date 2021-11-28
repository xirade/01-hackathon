import { Module } from "@core/module";
import * as Utils from "@core/utils/utils";

class BackgroundModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger(element) {
    const colors = [
      "#c77c7c",
      "#453d",
      "#003311",
      "#990022",
      "#e31o54",
      "#18D7FF",
      "#34FF18",
    ];
    const color = colors[Utils.random(0, colors.length - 1)];
    element.style.backgroundColor = color;
  }
}

export default BackgroundModule;

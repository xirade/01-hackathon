import { Module } from "../core/module";
import * as Tone from "tone";
import { random } from "@core/utils/utils";

const samples = importAll(require.context("@/assets/samples", false, /\.mp3$/));
function importAll(sample) {
  return sample.keys().map(sample);
}

class SoundModule extends Module {
  constructor(type, text) {
    super(type, text);
  }
  trigger() {
    const randomSample = random(0, 12);
    const player = new Tone.Player({
      url: samples[randomSample],
      autostart: true,
    });
    const autoFilter = new Tone.AutoFilter({
      frequency: "8m",
      octaves: 1.4,
    });

    player.chain(autoFilter, Tone.Master);
  }
}

export default SoundModule;

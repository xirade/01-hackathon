import { Module } from "../core/module";
import * as Tone from "tone";

class SoundModule extends Module {
  constructor(type, text) {
    super(type, text);
  }
  trigger() {
    const player = new Tone.Player(
      "https://tonejs.github.io/audio/drum-samples/conga-rhythm.mp3"
    );
    player.autostart = true;
    const pitchShift = new Tone.PitchShift(4).toDestination();
    const filter = new Tone.Filter("C0").toDestination();
    // connect a node to the pitch shift and filter in parallel
    player.fan(pitchShift, filter);
  }
}

export default SoundModule;

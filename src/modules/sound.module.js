import { Module } from "../core/module";
import * as Tone from "tone";

class SoundModule extends Module {
  constructor(type, text) {
    super(type, text);
  }
  trigger() {
    const player = new Tone.Player({
      url: "https://tonejs.github.io/audio/drum-samples/loops/ominous.mp3",
      autostart: true,
    });
    const filter = new Tone.Filter(400, "lowpass").toDestination();
    const feedbackDelay = new Tone.FeedbackDelay(0.125, 0.5).toDestination();

    // connect the player to the feedback delay and filter in parallel
    player.connect(filter);
    player.connect(feedbackDelay);
  }
}

export default SoundModule;

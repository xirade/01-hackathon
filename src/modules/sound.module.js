import { Module } from "../core/module";
import * as Tone from "tone";
import { random } from "@core/utils/utils";

const samples = importAll(require.context("@/assets/samples", false, /\.wav$/));
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
    const filter = new Tone.Filter(400, "lowpass").toDestination();
    const feedbackDelay = new Tone.FeedbackDelay(0.3, 0.5).toDestination();

    // connect the player to the feedback delay and filter in parallel
    player.chain(feedbackDelay);
  }
}

export default SoundModule;

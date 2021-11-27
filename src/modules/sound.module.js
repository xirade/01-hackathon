import { Module } from "../core/module";
import * as Tone from 'tone'
export class SoundModule extends Module {
  constructor(type, text) {
    super(type, text)
    this.type = type
    this.text = text
  }
  toHTML() {
    return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`
  }

  play() {
    const synth = new Tone.Synth().toDestination()
    synth.triggerAttackRelease("E4", "10n")
  }

}

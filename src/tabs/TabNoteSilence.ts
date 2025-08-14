import NoteOne from '../notes/NoteOne'
import { NoteOneSilence } from '../notes/NoteOneSilence'
import PlayedNote from '../notes/playedNote/PlayedNoteOne'
import { PlayedNoteOneInterface } from '../notes/playedNote/PlayedNoteOneInterface'
import { PlayedNoteOneSilence } from '../notes/playedNote/PlayedNoteOneSilence'
import { ChooseFretNumberStrategy } from './ChooseFretNumberStrategy/ChooseFretNumberStrategy'
import { ChooseFretNumberStrategySimple } from './ChooseFretNumberStrategy/ChooseFretNumberStrategySimple'
import TabNote from './TabNote'
import { TabNoteInterface } from './TabNoteInterface'
// this aims to deal with silence, where there is no note and no case number
export class TabNoteSilence implements TabNoteInterface {
  private playedNote: PlayedNoteOneSilence
  constructor(note: PlayedNoteOneSilence) {
    this.playedNote = note
  }

  getPlayedNote(): PlayedNoteOneInterface {
    return this.playedNote
  }

  public toString(): string {
    return '-'
  }
}

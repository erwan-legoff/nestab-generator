import NoteOne from '../notes/NoteOne'
import PlayedNote from '../notes/playedNote/PlayedNoteOne'
import { PlayedNoteOneInterface } from '../notes/playedNote/PlayedNoteOneInterface'
import { PlayedNoteOneSilence } from '../notes/playedNote/PlayedNoteOneSilence'
import { TrackOne } from '../notes/TrackOne'
import { GenericalScale } from '../scales/GenericalScale'
import { PentatonicScale } from '../scales/Scales'
import { CompositorInterface } from './CompositorInterface'
import { StyleOptions } from './StyleOptions'

export class RandomSimpleCompositor implements CompositorInterface {
  public getMusic(
    notesCount: number = 10,
    tempo: number = 120,
    scale: GenericalScale = new PentatonicScale(),
    key: NoteOne = NoteOne.noteNameToNote('C4')
  ): TrackOne {
    //! Refactor to use playedNoteOneInterface and silence
    const playedNotes: PlayedNote[] = []
    const notes: NoteOne[] = scale.getNotes(key, 10)
    const timeBeforeStart = 0
    const silenceProbability: number = 0.05

    for (let i = 0; i < notesCount; i++) {
      if (Math.random() < silenceProbability) {
        const duration = Math.floor(Math.random()) + 1
        //! Refactor to use playedNoteOneInterface and silence
        playedNotes.push(
          new PlayedNote(
            NoteOne.noteNameToNote('C4'),
            timeBeforeStart + duration,
            0
          )
        )
        console.log('silence')
      } else {
        const duration = Math.floor(Math.random() * 8) / 4
        const note = notes[Math.floor(Math.random() * (notes.length - 1))]
        playedNotes.push(new PlayedNote(note, timeBeforeStart, duration))
        console.log(note.getName())
      }
    }

    return new TrackOne(playedNotes, tempo)
  }
}

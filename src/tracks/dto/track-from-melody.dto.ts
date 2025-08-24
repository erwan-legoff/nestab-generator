import { PlayedNoteDto } from 'src/notes/playedNote/dto/played-note.dto';


export class TrackFromMelodyDto {
  playedNotes: PlayedNoteDto[]
  beatPerMinute: number
}

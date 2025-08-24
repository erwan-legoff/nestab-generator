import { PlayedNoteDto } from 'src/notes/playedNote/dto/played-note.dto';

export class TabFromMelodyDto {
  playedNotes: PlayedNoteDto[]
  tabName: string;
}

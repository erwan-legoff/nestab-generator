import { PlayedNoteDto } from 'src/notes/playedNote/dto/played-note.dto';

export class GenerateTabFromMelodyDto {
  playedNotes: PlayedNoteDto[]
  tabName: string;
}

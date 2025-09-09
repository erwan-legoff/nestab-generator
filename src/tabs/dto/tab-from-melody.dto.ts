import { PlayedNoteDto } from 'src/notes/playedNote/dto/played-note.dto';

export interface TabFromMelodyDto {
  playedNotes: PlayedNoteDto[];
  beatPerMinute: number;
  tabName: string;
}

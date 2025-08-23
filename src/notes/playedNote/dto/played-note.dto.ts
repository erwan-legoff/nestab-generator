import { NoteOneDto } from 'src/notes/dto/note-one.dto';

export interface PlayedNoteDto {
  note: NoteOneDto;
  timeBeforeStart: number;
  duration: number;
}

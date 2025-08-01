import NoteOne from 'src/notes/NoteOne';
import { GenericalScale } from 'src/scales/GenericalScale';

export class GenerateMelodyDto {
  notesCount?: number;
  tempo?: number;
  scale?: GenericalScale;
  key?: NoteOne;
}

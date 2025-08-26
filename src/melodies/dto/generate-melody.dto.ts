import { Compositors } from 'src/compositor/CompositorFactory';
import { NoteOneDto } from 'src/notes/dto/note-one.dto';
import NoteOne from 'src/notes/NoteOne';
import { GenericalScale } from 'src/scales/GenericalScale';

export class GenerateMelodyDto {
  compositor?: Compositors;
  notesCount?: number;
  tempo?: number;
  scale?: GenericalScale;
  key?: NoteOneDto;
}

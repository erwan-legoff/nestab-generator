import { Compositors } from 'src/compositor/CompositorFactory';
import { NoteOneDto } from 'src/notes/dto/note-one.dto';
import NoteOne from 'src/notes/NoteOne';
import { GenericalScale } from 'src/scales/GenericalScale';
import { scalesRegistry } from 'src/scales/ScaleRegistry';

export class GenerateMelodyDto {
  compositor?: Compositors;
  notesCount?: number;
  tempo?: number;
  scale?:  keyof typeof scalesRegistry;
  key?: NoteOneDto;
}

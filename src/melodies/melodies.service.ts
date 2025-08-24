import { Injectable } from '@nestjs/common';
import { SimpleDownArpegeCompositor } from 'src/compositor/SimpleDownArpegeCompositor';
import { GenerateMelodyDto } from './dto/generate-melody.dto';
import NoteOne from 'src/notes/NoteOne';

@Injectable()
export class MelodiesService {
  previewGenerate(generateMelodyDto: GenerateMelodyDto) {
    const compositor = new SimpleDownArpegeCompositor();
    return compositor.getMusic(
      generateMelodyDto.notesCount,
      generateMelodyDto.tempo,
      generateMelodyDto.scale,
     generateMelodyDto.key ? new NoteOne(generateMelodyDto.key.midi) : undefined 
    );
  }
}

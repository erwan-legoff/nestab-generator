import { Injectable } from '@nestjs/common';
import { SimpleDownArpegeCompositor } from 'src/compositor/SimpleDownArpeggioCompositor';
import { GenerateMelodyDto } from './dto/generate-melody.dto';
import NoteOne from 'src/notes/NoteOne';
import { CompositorInterface } from 'src/compositor/CompositorInterface';
import { RandomSimpleCompositor } from 'src/compositor/RandomSimpleCompositor';
import { CompositorFactory } from 'src/compositor/CompositorFactory';

@Injectable()
export class MelodiesService {
  previewGenerate(generateMelodyDto: GenerateMelodyDto) {
    const compositor: CompositorInterface = CompositorFactory.create(generateMelodyDto.compositor)
    return compositor.getMusic(
      generateMelodyDto.notesCount,
      generateMelodyDto.tempo,
      generateMelodyDto.scale,
      generateMelodyDto.key
        ? new NoteOne(generateMelodyDto.key.midi)
        : undefined,
    );
  }
}

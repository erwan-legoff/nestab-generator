import { Injectable } from '@nestjs/common';
import { SimpleDownArpegeCompositor } from 'src/compositor/SimpleDownArpeggioCompositor';
import { GenerateMelodyDto } from './dto/generate-melody.dto';
import NoteOne from 'src/notes/NoteOne';
import { CompositorInterface } from 'src/compositor/CompositorInterface';
import { RandomSimpleCompositor } from 'src/compositor/RandomSimpleCompositor';
import { CompositorFactory } from 'src/compositor/CompositorFactory';
import { GenericalScale } from 'src/scales/GenericalScale';
import { ScaleFactory } from 'src/scales/ScaleFactory';

@Injectable()
export class MelodiesService {
  previewGenerate(dto: GenerateMelodyDto) {
    const compositor: CompositorInterface = CompositorFactory.create(
      dto.compositor,
    );
    const scale: GenericalScale = ScaleFactory.create(
      dto.scale || 'harmonicMajor',
    );
    return compositor.getMusic(
      dto.notesCount,
      dto.tempo,
      scale,
      dto.key ? new NoteOne(dto.key.midi) : undefined,
    );
  }
}

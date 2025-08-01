import { Injectable } from '@nestjs/common';
import { SimpleDownArpegeCompositor } from 'src/compositor/SimpleDownArpegeCompositor';
import { GenerateMelodyDto } from './dto/generate-melody.dto';

@Injectable()
export class MelodiesService {
  generate(generateMelodyDto: GenerateMelodyDto) {
    const compositor = new SimpleDownArpegeCompositor();
    return compositor.getMusic(
      generateMelodyDto.notesCount,
      generateMelodyDto.tempo,
      generateMelodyDto.scale,
      generateMelodyDto.key,
    );
  }
}

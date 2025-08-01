import { Body, Controller, Post } from '@nestjs/common';
import { MelodiesService } from './melodies.service';
import { GenerateMelodyDto } from './dto/generate-melody.dto';

@Controller('melodies')
export class MelodiesController {
  constructor(private readonly melodiesService: MelodiesService) {}

  @Post()
  generate(@Body() generateMelodyDto: GenerateMelodyDto) {
    return this.melodiesService.generate(generateMelodyDto);
  }
}

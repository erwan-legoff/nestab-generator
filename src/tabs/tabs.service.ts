import { Injectable } from '@nestjs/common';
import { GenerateTabDto } from './dto/generate-tab.dto';
import { SimpleDownArpegeCompositor } from 'src/compositor/SimpleDownArpegeCompositor';
import { TabGuitar } from './TabGuitar';
import { MelodiesService } from 'src/melodies/melodies.service';
// import { UpdateTabDto } from './dto/update-tab.dto';

@Injectable()
export class TabsService {
  constructor(private readonly melodiesService: MelodiesService) {}
  generate(generateTabDto: GenerateTabDto) {
    const melody = this.melodiesService.generate(
      generateTabDto.generateMelodyDto || {},
    );
    return new TabGuitar(generateTabDto.tabName, melody);
  }
}

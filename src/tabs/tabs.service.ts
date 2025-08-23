import { Injectable } from '@nestjs/common';
import { GenerateTabDto } from './dto/generate-tab.dto';
import { SimpleDownArpegeCompositor } from 'src/compositor/SimpleDownArpegeCompositor';
import { TabGuitar } from './TabGuitar';
import { MelodiesService } from 'src/melodies/melodies.service';
import { GenerateTabResponseDto } from './dto/generate-tab.response.dto';
import { GenerateTabFromMelodyDto } from './dto/generate-tab-from-melody.dto';
import { convertToPlayedNotes } from 'src/notes/playedNote/convertDtoToPlayedNotes';
// import { UpdateTabDto } from './dto/update-tab.dto';

@Injectable()
export class TabsService {
  constructor(private readonly melodiesService: MelodiesService) {}
  generate(generateTabDto: GenerateTabDto): GenerateTabResponseDto {
    const melody = this.melodiesService.generate(
      generateTabDto.generateMelodyDto || {},
    );
    const tab: TabGuitar = new TabGuitar(generateTabDto.tabName, melody);
    const response: GenerateTabResponseDto = {
      fretBoard: tab.getFretBoard(),
      tabToString: tab.printTab(),
    };
    return response;
  }
  generateFromMelody(generateTabDto: GenerateTabFromMelodyDto): GenerateTabResponseDto
  {
    const melody = convertToPlayedNotes(generateTabDto.playedNotes)
    const tab: TabGuitar = new TabGuitar(generateTabDto.tabName, melody).;
    const response: GenerateTabResponseDto = {
      fretBoard: tab.getFretBoard(),
      tabToString: tab.printTab(),
    };
    return response
  }
}

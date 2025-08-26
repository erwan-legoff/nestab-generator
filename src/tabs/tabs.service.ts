import { Injectable } from '@nestjs/common';
import { GenerateTabDto } from './dto/generate-tab.dto';
import { SimpleDownArpegeCompositor } from 'src/compositor/SimpleDownArpeggioCompositor';
import { TabGuitar } from './TabGuitar';
import { MelodiesService } from 'src/melodies/melodies.service';
import { GenerateTabResponseDto } from './dto/generate-tab.response.dto';
import { TabFromMelodyDto } from './dto/tab-from-melody.dto';
import { convertToPlayedNotes } from 'src/notes/playedNote/convertDtoToPlayedNotes';
import { convertToTrack } from 'src/tracks/convertToTrack';
// import { UpdateTabDto } from './dto/update-tab.dto';

@Injectable()
export class TabsService {
  constructor(private readonly melodiesService: MelodiesService) {}
  previewGenerate(generateTabDto: GenerateTabDto): GenerateTabResponseDto {
    const melody = this.melodiesService.previewGenerate(
      generateTabDto.generateMelodyDto || {},
    );
    const tab: TabGuitar = new TabGuitar(generateTabDto.tabName, melody);
    const response: GenerateTabResponseDto = {
      fretBoard: tab.getFretBoard(),
      tabToString: tab.printTab(),
    };
    return response;
  }
  previewFromMelody(generateTabDto: TabFromMelodyDto): GenerateTabResponseDto {
    const track = convertToTrack(generateTabDto.playedNotes, 120);
    const tab: TabGuitar = new TabGuitar(generateTabDto.tabName, track);
    const response: GenerateTabResponseDto = {
      fretBoard: tab.getFretBoard(),
      tabToString: tab.printTab(),
    };
    return response;
  }
}

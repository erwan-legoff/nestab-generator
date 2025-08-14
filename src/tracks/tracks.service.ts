import { Injectable } from '@nestjs/common';
import { MelodiesService } from 'src/melodies/melodies.service';
import { GenerateTrackDto } from './dto/generate-track.dto';
import { Midi } from '@tonejs/midi';

@Injectable()
export class TracksService {
  constructor(private readonly melodiesService: MelodiesService) {}
  generate(generateTrackDto: GenerateTrackDto): Uint8Array {
    const melody = this.melodiesService.generate(
      generateTrackDto.generateMelodyDto || {},
    );
    const midi: Midi = new Midi();
    midi.tracks.push(melody.getMidiTrack());
    return midi.toArray();
  }
}

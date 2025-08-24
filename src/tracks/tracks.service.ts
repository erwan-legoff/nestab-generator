import { Injectable } from '@nestjs/common';
import { Midi } from '@tonejs/midi';
import { MelodiesService } from 'src/melodies/melodies.service';
import { TrackOne } from 'src/notes/TrackOne';
import { convertToTrack } from './convertToTrack';
import { GenerateTrackDto } from './dto/generate-track.dto';
import { TrackFromMelodyDto } from './dto/track-from-melody.dto';

@Injectable()
export class TracksService {
  constructor(private readonly melodiesService: MelodiesService) {}
  previewGenerate(generateTrackDto: GenerateTrackDto): Uint8Array {
    const melody = this.melodiesService.previewGenerate(
      generateTrackDto.generateMelodyDto || {},
    );
    return this.generateMidiFile(melody);
  }
  private generateMidiFile(melody: TrackOne) {
    const midi: Midi = new Midi();
    midi.tracks.push(melody.getMidiTrack());
    return midi.toArray();
  }

  previewFromMelody(dto:TrackFromMelodyDto){
    const playedNotesDto = dto.playedNotes
    const track = convertToTrack(playedNotesDto, dto.beatPerMinute);
    return this.generateMidiFile(track)
  }
}





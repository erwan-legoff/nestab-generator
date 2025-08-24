import { Injectable } from '@nestjs/common';
import { MelodiesService } from 'src/melodies/melodies.service';
import { GenerateTrackDto } from './dto/generate-track.dto';
import { Midi } from '@tonejs/midi';
import { GenerateTrackFromMelodyDto } from './dto/generate-track-from-melody.dto';
import { TrackOne } from 'src/notes/TrackOne';
import PlayedNote from 'src/notes/playedNote/PlayedNoteOne';
import { convertToPlayedNotes } from 'src/notes/playedNote/convertDtoToPlayedNotes';
import { PlayedNoteDto } from 'src/notes/playedNote/dto/played-note.dto';
import { convertToTrack } from './convertToTrack';

@Injectable()
export class TracksService {
  constructor(private readonly melodiesService: MelodiesService) {}
  generate(generateTrackDto: GenerateTrackDto): Uint8Array {
    const melody = this.melodiesService.generate(
      generateTrackDto.generateMelodyDto || {},
    );
    return this.generateMidiFile(melody);
  }
  private generateMidiFile(melody: TrackOne) {
    const midi: Midi = new Midi();
    midi.tracks.push(melody.getMidiTrack());
    return midi.toArray();
  }

  generateFromMelody(dto:GenerateTrackFromMelodyDto){
    const playedNotesDto = dto.playedNotes
    const track = convertToTrack(playedNotesDto, dto.beatPerMinute);
    return this.generateMidiFile(track)
  }
}





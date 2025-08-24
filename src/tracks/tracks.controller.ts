import { Body, Controller, Post, StreamableFile } from '@nestjs/common';
import { TracksService } from './tracks.service';
import { GenerateTrackDto } from './dto/generate-track.dto';
import { createReadStream } from 'fs';
import { TrackFromMelodyDto } from './dto/track-from-melody.dto';

@Controller('tracks')
export class TracksController {
  constructor(private readonly tracksService: TracksService) {}
   @Post('preview/generate')
  previewGenerate(@Body() dto: GenerateTrackDto): StreamableFile {
    const bytes = this.tracksService.previewGenerate(dto); // Uint8Array
    return new StreamableFile(Buffer.from(bytes), {
      type: 'audio/midi', // ou 'audio/x-midi'
      disposition: 'attachment; filename="track.mid"',
    });
  }

  @Post('preview/from-melody')
  previewFromMelody(@Body() dto: TrackFromMelodyDto): StreamableFile {
    const bytes = this.tracksService.previewFromMelody(dto); // Uint8Array
    return new StreamableFile(Buffer.from(bytes), {
      type: 'audio/midi', // ou 'audio/x-midi'
      disposition: 'attachment; filename="track.mid"',
    });
  }
}

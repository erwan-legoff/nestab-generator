import { Body, Controller, Post, StreamableFile } from '@nestjs/common';
import { TracksService } from './tracks.service';
import { GenerateTrackDto } from './dto/generate-track.dto';
import { createReadStream } from 'fs';

@Controller('tracks')
export class TracksController {
  constructor(private readonly tracksService: TracksService) {}
  @Post()
  generate(@Body() generateTrackDto: GenerateTrackDto): StreamableFile {
    const bytes = this.tracksService.generate(generateTrackDto); // Uint8Array

    return new StreamableFile(Buffer.from(bytes), {
      type: 'audio/midi', // ou 'audio/x-midi'
      disposition: 'attachment; filename="track.mid"',
    });
  }
}

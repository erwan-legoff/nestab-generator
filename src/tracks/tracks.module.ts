import { Module } from '@nestjs/common';
import { TracksService } from './tracks.service';
import { TracksController } from './tracks.controller';
import { MelodiesService } from 'src/melodies/melodies.service';

@Module({
  controllers: [TracksController],
  providers: [TracksService, MelodiesService],
})
export class TracksModule {}

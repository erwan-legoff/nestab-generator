import { Module } from '@nestjs/common';
import { MelodiesService } from './melodies.service';
import { MelodiesController } from './melodies.controller';

@Module({
  controllers: [MelodiesController],
  providers: [MelodiesService],
})
export class MelodiesModule {}

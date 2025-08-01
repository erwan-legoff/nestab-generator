import { Module } from '@nestjs/common';
import { TabsService } from './tabs.service';
import { TabsController } from './tabs.controller';
import { MelodiesService } from 'src/melodies/melodies.service';

@Module({
  controllers: [TabsController],
  providers: [TabsService, MelodiesService],
})
export class TabsModule {}

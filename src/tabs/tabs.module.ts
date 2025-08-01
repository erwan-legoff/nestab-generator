import { Module } from '@nestjs/common';
import { TabsService } from './tabs.service';
import { TabsController } from './tabs.controller';

@Module({
  controllers: [TabsController],
  providers: [TabsService],
})
export class TabsModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TabsModule } from './tabs/tabs.module';
import { MelodiesModule } from './melodies/melodies.module';

@Module({
  imports: [TabsModule, MelodiesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

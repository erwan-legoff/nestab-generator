import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TabsModule } from './tabs/tabs.module';
import { MelodiesModule } from './melodies/melodies.module';
import { TracksModule } from './tracks/tracks.module';
import { ScalesModule } from './scales/scales.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), TabsModule, MelodiesModule, TracksModule, ScalesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

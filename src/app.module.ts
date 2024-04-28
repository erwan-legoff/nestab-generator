import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompositorsModule } from './compositors/compositors.module';
import { ExternalApisModule } from './external-apis/external-apis.module';
import { InstrumentsModule } from './instruments/instruments.module';
import { MusicTranscriptionsModule } from './music-transcriptions/music-transcriptions.module';
import { NotesModule } from './notes/notes.module';
import { PlayedNotesModule } from './played-notes/played-notes.module';

@Module({
  imports: [
    ExternalApisModule,
    InstrumentsModule,
    NotesModule,
    PlayedNotesModule,
    CompositorsModule,
    MusicTranscriptionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExternalApisModule } from './external-apis/external-apis.module';
import { InstrumentsModule } from './instruments/instruments.module';
import { NotesModule } from './notes/notes.module';
import { PlayedNotesModule } from './played-notes/played-notes.module';
import { CompositorsModule } from './compositors/compositors.module';
import { OneMidiTracksModules } from './one-midi-tracks/one-midi-tracks.module';

@Module({
  imports: [
    ExternalApisModule,
    InstrumentsModule,
    NotesModule,
    PlayedNotesModule,
    CompositorsModule,
    OneMidiTracksModules,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

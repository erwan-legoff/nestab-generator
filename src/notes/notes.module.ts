import { Module } from '@nestjs/common';
import { AbcNotesModule } from './abc-notes/abc-notes.module';
import { OneNotesModule } from './one-notes/one-notes.module';

@Module({ imports: [AbcNotesModule, OneNotesModule] })
export class NotesModule {}

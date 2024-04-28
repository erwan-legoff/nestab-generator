import { Module } from '@nestjs/common';
import { OneTabsModule } from './one-tabs/one-tabs.module';
import { OneMidiTracksModule } from './one-midi-tracks/one-midi-tracks.module';

@Module({ imports: [OneTabsModule, OneMidiTracksModule] })
export class MusicTranscriptionsModule {}

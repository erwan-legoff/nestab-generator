import { Module } from '@nestjs/common';
import { OneTabLinesModule } from './one-tab-lines/one-tab-lines.module';

@Module({ imports: [OneTabLinesModule] })
export class OneTabsModule {}

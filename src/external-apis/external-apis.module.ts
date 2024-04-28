import { Module } from '@nestjs/common';
import { GptOneModule } from './gpt-one/gpt-one.module';

@Module({ imports: [GptOneModule] })
export class ExternalApisModule {}

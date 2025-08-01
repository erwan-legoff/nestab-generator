import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GeneratorModule } from './generator/generator.module';
import { TabModule } from './tab/tab.module';

@Module({
  imports: [GeneratorModule, TabModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

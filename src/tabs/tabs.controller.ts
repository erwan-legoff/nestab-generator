import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TabsService } from './tabs.service';
import { GenerateTabDto } from './dto/generate-tab.dto';
import type { TabFromMelodyDto } from './dto/tab-from-melody.dto';
import type { GenerateTabResponseDto } from './dto/generate-tab.response.dto';

@Controller('tabs')
export class TabsController {
  constructor(private readonly tabsService: TabsService) {}

  @Post('preview/generate')
  previewGenerate(@Body() dto: GenerateTabDto):GenerateTabResponseDto {
    return this.tabsService.previewGenerate(dto);
  }

  @Post('preview/from-melody')
  previewFromMelody(@Body() dto: TabFromMelodyDto):GenerateTabResponseDto {
    return this.tabsService.previewFromMelody(dto);
  }
}

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
// import { UpdateTabDto } from './dto/update-tab.dto';

@Controller('tabs')
export class TabsController {
  constructor(private readonly tabsService: TabsService) {}

  @Post()
  create(@Body() createTabDto: GenerateTabDto) {
    return this.tabsService.generate(createTabDto);
  }
}

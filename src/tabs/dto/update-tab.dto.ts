import { PartialType } from '@nestjs/mapped-types';
import { GenerateTabDto } from './generate-tab.dto';

export class UpdateTabDto extends PartialType(GenerateTabDto) {}

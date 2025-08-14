import { GenerateMelodyDto } from 'src/melodies/dto/generate-melody.dto';

export class GenerateTrackDto {
  generateMelodyDto?: GenerateMelodyDto;
  tabName: string;
}

import { Test, TestingModule } from '@nestjs/testing';
import { MelodiesService } from './melodies.service';

describe('MelodiesService', () => {
  let service: MelodiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MelodiesService],
    }).compile();

    service = module.get<MelodiesService>(MelodiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

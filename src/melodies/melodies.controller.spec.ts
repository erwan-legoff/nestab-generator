import { Test, TestingModule } from '@nestjs/testing';
import { MelodiesController } from './melodies.controller';
import { MelodiesService } from './melodies.service';

describe('MelodiesController', () => {
  let controller: MelodiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MelodiesController],
      providers: [MelodiesService],
    }).compile();

    controller = module.get<MelodiesController>(MelodiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

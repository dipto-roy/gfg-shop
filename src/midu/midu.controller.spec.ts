import { Test, TestingModule } from '@nestjs/testing';
import { MiduController } from './midu.controller';

describe('MiduController', () => {
  let controller: MiduController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MiduController],
    }).compile();

    controller = module.get<MiduController>(MiduController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

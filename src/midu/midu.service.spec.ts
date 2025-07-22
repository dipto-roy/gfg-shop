import { Test, TestingModule } from '@nestjs/testing';
import { MiduService } from './midu.service';

describe('MiduService', () => {
  let service: MiduService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MiduService],
    }).compile();

    service = module.get<MiduService>(MiduService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

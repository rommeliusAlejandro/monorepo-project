import { Test, TestingModule } from '@nestjs/testing';
import { LibraryOneService } from './library-one.service';

describe('LibraryOneService', () => {
  let service: LibraryOneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LibraryOneService],
    }).compile();

    service = module.get<LibraryOneService>(LibraryOneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

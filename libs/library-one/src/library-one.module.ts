import { Module } from '@nestjs/common';
import { LibraryOneService } from './library-one.service';

@Module({
  providers: [LibraryOneService],
  exports: [LibraryOneService],
})
export class LibraryOneModule {}

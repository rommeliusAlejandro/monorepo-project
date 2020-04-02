import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LibraryOneModule } from 'one/library-one';

@Module({
  imports: [LibraryOneModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Injectable, Inject } from '@nestjs/common';
import { LibraryOneService } from 'one/library-one';

@Injectable()
export class AppService {

  @Inject()
  private libraryOneService: LibraryOneService;

  getHello(): string {
    return this.libraryOneService.hello("Application One");
  }
}

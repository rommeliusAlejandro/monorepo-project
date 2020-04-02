import { Injectable } from '@nestjs/common';

@Injectable()
export class LibraryOneService {

    hello(service: string): string {
        return "Hello service "+service;
    }

}

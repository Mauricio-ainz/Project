import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealth(): { status: string; name: string; timestamp: string } {
    return {
      status: 'ok',
      name: 'rafirela-api',
      timestamp: new Date().toISOString(),
    };
  }
}

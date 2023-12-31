import { Controller } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  topicOne(): void {
    this.appService.topicOne({});
  }

  topicTwo(): void {
    this.appService.topicTwo({});
  }

  topicAll(): void {
    this.appService.topicAll({});
  }

  direct(): void {
    this.appService.direct({});
  }

  fanout(): void {
    this.appService.fanout({});
  }
}

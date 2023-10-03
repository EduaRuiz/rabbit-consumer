import { Controller, Get } from '@nestjs/common';
import { MessagingService } from './messaging.service';

@Controller()
export class AppController {
  constructor(private readonly messagingService: MessagingService) {}

  queueTopicOne(): void {
    this.messagingService.rpcHandlerOne({});
  }

  queueTopicTow(): void {
    this.messagingService.rpcHandlerTwo({});
  }
}

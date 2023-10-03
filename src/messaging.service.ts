import { RabbitRPC, RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagingService {
  @RabbitRPC({
    exchange: 'topic_exchange_1',
    routingKey: 'topic-route',
    queue: 'topic-queue_1',
  })
  public async rpcHandlerOne(msg: object) {
    console.log('Received message from topic exchange 1: ', msg);
    return {
      response: 42,
    };
  }

  @RabbitRPC({
    exchange: 'topic_exchange_2',
    routingKey: 'topic-route',
    queue: 'topic-queue_2',
  })
  public async rpcHandlerTwo(msg: object) {
    console.log('Received message from topic exchange 2: ', msg);
    return {
      response: 42,
    };
  }
  @RabbitRPC({
    exchange: 'topic_exchange_1',
    routingKey: 'topic-route',
    queue: 'topic-queue_2',
  })
  public async rpcHandlerThree(msg: object) {
    console.log('Received message from topic exchange 2: ', msg);
    return {
      response: 42,
    };
  }

  @RabbitRPC({
    exchange: 'direct_exchange',
    routingKey: 'direct-route',
    queue: 'direct-queue',
  })
  public async competingPubSubHandlerDirect(msg: object) {
    console.log(
      `Received message from direct exchange: ${JSON.stringify(msg)}`,
    );
  }

  @RabbitRPC({
    exchange: 'fanout_exchange',
    routingKey: 'fanout-route',
    queue: 'fanout-queue',
  })
  public async competingPubSubHandlerFanout(msg: object) {
    console.log(
      `Received message from fanout exchange: ${JSON.stringify(msg)}`,
    );
  }
}

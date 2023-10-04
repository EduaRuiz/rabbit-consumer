import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  @RabbitSubscribe({
    exchange: 'topic_exchange',
    routingKey: 'topic.one',
    queue: 'topic-queue_1',
  })
  public topicOne(msg: object) {
    console.log('Received message from topic exchange 1: ', msg);
  }

  @RabbitSubscribe({
    exchange: 'topic_exchange',
    routingKey: 'topic.two',
    queue: 'topic-queue_2',
  })
  public topicTwo(msg: object) {
    console.log('Received message from topic exchange 2: ', msg);
  }
  @RabbitSubscribe({
    exchange: 'topic_exchange',
    routingKey: 'topic.#',
    queue: 'topic-queue_3',
  })
  public topicAll(msg: object) {
    console.log('Received message from topic exchange 2: ', msg);
    return {
      response: 42,
    };
  }

  @RabbitSubscribe({
    exchange: 'direct_exchange',
    routingKey: 'direct-route',
    queue: 'direct-queue',
  })
  public direct(msg: object) {
    console.log(
      `Received message from direct exchange: ${JSON.stringify(msg)}`,
    );
  }

  @RabbitSubscribe({
    exchange: 'fanout_exchange',
    // routingKey: 'fanout-route',
    queue: 'fanout-queue',
  })
  public fanout(msg: object) {
    console.log(
      `Received message from fanout exchange: ${JSON.stringify(msg)}`,
    );
  }
}

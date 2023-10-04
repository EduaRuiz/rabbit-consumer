import { RabbitRPC, RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  @RabbitRPC({
    exchange: 'topic_exchange',
    routingKey: 'topic.one',
    queue: 'topic-queue_1',
  })
  public topicOne(msg: object): void {
    console.log('Received message from topic.one from topic_exchange: ', msg);
  }

  @RabbitRPC({
    exchange: 'topic_exchange',
    routingKey: 'topic.two',
    queue: 'topic-queue_2',
  })
  public topicTwo(msg: object) {
    console.log('Received message from topic.two from topic_exchange: ', msg);
  }
  @RabbitSubscribe({
    exchange: 'topic_exchange',
    routingKey: 'topic.#',
    queue: 'topic-queue_3',
  })
  public topicAll(msg: object) {
    console.log('Received message from topic.# from exchange_exchange: ', msg);
    return msg;
  }

  @RabbitRPC({
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
    routingKey: 'fanout-route.1', //Dado que es un fanout, no importa el routingKey
    queue: 'fanout-queue',
  })
  public fanout(msg: object) {
    console.log(
      `Received message from fanout exchange: ${JSON.stringify(msg)}`,
    );
  }
}

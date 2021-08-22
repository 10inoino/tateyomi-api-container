import { Module } from '@nestjs/common';
import { DemoService } from './demo.service';
import { DemoController } from './demo.controller';
import { DynamodbClient } from 'src/db/dynamodb.client';

// TODO:DI周りのドキュメントを読む：https://docs.nestjs.com/fundamentals/custom-providers
@Module({
  controllers: [DemoController],
  providers: [DemoService, DynamodbClient]
})
export class DemoModule {}

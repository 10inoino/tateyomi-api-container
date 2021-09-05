import { Module } from '@nestjs/common';
import { DemoService } from './demo.service';
import { DemoController } from './demo.controller';
import { DemoRepository } from './demo.repository';
import { DynamodbClient } from 'src/db/dynamodb.client';

// TODO:DI周りのドキュメントを読む：https://docs.nestjs.com/fundamentals/custom-providers
@Module({
  controllers: [DemoController,DemoService ,DemoRepository],
  providers: [DemoService, DemoRepository, DynamodbClient]
})
export class DemoModule {}

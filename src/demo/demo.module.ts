import { Module } from '@nestjs/common';
import { DemoService } from './demo.service';
import { DemoController } from './demo.controller';
import { DynamodbClient } from 'src/db/dynamodb.client';
import { DATABASE_CLIENT } from 'src/db/database.client.interface'
import { DemoRepository } from './demo.repository';

// TODO:DI周りのドキュメントを読む：https://docs.nestjs.com/fundamentals/custom-providers
@Module({
  controllers: [DemoController],
  providers: [
    DemoService,
    DemoRepository,
    {
      useClass: DynamodbClient,
      provide: DATABASE_CLIENT
    }
  ]
})
export class DemoModule {}

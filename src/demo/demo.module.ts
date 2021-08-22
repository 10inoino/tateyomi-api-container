import { Module } from '@nestjs/common';
import { DemoService } from './demo.service';
import { DemoController } from './demo.controller';
import { DemoRepository } from './demo.repository';

// TODO:DI周りのドキュメントを読む：https://docs.nestjs.com/fundamentals/custom-providers
@Module({
  controllers: [DemoController],
  providers: [DemoService, DemoRepository]
})
export class DemoModule {}

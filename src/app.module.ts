import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DemoController } from './demo/demo.controller';
import { DemoModule } from './demo/demo.module';
import { DemoService } from './demo/demo.service';

@Module({
  imports: [DemoModule],
  controllers: [AppController, DemoController],
  providers: [AppService, DemoService],
})

export class AppModule {}

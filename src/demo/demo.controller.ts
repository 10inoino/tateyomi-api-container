import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { DemoService } from './demo.service';

@Controller('demo')
export class DemoController {
  constructor(private readonly demoService: DemoService) {}
  
  @Post()
  async createUser(@Body() body: any): Promise<any> {
    console.log('body: ' + body);

    const user = await this.demoService.createUser(body);
    
    return { status: true, data: user };
  }
  @Get(':id')
  async getUserById(@Param() { id }: any): Promise<any> {
    const user = await this.demoService.getUserById(id);
    if (!user) {
      throw new NotFoundException(`User with ID "${id}" not found`);
    }
    return { status: true, data: user };
  }
}

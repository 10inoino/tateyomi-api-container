import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { DemoService } from './demo.service';
import { DemoRequestPost } from './demo.request.post';

@Controller('demo')
export class DemoController {
  constructor(private readonly demoService: DemoService) {}
  
  @Post()
  async createUser(@Body() body: DemoRequestPost): Promise<any> {

    // TODO:これ以外の方法はないの？
    const RequestDto = new DemoRequestPost(body.name, body.todo, body.id);
    // const user = await this.demoService.createUser(body.toUser());
    
    // return { status: true, data: user };
    return RequestDto.toUser();
  }
  
  @Get(':id')
  async getUserById(@Param() id : string ): Promise<any> {
    const user = await this.demoService.getUserById(id);
    if (!user) {
      throw new NotFoundException(`User with ID "${id}" not found`);
    }
    return { status: true, data: user };
  }
}

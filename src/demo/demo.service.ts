import { Injectable } from '@nestjs/common';

import { User } from '../entity/user';
import { DemoRepository } from './demo.repository';

@Injectable()
export class DemoService {
  // constructor(private readonly repository: DemoRepository) {}

  // async createUser(dto: User): Promise<User> {
  //   return await this.repository.save(dto);
  // }

  // async getUserById(id: string): Promise<User> {
  //   return await this.repository.find(id);
  // }

  getHello(): string {
    return 'I am demo!';
  }
}

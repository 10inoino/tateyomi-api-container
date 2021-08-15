import {
  Injectable,
  InternalServerErrorException
} from '@nestjs/common';
import { User } from '../entity/user';
import { Env } from '../env';
import { DocumentClient } from '../db/dynamodb.client';

@Injectable()
export class DemoRepository {

  constructor(private readonly db: DocumentClient) {};

  async save(user: User): Promise<User> {
    await this.db
    .put({
      TableName: Env.get('TABLE_NAME'),
      Item: user,
    });

    return user;
  }

  async find(id: string): Promise<User> {
    // TODO:DocumentClientクラスのgetを使う
    let user;
    try {
      const result = await this.db
        .get({
          TableName: Env.get('TABLE_NAME'),
          Key: { id },
        });
      user = result;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
    return user;
  }
}
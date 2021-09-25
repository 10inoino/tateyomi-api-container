import { User } from '../entity/user';
import { Env } from '../env';
import { DatabaseClientInterface, DATABASE_CLIENT } from '../db/database.client.interface';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class DemoRepository {

  // 本来はDynamoBD以外でも使うので、こうしたい
  constructor(@Inject(DATABASE_CLIENT) private readonly db : DatabaseClientInterface) {};

  async save(user: User): Promise<User> {
    await this.db.save({
      TableName: Env.get('TABLE_NAME'),
      SaveObject: user,
    });

    return user;
  }

  async find(id: string): Promise<User> {
    return await this.db.find({
      TableName: Env.get('TABLE_NAME'),
      FindObject: { id },
    });
  }
}
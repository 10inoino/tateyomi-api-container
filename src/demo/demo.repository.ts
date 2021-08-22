import { User } from '../entity/user';
import { Env } from '../env';
import { DatabaseClientInterface } from '../db/database.client.interface';

export class DemoRepository {

  constructor(private readonly db: DatabaseClientInterface) {};

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
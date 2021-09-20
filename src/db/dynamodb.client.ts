import { 
  InternalServerErrorException,
  NotFoundException,
  Injectable
} from '@nestjs/common';
import { DatabaseClientInterface } from './database.client.interface';
import { SaveItemInterface } from './save.item.interface';
import { FindItemInterface } from './find.item.interface';
import { BaseEntity } from '../entity/base.entity';
import * as AWS from 'aws-sdk';
import { plainToClass } from 'class-transformer';

@Injectable()
export class DynamodbClient implements DatabaseClientInterface {
  Dynamodb = new AWS.DynamoDB.DocumentClient();

  async save(data: SaveItemInterface): Promise<SaveItemInterface> {
    try {
      this.Dynamodb.put({
        TableName: data.TableName,
        Item: data.SaveObject
      }).promise();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
    return data;
  }

  async find(data: FindItemInterface): Promise<BaseEntity> {
    try {
      const result = await this.Dynamodb.get({
        TableName: data.TableName,
        Key: data.FindObject
      }).promise();

      // class-transformerを使って型変換
      return plainToClass(BaseEntity, result)
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  getHello(): string {
    return 'I am dynamodb client!';
  }
}
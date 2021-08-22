import { 
  InternalServerErrorException,
  NotFoundException
} from '@nestjs/common';

import { 
  DatabaseClientInterface, 
  SaveItem, 
  FindItem 
} from './database.client.interface';

import * as AWS from 'aws-sdk';

export class BaseEntity {}

export class DynamodbClient implements DatabaseClientInterface {
  Dynamodb = new AWS.DynamoDB.DocumentClient();

  async save(data: SaveItem): Promise<SaveItem> {
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

  async find(data: FindItem): Promise<BaseEntity> {
    try {
      const result = await this.Dynamodb.get({
        TableName: data.TableName,
        Key: data.FindObject
      }).promise();
      return result.Item;
    } catch (error) {
      throw new NotFoundException(error);
    }
  }
}
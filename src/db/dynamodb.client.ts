import { InternalServerErrorException } from '@nestjs/common';
import * as AWS from 'aws-sdk';

// FIXME:TableNameとItem以外dynamodbへのリクエストが送れなくなっちゃう
interface PutItemInput {
  TableName: string;
  Item: {[key: string]: any};
}

interface GetItemInput {
  TableName: string;
  Key: {[key: string]: any};
}

export class DocumentClient {
  Dynamodb = new AWS.DynamoDB.DocumentClient();

  async put(data: PutItemInput): Promise<PutItemInput> {
    try {
      this.Dynamodb.put(data).promise();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
    return data;
  }

  async get(data: GetItemInput): Promise<Object> {
    let response;
    try {
      const result = await this.Dynamodb.get(data).promise();
      response = result.Item;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
    return response;
  }
}
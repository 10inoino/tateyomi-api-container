import { IsString } from 'class-validator';
import { User } from '../entity/user';

export class DemoRequestPost {
  @IsString()
  name: string;

  @IsString()
  todo: string;

  @IsString()
  id: string;
  
  toUser():User {
    // TODO:ID追加

    return {
      ...this,
      created: new Date(),
      updated: new Date()
    };
  }
}
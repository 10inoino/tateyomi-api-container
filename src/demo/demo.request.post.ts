import { IsString } from 'class-validator';
import { User } from '../entity/user';

export class DemoRequestPost {
  @IsString()
  name: string;

  @IsString()
  todo: string;

  @IsString()
  id: string;

  constructor(name, todo, id){
    this.name = name;
    this.todo = todo;
    this.id = id;
  }
  
  toUser():User {
    return {
      ...this,
      created: new Date(),
      updated: new Date()
    };
  }
}
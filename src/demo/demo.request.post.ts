import { User } from '../entity/user'
// TODO:バリデーションパイプ追加（バリデーションをかける）

export class DemoRequestPost {
  name: string;
  todo: string;
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
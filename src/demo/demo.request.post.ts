import {User} from '../entity/user'
// バリデーションパイプ追加（バリデーションをかける）

export class DemoRequestPost {
  name: string;
  todo: string;
  
  toUser():User {
    return {
      ...this,
      created: new Date(),
    };
  }
}
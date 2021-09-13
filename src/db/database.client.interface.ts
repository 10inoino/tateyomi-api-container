export const DATABASE_CLIENT = 'DATABASE CLIENT';

import { SaveItemInterface } from './save.item.interface'
import { FindItemInterface } from './find.item.interface'
import { BaseEntity } from 'src/entity/base.entity';

export interface DatabaseClientInterface {
  save(saveItem : SaveItemInterface);
  find(findItem : FindItemInterface);

  // TODO:後で消す
  getHello(): string;
}
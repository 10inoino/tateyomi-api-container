import { SaveItemInterface } from './save.item.interface'
import { FindItemInterface } from './find.item.interface'

export interface DatabaseClientInterface {
  save(saveItem : SaveItemInterface);
  find(findItem : FindItemInterface);

  // TODO:後で消す
  getHello(): string;
}
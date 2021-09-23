export const DATABASE_CLIENT = 'DATABASE CLIENT';

import { SaveItemInterface } from './save.item.interface'
import { FindItemInterface } from './find.item.interface'
import { BaseEntity } from 'src/entity/base.entity';

export interface DatabaseClientInterface {
  save(saveItem : SaveItemInterface);
  find(findItem : FindItemInterface);

  // 後で聞く: これだとrepository側で、「BaseEntityクラスはUserクラスと比べてプロパティが足りていない」とエラーが出る
  // Interfaceに返却値を実装しつつ、repositoryクラスでエラーを吐かせない方法は無いのか？
  // find(findItem : FindItemInterface): Promise<BaseEntity>;

  // TODO:後で消す
  getHello(): string;
}
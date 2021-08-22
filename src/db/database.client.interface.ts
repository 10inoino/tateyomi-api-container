export interface DatabaseClientInterface {
  save(saveItem : SaveItem);
  find(findItem : FindItem);
}

export interface SaveItem {
  TableName: string;
  SaveObject: {[key: string]: any};
}

export interface FindItem {
  TableName: string;
  FindObject: {[key: string]: any};
}
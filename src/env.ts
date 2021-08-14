export class Env {
  static get(key: string): string {
    const value = process.env[key];
    if (value == undefined) {
      throw new Error(`env: ${key} is not defind.`);
    }

    return value;
  }  
}
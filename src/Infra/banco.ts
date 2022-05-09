import { BancoBase } from './bancoBase';
import { Injectable } from '@nestjs/common';

@Injectable()
export class Banco extends BancoBase {
  public async obter<T = object>(caminho: string): Promise<T> {
    const data = await this.database.ref(caminho).get();
    return data.toJSON() as T;
  }
}

import { Injectable } from '@nestjs/common';
import { Banco } from '../Infra/banco';
import { ILancamento } from '../interfaces/ILancamento';

@Injectable()
export class LancamentosService {
  constructor(private _banco: Banco) {}

  obterLancamentosPassados(): Promise<ILancamento[]> {
    return this._banco.obter('/lancamentosPassados');
  }

  obterLancamentosFuturos(): Promise<ILancamento[]> {
    return this._banco.obter('/lancamentosFuturos');
  }

  obterUltimoLancamento(): Promise<ILancamento> {
    return this._banco.obter('/ultimoLancamento');
  }

  obterProximoLancamento(): Promise<ILancamento> {
    return this._banco.obter('/proximoLancamento');
  }
}

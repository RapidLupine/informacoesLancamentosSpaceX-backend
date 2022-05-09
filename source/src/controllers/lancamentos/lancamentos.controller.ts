/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get } from '@nestjs/common';
import { LancamentosService } from 'src/services/lancamentos.service';

@Controller('lancamentos')
export class LancamentosController {
  constructor(private _lancamentosService: LancamentosService) {}

  @Get('passados')
  public obterLancamentosPassados() {
    return this._lancamentosService.obterLancamentosPassados();
  }

  @Get('futuros')
  public obterLancamentosFuturos() {
    return this._lancamentosService.obterLancamentosFuturos();
  }

  @Get('ultimo')
  public obterUltimoLancamento() {
    return this._lancamentosService.obterUltimoLancamento();
  }

  @Get('proximo')
  public obterProximoLancamento() {
    return this._lancamentosService.obterProximoLancamento();
  }
}

import { LancamentosController } from './controllers/lancamentos/lancamentos.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { Banco } from './Infra/banco';
import { LancamentosService } from './services/lancamentos.service';

@Module({
  imports: [],
  controllers: [
    LancamentosController, AppController],
  providers: [Banco, LancamentosService],
})
export class AppModule { }

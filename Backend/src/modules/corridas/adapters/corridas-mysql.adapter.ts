import { CorridasPort } from '@corridas/ports/corridas.port.js';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CorridasMysqlAdapter implements CorridasPort {
  constructor() {}

  async consultarCorridas() {
    console.log('Buscando corridas');
  }

  async cadastrarCorrida() {
    console.log('Cadastrando corridas');
  }
}

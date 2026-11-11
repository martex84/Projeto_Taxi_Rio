import { CorridasModel } from '@corridas/entities/corridas.model.js';
import { CorridasPort } from '@corridas/ports/corridas.port.js';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class CorridasMysqlAdapter implements CorridasPort {
  constructor(
    @InjectModel(CorridasModel)
    private readonly corridasModel: typeof CorridasModel,
  ) {}

  async consultarCorridas() {
    console.log(await this.corridasModel.findAll());
    console.log('Buscando corridas');
  }

  async cadastrarCorrida() {
    await this.corridasModel.create({
      destino: '',
      createdAt: new Date(),
      motorista: '',
      usuario: '',
      status: '',
    });
    console.log('Cadastrando corridas');
  }
}

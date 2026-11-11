import { Injectable } from '@nestjs/common';
import { UsuarioPort } from '../ports/usuario.port.js';
import { LoginUsuario } from '../dto/login-usuario.dto.js';
import { CadastroUsuario } from '../dto/cadastro-usuario.dto.js';
import { InjectModel } from '@nestjs/sequelize';
import { UsuarioModel } from '@usuario/entities/usuario.model.js';

@Injectable()
export class UsuarioMysqlAdapter implements UsuarioPort {
  constructor(
    @InjectModel(UsuarioModel)
    private readonly userModel: typeof UsuarioModel,
  ) {}

  async cadastrarUsuario(cadastroUsuario: CadastroUsuario): Promise<void> {
    await this.userModel.create({
      createdAt: new Date(),
      email: '',
      nome: '',
      password: '',
      tipo: '',
    });
    console.log('Cadastrando');
  }
  async login(loginUsuario: LoginUsuario) {
    console.log(await this.userModel.findAll());
    console.log('Realizando Login');
  }
}

import { Injectable } from '@nestjs/common';
import { UsuarioPort } from '../ports/usuario.port.js';
import { LoginUsuario } from '../dto/login-usuario.dto.js';
import { CadastroUsuario } from '../dto/cadastro-usuario.dto.js';

@Injectable()
export class UsuarioMysqlAdapter implements UsuarioPort {
  constructor() {}

  async cadastrarUsuario(cadastroUsuario: CadastroUsuario): Promise<void> {
    console.log('Cadastrando');
  }
  async login(loginUsuario: LoginUsuario) {
    console.log('Realizando Login');
  }
}

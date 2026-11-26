import { Injectable } from '@nestjs/common';
import { UsuarioPort } from './ports/usuario.port.js';
import { LoginUsuario } from '@usuario/dto/login-usuario.dto.js';
import { CadastroUsuario } from '@usuario/dto/cadastro-usuario.dto.js';

@Injectable()
export class UsuarioService {
  constructor(private readonly usuarioPort: UsuarioPort) {}

  async login(login: LoginUsuario): Promise<string> {
    return await this.usuarioPort.login(login);
  }

  async cadastrarUsuario(cadastrarUsuario: CadastroUsuario): Promise<string> {
    return await this.usuarioPort.cadastrarUsuario(cadastrarUsuario);
  }
}

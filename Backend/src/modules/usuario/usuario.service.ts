import { Injectable } from '@nestjs/common';
import { UsuarioPort } from './ports/usuario.port.js';

@Injectable()
export class UsuarioService {
  constructor(private readonly usuarioPort: UsuarioPort) {}

  async login() {
    await this.usuarioPort.login({
      nome: '',
      senha: '',
    });
  }

  async cadastrarUsuario() {
    await this.usuarioPort.cadastrarUsuario({
      nome: '',
      senha: '',
    });
  }
}

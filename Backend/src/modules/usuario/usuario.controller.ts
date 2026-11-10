import { Controller, Get, Post } from '@nestjs/common';
import { UsuarioService } from './usuario.service.js';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get('login')
  async loginUsuario() {
    await this.usuarioService.login();
  }

  @Post('cadastro')
  async cadastroUsuario() {
    await this.usuarioService.cadastrarUsuario();
  }
}

import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsuarioService } from './usuario.service.js';
import { CadastroUsuario } from '@usuario/dto/cadastro-usuario.dto.js';
import { LoginUsuario } from '@usuario/dto/login-usuario.dto.js';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post('login')
  async loginUsuario(@Body() login: LoginUsuario) {
    return { token: await this.usuarioService.login(login) };
  }

  @Post('cadastro')
  async cadastroUsuario(@Body() cadastroUsuario: CadastroUsuario) {
    return {
      token: await this.usuarioService.cadastrarUsuario(cadastroUsuario),
    };
  }
}

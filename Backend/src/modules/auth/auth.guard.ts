import { Request } from '@modules/auth/auth.interface.js';
import { AuthService } from '@modules/auth/auth.service.js';
import { IS_PUBLIC_KEY } from '@modules/auth/public.decorator.js';
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { CadastroUsuario } from '@usuario/dto/cadastro-usuario.dto.js';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private readonly reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) return true;

    const request = context.switchToHttp().getRequest();
    const token = this.extracaoToken(request);

    if (!token)
      throw new UnauthorizedException('Token de autenticação ausente!');

    try {
      const payload = (await this.authService.validarToken(
        token,
      )) as CadastroUsuario;

      if (payload.email) return true;
    } catch (error) {
      console.error(error);

      throw new UnauthorizedException('Token inválido ou expirado.');
    }

    return false;
  }

  private extracaoToken(request: Request): string {
    return (request.headers.authorization || '').replaceAll('Bearer ', '');
  }
}

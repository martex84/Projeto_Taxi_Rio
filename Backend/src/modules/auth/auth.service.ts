import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

export interface JwtPayload {
  email: string;
}

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async gerarToken(email: string): Promise<string> {
    const payload: JwtPayload = { email };

    const token = await this.jwtService.signAsync(payload);

    return token;
  }

  async validarToken(token: string): Promise<JwtPayload> {
    console.log('TOKEN', token);
    try {
      return await this.jwtService.verifyAsync<JwtPayload>(token);
    } catch (error) {
      throw new Error('Token inválido ou expirado!');
    }
  }
}

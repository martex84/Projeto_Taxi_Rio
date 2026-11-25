import { LoginUsuario } from '@usuario/dto/login-usuario.dto.js';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CadastroUsuario extends LoginUsuario {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  tipo: string;
}

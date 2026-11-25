import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class LoginUsuario {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  senha: string;
}

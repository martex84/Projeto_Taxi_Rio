import { LoginUsuario } from '../dto/login-usuario.dto.js';
import { CadastroUsuario } from '../dto/cadastro-usuario.dto.js';

export abstract class UsuarioPort {
  abstract login(LoginUsuario: LoginUsuario): Promise<void>;
  abstract cadastrarUsuario(cadastroUsuario: CadastroUsuario): Promise<void>;
}

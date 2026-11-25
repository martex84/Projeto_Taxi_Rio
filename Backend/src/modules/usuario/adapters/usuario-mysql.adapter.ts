import { Injectable } from '@nestjs/common';
import { UsuarioPort } from '../ports/usuario.port.js';
import { LoginUsuario } from '../dto/login-usuario.dto.js';
import { CadastroUsuario } from '../dto/cadastro-usuario.dto.js';
import { InjectModel } from '@nestjs/sequelize';
import { UsuarioModel } from '@usuario/entities/usuario.model.js';
import { AuthService } from '@modules/auth/auth.service.js';

@Injectable()
export class UsuarioMysqlAdapter implements UsuarioPort {
  constructor(
    @InjectModel(UsuarioModel)
    private readonly userModel: typeof UsuarioModel,
    private readonly authService: AuthService,
  ) {}

  async cadastrarUsuario(cadastroUsuario: CadastroUsuario): Promise<string> {
    const { email, nome, senha, tipo } = cadastroUsuario;

    return await this.userModel
      .create({
        createdAt: new Date(),
        email,
        nome,
        senha,
        tipo,
      })
      .then(async (retorno) => {
        const dadosUsuario = this.tratamentoDataValue(
          retorno,
          'Falha ao cadastrar o usuário!',
        ) as CadastroUsuario;

        const token = await this.authService.gerarToken(dadosUsuario.email);

        return token;
      })
      .catch((error_) => {
        throw new Error(error_);
      });
  }
  async login(loginUsuario: LoginUsuario): Promise<string> {
    console.log('Realizando Login');

    return await this.userModel
      .findOne({
        where: { email: loginUsuario.email },
      })
      .then(async (retorno) => {
        const usuario = this.tratamentoDataValue(
          retorno,
          'Usuário não encontrado!',
        ) as CadastroUsuario;

        const token = await this.authService.gerarToken(usuario.email);

        return token;
      })
      .catch((error_) => {
        throw new Error(error_);
      });
  }

  private tratamentoDataValue(dados: any, mensagemErro: string): any {
    const dadosTratados = dados?.dataValues;

    if (!dadosTratados) throw new Error(mensagemErro);

    return dadosTratados;
  }
}

import type { ConectorLogin } from "@login/ports/conectorLogin";
import type { User } from "@main/domain/user";

interface LoginUseCaseInterface {
  realizarLogin: (email: string, senha: string) => Promise<User>;
}

export class LoginUseCase implements LoginUseCaseInterface {
  constructor(conectorLogin: ConectorLogin) {
    this.conectorLogin = conectorLogin;
  }

  conectorLogin: ConectorLogin;

  async realizarLogin(email: string, senha: string) {
    return this.conectorLogin.realizarLogin(email, senha);
  }
}

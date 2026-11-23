import type { ConectorLogin } from "@login/ports/conectorLogin";
import type { User } from "@main/domain/user";
import { requisicao } from "@shared/services/axios-api";

export class ConectorAxios implements ConectorLogin {
  async realizarLogin(email: string, senha: string) {
    try {
      const login = (await requisicao().get("/usuario/login")).data as User;

      return login;
    } catch (error) {
      console.error(error);

      throw new Error("Falha ao realizar o login!");
    }
  }
}

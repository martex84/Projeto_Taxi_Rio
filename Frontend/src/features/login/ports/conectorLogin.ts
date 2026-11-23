import type { User } from "@main/domain/user";

export interface ConectorLogin {
  realizarLogin: (email: string, senha: string) => Promise<User>;
}

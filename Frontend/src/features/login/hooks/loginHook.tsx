import { useContext } from "react";
import { mainHook } from "@main/hooks/mainHook";
import { LoginUseCase } from "@login/useCases/LoginUsecase";
import { ConectorAxios } from "@login/adapters/conectorAxios";

export interface LoginHook {
  realizarLogin: (email?: string, senha?: string) => void;
  validarUsuario: () => boolean;
}

export default function loginHook(): LoginHook {
  const globalContext = mainHook().mainContext;

  async function realizarLogin(email?: string, senha?: string) {
    const loginUseCase = new LoginUseCase(new ConectorAxios());

    const usuario = await loginUseCase.realizarLogin("", "");

    globalContext.salvarUsuario({
      nome: "Teste",
      tipo: "teste",
      token: "teste",
    });

    console.log("GLOBAL_CONTEXT", usuario);
  }

  function validarUsuario(): boolean {
    return !!globalContext.captarUsuario();
  }

  return {
    realizarLogin,
    validarUsuario,
  };
}

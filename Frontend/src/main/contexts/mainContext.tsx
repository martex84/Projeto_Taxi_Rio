import type { User } from "@main/domain/user";
import {
  createContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

interface MainContext {
  user: User | undefined;
  captarUsuario: () => User | undefined;
  salvarUsuario: (user: User) => void;
}

export const MainContext = createContext<MainContext>({} as MainContext);

export function MainContextProvider({
  children,
}: Readonly<{ children: ReactNode }>) {
  const [user, setUser] = useState<User | undefined>();

  function salvarUsuario(user: User): void {
    setUser(user);
  }

  function captarUsuario(): User | undefined {
    return user;
  }

  const memo = useMemo(
    () => ({
      user,
      captarUsuario,
      salvarUsuario,
    }),
    [user],
  );

  return <MainContext.Provider value={memo}>{children}</MainContext.Provider>;
}

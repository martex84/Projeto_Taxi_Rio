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
}

export const MainContext = createContext<MainContext>({} as MainContext);

export function MainContextProvider({
  children,
}: Readonly<{ children: ReactNode }>) {
  const [user, setUser] = useState<User | undefined>();

  const memo = useMemo(
    () => ({
      user,
    }),
    [user],
  );

  return <MainContext.Provider value={memo}>{children}</MainContext.Provider>;
}

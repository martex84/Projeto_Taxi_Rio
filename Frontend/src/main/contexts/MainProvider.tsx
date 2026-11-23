import { MainContextProvider } from "@main/contexts/MainContext";
import type { ReactNode } from "react";

export function MainProvider({ children }: Readonly<{ children: ReactNode }>) {
  return <MainContextProvider>{children}</MainContextProvider>;
}

import { MainContextProvider } from "@main/contexts/mainContext";
import type { ReactNode } from "react";

export function MainProvider({ children }: Readonly<{ children: ReactNode }>) {
  return <MainContextProvider>{children}</MainContextProvider>;
}

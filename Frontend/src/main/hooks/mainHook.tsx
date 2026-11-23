import { MainContext } from "@main/contexts/MainContext";
import { useContext } from "react";

export function mainHook() {
  const context = useContext(MainContext);

  return {
    mainContext: context,
  };
}

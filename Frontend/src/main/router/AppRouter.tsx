import { Route, Routes } from "react-router-dom";
import { Login } from "@login/ui/Login";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/passageiro" />
      <Route path="motorista" />
      <Route path="*" />
    </Routes>
  );
}

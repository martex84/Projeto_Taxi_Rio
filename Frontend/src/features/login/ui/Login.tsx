import "./css/login.css";
import { requisicao } from "@shared/services/axios-api";
import { BsCarFront } from "react-icons/bs";

export function Login() {
  async function login() {
    try {
      await requisicao().get("/usuario/login");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="container">
      <div className="card shadow-sm">
        <div className="card-body">
          <div className="d-flex row justify-content-center">
            <div className="w-50 h-50 rounded-circle fundoAlerta iconeLogin">
              <BsCarFront size={"100%"} className="p-2" />
            </div>
            <h1 className="card-title h4 text-center">Bem Vindo ao Taxi.Rio</h1>
          </div>
          <form className="d-flex row justify-content-center g-3">
            <div className="">
              <label className="form-label" htmlFor="emailForm">
                E-mail
              </label>
              <input
                type="email"
                className="form-control"
                id="emailForm"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="">
              <label className="form-label" htmlFor="senhaForm">
                Senha
              </label>
              <input
                type="email"
                className="form-control"
                id="senhaForm"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text d-none">
                E-mail ou senha inválido
              </div>
            </div>
            <button type="submit" className="btn w-25 textoAlerta button-login">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

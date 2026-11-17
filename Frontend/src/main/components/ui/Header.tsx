import "./css/header.css";

export function Header() {
  return (
    <ul className="nav justify-content-between header py-2 px-3">
      <li className="nav-item">
        <div className="d-flex align-items-center h-100">
          <span className="text-center textoSecundario">Nome Usuário</span>
        </div>
      </li>
      <li className="nav-item">
        <button type="button" className="btn h-100 textoSecundario sair">
          Sair
        </button>
      </li>
    </ul>
  );
}

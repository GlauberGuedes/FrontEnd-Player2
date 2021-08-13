import logo from "../../assets/logo.svg";
import { ReactComponent as House } from "../../assets/House.svg";
import { ReactComponent as Megaphone } from "../../assets/Megaphone.svg";
import { ReactComponent as Users } from "../../assets/Users.svg";
import { ReactComponent as User } from "../../assets/User.svg";
import { ReactComponent as SignOut } from "../../assets/SignOut.svg";
import { ReactComponent as ArrowDown } from "../../assets/ArrowDown.svg";
import "./style.css";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";

export default function NavBar() {
  const { setToken } = useAuth();
  const [selecionado, setSelecionado] = useState("Megaphone");
  const [disparos, setDisparos] = useState(false);
  const [grupos, setGrupos] = useState(false);
  const [contatos, setContatos] = useState(false);

  function logout() {
    setToken("");
  }

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="logo" />
        <h2>informem-se</h2>
      </div>
      <div
        className={
          selecionado === "House"
            ? "icone-navbar icon-selecionado"
            : "icone-navbar"
        }
        onClick={() => setSelecionado("House")}
      >
        <House />
        <p>Início</p>
      </div>
      <div className="div-arrow">
        <div
          onClick={() => {
            setSelecionado("Megaphone");
            setDisparos(!disparos);
          }}
          className={
            selecionado === "Megaphone"
              ? "icone-navbar icon-selecionado"
              : "icone-navbar"
          }
        >
          <Megaphone />
          <p>Disparos</p>
          {disparos ? (
            <ArrowDown className="arrow invertida" />
          ) : (
            <ArrowDown className="arrow" />
          )}
        </div>
        {disparos && (
          <div className="opcoes">
            <p>Disparos</p>
            <p>Criar Disparos</p>
          </div>
        )}
      </div>
      <div className="div-arrow">
        <div
          onClick={() => {
            setSelecionado("Users");
            setGrupos(!grupos);
          }}
          className={
            selecionado === "Users"
              ? "icone-navbar icon-selecionado"
              : "icone-navbar"
          }
        >
          <Users />
          <p>Grupos</p>
          {grupos ? (
            <ArrowDown className="arrow invertida" />
          ) : (
            <ArrowDown className="arrow" />
          )}
        </div>
        {grupos && (
          <div className="opcoes">
            <p>Lista de Grupos</p>
            <p>Criar Grupo</p>
          </div>
        )}
      </div>
      <div className="div-arrow">
        <div
          onClick={() => {
            setSelecionado("User");
            setContatos(!contatos);
          }}
          className={
            selecionado === "User"
              ? "icone-navbar icon-selecionado"
              : "icone-navbar"
          }
        >
          <User />
          <p>Contatos</p>
          {contatos ? (
            <ArrowDown className="arrow invertida" />
          ) : (
            <ArrowDown className="arrow" />
          )}
        </div>
        {contatos && (
          <div className="opcoes">
            <p>Contatos</p>
            <p>Adicionar Contato</p>
          </div>
        )}
      </div>
      <div onClick={logout} className="icone-navbar logout">
        <SignOut />
        <p>Sair</p>
      </div>
    </div>
  );
}

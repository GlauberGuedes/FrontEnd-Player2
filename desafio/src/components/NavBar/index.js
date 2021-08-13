import logo from "../../assets/logo.svg";
import { ReactComponent as House } from "../../assets/House.svg";
import { ReactComponent as Megaphone } from "../../assets/Megaphone.svg";
import { ReactComponent as Users } from "../../assets/Users.svg";
import { ReactComponent as User } from "../../assets/User.svg";
import { ReactComponent as SignOut } from "../../assets/SignOut.svg";
import "./style.css";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";

export default function NavBar() {
  const { setToken } = useAuth();
  const [selecionado, setSelecionado] = useState("Megaphone");

  function logout () {
    setToken("");
  }

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="logo"/>
      </div>
      <House onClick={() => setSelecionado("House")} className={selecionado === "House" ? "icon-selecionado" : ""}/>
      <Megaphone onClick={() => setSelecionado("Megaphone")} className={selecionado === "Megaphone" ? "icon-selecionado" : ""}/>
      <Users onClick={() => setSelecionado("Users")} className={selecionado === "Users" ? "icon-selecionado" : ""}/>
      <User onClick={() => setSelecionado("User")} className={selecionado === "User" ? "icon-selecionado" : ""}/>
      <SignOut onClick={logout} className="logout"/>
    </div>
  );
}

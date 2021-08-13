import "./style.css";
import { ReactComponent as ArrowDown } from "../../assets/ArrowDown.svg";
import { ReactComponent as BellNotification } from "../../assets/BellNotification.svg";

export default function HeaderBancos() {
  return (
    <div className="header">
      <h3>Bancos</h3>
      <button className="green">+ Criar Banco</button>
      <BellNotification />
      <p>
        Olá, <a href="#">Beleza Rara </a>
      </p>
      <ArrowDown className="arrowDown" />
    </div>
  );
}

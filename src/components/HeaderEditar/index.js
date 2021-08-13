import "./style.css";
import { ReactComponent as ArrowDown } from "../../assets/ArrowDown.svg";
import { ReactComponent as BellNotification } from "../../assets/BellNotification.svg";
import { ReactComponent as ArrowLeft } from "../../assets/ArrowLeft.svg";
import { ReactComponent as Pencil } from "../../assets/Pencil.svg";
import { useHistory } from "react-router-dom";

export default function HeaderEditar({ nomeBanco }) {
  const history = useHistory();

  return (
    <div className="header-editar">
      <ArrowLeft onClick={() => history.push("/bancos")} />
      <h3>{nomeBanco}</h3>
      <button className="green">
        <Pencil /> Editar Banco
      </button>
      <BellNotification />
      <p>
        Olá, <a href="#">Beleza Rara </a>
      </p>
      <ArrowDown />
    </div>
  );
}

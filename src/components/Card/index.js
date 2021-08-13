import { ReactComponent as Megaphone } from "../../assets/Megaphone.svg";
import { ReactComponent as Users } from "../../assets/Users.svg";
import { ReactComponent as Check } from "../../assets/Check.svg";
import { ReactComponent as Menu } from "../../assets/DotsThreeVertical.svg";
import { ReactComponent as CloseRed } from "../../assets/CloseRed.svg";
import { useHistory } from "react-router-dom";
import "./style.css";
import { useState } from "react";

export default function Card({ nome, ispb, code }) {
  const history = useHistory();
  const [openDelete, setOpenDelete] = useState(false);

  function openMenu(e) {
    e.stopPropagation();
    setOpenDelete(!openDelete);
  }

  return (
    <div
      className={code ? "card" : "card-desativado"}
      style={{ backgroundColor: openDelete ? "#EDEFF2" : "" }}
      onClick={() => (code ? history.push(`/bancos/${code}/editar`) : "")}
    >
      <div className="header-card">
        <div className="date">
          <Check />
          <span>12/06/2020 - 18h30</span>
        </div>
        <div className="users">
          <Users />
          <p>23</p>
        </div>
        {openDelete && 
        <div className="delete" onClick={(e) => e.stopPropagation()}>
          <CloseRed /> Deletar Banco
          <div className="seta"></div>
        </div>
        }
        <Menu onClick={(e) => openMenu(e)} className="menu" style={{ backgroundColor: openDelete ? "#CED4DE" : "" }}/>
      </div>
      <div className="card-informacoes">
        <Megaphone />
        <div className="card-banco">
          <p>
            {nome} {code ? `- ${code}` : ""}
          </p>
          <p>ISPB: {ispb}</p>
        </div>
      </div>
    </div>
  );
}

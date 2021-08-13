import "./style.css";
import NavBar from "../../components/NavBar";
import NavBarMobile from "../../components/NavBarMobile";
import Mensagem from "../../components/Mensagem";
import HeaderEditar from "../../components/HeaderEditar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../../assets/ArrowLeft.svg";
import { useHistory } from "react-router-dom";
import Loading from "../../components/Loading";

export default function EditarBanco() {
  const [banco, setBanco] = useState("");
  const [mensagens, setMensagens] = useState(["1", "2", "3", "4", "5"]);
  const { code } = useParams();
  const [erro, setErro] = useState("");
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  async function getAPI() {
    setErro("");
    setLoading(true);
    try {
      const resposta = await fetch(
        `https://brasilapi.com.br/api/banks/v1/${code}`
      );

      const dados = await resposta.json();
      setLoading(false);
      if (!resposta.ok) {
        return setErro(dados.message);
      }

      setBanco(dados);
    } catch (error) {
      setLoading(false);
      setErro(error.message);
    }
  }

  useEffect(() => {
    getAPI();
  }, []);


  return (
    <div className="container-editar">
      <NavBar />
      <NavBarMobile />
      {erro ? (
        <div className="erro-editar">{erro}</div>
      ) : (
        <div className="conteudo-editar">
          <HeaderEditar nomeBanco={banco.name}/>
          <div className="header-editarMobile">
            <ArrowLeft onClick={() => history.push("/bancos")} />
            <h3>{banco.name}</h3>
          </div>
          <div className="dados-editar">
            <div className="informacoes-banco">
              <h4>Detalhes do Banco</h4>
              <div className="dados-banco">
                <div className="div-dados">
                  <span>Nome do Banco</span>
                  <p>{banco.name}</p>
                </div>
                <div className="divisao"></div>
                <div className="div-dados">
                  <span>Código do Banco</span>
                  <p>{banco.code}</p>
                </div>
                <div className="div-dados">
                  <span>ISPB</span>
                  <p>{banco.ispb}</p>
                </div>
              </div>
            </div>
            <div className="lista-mensagens">
              {mensagens.map((mensagem) => (
                <Mensagem numero={mensagem} key={mensagem} />
              ))}
            </div>
          </div>
        </div>
      )}
      <Loading open={loading} />
    </div>
  );
}

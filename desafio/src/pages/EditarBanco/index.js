import "./style.css";
import NavBar from "../../components/NavBar";
import Mensagem from "../../components/Mensagem";
import HeaderEditar from "../../components/HeaderEditar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../../assets/ArrowLeft.svg";
import { ReactComponent as SignOut } from "../../assets/SignOut.svg";
import { useHistory } from "react-router-dom";
import Loading from "../../components/Loading";
import useAuth from "../../hooks/useAuth";

export default function EditarBanco() {
  const [banco, setBanco] = useState("");
  const [mensagens, setMensagens] = useState(["1", "2", "3", "4"]);
  const { code } = useParams();
  const [erro, setErro] = useState("");
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const { setToken } = useAuth();

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

  function logout () {
    setToken("");
  }

  return (
    <div className="container-editar">
      <NavBar />
      {erro ? (
        <div className="erro-editar">{erro}</div>
      ) : (
        <div className="conteudo-editar">
          <HeaderEditar nomeBanco={banco.name}/>
          <div className="header-editarMobile">
            <ArrowLeft />
            <h3>{banco.name}</h3>
            <SignOut onClick={logout} className="logout"/>
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

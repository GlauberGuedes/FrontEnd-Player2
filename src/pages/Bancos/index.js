import "./style.css";
import NavBar from "../../components/NavBar";
import NavBarMobile from "../../components/NavBarMobile";
import Card from "../../components/Card";
import Loading from "../../components/Loading";
import HeaderBancos from "../../components/HeaderBancos";
import { ReactComponent as Search } from "../../assets/MagnifyingGlass.svg";
import { ReactComponent as Close } from "../../assets/Close.svg";
import { useEffect, useState } from "react";

export default function Bancos() {
  const [bancos, setBancos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filtroNomeBanco, setFiltroNomeBanco] = useState("");

  async function getAPI() {
    setLoading(true);
    try {
      const resposta = await fetch("https://brasilapi.com.br/api/banks/v1");

      const dados = await resposta.json();

      setLoading(false);
      setBancos(dados);
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  }

  function filtroBancos(bank) {
    const nomeDoBanco = bank?.name?.toLowerCase();
    if (filtroNomeBanco && nomeDoBanco.includes(filtroNomeBanco.toLowerCase()))
      return bank;
    if (!filtroNomeBanco) return bank;
  }

  useEffect(() => {
    getAPI();
  }, []);

  return (
    <div className="container-bancos">
      <NavBar />
      <NavBarMobile />
      <div className="conteudo-bancos">
        <HeaderBancos />
        <div className="header-mobile">
          <h3>Bancos</h3>
        </div>
        <div className="bancos">
          <div className="quantidade-bancos">
            <h4>Bancos</h4>
            <p>{bancos.filter(filtroBancos).length} bancos</p>
          </div>
          <div className="input-search">
            <input
              type="text"
              value={filtroNomeBanco}
              onChange={(e) => setFiltroNomeBanco(e.target.value)}
              placeholder="Digite o nome do banco"
            />
            {filtroNomeBanco ? (
              <Close
                className="close-search"
                onClick={() => setFiltroNomeBanco("")}
              />
            ) : (
              <Search className="search" />
            )}
          </div>
        </div>
        <div className="lista-cards">
          {bancos.filter(filtroBancos).map((banco) => (
            <Card
              key={banco.ispb}
              nome={banco.name}
              code={banco.code}
              ispb={banco.ispb}
            />
          ))}
        </div>
      </div>
      <Loading open={loading} />
    </div>
  );
}

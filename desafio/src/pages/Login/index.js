import imageLogin from "../../assets/image-login.png";
import logo from "../../assets/Logo.png";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { useHistory } from "react-router-dom";
import "./style.css";

export default function Login() {
  const [visivel, setVisivel] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { setToken, token } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (token) {
      history.push("/restaurantes");
    }
  }, []);

  async function onSubmit(data) {

    setToken("token");
    history.push("/bancos");
  }

  return (
    <div className="container-login">
      <div className="background-login">
        <div className="form-login">
          <img src={logo} alt="logo" />
          <h1>Dispare mensagens quando e para quem você quiser.</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="div-input">
              <label htmlFor="email">E-mail</label>
              <input
                className={errors.email ? "erro" : ""}
                id="email"
                {...register("email", { required: true })}
                type="email"
                placeholder="Seu email"
              />
              {errors.email?.type === "required" && (
                <span style={{ color: "red" }}>Email é obrigatório.</span>
              )}
            </div>
            <div className="div-input">
              <label htmlFor="senha">Senha</label>
              <input
                className={errors.senha ? "erro" : ""}
                type={visivel ? "text" : "password"}
                {...register("senha", { required: true })}
                placeholder="Sua senha"
                id="senha"
              />
              <div className="icone" onClick={() => setVisivel(!visivel)}>
                {visivel ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </div>
              {errors.senha?.type === "required" && (
                <span style={{ color: "red" }}>Senha é obrigatória.</span>
              )}
            </div>
            <button className="green" type="submit">
              Entrar
            </button>
            <p>
              Não tem uma conta? <span>Cadastre-se</span>
            </p>
          </form>
        </div>
        <div className="footer">
          Copyright © 2010-2021 - Informem-se Company S.L. All rights reserved.
        </div>
      </div>
      <div className="conteudo-login">
        <img src={imageLogin} alt="imagem" width="420px" />
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          sapien mi, commodo ut pellentesque non, fermentum at risus. Sed eu
          augue sit amet leo scelerisque cursus vitae ac dolor
        </p>
      </div>
    </div>
  );
}

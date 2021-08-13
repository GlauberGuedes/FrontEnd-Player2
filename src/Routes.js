import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from "./pages/Login";
import Bancos from "./pages/Bancos";
import EditarBanco from "./pages/EditarBanco";
import { AuthContextProvider } from "./context/AuthContext";
import useAuth from "./hooks/useAuth";
import "./styles/global.css";

function RotasProtegidas(props) {
  const { token } = useAuth();
  return (
    <Route render={() => (token ? props.children : <Redirect to="/" />)} />
  );
}

function Routes() {
  return (
    <AuthContextProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <RotasProtegidas>
            <Route path="/bancos" exact component={Bancos} />
            <Route path="/bancos/:code/editar" component={EditarBanco} />
          </RotasProtegidas>
        </Switch>
      </Router>
    </AuthContextProvider>
  );
}

export default Routes;

import Menubar from "./componentes/menu-bar/menu-bar";
import UserPage from "./componentes/menu-bar/userPage";
import HomeRe from "./componentes/menu-bar/homeRe";
import PrivateRoute from "./componentes/menu-bar/PrivateRoute";
import {I18nextProvider} from 'react-i18next';
import i18next from 'i18next';
import globalEs from './traslations/en/es/global.json';
import globalEn from './traslations/en/global.json'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


i18next.init({
  interpolation:{escapeValue:false},
  lng:"es",
  resources:{
    es:{
      global:globalEs
    },
    en:{
      global:globalEn
    }
  }
})


function App() {

  return (
    <div>
      <I18nextProvider i18n={i18next} >
      <Router>
      <Link to="/usuario"></Link>

        <Switch>

          <Route exact path="/">
      <Menubar></Menubar>
      </Route>
      

      <Route exact path="/registrado">
      <HomeRe></HomeRe>
      </Route>

      <PrivateRoute path="/usuario">
      <UserPage></UserPage>
      </PrivateRoute>
      </Switch>

      </Router>
      </I18nextProvider>
    </div>
  );
}

export default App;

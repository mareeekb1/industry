import React from 'react';
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";

//components
import { Grommet } from 'grommet';
import Main from './pages/Main';
import Detail from './pages/Detail';

//config
import { routes } from './store/routes';
import { createClient, Provider } from 'urql';

//styles
import { theme } from './styles/theme'
import './styles/style.css'

//authorization token
const token = 'UmMSuHbN1T16uqSGUfllDEcVDHyNXNqfEZrh7tVa6paO8o9xlV8DX1ALyAMvp1l4'

function App() {

  const client = createClient({
    url: 'https://optimal-elephant-42.hasura.app/v1/graphql',
    fetchOptions: () => {
      return {
        headers: { "x-hasura-admin-secret": token },
      };
    },
  });


  return (
      <Provider value={client}>
        <Grommet theme={theme}>
          <Router>
            <Switch>
              <Route exact path={routes.MAIN} component={Main}/>
              <Route exact path={routes.DETAIL + ':id'} component={Detail}/>
            </Switch>
          </Router>
        </Grommet>
      </Provider>
  );
}

export default App;

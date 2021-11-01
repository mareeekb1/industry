import React from 'react';
import { Grommet } from 'grommet';
import {theme} from './styles/theme'

function App() {

  return (
    <React.Fragment>
      <Grommet theme={theme}>
        hello
      </Grommet>
    </React.Fragment>
  );
}

export default App;

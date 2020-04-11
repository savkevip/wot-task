import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import TanksWidget from "./containers/TanksWidget";
import StoreContext from "./store";
import { GlobalStyle } from "./style";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <StrictMode>
      <StoreContext>
          <TanksWidget />
          <GlobalStyle />
      </StoreContext>
  </StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();

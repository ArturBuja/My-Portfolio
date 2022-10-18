import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import LangContextProvider from './contex/lang-context';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <StrictMode>
    <LangContextProvider>
      <App />
    </LangContextProvider>
  </StrictMode>,
  rootElement
);

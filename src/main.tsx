import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter as ExternalPagesRouter } from 'react-router-dom';
import globalTheme from '../scss/globalTheme';

import App from './app/app';
import { ChakraProvider } from '@chakra-ui/react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <ExternalPagesRouter>
      <ChakraProvider theme={globalTheme}>
        <App />
      </ChakraProvider>
    </ExternalPagesRouter>
  </StrictMode>
);

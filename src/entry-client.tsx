
import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Hydrate the app when it loads in the browser
if (typeof window !== 'undefined') {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    hydrateRoot(
      rootElement,
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  }
}

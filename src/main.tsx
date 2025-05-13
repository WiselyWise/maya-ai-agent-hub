
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

// Handle both CSR and hydration
const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error('Cannot find root element');
} else {
  if (rootElement.innerHTML === '') {
    // Client-side rendering (development)
    createRoot(rootElement).render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  } else {
    // Hydration (production)
    hydrateRoot(
      rootElement,
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  }
}

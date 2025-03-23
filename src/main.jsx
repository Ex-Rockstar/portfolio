import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';  // If you have global styles or TailwindCSS
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

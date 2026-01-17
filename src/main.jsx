import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from './App.jsx'
import theme from "./theme/Theme.json"

// Inject JSON colors as CSS variables
Object.entries(theme.colors).forEach(([key, value]) => {
  document.documentElement.style.setProperty(`--${key}`, value);
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

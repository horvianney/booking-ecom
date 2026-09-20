import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router'
import './index.css'
import App from './App.tsx'

// Paramètre de débogage : ?force-reveal désactive les animations d'apparition
if (window.location.search.includes('force-reveal')) {
  document.documentElement.classList.add('reveal-force')
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import DesignSettings from './components/settings/settings.tsx'
import { checkTheme } from './components/theme/theme.tsx'


checkTheme()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DesignSettings />
    <App />
  </React.StrictMode>,
)

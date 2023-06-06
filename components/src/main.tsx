import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import DesignSettings from './components/settings/settings.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    // FIXME: Diesen dummen Error fixxen
    <DesignSettings children={<p>Hello</p>} />
    <App />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import DesignSettings from './components/settings/settings.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DesignSettings 
      addTheme={{themeName: "darkBlue", backgroundColor: "#282828", textColor: "white",  font: "calibri"}} 
    />
    <App />
  </React.StrictMode>,
)

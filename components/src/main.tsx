import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import DesignSettings from './components/settings/settings.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DesignSettings addTheme={[{backgroundColor: "#282828", font: "calibri", textColor: "#fff", themeName: "darkGrey"}, {backgroundColor:"blue", font:"arial", textColor: "white", themeName: "darkBlue"}]} addLanguages={[{name: "englisch", short: "en"}]}/>
    <App />
  </React.StrictMode>,
)

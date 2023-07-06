import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import DesignSettings from './components/settings/settings.tsx'
import LanguageSettings from "./components/settings/languageSettings.tsx"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DesignSettings 
      // Add a theme
      addTheme={[{backgroundColor: "#282828", font: "calibri", textColor: "#fff", themeName: "darkGrey"}, 
      {backgroundColor:"blue", font:"arial", textColor: "white", themeName: "darkBlue"}]}
    />
    <LanguageSettings 
      addLanguages={[{name: "englischLOL", short: "en"}, {name: "Deutsch", short: "de"}]} 
      activeLanguage='de'
      language={{english: "de", other: "de"}}
      onLanguageChange={(sprache) => {
        console.log(sprache.toString())
      }}
    />
    <App />
  </React.StrictMode>,
)

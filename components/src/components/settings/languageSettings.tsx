// Wofür ist diese Datei?
// - Hier wird eine Komponent erstellt, wo man danach verschiedene Sprachen einstellen kann, und diese Global verwenden
import Error from "../../global_components/Error/Error";
interface addLanguage {
  name: string,
  short: string
}

interface Props{
    /** Füge eine oder mehrere Sprachen hinzu, diese kannst du dann später überall verwenden */
    addLanguages: addLanguage[];
}

function LanguageSettings({addLanguages }: Props ) {
    addLanguages.forEach((obj: addLanguage)  => {
      const name = obj.name.toLowerCase()
      const shortName = obj.short.toLowerCase()
      localStorage.setItem(`language${name}`,`${shortName}`)
    })
    return (
      <>
        {/* Hier wird nichts gerendert, da es eine Settingskomponent ist*/}
      </>
    );
}   

export default LanguageSettings;
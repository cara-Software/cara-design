// Wofür ist diese Datei?
// - Hier wird eine Komponent erstellt, wo man danach verschiedene Sprachen einstellen kann, und diese Global verwenden
import Error from "../../global_components/Error/Error";

interface addLanguage {
  name: string,
  short: string
}

interface Props{
    /** Füge eine oder mehrere Sprachen hinzu, diese kannst du dann später überall verwenden */
    addLanguages: addLanguage[],
    /** Hier kannst du die standartmäßige Sprache eingeben, achte darauf, dass du eine Sprache angibst, die du in dem Prop addLanguages definiert hast. */
    activeLanguage: string,
    /** Eine Funktion, die getriggert wird, wenn sich die Sprache verändert */
    onLanguageChange?: (param: string) => void,

}

function LanguageSettings({addLanguages }: Props ) {
    addLanguages.forEach((obj: addLanguage)  => {
      const name = obj.name.toLowerCase()
      const shortName = obj.short.toLowerCase()
      localStorage.setItem(`language${name}`,`${shortName}`)
    })
    
    return null
}   
export default LanguageSettings;

export const setLanguage = (language: string) => {
  localStorage.setItem("activeLanguage", language.toString())
} 
export const getLanguage = () => {
  const activeLanguage = localStorage.getItem("activeLanguage")
  return activeLanguage
}
/**eine Funktion ausführen, wenn die Sprache geändert wurde */
export const onLanguageChange = ({onLanguageChange}: Props): void => {
  if (onLanguageChange && (getLanguage != null)) {
    onLanguageChange(`${getLanguage()}`)
  }
}
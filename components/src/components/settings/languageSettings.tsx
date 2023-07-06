// Wofür ist diese Datei?
// - Hier wird eine Komponent erstellt, wo man danach verschiedene Sprachen einstellen kann, und diese Global verwenden
import Error from "../../global_components/Error/Error";

type addLanguage = {
  name: string,
  short: string
}

type Props = {
    /** Füge eine oder mehrere Sprachen hinzu, diese kannst du dann später überall verwenden */
    addLanguages: addLanguage[],
    /** Hier kannst du die standartmäßige Sprache eingeben, achte darauf, dass du eine Sprache angibst, die du in dem Prop addLanguages definiert hast. */
    activeLanguage: string,
    /** Eine Funktion, die getriggert wird, wenn sich die Sprache verändert */
    onLanguageChange?: (param: string) => void,
    /**Wenn der Browser in eine bestimmte Sprache eingestellt ist, soll eine erstellte Sprache genutzt werden*/
    language: {german?: string, english?: string, frensh?: string, spanisch?: string, other?: string},
}

function LanguageSettings({addLanguages }: Props, {language}: Props ) {
    // regestrieren der Sprachen im local storage 
    addLanguages.forEach((obj: addLanguage)  => {
      const name = obj.name.toLowerCase()
      const shortName = obj.short.toLowerCase()
      localStorage.setItem(`language${name}`,`${shortName}`)
    })

    // checken ob der Navigator definiert ist
    if (window.navigator == undefined) {
      console.warn("navigator wasn't found!")
    } else if (language.other == undefined) {
      console.log("other wurde nicht angegeben")
    }

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
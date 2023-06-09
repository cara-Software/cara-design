import { ReactNode } from "react";
import Error from "../../global_components/Error/Error";
import { saveCustomTheme } from "../theme/theme";

// Props
interface EinstellungsProps {
    // Children
    /**
     * Hier sind Children nicht erlaubt, gibst du welche an, so wird ein Error getriggert.
     */
    children?: ReactNode,
    // Eigentliche Props
    backgroundColor?: string,
    textColor?: string,
    fontFamily?: string,
    
    // Props für die Themeeinstellungen
    useColorThemes?: boolean,
    /** Hier kann das beim ersten aufriúfen der Seite standartmäßige Theme eingestellt werden. */
    standartTheme?: string,
    /** Um diese Einstellung verwenden zu können, müssen alle Farben des Dark- und Lightmodes eingestellt  oder ein Customtheme angegeben sein.*/
    useUserSettings?: boolean,

    /** mehrere Themes angeben in Form von Objecten in einem Array */
    addTheme?: {
            themeName: string,
            font: string,
            backgroundColor: string,
            textColor: string,
    }[],


    // Lighttheme Props
    /** Bei diesem Prop kann man angeben, ob man ein schon definiertes Customtheme anstelle des Lightthemes verwenden möchte. Dabei muss dieses auch nicht spezielle Farben oder ähnliches beinhalten.  */
    useCustomLightTheme?: string,

    lightThemeBackgroundColor?: string,
    lightThemeTextColor?: string,
    lightThemeFontFamily?: string,

    // Darktheme Props
    useCustomDarkTheme?: string,
    darkThemeBackgroundColor?: string,
    darkThemeTextColor?: string,
    darkThemeFontFamily?: string,

    // multilanguage Support
    useMultipleLanguages?: string,
    activeLanguage?: string,

    addLanguages?: {
        name: string,
        short: string,
    }
}


// Die Settingskomponent
const DesignSettings = (props: EinstellungsProps) => {
    /**Checken ob addTheme nicht leer ist und dann die Werte speichern */
    if(props.addTheme != undefined || null) {
        props.addTheme?.forEach(element =>{
            localStorage.setItem(`ColorScheme${element.themeName}`, JSON.stringify(element))
        })
    }

    if ( props.useColorThemes !=  undefined && (props.standartTheme !=  undefined || props.useUserSettings != undefined)) {
        // FIXME: hier wird der Code ausgeführt, wenn Color-Schemes an sind und auch verwendet werden

        
    } else if ((props.useColorThemes != null || undefined) || (( props.standartTheme != null|| undefined) && (props.useUserSettings != null || undefined))) {
        // FIXME: Code wenn nur eine Prop aktiviert ist, es wird ein Error getriggert
        return (
            <Error errorCode="theme_props_not_defined" message="Du kannst nicht ein Theme erstellen ohne Farben anzugeben oder auch ohne die Einstelung useTheme='true' zu verwenden." />
        )
    }
    if (props.children) {
        return (
            <Error errorCode="settings_component_has_children" message="Du darfst einer Settingskomponent keine Children geben."/>
        )
    }

    return (
        <></>
    );
}


/**Eine Komponente zum einstellen verschiedener Dinge */
export default DesignSettings;



// Das exportieren der angegeben Variablen
export const BackgroundColorGlobal = (props: EinstellungsProps) => props.backgroundColor || undefined;
export const TextColorGlobal = (props: EinstellungsProps) => props.textColor || undefined;
export const FontFamilyGlobal = (props: EinstellungsProps) => props.fontFamily || undefined;

// Themes exportieren
export const colorTheme = (props: EinstellungsProps) => props.useColorThemes || undefined;
export const activeColorTheme = (props: EinstellungsProps) => props.standartTheme || undefined;
export const firstCustomTheme = (props: EinstellungsProps) => props.addTheme || undefined;
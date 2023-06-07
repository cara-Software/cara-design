import { ReactNode } from "react";
import Error from "../../global_components/Error/Error";

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
    activeTheme?: string,
    /** mehrere Themes angeben in Form von Objecten in einem Array */
    addTheme?: [
        {
            themeName: string,
            font: string,
            backgroundColor: string,
            textColor: string,
        },
    ]
    // Lighttheme Props
    lightThemeBackgroundColor?: string,
    lightThemeTextColor?: string,
    lightThemeFontFamily?: string,

    // Darktheme Props
    darkThemeBackgroundColor?: string,
    darkThemeTextColor?: string,
    darkThemeFontFamily?: string,
}


// Die Settingskomponent
const DesignSettings = (props: EinstellungsProps) => {
    if ( props.useColorThemes !=  undefined && props.activeTheme !=  undefined ) {
        // FIXME: hier wird der Code ausgeführt, wenn Color-Schemes an sind und auch verwendet werden

        
    } else if (props.useColorThemes != null || undefined || props.activeTheme != null|| undefined) {
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

if ((props: EinstellungsProps) => props.addTheme != null || undefined) {
    // Hier werden die neuen Themes im LocalStorage regestriert
    (props: EinstellungsProps) => props.addTheme?.forEach(value => {    
        console.log("getriggert")

        localStorage.setItem(value.themeName.toString(), JSON.stringify(value))
    })
}


export default DesignSettings;



// Das exportieren der angegeben Variablen
export const BackgroundColorGlobal = (props: EinstellungsProps) => props.backgroundColor;
export const TextColorGlobal = (props: EinstellungsProps) => props.textColor;
export const FontFamilyGlobal = (props: EinstellungsProps) => props.fontFamily;

// Themes exportieren
export const colorTheme = (props: EinstellungsProps) => props.useColorThemes;
export const activeColorTheme = (props: EinstellungsProps) => props.activeTheme;
export const firstCustomTheme = (props: EinstellungsProps) => props.addTheme;
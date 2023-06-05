import { ReactNode } from "react";
import Error from "../../global_components/Error/Error";
interface EinstellungsProps {
    // Children
    children?: ReactNode,
    // Eigentliche Props
    backgroundColor?: string,
    textColor?: string,
    fontFamily?: string,
    
    // Props für die Themeeinstellungen
    useColorThemes?: boolean,
    activeTheme?: string,

    // Lighttheme Props
    lightThemeBackgroundColor?: string,
    lightThemeTextColor?: string,
    lightThemeFontFamily?: string,

    // Darktheme Props
}


// Der Provider
const DesignEinstellungen = (props: EinstellungsProps) => {
    if ( props.useColorThemes !=  undefined && props.activeTheme !=  undefined ) {
        // FIXME: hier wird der Code ausgeführt, wenn Color-Schemes an sind und auch verwendet 
        
    } else if (props.useColorThemes != null || undefined || props.activeTheme != null|| undefined) {
        // FIXME: Code wenn nur eine Prop aktiviert ist, es wird ein Error getriggert
        return (
            <Error errorCode="theme_props_not_defined" message="Du kannst nicht ein Theme erstellen ohne Farben anzugeben oder auch ohne die Einstelung useTheme='true' zu verwenden." />
        )
    }

    return (
        <div style={{ backgroundColor: props.backgroundColor }}>
            {props.children}
        </div>
    );
}




export default DesignEinstellungen;



// Das exportieren der angegeben Variablen
export const BackgroundColorGlobal = (props: EinstellungsProps) => props.backgroundColor;
export const TextColorGlobal = (props: EinstellungsProps) => props.textColor;
export const FontFamilyGlobal = (props: EinstellungsProps) => props.fontFamily;



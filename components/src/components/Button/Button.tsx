import { BackgroundColorGlobal, FontFamilyGlobal } from "../settings/settings"
import Error from "../../global_components/Error/Error.tsx"
// CleanCode:
// FIXME: Die Props, die Required sind, kommen immer als erstes, also vor den nicht required Props!
interface ButtonProps {
    text: string,
    backgroundColor?: string,
    fontFamily?: string,
    textColor?: string,
}

function Button(props: ButtonProps) {

    // Background-Color checken, da keine Farben vorgegeben werden sollen
    if (props.backgroundColor == undefined || null || BackgroundColorGlobal == undefined || null) {
        return <Error errorCode={"Button_BackgroundColor_not_defined"} message="Du musst einen Provider einfügen und  eine Hintergrundfarbe zu Verfügung stellen oder bei dem Button eine Hintergrundfarbe einfügen. "/>
    } 

    
    return (
        <a style={{
            backgroundColor: props.backgroundColor.toString() || BackgroundColorGlobal.toString(),
            fontFamily: props.fontFamily || FontFamilyGlobal.toString() || "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;",
            color: "#fff"//FIXME: später weiter machen :) 
        }} className="container">
            <p>{props.text}</p>
        </a>
    )
}

export default Button;
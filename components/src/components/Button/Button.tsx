import { BackgroundColorGlobal, FontFamilyGlobal } from "../settings/settings"
import Error from "../../global_components/Error/Error.tsx"
// CleanCode:
// FIXME: Die Props, die Required sind, kommen immer als erstes, also vor den nicht required Props!
interface ButtonProps {
    text: string,
    backgroundColor?: string,
    fontFamily?: string,
    textColor?: string,
    onPress?: () => void,
    onHover?: void,
}

function Button(props: ButtonProps) {
    let finalBackgroundColor = ""
    // Background-Color checken, da keine Farben vorgegeben werden sollen
    if (props.backgroundColor == undefined || null || BackgroundColorGlobal == undefined || null) {
        return <Error errorCode={"Button_BackgroundColor_not_defined"} message="Du musst einen Provider einfügen und  eine Hintergrundfarbe zu Verfügung stellen oder bei dem Button eine Hintergrundfarbe einfügen. "/>
    } else if (BackgroundColorGlobal) {
        finalBackgroundColor = BackgroundColorGlobal.toString()
        return
    } else {
        finalBackgroundColor = props.backgroundColor.toString()
    }
    
    return (
        <a onClick={props.onPress} style={{
            backgroundColor: finalBackgroundColor,
            fontFamily: props.fontFamily || FontFamilyGlobal.toString() || "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;",
            color: props.textColor,
            
        }} className="container">
            <p>{props.text}</p>
        </a>
    )
}

export default Button;
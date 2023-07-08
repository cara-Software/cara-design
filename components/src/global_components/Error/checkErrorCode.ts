export const checkErrorCodeDocumentation = (errorCode: string) => {
    const codes =[
        {name: "Button_BackgroundColor_not_defined", url: "https://cara.software/design/documentation/components/button#backgroundColor_not_defined"},
        {name: "theme_props_not_defined", url: "https://cara.software/design/documentation/theme/#theme_props_not_defined"},
        {name: "settings_component_has_children", url: "https://cara.software/design/documentation/settings#settings_component_has_children"}
    ]
    let errorCodeReturn = "es gab ein Fehler beim Suchen der URL"
    codes.forEach((code) => {
        if (errorCode == code.name.toString()) {
            errorCodeReturn = code.url.toString()
        }
    })
    return errorCodeReturn
}
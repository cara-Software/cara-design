export const checkErrorCodeDocumentation = (errorCode: string) => {
    if (errorCode == "Button_BackgroundColor_not_defined") {
        return "https://cara.software/design/documentation/components/button#backgroundColor_not_defined"
    } else if (errorCode == "theme_props_not_defined") {
        return "https://cara.software/design/documentation/theme/#theme_props_not_defined"
    }
}
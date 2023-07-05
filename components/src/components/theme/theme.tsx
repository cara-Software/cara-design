import { colorTheme } from "../settings/settings";

// Checkt ob hier schon der Scheme-Wert im localStorage drinne ist, wenn nicht so erstellt diese Funktion ihn
export const checkTheme = () => {
    if (localStorage.getItem("colorScheme") == undefined || null) {
        localStorage.setItem("colorScheme", "dark")
    } 
}

// den Wert neu ändern im localStorage
export const setMode = (colorMode: string): void => {
    localStorage.setItem("colorScheme", colorMode)
}

// Eine Variable um das aktuelle Colortheme Theme zu bekommen
export const getTheme: string = localStorage.getItem("colorScheme")?.toString() || ""


interface customThemeData {
    themeName: string,
    font: string,
    backgroundColor: string,
    textColor: string,
}

// eigene Themes abspeichern
export const saveCustomTheme = (customThemeData: Array<customThemeData>): void => {
    console.log(customThemeData)
    customThemeData.forEach(element => {
        localStorage.setItem(element.themeName.toString(), JSON.stringify(element))
    })
}


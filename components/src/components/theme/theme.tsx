import { colorTheme } from "../settings/settings";


// Checkt ob hier schon der Scheme-Wert im localStrorage drinne ist, wenn nicht so erstellt diese Funktion ihn
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

// eigene Themes abspeichern
export const saveCustomTheme = (): void => {
    
}
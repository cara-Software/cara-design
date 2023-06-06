import { colorTheme } from "../settings/settings";



export const checkTheme = () => {
    console.log("wird ausgeführt")
    if (localStorage.length == 0) {
        console.log("nichts da")
        localStorage.setItem("colorScheme", "dark")
    } 
}

export const setMode = (colorMode: string): void => {
    localStorage.setItem("colorScheme", colorMode)
}

export const getTheme: string = localStorage.getItem("colorScheme")?.toString() || ""

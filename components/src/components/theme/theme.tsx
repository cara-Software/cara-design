import { colorTheme,  } from "../settings/settings";



export const checkTheme = () => {
    if (localStorage == null || undefined) {
        localStorage.setItem("colorScheme", "dark")
    }
}

export const setMode = (colorMode: string): void => {
    localStorage.setItem("colorScheme", colorMode)
}
export const getTheme: string = localStorage?.getItem("colorScheme")?.toString() || ""
import { colorTheme,  } from "../settings/settings";



if (localStorage == null || undefined) {
    localStorage.setItem("colorScheme", "light")
}

export const setMode = (colorMode: string): void => {
    localStorage.setItem("colorScheme", colorMode)
}
export const getTheme: string = localStorage?.getItem("colorScheme")?.toString() || ""
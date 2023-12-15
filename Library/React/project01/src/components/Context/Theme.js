import {useContext , createContext} from "react"

export const ThemeContext =  createContext({
    themeMode : 'Dark',
    darkTheme : () => {

    },
    lightTheme : () => {

    },
})

export const themeContextProvider  = ThemeContext.Provider

export default function useTheme(){
    return (
        useContext(ThemeContext)
    )
}
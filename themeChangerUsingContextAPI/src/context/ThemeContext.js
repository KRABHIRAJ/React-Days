import { useContext } from "react";
import { createContext } from "react";


export const ThemeContext = createContext({
    themeMode: 'light',
    setDarkMode: () => {},
    setLightMode: () => {}
});

export const ThemeContextProvider = ThemeContext.Provider;

export default function useTheme(){
    return useContext(ThemeContext);
}

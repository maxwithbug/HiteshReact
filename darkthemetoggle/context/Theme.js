
import React from "react";

//making context
export const ThemeContext = React.createContext({
    THEMEMODE : "light",
    DARKTHEME : () => {},
    LIGHTTHEME : () => {},
});

// shorting the process
export const ThemeProvider = ThemeContext.Provider;


//destribution of context
export default function useTheme() {
    return React.useContext(ThemeContext);
}
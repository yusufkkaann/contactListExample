import { createContext,useContext,useEffect } from "react";
import { useState } from "react";
const ThemeContext = createContext();


export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "Light");
    useEffect(()=>{
        localStorage.setItem("theme",theme)
    },[theme])
    const values = { theme, setTheme };
    return <ThemeContext.Provider value ={values}>
        {children}
        </ThemeContext.Provider>
}
export const useTheme = () => useContext(ThemeContext);

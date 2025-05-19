'use clinet';

import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children}) {
    const [theme, setTheme] = useState('light');

    const ToggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
    return (
        <ThemeContext.Provider value={{ theme, ToggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if(context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
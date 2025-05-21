'use client';

import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children}) {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        if (typeof window !== "undefined") {
            document.documentElement.classList.remove('dark');
            if (theme === 'dark') {
                document.documentElement.classList.add('dark');
            }
        }
    }, [theme]);

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
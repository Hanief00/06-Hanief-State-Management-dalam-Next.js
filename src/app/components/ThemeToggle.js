'use client';

import {useTheme} from '../context/ThemeContext';

export default function ThemeToggle() {
    const {theme, ToggleTheme} = useTheme();

    return (
        <button onClick={ToggleTheme} className="p-2 bg-gray-200 dark:bg-gray-800 rounded">
            Current Theme: {theme} (Click To Toggle)
        </button>
    );
}
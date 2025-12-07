import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(() => {
        // Initialize from localStorage or default to false
        const saved = localStorage.getItem('theme');
        return saved === 'dark';
    });

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }

        // Dispatch custom event to sync all ThemeToggle instances
        window.dispatchEvent(new CustomEvent('themeChange', { detail: { isDark } }));
    }, [isDark]);

    useEffect(() => {
        // Listen for theme changes from other ThemeToggle instances
        const handleThemeChange = (e) => {
            setIsDark(e.detail.isDark);
        };

        window.addEventListener('themeChange', handleThemeChange);
        return () => window.removeEventListener('themeChange', handleThemeChange);
    }, []);

    return (
        <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            aria-label="Toggle Theme"
        >
            {isDark ? <Sun size={20} className="text-white" /> : <Moon size={20} className="text-brand-black" />}
        </button>
    );
}

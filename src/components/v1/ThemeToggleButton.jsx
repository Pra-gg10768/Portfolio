import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const STORAGE_KEY = 'portfolio-theme';

function getInitialTheme() {
  if (typeof window === 'undefined') return 'dark';
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === 'dark' || saved === 'light') return saved;
  return 'dark';
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  window.localStorage.setItem(STORAGE_KEY, theme);
}

export function useThemeTransition() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    const canTransition =
      typeof document !== 'undefined' &&
      'startViewTransition' in document &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!canTransition) {
      setTheme(next);
      return;
    }

    document.startViewTransition(() => {
      setTheme(next);
      applyTheme(next);
    });
  };

  return { theme, isDark: theme === 'dark', toggleTheme };
}

export default function ThemeToggleButton() {
  const { isDark, toggleTheme } = useThemeTransition();

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      onClick={toggleTheme}
    >
      <span className="theme-toggle-track">
        <span className="theme-toggle-thumb">{isDark ? <Moon size={14} /> : <Sun size={14} />}</span>
      </span>
    </button>
  );
}

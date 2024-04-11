import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

const getInitialTheme = (): boolean => {
  const stored = localStorage.getItem('is-dark-mode');
  return stored
    ? stored === 'true'
    : matchMedia('(prefers-color-scheme: dark)').matches;
};

const themes = {
  light: { icon: Sun },
  dark: { icon: Moon },
};

export default function ThemeSwitch() {
  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme());

  useEffect(() => {
    const docElement = document.documentElement;
    docElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const handleToggle = () => {
    const docElement = document.documentElement;
    docElement.classList.toggle('dark', isDarkMode);
    setIsDarkMode((prev) => !prev);
    localStorage.setItem('is-dark-mode', String(!isDarkMode));
  };

  return (
    <button
      className='flex border w-fit rounded-full relative'
      onClick={handleToggle}
    >
      <span
        data-active={isDarkMode}
        className='absolute inset-y-0 h-full aspect-square bg-black rounded-full pointer-events-none z-[-1] data-[active="true"]:bg-primary data-[active="true"]:translate-x-[100%] transition-transform duration-300 ease-in-out'
      />
      {Object.entries(themes).map(([key, { icon: Icon }]) => (
        <span
          key={key}
          data-active={isDarkMode === (key === 'dark')}
          className='p-1.5 rounded-full data-[active="true"]:text-primary-foreground transition-[color] duration-500 ease-in-out'
        >
          <Icon className='size-5' strokeWidth={1.5} />
        </span>
      ))}
    </button>
  );
}

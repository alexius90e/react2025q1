import { useState, useEffect } from 'react';

const useLocalStorage = (key: string, defaultValue: string = '') => {
  const [storedValue, setStoredValue] = useState<string>(defaultValue);

  useEffect((): void => {
    const savedValue: string | null = localStorage.getItem(key);
    if (savedValue !== null) setStoredValue(savedValue);
    if (savedValue === null) setStoredValue(defaultValue);
  }, [key, defaultValue]);

  const setValue = (value: string): void => {
    setStoredValue(value);
    localStorage.setItem(key, value);
  };

  return [storedValue, setValue] as const;
};

export default useLocalStorage;

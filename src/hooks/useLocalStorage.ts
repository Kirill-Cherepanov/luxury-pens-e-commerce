import { useEffect, useState } from 'react';

export function useLocalStorage<T>(key: string, initValue: T | (() => T)) {
  const [value, setValue] = useState<T>(() => {
    const jsonValue = localStorage.getItem(key);

    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof initValue === 'function') {
      return (initValue as () => T)();
    }
    return initValue;
  });

  useEffect(() => {
    const updateLocalStorage = () => {
      setValue((value) => {
        localStorage.setItem(key, JSON.stringify(value));
        return value;
      });
    };
    window.addEventListener('beforeunload', updateLocalStorage);

    return () => window.removeEventListener('beforeunload', updateLocalStorage);
  }, [key, setValue]);

  // useEffect(() => {
  //   localStorage.setItem(key, JSON.stringify(value));
  // }, [key, value]);

  return [value, setValue] as [T, typeof setValue];
}

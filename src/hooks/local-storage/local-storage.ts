import { useEffect, useState } from 'react';

function useLocalStorage<T>(key: string, initialValue: T | null) {
  const [item, setItem] = useState<T | null>(null);

  function setValue(value: T) {
    localStorage.setItem(key, JSON.stringify(value));
    setItem(value);
  }

  function removeItem() {
    const storedValue = localStorage.getItem(key);

    if (storedValue) {
      localStorage.removeItem(key);
      setItem(null);
    }
  }

  useEffect(() => {
    const storedValue = localStorage.getItem(key);

    if (storedValue) setItem(JSON.parse(storedValue));
    else setValue(initialValue!);
  }, [key]);

  return [item, setValue, removeItem] as const;
}

export { useLocalStorage };

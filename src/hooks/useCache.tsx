import { useEffect, useState } from "react";

const useCache = (key: string) => {
  const storedValue = localStorage.getItem(key);

  const [value, setValue] = useState(storedValue ? JSON.parse(storedValue) : null);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useCache;

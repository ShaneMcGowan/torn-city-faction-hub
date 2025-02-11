import React, { createContext, useState } from 'react'

const LOCAL_STORAGE_KEY: string = 'apiKey';

const ApiKeyContext = createContext<{
  apiKey: string,
  setApiKey: (value: string) => void
}>({
  apiKey: '',
  setApiKey: (value: string) => { }
});

const ApiKeyProvider = ({ children }: { children: React.ReactNode }) => {

  const storedKey: string | null = localStorage.getItem(LOCAL_STORAGE_KEY);

  console.log('storedKey', storedKey);

  const [apiKey, setApiKey] = useState<string>(storedKey ?? '');

  const value = {
    apiKey,
    setApiKey: (value: string) => {
      setApiKey(value);
      localStorage.setItem(LOCAL_STORAGE_KEY, value);
    }
  };

  return (<ApiKeyContext.Provider value={value}>
    {children}
  </ApiKeyContext.Provider>)
}

export { ApiKeyProvider, ApiKeyContext }

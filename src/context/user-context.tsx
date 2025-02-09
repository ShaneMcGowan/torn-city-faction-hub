import React, { createContext, useState } from 'react'

const UserContext = createContext<{
  user: string,
  setUser: (value: string) => void
}>({
  user: '',
  setUser: (value: string) => { }
});

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<string>('');

  const value = {
    user,
    setUser
  };

  return (<UserContext.Provider value={value}>
    {children}
  </UserContext.Provider>)
}

export { UserProvider, UserContext }

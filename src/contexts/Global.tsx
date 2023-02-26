import { createContext, useContext, useState, ReactNode } from 'react'

interface GlobalProviderProps {
  children: ReactNode
}

const GlobalContext = createContext({})

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [isDark, setIsDark] = useState(false)

  // Global states
  const globalStates = {
    isDark,
    setIsDark
  }

  return (
    <GlobalContext.Provider value={globalStates}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobal = () => useContext(GlobalContext)

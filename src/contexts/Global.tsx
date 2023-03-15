'use client'
import { createContext, useContext, useState, ReactNode } from 'react'

interface IGlobalProvider {
  children: ReactNode
}

interface IGlobalContext {
  globalStates: {
    isDark: boolean | null
    setIsDark: (value: boolean | null) => void
    isMenuOpen: boolean | null
    setIsMenuOpen: (value: boolean | null) => void
  };
}

const GlobalContext = createContext<IGlobalContext>({
  globalStates: {
    isDark: null,
    setIsDark: () => {},
    isMenuOpen: null,
    setIsMenuOpen: () => {}
  }
})

export const GlobalProvider = ({ children }: IGlobalProvider) => {
  const [isDark, setIsDark] = useState<boolean | null>(true)
  const [isMenuOpen, setIsMenuOpen] = useState<boolean | null>(false)

  const globalStates = {
    isDark,
    setIsDark,
    isMenuOpen,
    setIsMenuOpen
  }

  return (
    <GlobalContext.Provider value={{ globalStates }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobal = () => useContext(GlobalContext)

import React, { useState, createContext, useContext, useEffect } from 'react'

const ActiveUrlContext = createContext()
const SetActiveUrlContext = createContext()

export const ActiveUrlProvider = ({children}) => {
  const [activeUrl, setActiveUrl] = useState('home')

  useEffect(() => {
  }, [])
  
  console.log('ActiveUrlProvider activeUrl', activeUrl)

  return (
    <SetActiveUrlContext.Provider value={setActiveUrl}>
      <ActiveUrlContext.Provider value={activeUrl}>
        {children}
      </ActiveUrlContext.Provider>
    </SetActiveUrlContext.Provider>
  )
}

export const useActiveUrl = () => {
  const activeUrl = useContext(ActiveUrlContext)
  const setActiveUrl = useContext(SetActiveUrlContext)

  return {
    activeUrl,
    setActiveUrl
  }
}

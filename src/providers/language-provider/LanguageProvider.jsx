import React, { useState, createContext, useContext, useEffect } from 'react'

import { IntlProvider } from 'react-intl'
import German from '../../lang/de.json'
import English from '../../lang/en.json'

const LocaleContext = createContext()
const SetLocaleContext = createContext()

export const LanguageProvider = ({children}) => {
  const initLocale = navigator.language
  const initMessages = initLocale.includes('de') ? German : English

  const [locale, setLocale] = useState(initLocale)
  const [messages, setMessages] = useState(initMessages)

  useEffect(() => {
    setMessages(locale.includes('de') ? German : English)
  }, [locale])
  
  console.log('LanguageProvider locale', locale)

  return (
    <SetLocaleContext.Provider value={setLocale}>
      <LocaleContext.Provider value={locale}>
        <IntlProvider locale={locale} messages={messages}>
          {children}
        </IntlProvider>
      </LocaleContext.Provider>
    </SetLocaleContext.Provider>
  )
}

export const useLang = () => {
  const locale = useContext(LocaleContext)
  const setLocale = useContext(SetLocaleContext)

  return {
    locale,
    setLocale
  }
}

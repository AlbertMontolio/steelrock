import { React } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'

import { Navbar } from './components/navbar/Navbar'
import { Home } from './pages/home/Home'
import { RealState } from './pages/real-state/RealState'
import { RenewableEnergy } from './pages/renewable-energy/RenewableEnergy'
import { Contact } from './pages/contact/Contact'
import { Footer } from './components/footer/Footer'
import { routes } from './config'
import { LanguageProvider } from './providers/language-provider/LanguageProvider'

export const App = () => {
  return (
    <LanguageProvider>
      <Router>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route path={routes.realState} component={RealState} />
        <Route path={routes.renewableEnergy} component={RenewableEnergy} />
        <Route path={routes.contact} component={Contact} />
        <Footer />
      </Router>
    </LanguageProvider>
  )
}

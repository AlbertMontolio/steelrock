import { React } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'

import { TopNavbar } from './components/top-navbar/TopNavbar'
import { Home } from './pages/home/Home'
import { RealState } from './pages/real-state/RealState'
import { RenewableEnergy } from './pages/renewable-energy/RenewableEnergy'
import { Footer } from './components/footer/Footer'
import { routes } from './config'
import { LanguageProvider, useLang } from './providers/language-provider/LanguageProvider'

export const App = () => {
  return (
    <LanguageProvider>
      <Router>
        <TopNavbar />
        <Route exact path='/' component={Home} />
        <Route path={routes.realState} component={RealState} />
        <Route path={routes.renewableEnergy} component={RenewableEnergy} />
        <Footer />
      </Router>
    </LanguageProvider>
  )
}

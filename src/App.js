import { TopNavbar } from './components/top-navbar/TopNavbar'
import { Home } from './pages/home/Home'
import { RealState } from './pages/real-state/RealState'
import { RenewableEnergy } from './pages/renewable-energy/RenewableEnergy'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { routes } from './config'

function App() {
  return (
    <Router>
      <TopNavbar />
      <Route exact path='/' component={Home} />
      <Route path={routes.realState} component={RealState} />
      <Route path={routes.renewableEnergy} component={RenewableEnergy} />
    </Router>
  )
}

export default App

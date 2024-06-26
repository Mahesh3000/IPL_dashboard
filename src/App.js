import {BrowserRouter, Route, Switch} from 'react-router-dom'

import './App.css'
import Home from './components/Home'
// import LatestMatch from './components/LatestMatch'
// import MatchCard from './components/MatchCard'
import NotFound from './components/NotFound'
import TeamMatches from './components/TeamMatches'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/team-matches/:id" component={TeamMatches} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App

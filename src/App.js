import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Navigation from './components/Navigation'
import PageRenderer from './PageRenderer'

function App() {
  const user = {
    firstName: "Frederico",
    lastName: "Zanoni Ruiz"
  }
  return (
    <Router>
      <div className="App">
        <Navigation user={user} />
        <Switch>
          <Route path="/:page" component={PageRenderer} />
          <Route path="/" render={() => <Redirect to="/home" />} />
          <Route component={() => 404} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;

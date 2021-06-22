import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {StarterLogo} from '../StarterLogo';
import './App.scss';

export default function App(): JSX.Element {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <StarterLogo />
            <h1>React Starter Kit</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

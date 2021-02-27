import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import Challenge from './pages/challenge.js';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Challenge />
        </Route>
        <Route path="*">
          <Challenge />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

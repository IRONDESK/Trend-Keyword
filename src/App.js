import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import "./App.css"
import "./Reset.css"
import Main from "./components/page/Main"
import Search from "./components/page/Search"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Main} />
        <Route path="/search" component={Search} />
      </Switch>
    </Router>
  );
}

export default App;

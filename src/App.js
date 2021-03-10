import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Nomatch from './components/Nomatch/Nomatch';
import TeamDetails from './components/TeamDetails/TeamDetails';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          
          <Route path="/team/:idTeam">
            <TeamDetails></TeamDetails>
          </Route>

          <Route exact path="/">
            <Home></Home>
          </Route>

        <Route path="*">
        <Nomatch></Nomatch>
        </Route>
          





        </Switch>
      </Router>
    </div>
  );
}

export default App;

import './App.scss';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Services from './components/Services';
import Feedback from './components/Feedback';
import About from './components/About';
import EV from './components/EV';
import Contact from './components/Contact';
import Details from './components/Details';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/">
            <Home />
            <Services />
            <Feedback />
            <EV />
            <About />
            <Contact />
            <Details />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

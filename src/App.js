import './App.scss';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Services from './components/Services';
import Feedback from './components/Feedback';
import About from './components/About';
import EV from './components/EV';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Services />
      <Feedback />
      <About />
      <EV />
      <Contact />
    </div>
  );
}

export default App;

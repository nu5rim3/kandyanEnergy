import './App.scss';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Services from './components/Services';
import Feedback from './components/Feedback';
import About from './components/About';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Services />
      <Feedback />
      <About />
    </div>
  );
}

export default App;

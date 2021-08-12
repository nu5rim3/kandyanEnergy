import './App.scss';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Services from './components/Services';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Services />
    </div>
  );
}

export default App;

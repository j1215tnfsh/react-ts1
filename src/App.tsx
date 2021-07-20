import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './App.css';
import Header from './Header/Header';
import MainContent from './MainContent/MainContent';

const App = () => {
  const header = useRef(null);
  useEffect(() => {
    gsap.from(header.current, { duration: 2, color: '#000' });
    gsap.from(header.current, { duration: 2, x: '+=100', ease: 'elastic' });
  }, []);
  return (
    <div className='container-fluid'>
      <div className='row'>
        <Header />
      </div>
      <div className='row'>
        <MainContent />
      </div>
    </div>
  );
};

export default App;

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

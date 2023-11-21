import React from 'react';
import logo from './logo.svg';
import Hello from './components/Hello';
import Counter from './components/Counter';
 import FnCounter from './components/FnCounter';
import './App.css';

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
      <main><Hello message = "React"/>
      <Hello message = "World"/>
      {/* render Counter component */}
      <Counter value={10}/>
        {/* numbers are through expressions */}
        <Counter value={10} title="count"/>

        <FnCounter/>

      </main>
    </div>
  );
}

export default App;

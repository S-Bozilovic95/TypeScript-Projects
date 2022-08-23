import React from 'react';
import './App.css';
import { Home } from './Components/Home';
import { ContextToDoProvider } from './Context/Context';

function App() {
  return (
    <div className="App">
      <ContextToDoProvider>
        <Home/>
      </ContextToDoProvider>
    </div>
  );
}

export default App;

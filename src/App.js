import React from 'react';
import Calculator from './components/Calculator';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className='container col-md-5'>
        <Calculator />
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import Home from './pages/Home';
import Header from './container/Header';

const App = () => {
  return (
    <div className="wrapper">
      <Header/>
      <Home/>
    </div>
  )
}

export default App;
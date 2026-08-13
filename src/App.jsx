import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Navbar2 from './components/layout/Navbar2';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Navbar2 />
      </BrowserRouter>
    </>
  )
}

export default App;

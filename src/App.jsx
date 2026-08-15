import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar2 from './components/layout/Navbar2';
import Home from './pages/home/Home';
import About from './pages/home/sections/About';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Navbar2 />

        <main>
          <Routes>
            <Route path='/' element={<Home />} />

          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App;

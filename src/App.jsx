import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar2 from './components/layout/Navbar2';
import Home from './pages/home/Home';
import About from './pages/home/sections/About';
import Course from './pages/courses/Course';
import CourseDetails from './pages/courses/CourseDetails';

const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar2 />

        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/courses" element={<Course />} />
            <Route path="/courses/:id" element={<CourseDetails />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App;

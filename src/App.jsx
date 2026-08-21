import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar2 from './components/layout/Navbar2';
import Home from './pages/home/Home';
import About from './pages/home/sections/About';
import Course from './pages/courses/Course';
import CourseDetails from './pages/courses/CourseDetails';
import ScrollToTop from './components/common/ScrollToTop';
import Team from './pages/team/Team';
import TeamDetails from './pages/team/TeamDetails';
import Event from "@pages/event/Event";
import EventDetails from "@pages/event/EventDetails";
import BlogDetails from './pages/blog/BlogDetails';
import Blog from './pages/blog/Blog';
import Footer from './components/layout/Footer';


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
        <ScrollToTop />
        <Navbar2 />

        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/courses" element={<Course />} />
            <Route path="/courses/:id" element={<CourseDetails />} />
            <Route path="/team" element={<Team />} />
            <Route path="/team/:id" element={<TeamDetails />} />
            <Route path="/event" element={<Event />} />
            <Route path="/event/:id" element={<EventDetails />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;

import React from 'react'
import Hero from './sections/Hero'
import About from './sections/About'
import Classes from './sections/Classes'
import Courses from './sections/Courses'
import Category from './sections/Category'
import PopularClasses from './sections/PopularClasses'


import Gallery from './sections/Gallery'
import Team from './sections/Team'
import Event from './sections/Event'
import Testimonials from './sections/Testimonials'
import Blog from './sections/Blog'

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Classes />
      <Courses />
      <Category />
      <PopularClasses />
      <Team />
      <Event />
      <Gallery />
      <Testimonials />
      <Blog />
      <About />
    </>
  )
}

export default Home
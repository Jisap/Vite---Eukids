import React from 'react'
import Hero from './sections/Hero'
import About from './sections/About'
import Classes from './sections/Classes'
import Courses from './sections/Courses'
import Category from './sections/Category'
import PopularClasses from './sections/PopularClasses'

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Classes />
      <Courses />
      <Category />
      <PopularClasses />
    </>
  )
}

export default Home
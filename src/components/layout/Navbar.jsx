import React, { useEffect, useState } from 'react'
import Logo from './Logo'
import gsap from 'gsap';



const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Entrance animation, once on mount
  useEffect(() => {
    gsap.from(".navbar-shell", {
      y: -40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    });
  }, []);

  // Shrink + add shadow once the page has scrolled a little.
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className='fixed top-8 left-0 w-full z-50 px-2 sm:px-0'>
        <div className='container-base'>
          <nav className={`
            navbar-shell flex items-center justify-between h-22 lg:h-24 border-card px-5 lg:px-8 rounded-full bg-white transition-shadow duration-300 mt-5 opacity-100!
            ${scrolled ? 'shadow-lg' : ''}
            `}
          >


            <Logo className="w-32 lg:40 shrink-0" />

            <div className='hidden lg:block'>

            </div>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Navbar
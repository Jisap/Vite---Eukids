import React, { useEffect, useState } from 'react'
import gsap from 'gsap';
import Logo from './Logo'
import Menu2 from './Menu2';
import Button from '../ui/Button';
import { Icon } from '@iconify/react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Animación de entrada del navbar (una sola vez al montar).
  // gsap.context() + ctx.revert() evita que, en StrictMode,
  // la animación se ejecute dos veces y deje opacity en un valor intermedio.
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".navbar-shell", {
        y: -40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    });
    return () => ctx.revert();
  }, []);

  // Header con sombra al hacer scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY >= 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMenuOpen(false);

  const admissionButton = (extraClass = "") => (
    <Button
      text="Admission Now"
      to="/about"
      className={extraClass}
      onClick={closeMobileMenu}
    />
  );

  return (
    <header className='fixed top-8 left-0 w-full z-50 px-2 sm:px-0'>
      <div className='container-base'>
        <nav
          className={[
            "navbar-shell flex items-center justify-between h-22 lg:h-24 border-card px-5 lg:px-8 rounded-full bg-white transition-shadow duration-300 mt-5 opacity-100",
            scrolled
              ? "shadow-lg"
              : "",
          ].filter(Boolean).join(" ")}
        >
          <Logo className="w-32 lg:w-40 shrink-0" />

          <div className='hidden lg:block'>
            <Menu2 />
          </div>

          <div className='hidden lg:block shrink-0'>
            {admissionButton()}
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close Menu" : "Open menu"}
            aria-expanded={menuOpen}
            className='lg:hidden text-3xl text-heading-1 cursor-pointer'
          >
            <Icon icon={menuOpen ? "material-symbols:close-rounded" : "material-symbols:menu-rounded"} />
          </button>
        </nav>

        {/* Panel mobile */}
        <div
          className={[
            "lg:hidden overflow-hidden transition-all duration-500 ease-in-out",
            menuOpen ? "max-h-175 opacity-100 mt-2" : "max-h-0 opacity-0",
          ].join(" ")}
        >
          <div className='bg-white rounded-3xl p-6 shadow-lg border-card'>
            <Menu2
              mobile
              onNavigate={closeMobileMenu}
            />
            {admissionButton("w-full")}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
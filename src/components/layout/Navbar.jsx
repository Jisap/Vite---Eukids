import React, { useEffect, useState } from 'react'
import Logo from './Logo'
import gsap from 'gsap';
import Menu from './Menu';
import Button from '../ui/Button';
import { Icon } from '@iconify/react';



const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Original code
  // Entrance animation, once on mount
  // Con strict mode las animaciones daban valores de opacity extraños
  // useEffect(() => {
  //   gsap.from(".navbar-shell", { //  navbar-shell es la clase que le dimos a la nav
  //     y: -40,                    //  el -40 significa que empieza 40px arriba del final
  //     opacity: 0,                //   y que empieza invisible
  //     duration: 0.8,             //  y que dura 0.8 segundos
  //     ease: "power3.out"         //  y que tiene una aceleracion suave
  //   });
  // }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {  // gsap.context() agrupa las animaciones creadas dentro de react
      gsap.from(".navbar-shell", {    // Aqui se desarrollan 2 animaciones, y: -40 , opacity y ease
        y: -40,                       // Las dos animaciones (la vieja, interrumpida a mitad de camino, y la nueva) terminaban escribiendo valores de opacity distintos sobre el mismo elemento, y el resultado final quedaba en un punto intermedio, ni 0 ni 1.
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });
    });

    return () => ctx.revert(); // Cuando StrictMode desmonta el componente por primera vez, la animación se cancela y el elemento vuelve a su estado original. Así, cuando se monta de nuevo, arranca limpio desde cero, sin animaciones fantasma compitiendo entre sí. 
  }, []);



  // Controla la aparicion del header al hacer scroll
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

  // Función para cerrar el menú hamburguesa
  const closeMobileMenu = () => setMenuOpen(false);

  return (
    <>
      <header className='fixed top-8 left-0 w-full z-50 px-2 sm:px-0'>
        <div className='container-base'>
          <nav className={`
            navbar-shell flex items-center justify-between h-22 lg:h-24 border-card px-5 lg:px-8 rounded-full bg-white transition-shadow duration-300 mt-5 opacity-100
            ${scrolled ? 'shadow-lg' : ''}
            `}
          >


            <Logo className="w-32 lg:w-40 shrink-0" />

            <div className='hidden lg:block'>
              <Menu />
            </div>

            <div className='hidden lg:block shrink-0'>
              <Button
                text="Admission Now"
                to="/about"
              />
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Close Menu" : "Open menu"}
              aria-expanded={menuOpen}
              className='lg:hidden text-3xl text-heading-1 cursor-pointer '
            >
              <Icon icon={
                menuOpen
                  ? "material-symbols:close-rounded"
                  : "material-symbols:menu-rounded"
              } />
            </button>
          </nav>

          {/* Mobile slide */}
          <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out
            ${menuOpen
              ? "max-h-175 opacity-100 mt-2"
              : "max-h-0 opacity-0"
            }
            `}
          >
            <div className='bg-white rounded-3xl p-6 shadow-lg border-card'>
              <Menu
                mobile
                onNavigate={closeMobileMenu}
              />

              <div>
                <Button
                  to="/about"
                  text="Admission Now"
                  className='w-full'
                  onClick={closeMobileMenu}
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
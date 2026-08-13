import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { navLinks } from "../../data/navLinks"
import { useState } from "react";



const DropdownList = ({ items, onNavigate, mobile }) => (
  <ul className={
    mobile
      ? "pl-4 border-l border-gray-200 mt-2 space-y-0.5"
      // Si estamos en movil, los items del dropdown se muestran verticalmente con un borde izquierdo
      : "absolute left-0 top-full min-w-62.5 bg-white shadow-xl rounded-2xl py-3 z-50 opacity-0 invisible translate-y-3 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0"
    // Por defecto el dropdown esta oculto en desktop: opacity-0 e invisible. Cuando se hace hover esto se revierte
  }
  >
    {items.map((item) => (
      <li key={item.label}>
        <Link
          to={item.path}
          onClick={onNavigate}
          className="block py-2.5 px-4 text-sm rounded-xl hover:bg-primary-2/10 hover:text-primary-2 transition-colors"
        >
          {item.label}
        </Link>
      </li>
    ))}
  </ul>
)

/**
 * Primary site navigation. Renders desktop hover-dropdowns or, when
 * `mobile` is true, an accordion-style list suited to the slide-down panel.
 * 
 * @param {boolean} [mobile]
 * @param {Function} [onNavigate] - Setter de estado del menu hamburguesa, para cerrarlo tras una navegación
 */

const Menu = ({ mobile = false, onNavigate }) => {

  // Se usa para controlar la apertura y cierre del dropdown en mobile
  const [openIndex, setOpenIndex] = useState(null);

  // Controla la apertura y cierre del dropdown en mobile
  const toggleDropdown = (index) => {
    if (!mobile) return;
    setOpenIndex((prev) => (prev === index ? null : index))
  };

  // Movil: ToggleDropdown -> setOpenIndex -> isOpen -> controla rotación icon y si dropdown está abierto
  // En desktop el dropdown esta controlado por hover

  return (
    <>
      <ul className={
        mobile
          ? "flex flex-col gap-1"       // Si estamos en movil, los links se apilan verticalmente
          : "flex items-center gap-12"  // Si estamos en desktop, los links se muestran horizontalmente
      }
      >
        {navLinks.map((item, index) => {

          // Determina si el dropdown esta abierto
          const isOpen = openIndex === index;

          // Si no tiene hijos, es un enlace simple
          if (!item.children) {
            return (
              <li key={item.label}>
                <Link
                  to={item.path}
                  onClick={onNavigate}
                  className="block py-3 font-medium text-heading-1 hover:text-primary-2 transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            )
          }

          return (
            // Si tiene hijos, es un dropdown
            <li
              key={item.label}
              className={`relative ${!mobile ? "group" : ""}`}
            >
              {/* 
              - Botón para abrir y cerrar el dropdown. 
              - En desktop se abre y cierra al hacer hover
              - En mobile se abre y cierra al hacer click
              */}
              <button
                type="button"
                onClick={() => toggleDropdown(index)}  // toggleDropdown es una función que recibe el índice del elemento y cambia el estado de openIndex
                className="w-full py-3 font-medium text-heading-1 hover:text-primary-2 transition-colors flex items-center justify-between gap-2 cursor-pointer"
              >
                {item.label}
                <Icon
                  icon="oui:arrow-down"
                  width={16}
                  className={`
                  transition-transform duration-300
                  ${!mobile && isOpen ? "rotate-180" : ""}
                  ${!mobile ? "group-hover:rotate-180" : ""}
                `}
                />
              </button>

              {/* Si es mobile, es un accordion-style list, que se abre y cierra al hacer click en el boton de arriba  */}
              {mobile ? (
                <div className={`
                  overflow-hidden transition-all duration-300
                  ${isOpen
                    ? "max-h-125 opacity-100"
                    : "max-h-0 opacity-0"}
                  `}
                >
                  <DropdownList
                    items={item.children}
                    onNavigate={onNavigate}
                    mobile
                  />
                </div>
              ) : (
                // y si no, es un dropdown
                <DropdownList
                  items={item.children}
                  onNavigate={onNavigate}
                />
              )}
            </li>
          );
        })}
      </ul>
    </>
  )
}

export default Menu
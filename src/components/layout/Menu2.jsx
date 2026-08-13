import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { navLinks } from "../../data/navLinks";
import { useState } from "react";

const DropdownList2 = ({ items, onNavigate, mobile }) => (
  <ul
    className={
      mobile
        ? "pl-4 border-l border-gray-200 mt-2 space-y-0.5"
        : "absolute left-0 top-full min-w-62.5 bg-white shadow-xl rounded-2xl py-3 z-50 opacity-0 invisible translate-y-3 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0"
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
);

/**
 * Navegación principal. En desktop los dropdowns se abren con hover;
 * en mobile (`mobile=true`) se renderiza como accordion controlado por click.
 *
 * @param {boolean} [mobile]
 * @param {Function} [onNavigate] - Cierra el menú hamburguesa tras navegar
 */
const Menu2 = ({ mobile = false, onNavigate }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    if (!mobile) return;
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <ul className={
      mobile
        ? "flex flex-col gap-1"          // En movil, los enlaces se apilan verticalmente
        : "flex items-center gap-12"     // En desktop, los enlaces se muestran horizontalmente
    }
    >
      {navLinks.map((item, index) => {
        const isOpen = openIndex === index;  // Determina si el dropdown está abierto

        const content = !item.children ? (   // Si el enlace no tiene hijos, es un enlace simple
          <Link
            to={item.path}
            onClick={onNavigate}
            className="block py-3 font-medium text-heading-1 hover:text-primary-2 transition-colors"
          >
            {item.label}
          </Link>
        ) : (                               // Si el enlace tiene hijos, se renderiza un botón con un icono de flecha
          <>
            <button
              type="button"
              onClick={() => toggleDropdown(index)}
              className="w-full py-3 font-medium text-heading-1 hover:text-primary-2 transition-colors flex items-center justify-between gap-2 cursor-pointer"
            >
              {item.label}
              <Icon
                icon="oui:arrow-down"
                width={16}
                className={[
                  "transition-transform duration-300",
                  !mobile && isOpen ? "rotate-180" : "",
                  !mobile ? "group-hover:rotate-180" : "",
                ].filter(Boolean).join(" ")}
              />
            </button>

            {mobile ? (  // Si mobile es true, se renderiza un dropdown controlado por click
              <div
                className={[
                  "overflow-hidden transition-all duration-300",
                  isOpen ? "max-h-125 opacity-100" : "max-h-0 opacity-0",
                ].join(" ")}
              >
                <DropdownList2 items={item.children} onNavigate={onNavigate} mobile />
              </div>
            ) : (
              <DropdownList2 items={item.children} onNavigate={onNavigate} />
            )}
          </>
        );

        return (
          <li
            key={item.label}
            className={item.children && !mobile
              ? "relative group"
              : "relative"
            }
          >
            {content}
          </li>
        );
      })}
    </ul>
  );
};

export default Menu2;
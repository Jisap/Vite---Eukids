import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { navLinks } from "../../data/navLinks"

const DropdownList = ({ }) => {

}

/**
 * Primary site navigation. Renders desktop hover-dropdowns or, when
 * `mobile` is true, an accordion-style list suited to the slide-down panel.
 * 
 * @param {boolean} [mobile]
 * @param {Function} [onNavigate] - called after a link is clicked ( used to close the mobile panel)
 */

const Menu = ({ mobile = false, onNavigate }) => {

  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    if (!mobile) return;
    setOpenIndex((prev) => (prev === index ? null : index))
  };

  return (
    <>
      <ul className={mobile ? "flex flex-col gap-1" : "flex items-center gap-12"}>
        {navLinks.map((item, index) => {

          const isOpen = openIndex === index
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

          <li
            key={index}
            className={`relative ${mobile ? "group" : ""}`}
          >
            <button
              type="button"
              onClick={() => toggleDropdown(index)}
              className="w-full py-3 font-medium text-heading-1 hover:text-primary-2 transition-colors flex items-center justify-between gap-2 cursor-pointer"
            >
              {item.label}
              <Icon
                icon="oui:arrow-down"
                width={16}
                className={`
                  transition-transform duration-300
                  ${mobile && isOpen ? "rotate-180" : ""}
                  ${!mobile ? "group-hover:rotate-180" : ""}
                `}
              />
            </button>

            {/* {mobile ? (
               <div className={`overflow-hidden transition-all duration-300
                 ${isOpen ? "max-h-125 opacity-100": "max-h-0 opacity-0"}
               `}
              >

               </div>
            ): ()} */}
          </li>
        })}
      </ul>
    </>
  )
}

export default Menu
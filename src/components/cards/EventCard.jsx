import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

/**
 * Event tile with a circular date badge, title, time, and location.
 */
const EventCard = ({ id, day, month, title, time, location, bgColor, textColor, element, blink }) => (
  <div
    className={`
        relative border-card rounded-2xl p-5 md:p-6 overflow-hidden transition-all duration-300 hover:-translate-y-1
        ${bgColor} 
    `}
  >
    <img
      src={blink} // Estrellitas en la esquina superior izda
      alt=""
      aria-hidden="true"
      className="absolute top-4 right-4 w-8 h-8 md:w-12 md:h-12"
    />

    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 md:gap-6">
      <div className="relative flex items-center justify-center text-center w-32 h-32 sm:w-36 sm:h-36 shrink-0">
        {/* div que se situa encima de la imagen de abajo */}
        <div className={`relative z-10 flex flex-col ${textColor}`}>
          <span className="text-4xl md:text-5xl font-bold font-display">{day}</span>
          <span className="text-lg md:text-xl">{month}</span>
        </div>

        <img
          src={element} //Imagen de fondo donde se situa la fecha y el mes
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-contain"
        />
      </div>

      <div className={`
        flex-1 text-center sm:text-left
        ${textColor} 
      `}
      >
        <Link to={`/event/${id}`}>
          <h3 className="text-xl md:text-2xl font-bold mb-4 font-display hover:underline">{title}</h3>
        </Link>

        <ul className="space-y-3">
          <li className="flex items-center justify-center sm:justify-start gap-3">
            <Icon icon="mdi:clock-outline" className="text-xl md:text-2xl shrink-0" />
            <span>{time}</span>
          </li>

          <li className="flex items-start justify-center sm:justify-start gap-3">
            <Icon icon="mdi:map-marker-outline" className="text-xl md:text-2xl mt-0.5 shrink-0" />
            <span>{location}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default EventCard;
import { useParams, Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import Breadcrumb from "@components/ui/Breadcrumb";
import Button from "@components/ui/Button";
import DetailRow from "@components/common/DetailRow";
import { events } from "@data/events";

import icon1 from "@assets/event-icon1.svg";
import icon2 from "@assets/event-icon2.svg";
import icon3 from "@assets/event-icon3.svg";
import eventDetailImg from "@assets/event-kids.jpg";

const EventDetails = () => {
  const { id } = useParams();
  const event = events.find((item) => item.id === Number(id));

  if (!event) {
    return (
      <div className="container-base py-24 text-center">
        <h2 className="text-4xl font-bold font-display mb-4">Event Not Found</h2>
        <Link to="/event" className="text-primary-2 font-semibold hover:underline">
          ← Back to Events
        </Link>
      </div>
    );
  }

  const remainingSlots = Number(event.slot) - Number(event.bookedSlot); // Muestra los puestos disponibles

  return (
    <>
      <Breadcrumb
        title={event.title}
        parentTitle="Events"
        parentLink="/event"
        currentPage={event.title}
      />

      <section id="event-details" className="section-py">
        <div className="container-base grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Columna izquierda */}
          <div className="lg:col-span-7">
            <img
              src={eventDetailImg}
              alt={event.title}
              className="w-full h-100 object-cover rounded-2xl mb-8"
            />

            <h2 className="text-3xl font-bold mb-5 font-display">{event.title}</h2>

            <p className="text-gray-600 leading-8 mb-6">
              Join us for {event.title.toLowerCase()}, a wonderful chance for students to come together,
              celebrate their progress, and build lasting memories with friends, teachers, and family.
            </p>

            <p className="text-gray-600 leading-8">
              Doors open thirty minutes before the start time. We recommend arriving early to find
              seating and enjoy a few classroom activity stations set up in the lobby.
            </p>
          </div>

          {/* Columna derecha */}
          <aside className="lg:col-span-5">
            <div className="border-card rounded-2xl p-8 sticky top-28">
              <h3 className="text-2xl font-bold mb-6 font-display">Event Details</h3>

              <ul>
                <DetailRow icon={icon1} label="Date" value={`${event.day} ${event.month}, ${event.year}`} />
                <DetailRow icon={icon2} label="Time" value={event.time} />
                <DetailRow icon={icon3} label="Location" value={event.location} />
              </ul>

              <div className="mt-8">
                <div className="flex justify-between mb-2 text-sm font-medium">
                  <span>
                    {event.bookedSlot} / {event.slot} Seats Booked
                  </span>

                  <span>{event.percentage}</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-3 bg-primary rounded-full transition-all duration-700"
                    style={{ width: event.percentage.replace("%", "") + "%" }}
                  />
                </div>
                <p className="text-sm text-gray-500 mt-2">{remainingSlots} seats remaining</p>
              </div>

              <div className="mt-8">
                <Button text="Reserve Your Seat" className="w-full" icon="solar:arrow-right-linear" />
              </div>

              <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200">
                <Icon icon="mdi:share-variant-outline" className="text-xl text-gray-500" />
                <span className="text-sm text-gray-500">Share this event with other parents</span>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default EventDetails;
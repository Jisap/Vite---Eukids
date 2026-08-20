import Breadcrumb from "@components/ui/Breadcrumb";
import EventCard from "@components/cards/EventCard";
import { events } from "@data/events";
import { staggerDelay } from "@utils/helpers";

import eventElement from "@assets/event-element.png";
import eventBlink from "@assets/event-blink.svg";

const Event = () => {
  return (
    <>
      <Breadcrumb title="Events" currentPage="Events" />

      <section id="events" className="section-py relative">
        <div className="container-base">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {events.map((event, index) => (
              <div
                key={event.id}
                data-aos="fade-up"
                data-aos-delay={staggerDelay(index, 100)}
              >
                <EventCard
                  {...event}
                  element={eventElement}
                  blink={eventBlink}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Event
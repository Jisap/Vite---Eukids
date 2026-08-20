import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import SectionHeading from "@components/ui/SectionHeading";
import EventCard from "@components/cards/EventCard";
import { events } from "@data/events";
import { staggerDelay } from "@utils/helpers";

import eventElement from "@assets/event-element.png";
import eventBlink from "@assets/event-blink.svg";
import brand1 from "@assets/brand-01.svg";
import brand2 from "@assets/brand-02.svg";
import brand3 from "@assets/brand-03.svg";
import brand4 from "@assets/brand-04.svg";
import brand5 from "@assets/brand-05.svg";

const BRANDS = [brand1, brand2, brand3, brand4, brand5];

const BRAND_SPLIDE_OPTIONS = {
  type: "loop",
  perPage: 6,
  perMove: 1,
  gap: "2rem",
  autoplay: true,
  interval: 2000,
  pauseOnHover: false,
  pauseOnFocus: false,
  arrows: false,
  pagination: false,
  breakpoints: {
    1024: { perPage: 4 },
    768: { perPage: 3 },
    640: { perPage: 2 },
  },
};

const Event = () => (
  <section id="events" className="section-py relative">
    <div className="container-base">
      <SectionHeading
        eyebrow="Event"
        title="Upcoming Events"
        description="We are thrilled to announce our upcoming event, Explorer's Day — a celebration of knowledge."
      />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-12">
        {events.slice(0, 4).map((event, index) => (
          <div key={event.id} data-aos="fade-up" data-aos-delay={staggerDelay(index, 150)}>
            <EventCard
              {...event}
              element={eventElement}
              blink={eventBlink}
            />
          </div>
        ))}
      </div>

      <div className="mt-14" data-aos="fade-up">
        <Splide options={BRAND_SPLIDE_OPTIONS} aria-label="Partner brands">
          {BRANDS.map((brand, index) => (
            <SplideSlide key={index}>
              <div className="flex items-center justify-center h-24">
                <img src={brand} alt={`Partner brand ${index + 1}`} className="max-h-20 w-auto object-contain opacity-70 transition-opacity hover:opacity-100" />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  </section>
);

export default Event;
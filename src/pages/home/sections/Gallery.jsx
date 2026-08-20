import SectionHeading from "@components/ui/SectionHeading";
import { staggerDelay } from "@utils/helpers";

import gallery1 from "@assets/gallery-01.jpg";
import gallery2 from "@assets/gallery-02.jpg";
import gallery3 from "@assets/gallery-03.jpg";
import gallery4 from "@assets/gallery-04.jpg";
import gallery5 from "@assets/gallery-05.jpg";
import gallery6 from "@assets/gallery-06.jpg";
import Breadcrumb from "@components/ui/Breadcrumb";

const GALLERY_IMAGES = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

const Gallery = () => {
  return (
    <>
      <section id="gallery" className="section-py relative">
        <div className="container-base">
          <SectionHeading
            eyebrow="Gallery"
            title="Tiny Scholars Showcase"
            description="Marked by significant growth and exploration as toddlers transition from infancy."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
            {GALLERY_IMAGES.map((image, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={staggerDelay(index, 100)}
                className="w-full h-90 overflow-hidden border-card rounded-2xl"
              >
                <img
                  src={image}
                  alt={`EduKids classroom moment ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Gallery
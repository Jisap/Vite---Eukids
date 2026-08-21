import { useState } from "react";
import { Icon } from "@iconify/react";
import Logo from "./Logo";
import blog1 from "@assets/blog-07.jpg";
import blog2 from "@assets/blog-08.jpg";

const ABOUT_LINKS = ["About Us", "Teachers", "Events", "Pricing"];
const COURSE_LINKS = ["Courses", "Blog", "Programs", "Contact Us"];

const RECENT_POSTS = [
  { image: blog1, date: "October 29, 2026", title: "Avoid These 4 Common Mistakes When Managing Remote Teams" },
  { image: blog2, date: "October 30, 2026", title: "How To Draw Realistic Lips In 7 Simple Steps" },
];

const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://www.facebook.com/" },
  { label: "Twitter", href: "https://twitter.com/" },
  { label: "Instagram", href: "https://www.instagram.com/" },
];

/** Columna de enlaces con marcador brutalist (bloque sólido, no barra fina) */
const FooterLinkGroup = ({ title, links }) => (
  <div>
    <h4 className="text-xl font-black uppercase tracking-tight mb-6 relative inline-block font-display">
      {title}
      <span className="absolute left-0 -bottom-2 w-12 h-2 bg-primary" />
    </h4>

    <ul className="space-y-3">
      {links.map((item) => (
        <li key={item}>
          <a href="#" className="group flex items-center gap-2 text-gray-700 font-medium hover:text-heading-1 transition-colors duration-150">
            <span className="inline-block transition-transform duration-150 group-hover:translate-x-1">→</span>
            {item}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer2 = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setEmail("");
  };

  return (
    <footer className="relative bg-bg pt-16 lg:pt-24 border-t-4 border-heading-1 overflow-hidden" id="footer">
      <div className="container-base">
        {/* Newsletter — estilo "nota de permiso" de colegio */}
        <div data-aos="fade-up" className="max-w-3xl mx-auto mb-20 relative">
          <div className="relative bg-white border-4 border-heading-1 shadow-[8px_8px_0_0_var(--color-heading-1,#1a1a1a)] px-6 py-10 sm:px-12 sm:py-12">
            <div className="absolute -top-6 -right-4 sm:-right-8 rotate-12 border-4 border-primary text-primary font-black uppercase text-xs sm:text-sm px-3 py-2 bg-white">
              ¡No te lo pierdas!
            </div>

            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-primary mb-3">
              Boletín de la academia
            </p>

            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black mb-8 font-display text-heading-1 leading-tight">
              No te pierdas ninguna historia de nuestro alumnado
            </h3>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-stretch gap-0 border-4 border-heading-1">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu correo electrónico"
                className="w-full flex-1 px-5 py-4 bg-white outline-none text-heading-1 placeholder:text-gray-500 border-b-4 sm:border-b-0 sm:border-r-4 border-heading-1"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-heading-1 text-white font-black uppercase tracking-wide transition-colors duration-150 hover:bg-primary hover:text-heading-1 cursor-pointer"
              >
                Suscribirme
              </button>
            </form>

            <div className="hidden sm:block mt-6 border-t-2 border-dashed border-gray-400 relative">
              <Icon icon="mdi:scissors-cutting" className="absolute -top-3 left-0 text-gray-400 bg-white pr-2 text-lg" />
            </div>
          </div>
        </div>

        {/* Columnas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b-4 border-heading-1">
          <div data-aos="fade-right">
            <div className="w-50 h-22 bg-white border-4 border-heading-1">
              <Logo />
            </div>

            <p className="mt-5 text-gray-700 leading-7">
              Nos apasiona la educación y nos dedicamos a ofrecer recursos de aprendizaje de
              calidad para estudiantes de todos los orígenes.
            </p>

            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-3 text-heading-1 font-medium">
                <span className="flex items-center justify-center w-8 h-8 shrink-0 border-2 border-heading-1 bg-primary/30">
                  <Icon icon="boxicons:location" className="text-base" />
                </span>
                Yarra Park, Melbourne, Australia
              </li>

              <li className="flex items-center gap-3 text-heading-1 font-medium">
                <span className="flex items-center justify-center w-8 h-8 shrink-0 border-2 border-heading-1 bg-primary/30">
                  <Icon icon="material-symbols:call-outline" className="text-base" />
                </span>
                +(61) 485-826-710
              </li>
            </ul>
          </div>

          <div data-aos="fade-up" data-aos-delay="150">
            <FooterLinkGroup title="Sobre nosotros" links={ABOUT_LINKS} />
          </div>

          <div data-aos="fade-up" data-aos-delay="300">
            <FooterLinkGroup title="Nuestros cursos" links={COURSE_LINKS} />
          </div>

          <div data-aos="fade-left">
            <h4 className="text-xl font-black uppercase tracking-tight mb-6 relative inline-block font-display">
              Entradas recientes
              <span className="absolute left-0 -bottom-2 w-12 h-2 bg-primary" />
            </h4>

            <div className="space-y-5">
              {RECENT_POSTS.map((post, i) => (
                <div key={post.title} className="group flex gap-4 cursor-pointer">
                  <div
                    className={`overflow-hidden w-20 h-20 shrink-0 border-4 border-heading-1 bg-white ${i % 2 === 0 ? "-rotate-2" : "rotate-2"
                      } group-hover:rotate-0 transition-transform duration-300`}
                  >
                    <img src={post.image} alt="" className="w-full h-full object-cover" />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-primary">{post.date}</p>
                    <h6 className="font-bold leading-6 text-heading-1 transition-colors duration-150 group-hover:text-primary-2">
                      {post.title}
                    </h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-heading-1 font-medium text-center md:text-left">
            © {new Date().getFullYear()} EduKids. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border-2 border-heading-1 text-heading-1 font-bold text-sm uppercase transition-all duration-150 hover:bg-heading-1 hover:text-white! hover:-translate-y-1"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
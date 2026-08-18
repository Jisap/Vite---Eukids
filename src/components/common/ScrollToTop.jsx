import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useAOSRefresh } from "@hooks/useAOS";
import { Icon } from "@iconify/react";

const ScrollToTop = () => {

  const { pathname } = useLocation();
  const [showButton, setShowButton] = useState(false);

  useAOSRefresh(pathname);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollTop}
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
          aria-label="Scroll to top"
        >
          <Icon icon="mdi:arrow-up" width="24" height="24" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
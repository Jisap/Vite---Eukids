import { useState } from "react";
import { Icon } from "@iconify/react";
import Breadcrumb from "@components/ui/Breadcrumb";
import FormField from "@components/common/FormField";
import { contactCards, workingHours, socialLinks } from "@data/contact";

const INITIAL_FORM = { name: "", email: "", phone: "", subject: "", message: "" };

const Contact = () => {

  const [formData, setFormData] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire this up to your backend / email service of choice.
    setSubmitted(true);
    setFormData(INITIAL_FORM);
    setTimeout(() => setSubmitted(false), 5000);
  };


  return (
    <>
      <Breadcrumb title="Contact Us" currentPage="Contact" />

      {/* Info Cards */}
      <section className="section-py pb-0">
        <div className="container-base">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactCards.map((card) => (
              <div
                key={card.label}
                className="group bg-white shadow-[0_4px_30px_rgba(0,0,0,0.07)] rounded-3xl p-7 flex gap-5 items-start hover:-translate-y-1.5 transition-all duration-300 border border-transparent hover:border-primary/20"
              >
                <div className={`${card.iconBg} text-heading-1 w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 text-2xl`}>
                  <Icon icon={card.icon} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-body font-semibold mb-1.5">{card.label}</p>
                  <p className="font-bold text-heading-1 text-base leading-snug mb-0.5">{card.primary}</p>
                  <p className="text-body text-sm">{card.secondary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}

export default Contact
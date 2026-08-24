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

      {/* Form + Sidebar */}
      <section className="section-py">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12">
            <div className="lg:col-span-8">
              <div className="bg-white shadow-[0_4px_30px_rgba(0,0,0,0.07)] rounded-3xl p-8 md:p-10">
                <div className="mb-8">
                  <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-primary-2 bg-primary-2/10 px-4 py-2 rounded-full">
                    Get in Touch
                  </span>

                  <h2 className="text-2xl md:text-3xl font-extrabold text-heading-1 mt-4 mb-2 font-display">
                    Send Us a Message
                  </h2>

                  <p className="text-body text-sm leading-relaxed">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>

                {submitted && (
                  <div className="flex items-center gap-3 bg-primary-5/10 border border-primary-5/25 text-primary-5 rounded-2xl px-5 py-4 mb-6">
                    <Icon icon="solar:check-circle-bold" className="text-2xl shrink-0" />
                    <div>
                      <p className="font-bold text-sm">Message sent successfully!</p>
                      <p className="text-xs opacity-80">We'll get back to you within 24 hours.</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormField
                      label="Full Name"
                      icon="solar:user-linear"
                      name="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <FormField
                      label="Email Address"
                      icon="solar:letter-linear"
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <FormField
                      label="Phone Number"
                      icon="solar:phone-linear"
                      name="phone"
                      placeholder="+1 (000) 000 0000"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    <FormField
                      label="Subject"
                      icon="solar:chat-dots-linear"
                      name="subject"
                      placeholder="What is this about?"
                      value={formData.subject}
                      onChange={handleChange}
                    />

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-heading-1 uppercase tracking-wide">
                        Your Message <span className="text-primary-7">*</span>
                      </label>

                      <textarea
                        name="message"
                        rows={6}
                        placeholder="Write your message here..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full p-5 border border-gray-200 rounded-2xl bg-body-bg text-heading-1 placeholder:text-body/50 text-sm outline-none focus:border-primary-2 transition-colors resize-none"
                      />
                    </div>

                    <div className="flex flex-wrap items-center gap-4 pt-1">
                      <button
                        type="submit"
                        className="bg-primary hover:bg-heading-1 text-heading-1 hover:text-white font-bold px-10 py-4 rounded-full transition-all duration-300 inline-flex items-center gap-2.5 cursor-pointer"
                      >
                        Send Message
                        <Icon icon="solar:arrow-right-linear" className="text-lg" />
                      </button>

                      <p className="text-body text-xs">
                        Response within <span className="font-bold text-heading-1">24 hours</span>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <aside className="lg:col-span-4 space-y-6">
              <div className="bg-white shadow-[0_4px_30px_rgba(0,0,0,0.07)] rounded-3xl p-7">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center text-heading-1 shrink-0">
                    <Icon icon="solar:clock-circle-bold" className="text-xl" />
                  </div>

                  <h4 className="font-bold text-heading-1 font-display">Working Hours</h4>
                </div>

                <ul className="space-y-0.5">
                  {workingHours.map((row) => (
                    <li key={row.day} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-none">
                      <span className="text-sm text-body">{row.day}</span>

                      <span className={`
                        text-sm font-bold 
                        ${row.closed
                          ? "text-primary-7"
                          : "text-heading-1"
                        }`}
                      >
                        {row.hours}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white shadow-[0_4px_30px_rgba(0,0,0,0.07)] rounded-3xl p-7">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center text-heading-1 shrink-0">
                    <Icon icon="solar:share-bold" className="text-xl" />
                  </div>

                  <h4 className="font-bold text-heading-1 font-display">Follow Us</h4>
                </div>

                <div className="grid grid-cols-5 gap-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.icon}
                      href="#"
                      title={social.label}
                      aria-label={social.label}
                      className={`h-11 rounded-xl bg-body-bg text-body ${social.hoverBg} hover:text-white transition-all flex items-center justify-center text-xl border border-gray-200 hover:border-transparent`}
                    >
                      <Icon icon={social.icon} />
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

    </>
  )
}

export default Contact
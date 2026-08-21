import React, { useState } from 'react'

const Footer = () => {

  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    // Hook this up to your email service of choice (Mailchimp, ConvertKit, etc.)
    setEmail("");
  };

  return (
    <footer className="relative bg-bg pt-16 lg:pt-24 overflow-hidden" id="footer">
      <div className="container-base">
        {/* Newsletter */}
        <div className="text-center max-w-4xl mx-auto mb-16" data-aos="fade-up">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 font-display text-heading-1">
            Don't Miss a Story From Our Alumni
          </h3>
        </div>
      </div>
    </footer>
  )
}

export default Footer
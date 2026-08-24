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
    <div>Contact</div>
  )
}

export default Contact
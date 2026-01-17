import { useState } from "react";
import {
  EnvelopeIcon,
  PaperAirplaneIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import userDetails from "../utils/Details.json";

export default function ContactSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      alert("Please enter your email");
      return;
    }

    const subject = encodeURIComponent("Let's Connect!");
    const body = encodeURIComponent(
      `Hi, I'm interested in working together. Please contact me at ${email}.`
    );
    window.location.href = `mailto:${userDetails.contact.email}?subject=${subject}&body=${body}`;
    setEmail("");
  };

  return (
    <section
      id="contact"
      className="relative bg-[color:var(--backgroundPrimary)] py-24 overflow-hidden transition-colors duration-500"
    >
      {/* Gradient glow background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--primary)]/10 via-transparent to-transparent blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-8 text-center z-10">
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-[color:var(--textPrimary)] mb-4">
          Let’s <span className="text-[color:var(--primary)]">Connect</span>
        </h2>
        <p className="text-[color:var(--textSecondary)] max-w-xl mx-auto mb-12 text-sm md:text-base">
          Have a project in mind or want to collaborate? Drop your email, and
          I’ll get back to you soon.
        </p>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="relative max-w-xl mx-auto bg-[color:var(--backgroundSecondary)]/60 backdrop-blur-md border border-[color:var(--borderPrimary)] 
                     rounded-2xl shadow-[0_0_25px_rgba(0,0,0,0.1)] hover:shadow-[0_0_30px_var(--primaryHover)] transition-all duration-500
                     flex flex-col sm:flex-row items-center gap-4 px-6 py-5"
        >
          {/* Email Input */}
          <div className="relative w-full sm:flex-1">
            <EnvelopeIcon className="absolute left-3 top-3.5 w-5 h-5 text-[color:var(--textSecondary)]" />
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-transparent border border-[color:var(--borderPrimary)] rounded-md outline-none 
                         text-[color:var(--textPrimary)] focus:border-[color:var(--primary)] focus:ring-2 focus:ring-[color:var(--primary)]/40 transition-all"
            />
          </div>

          {/* Send Button */}
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--primaryHover)] 
                       hover:shadow-[0_0_20px_var(--primaryHover)] text-white px-6 py-3 rounded-md font-semibold transition-all duration-300"
          >
            <PaperAirplaneIcon className="w-5 h-5 rotate-[320deg]" />
            Send
          </button>
        </form>

        {/* Contact Info */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-6 text-[color:var(--textSecondary)] text-sm">
          <p className="flex items-center gap-2 hover:text-[color:var(--primary)] transition-colors duration-300">
            <EnvelopeIcon className="w-5 h-5 text-[color:var(--primary)]" />
            {userDetails.contact.email}
          </p>
          <span className="hidden sm:block text-[color:var(--borderPrimary)]">|</span>
          <p className="flex items-center gap-2 hover:text-[color:var(--primary)] transition-colors duration-300">
            <PhoneIcon className="w-5 h-5 text-[color:var(--primary)]" />
            {userDetails.contact.phone}
          </p>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import userDetails from "../utils/Details.json";

export default function Certificates() {
  const certificates = userDetails.certifications;

  return (
    <section
      id="certificates"
      className="relative bg-[color:var(--backgroundPrimary)] py-24 overflow-hidden transition-colors duration-500"
    >
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--primary)]/10 via-transparent to-transparent blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-8 text-center z-10">
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-[color:var(--textPrimary)] mb-4">
          Achievements &{" "}
          <span className="text-[color:var(--primary)]">Certifications</span>
        </h2>
        <p className="text-[color:var(--textSecondary)] max-w-2xl mx-auto mb-16 text-sm md:text-base">
          A showcase of verified milestones that validate my growth, expertise,
          and commitment to building with excellence.
        </p>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="relative bg-[color:var(--backgroundSecondary)] border border-[color:var(--borderPrimary)] rounded-3xl 
                         shadow-[0_0_20px_rgba(0,0,0,0.1)] hover:shadow-[0_0_30px_var(--primaryHover)] transition-all duration-500 
                         flex flex-col items-center justify-center p-8 text-center hover:border-[color:var(--primary)]"
            >
              {/* Certificate Image */}
              <div className="relative w-20 h-20 rounded-full border-4 border-[color:var(--primary)] overflow-hidden flex items-center justify-center mb-4 shadow-[0_0_15px_var(--primaryHover)]/40">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title & Organization */}
              <h3 className="text-lg font-semibold text-[color:var(--textPrimary)]">
                {cert.title}
              </h3>
              <p className="text-sm text-[color:var(--textSecondary)] mt-1 mb-4">
                {cert.organization}
              </p>

              {/* View Button */}
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--primaryHover)] 
                           text-white rounded-md font-medium text-sm hover:shadow-[0_0_20px_var(--primaryHover)] transition-all"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

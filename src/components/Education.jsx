import React from "react";
import userDetails from "../utils/Details.json";
import { AcademicCapIcon, CalendarDaysIcon } from "@heroicons/react/24/solid";

export default function Education() {
  const educationData = userDetails.education;

  return (
    <section
      id="education"
      className="relative bg-[color:var(--backgroundPrimary)] py-24 overflow-hidden"
    >
      {/* Gradient blur background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--primary)]/10 via-transparent to-transparent blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-8 text-center z-10">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-[color:var(--textPrimary)] mb-4">
          Academic <span className="text-[color:var(--primary)]">Journey</span>
        </h2>
        <p className="text-[color:var(--textSecondary)] max-w-2xl mx-auto mb-16">
          A snapshot of my educational milestones that shaped my problem-solving mindset
          and technical growth.
        </p>

        {/* Education Cards */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="relative group bg-[color:var(--backgroundSecondary)]/60 border border-[color:var(--borderPrimary)] rounded-2xl p-6 backdrop-blur-lg 
                         hover:shadow-[0_0_25px_var(--primaryHover)] hover:border-[color:var(--primary)] 
                         transition-all duration-500 cursor-pointer"
            >
              {/* Vertical timeline line accent */}
              <div className="absolute -left-4 top-10 hidden md:block w-1 h-3/4 bg-gradient-to-b from-[color:var(--primary)]/60 to-transparent rounded-full"></div>

              {/* Icon badge */}
              <div className="w-12 h-12 mx-auto md:mx-0 bg-[color:var(--primary)]/10 border border-[color:var(--primary)] text-[color:var(--primary)] rounded-2xl flex items-center justify-center mb-4 group-hover:bg-[color:var(--primary)] group-hover:text-white transition-all duration-500">
                <AcademicCapIcon className="w-6 h-6" />
              </div>

              {/* Text content */}
              <div className="text-center md:text-left">
                <h3 className="text-lg font-semibold text-[color:var(--textPrimary)]">
                  {edu.degree}
                </h3>
                <p className="text-[color:var(--textSecondary)] text-sm mt-1">
                  {edu.institution}
                </p>

                <div className="flex justify-center md:justify-start items-center gap-2 mt-2 text-xs text-[color:var(--textSecondary)]">
                  <CalendarDaysIcon className="w-4 h-4 text-[color:var(--primary)]" />
                  <span>
                    {edu.fromyear} – {edu.toyear}
                  </span>
                </div>

                <div className="mt-4 inline-block px-4 py-1 bg-gradient-to-r from-[color:var(--primary)]/10 to-[color:var(--primaryHover)]/10 border border-[color:var(--primary)]/30 text-[color:var(--primary)] text-xs font-semibold rounded-full">
                  {edu.grade}
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[color:var(--primary)]/10 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

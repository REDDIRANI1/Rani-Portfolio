import React from "react";
import userDetails from "../utils/Details.json";
import { BriefcaseIcon, CalendarDaysIcon } from "@heroicons/react/24/solid";

export default function Experience() {
  const experiences = userDetails.experience;

  return (
    <section
      id="experience"
      className="relative bg-[color:var(--backgroundPrimary)] py-24 overflow-hidden transition-colors duration-500"
    >
      {/* Background Gradient Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--primary)]/10 via-transparent to-transparent blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-8 text-center z-10">
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-[color:var(--textPrimary)] mb-4">
          Professional <span className="text-[color:var(--primary)]">Experience</span>
        </h2>
        <p className="text-[color:var(--textSecondary)] max-w-2xl mx-auto mb-16">
          A journey through my professional roles — contributing to impactful projects,
          improving performance, and collaborating with great teams.
        </p>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative group bg-[color:var(--backgroundSecondary)]/60 border border-[color:var(--borderPrimary)] rounded-2xl p-6 text-left backdrop-blur-lg
                         hover:border-[color:var(--primary)] hover:shadow-[0_0_25px_var(--primaryHover)] transition-all duration-500"
            >
              {/* Top Badge Icon */}
              <div className="absolute -top-6 left-6 w-12 h-12 rounded-xl bg-[color:var(--primary)] text-white flex items-center justify-center shadow-md">
                <BriefcaseIcon className="w-6 h-6" />
              </div>

              {/* Header */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-[color:var(--textPrimary)]">
                  {exp.company}
                </h3>
                <div className="flex items-center gap-2 text-[color:var(--textSecondary)] text-sm mt-1">
                  <CalendarDaysIcon className="w-4 h-4 text-[color:var(--primary)]" />
                  <span>{exp.duration}</span>
                </div>
              </div>

              {/* Designation */}
              <p className="mt-3 text-[color:var(--primary)] font-semibold text-sm">
                {exp.designation}
              </p>

              {/* Responsibilities */}
              <ul className="list-disc pl-5 mt-4 space-y-2 text-[color:var(--textSecondary)] text-sm marker:text-[color:var(--primary)]">
                {exp.responsibilities.map((item, i) => (
                  <li key={i} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>

              {/* Hover Glow Overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[color:var(--primary)]/10 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

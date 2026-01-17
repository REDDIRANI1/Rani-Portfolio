import { useState } from "react";
import userDetails from "../utils/Details.json";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = userDetails.category;
  const projects = userDetails.projects;

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="projects"
      className="relative bg-[color:var(--backgroundPrimary)] py-24 overflow-hidden transition-colors duration-500"
    >
      {/* Subtle glowing background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--primary)]/10 via-transparent to-transparent blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-8 text-center z-10">
        {/* ==== Header ==== */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-[color:var(--textPrimary)] mb-4">
          My <span className="text-[color:var(--primary)]">Projects</span>
        </h2>
        <p className="text-[color:var(--textSecondary)] max-w-2xl mx-auto mb-14 text-sm md:text-base">
          A curated showcase of my creative and technical work — blending
          design, innovation, and development expertise.
        </p>

        {/* ==== Category Filter ==== */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 text-sm font-medium rounded-full border transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-[color:var(--primary)] text-white border-[color:var(--primary)] shadow-[0_0_15px_var(--primaryHover)]"
                  : "bg-[color:var(--backgroundSecondary)] text-[color:var(--textPrimary)] border-[color:var(--borderPrimary)] hover:bg-[color:var(--primary)]/10 hover:text-[color:var(--primary)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ==== Project Cards Grid ==== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-3xl overflow-hidden border border-[color:var(--borderPrimary)] 
                         bg-[color:var(--backgroundSecondary)]/60 backdrop-blur-lg shadow-[0_0_20px_rgba(0,0,0,0.15)] 
                         hover:border-[color:var(--primary)] hover:shadow-[0_0_25px_var(--primaryHover)] 
                         transition-all duration-500 cursor-pointer"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover rounded-t-3xl transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-70"></div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-left z-10">
                <p className="text-[color:var(--primary)] text-xs font-semibold mb-1 uppercase tracking-widest">
                  {project.category}
                </p>
                <h3 className="text-lg font-bold text-white mb-3">
                  {project.title}
                </h3>

                {/* Visit Button */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-white border border-[color:var(--primary)] 
                               bg-[color:var(--primary)]/20 hover:bg-[color:var(--primary)] 
                               hover:text-white px-4 py-1.5 rounded-full transition-all duration-300"
                  >
                    Visit <ArrowUpRightIcon className="w-4 h-4" />
                  </a>
                )}
              </div>

              {/* Glow Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--primary)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

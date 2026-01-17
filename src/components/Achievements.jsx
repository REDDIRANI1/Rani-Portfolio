import userDetails from "../utils/Details.json";
import { TrophyIcon } from "@heroicons/react/24/solid";

export default function Achievements() {
  const achievements = userDetails.achievements;

  return (
    <section
      id="achievements"
      className="relative bg-[color:var(--backgroundPrimary)] py-24 overflow-hidden transition-colors duration-500"
    >
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--primary)]/10 via-transparent to-transparent blur-3xl"></div>

      <div className="relative max-w-5xl mx-auto px-6 md:px-8 z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[color:var(--textPrimary)] mb-4">
            Milestones & <span className="text-[color:var(--primary)]">Achievements</span>
          </h2>
          <p className="text-[color:var(--textSecondary)] max-w-2xl mx-auto text-sm md:text-base">
            A reflection of key milestones that define my professional and creative journey.
          </p>
        </div>

        {/* Timeline Wrapper */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[color:var(--primary)]/60 to-transparent transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {achievements.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center gap-6 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Connector Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 md:translate-x-0 md:static md:transform-none flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[color:var(--primary)] to-[color:var(--primaryHover)] text-white flex items-center justify-center shadow-[0_0_25px_var(--primaryHover)]">
                    <TrophyIcon className="w-5 h-5" />
                  </div>
                </div>

                {/* Content Card */}
                <div
                  className="relative w-full md:w-[45%] bg-[color:var(--backgroundSecondary)] border border-[color:var(--borderPrimary)] 
                             rounded-2xl p-6 shadow-[0_0_25px_rgba(0,0,0,0.1)] hover:shadow-[0_0_25px_var(--primaryHover)] 
                             hover:border-[color:var(--primary)] transition-all duration-500"
                >
                  <h3 className="text-lg font-semibold text-[color:var(--textPrimary)] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[color:var(--textSecondary)] text-sm italic mb-2">
                    {item.organization}
                  </p>
                  <p className="text-[color:var(--textSecondary)] text-sm leading-relaxed">
                    {item.description}
                  </p>
                  {item.year && (
                    <div className="mt-3 text-right">
                      <span className="inline-block px-3 py-1 bg-[color:var(--primary)]/10 text-[color:var(--primary)] text-xs font-semibold rounded-full">
                        {item.year}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

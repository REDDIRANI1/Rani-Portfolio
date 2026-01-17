import userDetails from "../utils/Details.json";
import SkillIcon from "../utils/SkillIcon";

export default function Skills() {
  const skills = userDetails.skills;

  return (
    <section
      id="skills"
      className="relative bg-[color:var(--backgroundPrimary)] py-24 overflow-hidden transition-colors duration-500"
    >
      {/* Decorative background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--primary)]/5 via-transparent to-transparent blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-8 z-10">
        <h2 className="text-4xl md:text-5xl text-center font-extrabold text-[color:var(--textPrimary)] mb-20">
          Technical
          <span className="text-[color:var(--primary)]"> Expertise</span>
        </h2>

        {/* Grid layout for round skill cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="relative group w-36 h-36 flex flex-col items-center justify-center text-center bg-[color:var(--backgroundSecondary)] border border-[color:var(--borderPrimary)] rounded-full shadow-[0_0_15px_rgba(249,115,22,0.05)] hover:shadow-[0_0_25px_var(--primaryHover)] transition-all duration-500 cursor-pointer hover:-translate-y-2"
            >
              {/* Glow Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[color:var(--primary)]/20 to-transparent opacity-0 group-hover:opacity-100 blur-md transition-all duration-500"></div>

              {/* Icon */}
              <div className="text-[color:var(--primary)] text-4xl mb-2 transition-transform duration-500 group-hover:scale-110">
                <SkillIcon name={skill.icon}/>
              </div>

              {/* Skill Name */}
              <h3 className="text-sm sm:text-base font-semibold text-[color:var(--textPrimary)]">
                {skill.name}
              </h3>

              {/* Level Tag */}
              <p className="text-xs text-[color:var(--textSecondary)] mt-1">
                {skill.level}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

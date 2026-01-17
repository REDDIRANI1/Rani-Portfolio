import userDetails from "../utils/Details.json";

export default function About() {
  const Details = userDetails;

  return (
    <section
      id="about"
      className="relative py-24 overflow-hidden bg-gradient-to-br from-[color:var(--backgroundPrimary)] via-[color:var(--backgroundSecondary)] to-[color:var(--backgroundPrimary)]"
    >
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[color:var(--primary)]/10 via-transparent to-transparent blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-14">
        {/* === LEFT SIDE IMAGE CARD === */}
        <div className="flex justify-center">
          <div className="relative group">
            {/* Glow border */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[color:var(--primary)] to-[color:var(--primaryHover)] opacity-30 group-hover:opacity-70 blur-xl transition-all duration-500"></div>

            {/* Card */}
            <div className="relative bg-[color:var(--backgroundSecondary)] border border-[color:var(--borderPrimary)] rounded-3xl p-4 sm:p-6 shadow-[0_0_25px_rgba(249,115,22,0.1)] hover:shadow-[0_0_30px_rgba(249,115,22,0.25)] transition-all duration-500">
              <img
                src={Details.about.profile_image}
                alt="Profile"
                className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-2xl object-cover border-4 border-[color:var(--backgroundPrimary)] transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* === RIGHT SIDE TEXT === */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[color:var(--textPrimary)]">
            <span className="text-[color:var(--primary)]">About</span> Me
          </h2>

          <div className="space-y-4">
            <p className="text-[color:var(--textSecondary)] text-base md:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
              {Details.about.text1}
            </p>
            <p className="text-[color:var(--textSecondary)] text-base md:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
              {Details.about.text2}
            </p>
          </div>

          {/* === HIGHLIGHT STATS === */}
          <div className="grid grid-cols-3 gap-4 mt-10">
            <div className="flex flex-col items-center bg-[color:var(--backgroundSecondary)]/40 border border-[color:var(--borderPrimary)] p-5 rounded-xl hover:bg-[color:var(--backgroundSecondary)] hover:shadow-[0_0_20px_var(--primaryHover)] transition-all duration-500">
              <p className="text-[color:var(--primary)] font-bold text-2xl">{Details.personal.experience_years}+</p>
              <span className="text-[color:var(--textSecondary)] text-sm">
                Years
              </span>
            </div>
            <div className="flex flex-col items-center bg-[color:var(--backgroundSecondary)]/40 border border-[color:var(--borderPrimary)] p-5 rounded-xl hover:bg-[color:var(--backgroundSecondary)] hover:shadow-[0_0_20px_var(--primaryHover)] transition-all duration-500">
              <p className="text-[color:var(--primary)] font-bold text-2xl">
                5+
              </p>
              <span className="text-[color:var(--textSecondary)] text-sm">
                Projects
              </span>
            </div>
            <div className="flex flex-col items-center bg-[color:var(--backgroundSecondary)]/40 border border-[color:var(--borderPrimary)] p-5 rounded-xl hover:bg-[color:var(--backgroundSecondary)] hover:shadow-[0_0_20px_var(--primaryHover)] transition-all duration-500">
              <p className="text-[color:var(--primary)] font-bold text-2xl">10+</p>
              <span className="text-[color:var(--textSecondary)] text-sm">
                Tech Stacks
              </span>
            </div>
          </div>

          {/* === Resume Button === */}
          <div className="pt-8">
            <a
              href={Details.personal.resume_link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--primaryHover)] text-white font-semibold rounded-md shadow-[0_0_15px_var(--primaryHover)] hover:shadow-[0_0_25px_var(--primaryHover)] transition-transform hover:-translate-y-1"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

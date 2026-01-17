import userDetails from "../utils/Details.json";
import SkillIcon from "../utils/SkillIcon";

export default function Footer() {
  const Details = userDetails;

  return (
    <footer className="relative bg-[color:var(--backgroundPrimary)] border-t border-[color:var(--borderPrimary)] py-12 transition-colors duration-500 overflow-hidden">
      {/* Subtle glow background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--primary)]/10 via-transparent to-transparent blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 flex flex-col items-center text-center space-y-6 z-10">
        {/* === Logo === */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-tr from-[color:var(--primary)] to-[color:var(--primaryHover)] text-white font-bold text-xl shadow-[0_0_20px_var(--primaryHover)]">
            {Details.personal.name[0]}
          </div>
          <h2 className="text-lg md:text-xl font-semibold text-[color:var(--textPrimary)] tracking-wide">
            {Details.personal.name}
          </h2>
        </div>

        {/* === Navigation Links === */}
        <nav className="flex flex-wrap justify-center gap-6 text-[color:var(--textSecondary)] text-sm font-medium">
          {Details.navlinks.map((item, i) => (
            <a
              key={i}
              href={item.link}
              className="hover:text-[color:var(--primary)] transition-all duration-300"
            >
              {item.linkName}
            </a>
          ))}
        </nav>

        {/* === Social Icons === */}
        <div className="flex justify-center gap-5 text-[color:var(--textSecondary)] mt-2">
          {[
            { icon: "linkedin", link: Details.contact.linkedin },
            { icon: "github", link: Details.contact.github },
            { icon: "leetcode", link: Details.contact.leetcode },
            { icon: "instagram", link: Details.contact.instagram },
          ].map((social, i) => (
            <a
              key={i}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-[color:var(--primary)] hover:scale-110 transition-transform duration-300"
            >
              <SkillIcon name={social.icon}/>
            </a>
          ))}
        </div>

        {/* === Divider === */}
        <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[color:var(--primary)] to-transparent mt-4"></div>

        {/* === Copyright === */}
        <p className="text-xs text-[color:var(--textSecondary)] opacity-80 mt-3">
          © {new Date().getFullYear()} {Details.personal.name}. Built with ❤️ using React.
        </p>
      </div>
    </footer>
  );
}

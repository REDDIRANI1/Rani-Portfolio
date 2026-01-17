import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import userDetails from "../utils/Details.json";

export default function Intro() {
  const Details = userDetails;

  const textVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay, ease: "easeOut" },
    }),
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[color:var(--backgroundPrimary)] py-24 md:py-32"
    >
      {/* Floating Glow Orbs */}
      <motion.div
        className="absolute top-10 left-10 w-64 h-64 bg-[color:var(--primary)]/15 rounded-full blur-3xl"
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="absolute bottom-10 right-10 w-72 h-72 bg-[color:var(--primaryHover)]/20 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      {/* ✅ For small screens → Image on top, then text */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-16 relative z-10">
        {/* === IMAGE FIRST on small screens === */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end relative order-1 md:order-2"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="relative w-72 h-72 sm:w-102 sm:h-102 rounded-full bg-gradient-to-tr from-[color:var(--primary)]/30 to-[color:var(--primaryHover)]/10 flex items-center justify-center shadow-[0_0_40px_var(--primaryHover)]">
            <img
              src={Details.personal.profile_image}
              alt="Profile"
              className="w-70 h-70 sm:w-100 sm:h-100 rounded-full object-cover border-4 border-[color:var(--backgroundSecondary)] shadow-lg"
            />
            <div className="absolute inset-0 rounded-full border-2 border-[color:var(--primary)] animate-pulse opacity-30"></div>
          </div>
        </motion.div>

        {/* === TEXT SECTION BELOW ON MOBILE === */}
        <motion.div
          className="flex-1 text-center md:text-left space-y-6 order-2 md:order-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p
            variants={textVariant}
            custom={0}
            className="uppercase text-[color:var(--primary)] font-semibold tracking-[0.25em]"
          >
            Hello
          </motion.p>

          <motion.h1
            variants={textVariant}
            custom={0.2}
            className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--secondary)] leading-tight"
          >
            {`I'm ${Details.personal.name}`}
          </motion.h1>

          <motion.h2
            variants={textVariant}
            custom={0.4}
            className="text-2xl md:text-3xl text-[color:var(--textPrimary)] font-medium"
          >
            <Typewriter
              words={[Details.personal.role]}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={60}
              delaySpeed={1200}
            />
          </motion.h2>

          <motion.p
            variants={textVariant}
            custom={0.6}
            className="text-[color:var(--textSecondary)] text-base md:text-lg max-w-lg mx-auto md:mx-0 leading-relaxed"
          >
            {Details.intro.text}
          </motion.p>

          <motion.div
            variants={textVariant}
            custom={0.8}
            className="flex flex-wrap justify-center md:justify-start gap-5 pt-4"
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--primaryHover)] text-white font-semibold rounded-md shadow-[0_0_15px_var(--primaryHover)] transition-transform hover:-translate-y-1 hover:shadow-[0_0_25px_var(--primaryHover)]"
            >
              View Projects
            </a>
            <a
              href={Details.personal.resume_link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-[color:var(--primary)] text-[color:var(--primary)] font-semibold rounded-md hover:bg-[color:var(--primary)] hover:text-white transition-all hover:-translate-y-1"
            >
              Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

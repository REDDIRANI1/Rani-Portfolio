import userDetails from "../utils/Details.json";

export default function Services() {
  const services = userDetails.services;

  return (
    <section
      id="services"
      className="relative bg-[color:var(--backgroundPrimary)] py-24 overflow-hidden transition-colors duration-500"
    >
      {/* Decorative glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--primary)]/10 via-transparent to-transparent blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-8 text-center z-10">
        {/* === Section Title === */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-[color:var(--textPrimary)] mb-4">
          My <span className="text-[color:var(--primary)]">Services</span>
        </h2>
        <p className="text-[color:var(--textSecondary)] max-w-2xl mx-auto mb-16 text-sm md:text-base">
          I specialize in designing and developing digital experiences that blend
          performance, creativity, and functionality using modern technologies.
        </p>

        {/* === Services Grid === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group rounded-3xl bg-[color:var(--backgroundSecondary)]/50 border border-[color:var(--borderPrimary)] 
                         shadow-[0_0_20px_rgba(0,0,0,0.1)] p-8 backdrop-blur-lg 
                         hover:border-[color:var(--primary)] hover:shadow-[0_0_25px_var(--primaryHover)] 
                         transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {/* Hover Glow Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--primary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

              {/* Circular Icon */}
              <div className="relative mx-auto w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-tr from-[color:var(--primary)]/10 to-[color:var(--secondary)]/5 text-[color:var(--primary)] text-3xl 
                              border border-[color:var(--borderPrimary)] group-hover:bg-[color:var(--primary)] group-hover:text-white transition-all duration-500">
                <i className={`fas ${service.icon}`}></i>
              </div>

              {/* Content */}
              <div className="mt-6 space-y-3">
                <h3 className="text-lg font-semibold text-[color:var(--textPrimary)]">
                  {service.title}
                </h3>
                <p className="text-[color:var(--textSecondary)] text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Shine effect */}
              <div className="absolute top-0 left-[-75%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-12 transform group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

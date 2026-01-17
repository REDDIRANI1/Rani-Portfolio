import { useState, useEffect } from "react";
import userDetails from "../utils/Details.json";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

export default function Testimonials() {
  const testimonials = userDetails.testimonials;
  const [active, setActive] = useState(0);

  const nextSlide = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () =>
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(() => nextSlide(), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="testimonials"
      className="relative bg-[color:var(--backgroundPrimary)] py-24 overflow-hidden transition-colors duration-500"
    >
      {/* Soft gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--primary)]/10 via-transparent to-transparent blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-8 text-center z-10">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-[color:var(--textPrimary)] mb-4">
          Testimonials
        </h2>
        <p className="text-[color:var(--textSecondary)] max-w-2xl mx-auto mb-12">
          Words from clients and peers that reflect my dedication and work ethic.
        </p>

        {/* Carousel */}
        <div className="relative flex items-center justify-center">
          {/* Left Button */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 bg-[color:var(--primary)]/90 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[color:var(--primaryHover)] shadow-md transition-all"
          >
            <ArrowLeftIcon className="w-5 h-5" />
          </button>

          {/* Slides */}
          <div className="overflow-hidden w-full max-w-3xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${active * 100}%)`,
              }}
            >
              {testimonials.map((item, i) => (
                <div key={i} className="min-w-full px-6 sm:px-10">
                  <div
                    className={`bg-[color:var(--backgroundSecondary)]/70 border border-[color:var(--borderPrimary)] 
                                rounded-3xl p-8 md:p-10 backdrop-blur-lg shadow-[0_0_25px_rgba(0,0,0,0.1)] 
                                transition-all duration-700 ${
                                  active === i
                                    ? "opacity-100 scale-100"
                                    : "opacity-50 scale-95"
                                }`}
                  >
                    <div className="flex flex-col items-center text-center space-y-6">
                      <div className="relative">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-24 h-24 rounded-full object-cover border-4 border-[color:var(--primary)] shadow-[0_0_25px_var(--primaryHover)]"
                        />
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-10 h-1 rounded-full bg-[color:var(--primary)]"></div>
                      </div>

                      <p className="text-[color:var(--textPrimary)] italic text-base md:text-lg leading-relaxed max-w-xl">
                        “{item.text}”
                      </p>

                      <div>
                        <p className="font-semibold text-[color:var(--textPrimary)] text-lg">
                          {item.name}
                        </p>
                        <p className="text-sm text-[color:var(--textSecondary)]">
                          {item.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Button */}
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 bg-[color:var(--primary)]/90 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[color:var(--primaryHover)] shadow-md transition-all"
          >
            <ArrowRightIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                active === i
                  ? "bg-[color:var(--primary)] scale-125"
                  : "bg-[color:var(--borderPrimary)] hover:bg-[color:var(--primary)]/50"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}

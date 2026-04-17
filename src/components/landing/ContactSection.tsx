import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={ref} className="py-20 bg-zinc-900 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"
        style={{ backgroundPosition: "0 0, 0 0" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />

      <div
        className={`container mx-auto px-4 relative z-10 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <h2 className="text-5xl font-bold mb-4 text-center text-zinc-200">Контакты</h2>
        <p className="text-zinc-400 text-center mb-12 text-lg max-w-xl mx-auto">
          Готовы обсудить партнёрство? Напишите напрямую — ответим быстро.
        </p>

        <div
          className={`max-w-md mx-auto bg-black/50 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/10 transition-all duration-500 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shrink-0">
              <Icon name="User" size={28} className="text-white" />
            </div>
            <div>
              <p className="text-white font-bold text-xl">Сергей Пашков</p>
              <p className="text-zinc-400 text-sm">Арт-директор «Вечно молодой»</p>
            </div>
          </div>

          <div className="space-y-4">
            <a
              href="https://instagram.com/sergey.pfpf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl p-4 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-orange-400 flex items-center justify-center shrink-0">
                <Icon name="Instagram" size={18} className="text-white" />
              </div>
              <div>
                <p className="text-zinc-400 text-xs">Instagram</p>
                <p className="text-white font-semibold group-hover:text-purple-300 transition-colors">
                  @sergey.pfpf
                </p>
              </div>
              <Icon name="ArrowRight" size={16} className="text-zinc-500 ml-auto group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="https://t.me/spfwm"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl p-4 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center shrink-0">
                <Icon name="Send" size={18} className="text-white" />
              </div>
              <div>
                <p className="text-zinc-400 text-xs">Telegram</p>
                <p className="text-white font-semibold group-hover:text-purple-300 transition-colors">
                  @spfwm
                </p>
              </div>
              <Icon name="ArrowRight" size={16} className="text-zinc-500 ml-auto group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

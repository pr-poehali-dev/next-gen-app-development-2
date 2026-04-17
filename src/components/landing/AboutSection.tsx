import { useRef, useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const stats = [
  { icon: "CalendarCheck", label: "Лет фестивалю", value: "3" },
  { icon: "Users", label: "Вместимость летника", value: "1500" },
  { icon: "Music2", label: "Направлений культуры", value: "6" },
  { icon: "Star", label: "Прослушиваний хедлайнера", value: "2,6М" },
];

const program = [
  { icon: "Mic2", label: "Фристайл-баттлы" },
  { icon: "Bike", label: "Скейт-контесты" },
  { icon: "Paintbrush", label: "Граффити-баттлы" },
  { icon: "Trophy", label: "Стрит-бол" },
  { icon: "Headphones", label: "Выступления битмейкеров" },
  { icon: "Zap", label: "Танцевальные баттлы" },
];

const AboutSection = () => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.max(0, Math.min(1, 1 - rect.top / windowHeight));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={ref} id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div
          className={`transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
          style={{ transform: `translateY(${(1 - scrollProgress) * 50}px)` }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">О фестивале</h2>
            <p className="text-lg text-zinc-300 max-w-3xl mx-auto mb-4">
              Ежегодный хип-хоп фестиваль «Вечно молодой» — приуроченный ко дню рождения жанра.
              11 августа 1973 года родился хип-хоп. Мы зажигаем в ближайшие выходные к этой дате.
            </p>
            <p className="text-lg text-zinc-300 max-w-3xl mx-auto">
              Фестиваль прошёл в 2023, 2024 и 2025 году. На нём соревнуются и дети, и взрослые —
              разные поколения, одна культура.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Форматы площадки</h3>
              <div className="space-y-4">
                {[
                  {
                    name: "Внутренний бар",
                    desc: "Камерное пространство, до 250 гостей",
                  },
                  {
                    name: "F9",
                    desc: "Отдельная зона с бильярдом",
                  },
                  {
                    name: "Летник",
                    desc: "Открытое пространство во дворе «Дома 77». Несколько лаунж-зон, двухэтажный бар, вместимость до 1500 человек.",
                  },
                ].map((venue) => (
                  <div
                    key={venue.name}
                    className="bg-zinc-900/50 rounded-xl p-5 border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="flex items-center mb-1">
                      <Icon name="MapPin" size={16} className="text-purple-400 mr-2" />
                      <span className="font-bold text-white">{venue.name}</span>
                    </div>
                    <p className="text-zinc-400 text-sm">{venue.desc}</p>
                  </div>
                ))}
                <p className="text-purple-400 font-semibold text-sm mt-2">
                  Летом мы — главная концертная площадка региона.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Программа фестиваля</h3>
              <div className="grid grid-cols-2 gap-3">
                {program.map((item, index) => (
                  <div
                    key={item.label}
                    className={`bg-zinc-900/50 rounded-lg p-4 border border-white/10 flex items-center gap-3 transition-all duration-500 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                    }`}
                    style={{ transitionDelay: `${index * 80}ms` }}
                  >
                    <Icon name={item.icon} size={18} className="text-purple-400 shrink-0" />
                    <span className="text-sm text-zinc-300">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, index) => (
              <div
                key={s.label}
                className={`bg-zinc-900/50 rounded-lg p-4 border border-white/10 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-2">
                  <Icon name={s.icon} size={22} className="mr-2 text-white" />
                  <div className="text-2xl font-bold text-white">{s.value}</div>
                </div>
                <div className="text-sm text-zinc-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

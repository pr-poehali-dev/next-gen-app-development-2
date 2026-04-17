import { useState, useRef, useEffect } from "react";
import { Check, Crown, Zap, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface PartnerOption {
  name: string;
  label: string;
  icon: React.ReactNode;
  features: string[];
  popular?: boolean;
  highlight?: string;
}

const partnerOptions: PartnerOption[] = [
  {
    name: "Бомж-пакет",
    label: "Базовая интеграция 😎",
    icon: <Star className="w-6 h-6" />,
    features: [
      "Лого на афишах",
      "Упоминание в соцсетях",
      "Баннер на площадке",
    ],
  },
  {
    name: "Партнёр",
    label: "Расширенный пакет",
    icon: <Zap className="w-6 h-6" />,
    features: [
      "Лого на афишах",
      "Упоминания в СМИ",
      "Отдельные посты и сторис",
      "Баннер на площадке",
      "Упоминание в фотоотчётах",
    ],
    popular: true,
  },
  {
    name: "Генеральный партнёр",
    label: "Максимальное присутствие",
    icon: <Crown className="w-6 h-6" />,
    features: [
      "Лого на всех афишах",
      "Упоминания в СМИ",
      "Сторис + отдельные посты",
      "Баннер на площадке",
      "Корнер (зона партнёра)",
      "Упоминание в фотоотчётах",
      "Брендинг на сцене",
    ],
    highlight: "ТОП интеграция",
  },
];

const reachData = [
  { platform: "VK «Вечно молодой»", value: "16 300", icon: "Users" },
  { platform: "Telegram", value: "4 300", icon: "Send" },
  { platform: "Instagram", value: "16 000", icon: "Instagram" },
  { platform: "Едагда (СМИ)", value: "36 600", icon: "Newspaper" },
  { platform: "Волжский рейв (СМИ)", value: "25 100", icon: "Newspaper" },
  { platform: "Собака.ru (СМИ)", value: "38 600", icon: "Newspaper" },
  { platform: "Instagram Триагрутрика", value: "49 600", icon: "Star" },
  { platform: "ВК Триагрутрика", value: "196 600", icon: "Star" },
];

const LicenseSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
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

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={ref} id="licenses" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/20 to-black"></div>

      <div className="container mx-auto px-4 relative">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">Пакеты партнёрства</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Выберите формат участия — от базового упоминания до полного брендинга на фестивале
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {partnerOptions.map((option, index) => (
            <div
              key={option.name}
              className={`transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Card
                className={`relative h-full bg-black border-white/10 ${
                  hoveredCard === index ? "scale-105" : "scale-100"
                } transition-all duration-300`}
              >
                <div className="absolute inset-0 rounded-lg p-[1px] bg-gradient-to-br from-white/20 to-white/0">
                  <div className="absolute inset-0 rounded-lg bg-black"></div>
                </div>

                {option.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-white text-black px-4 py-1 rounded-full text-sm font-semibold animate-pulse">
                      Популярный
                    </span>
                  </div>
                )}
                {option.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold animate-pulse">
                      {option.highlight}
                    </span>
                  </div>
                )}

                <CardContent className="relative p-6 rounded-lg h-full flex flex-col">
                  <div className="text-center mb-6">
                    <div className="inline-flex p-3 rounded-full bg-zinc-900 border border-white/10 mb-4">
                      {option.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-1 text-white">{option.name}</h3>
                    <p className="text-sm text-zinc-400">{option.label}</p>
                  </div>

                  <div className="flex-grow">
                    <ul className="space-y-3 mb-6">
                      {option.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-white mr-2 shrink-0 mt-0.5" />
                          <span className="text-sm text-zinc-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    className="w-full bg-white text-black hover:bg-zinc-200 transition-colors"
                    onClick={scrollToContact}
                  >
                    Обсудить условия
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div
          className={`transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-8">Наш охват</h3>
          <p className="text-center text-zinc-400 mb-10 text-lg">
            Суммарный охват соцсетей и СМИ — около <span className="text-white font-bold">160 000</span> +&nbsp;
            соцсети хедлайнеров ещё <span className="text-white font-bold">250 000</span>
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {reachData.map((item, index) => (
              <div
                key={item.platform}
                className={`bg-zinc-900/50 rounded-xl p-4 border border-white/10 text-center transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: `${400 + index * 60}ms` }}
              >
                <Icon name={item.icon} size={20} className="text-purple-400 mx-auto mb-2" />
                <div className="text-xl font-bold text-white">{item.value}</div>
                <div className="text-xs text-zinc-400 mt-1">{item.platform}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LicenseSection;

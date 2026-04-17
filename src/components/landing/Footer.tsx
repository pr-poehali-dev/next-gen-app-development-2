import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-black py-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-white font-bold text-lg">Вечно Молодой × Хип-хоп фестиваль</p>
            <p className="text-zinc-500 text-sm mt-1">Самара, кластер «Дом 77»</p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://instagram.com/sergey.pfpf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Icon name="Instagram" size={20} />
            </a>
            <a
              href="https://t.me/spfwm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
              aria-label="Telegram"
            >
              <Icon name="Send" size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

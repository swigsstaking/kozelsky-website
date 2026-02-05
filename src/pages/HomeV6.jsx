import SEOHead from '../components/SEOHead';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

const IMAGES = {
  heroVideo: 'https://swigs.online/uploads/kozelsky/1770114967497-666715467.webm#t=10',
  heroFallback: 'https://swigs.online/uploads/kozelsky/1770040860124-33442328.webp',
  logo1197: 'https://swigs.online/uploads/kozelsky/1770040801871-137372873.png',
  catering: 'https://swigs.online/uploads/kozelsky/1770039736918-802731963.webp',
  bus: 'https://swigs.online/uploads/kozelsky/1770039666874-770981752.webp',
  busInterior: 'https://swigs.online/uploads/kozelsky/1770039666610-182643998.webp',
  aviation: 'https://swigs.online/uploads/kozelsky/1770039644120-200457217.webp',
  services: 'https://swigs.online/uploads/kozelsky/1770039737716-863842881.webp',
  events: 'https://swigs.online/uploads/kozelsky/1770040779195-635217521.webp',
  impressions: [
    'https://swigs.online/uploads/kozelsky/1770040779195-635217521.webp',
    'https://swigs.online/uploads/kozelsky/1770040779617-662408557.webp',
    'https://swigs.online/uploads/kozelsky/1770040777537-755205822.webp',
    'https://swigs.online/uploads/kozelsky/1770040776743-362731661.webp',
  ],
  contact: 'https://swigs.online/uploads/kozelsky/1770040834133-111431822.webp',
};

const partners = [
  { name: 'FVS Group', logo: 'https://swigs.online/uploads/kozelsky/1770040819957-513010942.png', url: 'https://www.fvsgroup.ch/' },
  { name: 'Friderici Special', logo: 'https://swigs.online/uploads/kozelsky/1770040819922-192473091.png', url: 'https://www.friderici.com/' },
  { name: 'Fovahm', logo: 'https://swigs.online/uploads/kozelsky/1770040819889-43322005.png', url: 'https://www.fovahm.ch/' },
  { name: 'Praedikat', logo: 'https://swigs.online/uploads/kozelsky/1770040820022-168069152.png', url: 'https://www.praedikat.ch/' },
];

const HomeV6 = () => {
  const { t, language } = useLanguage();

  const content = {
    fr: {
      tagline: 'L\'art de la gastronomie',
      quote: '"Chaque événement est une histoire que nous sommes fiers d\'écrire avec vous."',
      theCaterer: 'Le Traiteur',
      catererTagline: 'Gastronomie sur-mesure',
      theBus: 'Le Bus 11-97',
      busTagline: 'Bar mobile unique en Suisse',
      ourServices: 'Nos univers',
      cateringCard: 'Traiteur',
      aviationCard: 'Aviation Privée',
      eventsCard: 'Événements',
      portfolio: 'Portfolio',
      seeMore: 'Voir plus',
      contactUs: 'Nous contacter',
      welcomeOnBoard: 'Bienvenue à bord',
    },
    de: {
      tagline: 'Die Kunst der Gastronomie',
      quote: '"Jede Veranstaltung ist eine Geschichte, die wir stolz mit Ihnen schreiben."',
      theCaterer: 'Der Caterer',
      catererTagline: 'Maßgeschneiderte Gastronomie',
      theBus: 'Der Bus 11-97',
      busTagline: 'Einzigartige mobile Bar in der Schweiz',
      ourServices: 'Unsere Welten',
      cateringCard: 'Catering',
      aviationCard: 'Privatluftfahrt',
      eventsCard: 'Veranstaltungen',
      portfolio: 'Portfolio',
      seeMore: 'Mehr sehen',
      contactUs: 'Kontaktieren Sie uns',
      welcomeOnBoard: 'Willkommen an Bord',
    },
    en: {
      tagline: 'The art of gastronomy',
      quote: '"Every event is a story we are proud to write with you."',
      theCaterer: 'The Caterer',
      catererTagline: 'Bespoke gastronomy',
      theBus: 'The Bus 11-97',
      busTagline: 'Unique mobile bar in Switzerland',
      ourServices: 'Our worlds',
      cateringCard: 'Catering',
      aviationCard: 'Private Aviation',
      eventsCard: 'Events',
      portfolio: 'Portfolio',
      seeMore: 'See more',
      contactUs: 'Contact us',
      welcomeOnBoard: 'Welcome on board',
    },
  };

  const c = content[language] || content.fr;

  return (
    <>
      <SEOHead page="home" />

      {/* Hero - Full screen immersive */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster={IMAGES.heroFallback}
          >
            <source src={IMAGES.heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center text-white px-6">
          <p className="uppercase tracking-[0.5em] text-sm mb-8 text-white/70">{c.tagline}</p>
          <h1 className="text-[15vw] md:text-[12vw] lg:text-[10vw] font-serif leading-none tracking-tight mb-6">
            Kozelsky
          </h1>
          <div className="flex items-center justify-center gap-6 mb-12">
            <span className="w-20 h-px bg-white/40" />
            <p className="text-white/80 uppercase tracking-[0.4em] text-sm">Catering</p>
            <span className="w-20 h-px bg-white/40" />
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-10 py-4 bg-white text-secondary-900 rounded-full hover:bg-accent-400 hover:text-white transition-all font-medium"
          >
            {c.contactUs}
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 bg-cream">
        <div className="container-site">
          <blockquote className="text-center max-w-4xl mx-auto">
            <p className="text-3xl md:text-4xl lg:text-5xl font-serif text-secondary-900 leading-relaxed">
              {c.quote}
            </p>
            <footer className="mt-8 text-secondary-500 uppercase tracking-[0.3em] text-sm">
              — Mélanie & Fabian
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Le Traiteur - Split section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        <div className="relative min-h-[50vh] lg:min-h-full">
          <img
            src={IMAGES.catering}
            alt="Le Traiteur"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="flex items-center bg-white p-10 lg:p-20">
          <div>
            <p className="text-accent-600 uppercase tracking-[0.3em] text-sm mb-6">{c.catererTagline}</p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-secondary-900 mb-8">
              {c.theCaterer}
            </h2>
            <p className="text-secondary-600 text-lg leading-relaxed mb-10 max-w-lg">
              {t('home.caterer.desc')}
            </p>
            <Link
              to="/catering"
              className="inline-flex items-center gap-3 px-8 py-4 bg-secondary-900 text-white rounded-full hover:bg-accent-600 transition-colors font-medium"
            >
              {t('cta.discover')}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Le Bus - Split section inversé */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        <div className="flex items-center bg-secondary-900 text-white p-10 lg:p-20 order-2 lg:order-1">
          <div>
            <img
              src={IMAGES.logo1197}
              alt="11-97"
              className="h-16 lg:h-20 mb-8 brightness-0 invert"
            />
            <p className="text-accent-400 uppercase tracking-[0.3em] text-sm mb-6">{c.busTagline}</p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-8">
              {c.theBus}
            </h2>
            <p className="text-secondary-300 text-lg leading-relaxed mb-10 max-w-lg">
              {t('home.bus.desc')}
            </p>
            <Link
              to="/bus-11-97"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-secondary-900 rounded-full hover:bg-accent-400 hover:text-white transition-colors font-medium"
            >
              {c.welcomeOnBoard}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
        <div className="relative min-h-[50vh] lg:min-h-full order-1 lg:order-2">
          <img
            src={IMAGES.bus}
            alt="Bus 11-97"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Services - Visual grid with overlay */}
      <section className="py-32 bg-cream">
        <div className="container-site">
          <div className="text-center mb-16">
            <p className="text-accent-600 uppercase tracking-[0.3em] text-sm mb-6">{c.ourServices}</p>
            <h2 className="text-5xl md:text-6xl font-serif text-secondary-900">
              {t('home.services.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Catering Card */}
            <Link to="/catering" className="group relative aspect-[3/4] rounded-2xl overflow-hidden">
              <img
                src={IMAGES.catering}
                alt={c.cateringCard}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl font-serif mb-2">{c.cateringCard}</h3>
                <p className="text-white/70 text-sm">{t('home.caterer.desc').substring(0, 60)}...</p>
              </div>
            </Link>

            {/* Aviation Card */}
            <Link to="/aviation-privee" className="group relative aspect-[3/4] rounded-2xl overflow-hidden">
              <img
                src={IMAGES.aviation}
                alt={c.aviationCard}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl font-serif mb-2">{c.aviationCard}</h3>
                <p className="text-white/70 text-sm">{t('aviation.hero.subtitle').substring(0, 60)}...</p>
              </div>
            </Link>

            {/* Events Card */}
            <Link to="/services" className="group relative aspect-[3/4] rounded-2xl overflow-hidden">
              <img
                src={IMAGES.events}
                alt={c.eventsCard}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl font-serif mb-2">{c.eventsCard}</h3>
                <p className="text-white/70 text-sm">{t('home.services.desc').substring(0, 60)}...</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio - Magazine grid */}
      <section className="py-32 bg-white">
        <div className="container-site">
          <div className="text-center mb-16">
            <p className="text-accent-600 uppercase tracking-[0.3em] text-sm mb-6">{c.portfolio}</p>
            <h2 className="text-5xl md:text-6xl font-serif text-secondary-900">
              {t('impressions.hero.title')}
            </h2>
          </div>

          {/* Asymmetric grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="col-span-2 row-span-2">
              <img
                src={IMAGES.impressions[0]}
                alt="Portfolio 1"
                className="w-full h-full object-cover rounded-2xl aspect-square"
              />
            </div>
            <div>
              <img
                src={IMAGES.impressions[1]}
                alt="Portfolio 2"
                className="w-full h-full object-cover rounded-2xl aspect-square"
              />
            </div>
            <div>
              <img
                src={IMAGES.impressions[2]}
                alt="Portfolio 3"
                className="w-full h-full object-cover rounded-2xl aspect-square"
              />
            </div>
            <div className="col-span-2">
              <img
                src={IMAGES.impressions[3]}
                alt="Portfolio 4"
                className="w-full h-full object-cover rounded-2xl aspect-[2/1]"
              />
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/impressions"
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-secondary-900 text-secondary-900 rounded-full hover:bg-secondary-900 hover:text-white transition-colors font-medium"
            >
              {c.seeMore}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Partners - Minimal */}
      <section className="py-20 bg-cream">
        <div className="container-site">
          <p className="text-center text-sm uppercase tracking-[0.3em] text-secondary-500 mb-12">
            {t('home.partners')}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20">
            {partners.map((partner, index) => (
              <a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-40 hover:opacity-100 transition-opacity"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-10 w-auto grayscale hover:grayscale-0 transition-all"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Contact - Full screen with image */}
      <section className="relative min-h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={IMAGES.contact}
            alt="Contact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-8">
            {t('home.questions.title')}
          </h2>
          <p className="text-white/70 mb-12 max-w-xl mx-auto text-lg">
            {t('home.questions.desc')}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-secondary-900 rounded-full hover:bg-accent-400 hover:text-white transition-all font-medium"
          >
            {t('cta.contact')}
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomeV6;

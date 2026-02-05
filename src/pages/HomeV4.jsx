import SEOHead from '../components/SEOHead';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

const IMAGES = {
  hero: 'https://swigs.online/uploads/kozelsky/1770040860124-33442328.webp',
  catering: [
    'https://swigs.online/uploads/kozelsky/1770039736918-802731963.webp',
    'https://swigs.online/uploads/kozelsky/1770039737276-978932392.webp',
    'https://swigs.online/uploads/kozelsky/1770039737716-863842881.webp',
    'https://swigs.online/uploads/kozelsky/1770039738151-670307754.webp',
  ],
  bus: [
    'https://swigs.online/uploads/kozelsky/1770039666874-770981752.webp',
    'https://swigs.online/uploads/kozelsky/1770039666610-182643998.webp',
  ],
  aviation: [
    'https://swigs.online/uploads/kozelsky/1770039644120-200457217.webp',
    'https://swigs.online/uploads/kozelsky/1770039644473-825639362.webp',
  ],
  impressions: [
    'https://swigs.online/uploads/kozelsky/1770040779195-635217521.webp',
    'https://swigs.online/uploads/kozelsky/1770040779617-662408557.webp',
    'https://swigs.online/uploads/kozelsky/1770040777537-755205822.webp',
    'https://swigs.online/uploads/kozelsky/1770040776743-362731661.webp',
  ],
  logo1197: 'https://swigs.online/uploads/kozelsky/1770040801871-137372873.png',
};

const partners = [
  { name: 'FVS Group', logo: 'https://swigs.online/uploads/kozelsky/1770040819957-513010942.png', url: 'https://www.fvsgroup.ch/' },
  { name: 'Friderici Special', logo: 'https://swigs.online/uploads/kozelsky/1770040819922-192473091.png', url: 'https://www.friderici.com/' },
  { name: 'Fovahm', logo: 'https://swigs.online/uploads/kozelsky/1770040819889-43322005.png', url: 'https://www.fovahm.ch/' },
  { name: 'Praedikat', logo: 'https://swigs.online/uploads/kozelsky/1770040820022-168069152.png', url: 'https://www.praedikat.ch/' },
];

const HomeV4 = () => {
  const { t, language } = useLanguage();

  const content = {
    fr: {
      contactUs: 'Nous contacter',
      ourServices: 'Nos services',
      theCaterer: 'Le Traiteur',
      theBus: 'Le Bus 11-97',
      exclusiveService: 'Service exclusif',
    },
    de: {
      contactUs: 'Kontaktieren Sie uns',
      ourServices: 'Unsere Dienstleistungen',
      theCaterer: 'Der Caterer',
      theBus: 'Der Bus 11-97',
      exclusiveService: 'Exklusiver Service',
    },
    en: {
      contactUs: 'Contact us',
      ourServices: 'Our services',
      theCaterer: 'The Caterer',
      theBus: 'The Bus 11-97',
      exclusiveService: 'Exclusive service',
    },
  };

  const c = content[language] || content.fr;

  return (
    <>
      <SEOHead page="home" />

      {/* Hero - Rounded overlay */}
      <section className="relative h-screen flex flex-col justify-center items-center bg-secondary-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMAGES.hero}
            alt="Kozelsky"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-[14vw] md:text-[10vw] font-serif text-white leading-none tracking-tight mb-6">
            Kozelsky
          </h1>
          <div className="flex items-center justify-center gap-6">
            <span className="w-16 h-0.5 bg-white/40 rounded-full" />
            <p className="text-white/80 uppercase tracking-[0.4em] text-sm">Catering</p>
            <span className="w-16 h-0.5 bg-white/40 rounded-full" />
          </div>
          <div className="mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-4 bg-white text-secondary-900 rounded-full hover:bg-accent-400 hover:text-white transition-all font-medium"
            >
              {c.contactUs}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Le Traiteur */}
      <section className="py-32 bg-cream">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Images Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <img
                  src={IMAGES.catering[0]}
                  alt="Catering 1"
                  className="w-full aspect-[4/5] object-cover rounded-3xl"
                />
                <img
                  src={IMAGES.catering[3]}
                  alt="Catering 4"
                  className="w-full aspect-[4/3] object-cover rounded-3xl"
                />
              </div>
              <div className="space-y-6 pt-12">
                <img
                  src={IMAGES.catering[1]}
                  alt="Catering 2"
                  className="w-full aspect-square object-cover rounded-3xl"
                />
                <img
                  src={IMAGES.catering[2]}
                  alt="Catering 3"
                  className="w-full aspect-[4/3] object-cover rounded-3xl"
                />
              </div>
            </div>

            {/* Content */}
            <div className="lg:pl-8">
              <p className="text-accent-600 uppercase tracking-[0.3em] text-sm mb-6">{c.ourServices}</p>
              <h2 className="text-5xl md:text-6xl font-serif text-secondary-900 mb-8">
                {c.theCaterer}
              </h2>
              <p className="text-secondary-600 leading-relaxed text-lg mb-10">
                {t('home.caterer.desc')}
              </p>
              <Link
                to="/catering"
                className="inline-flex items-center gap-3 px-8 py-4 bg-secondary-900 text-white rounded-full hover:bg-accent-600 transition-colors"
              >
                {t('cta.discover')}
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Le Bus 11-97 */}
      <section className="py-32 bg-secondary-900">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="order-2 lg:order-1">
              <img
                src={IMAGES.logo1197}
                alt="11-97"
                className="h-20 mb-8 brightness-0 invert"
              />
              <h2 className="text-5xl md:text-6xl font-serif text-white mb-8">
                {c.theBus}
              </h2>
              <p className="text-secondary-300 leading-relaxed text-lg mb-10">
                {t('home.bus.desc')}
              </p>
              <Link
                to="/bus-11-97"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-secondary-900 rounded-full hover:bg-accent-400 hover:text-white transition-colors"
              >
                {t('cta.discover')}
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Images */}
            <div className="order-1 lg:order-2 grid grid-cols-2 gap-6">
              <img
                src={IMAGES.bus[0]}
                alt="Bus 11-97"
                className="w-full aspect-[3/4] object-cover rounded-3xl"
              />
              <img
                src={IMAGES.bus[1]}
                alt="Bus Interior"
                className="w-full aspect-[3/4] object-cover rounded-3xl mt-12"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Aviation Privée */}
      <section className="py-32 bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Images */}
            <div className="relative">
              <img
                src={IMAGES.aviation[0]}
                alt="Aviation privée"
                className="w-full aspect-[4/3] object-cover rounded-3xl"
              />
              <img
                src={IMAGES.aviation[1]}
                alt="Aviation privée 2"
                className="absolute -bottom-8 -right-8 w-1/2 aspect-square object-cover rounded-2xl shadow-2xl border-4 border-white"
              />
            </div>

            {/* Content */}
            <div className="lg:pl-8">
              <p className="text-accent-600 uppercase tracking-[0.3em] text-sm mb-6">{c.exclusiveService}</p>
              <h2 className="text-5xl md:text-6xl font-serif text-secondary-900 mb-8">
                {t('nav.aviation')}
              </h2>
              <p className="text-secondary-600 leading-relaxed text-lg mb-10">
                {t('aviation.hero.subtitle')}
              </p>
              <Link
                to="/aviation-privee"
                className="inline-flex items-center gap-3 px-8 py-4 bg-secondary-900 text-white rounded-full hover:bg-accent-600 transition-colors"
              >
                {t('cta.discover')}
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impressions */}
      <section className="py-32 bg-cream">
        <div className="container-site">
          <div className="text-center mb-16">
            <p className="text-accent-600 uppercase tracking-[0.3em] text-sm mb-6">Portfolio</p>
            <h2 className="text-5xl md:text-6xl font-serif text-secondary-900">
              {t('impressions.hero.title')}
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {IMAGES.impressions.map((src, index) => (
              <div key={index} className="group overflow-hidden rounded-2xl">
                <img
                  src={src}
                  alt={`Impression ${index + 1}`}
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/impressions"
              className="inline-flex items-center gap-3 px-8 py-4 bg-secondary-900 text-white rounded-full hover:bg-accent-600 transition-colors"
            >
              {t('cta.viewAll')}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-28 bg-white">
        <div className="container-site">
          <h2 className="text-center text-sm uppercase tracking-[0.3em] text-secondary-500 mb-16">
            {t('home.partners')}
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-10 lg:gap-16">
            {partners.map((partner, index) => (
              <a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-cream rounded-2xl opacity-60 hover:opacity-100 transition-all hover:shadow-lg"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 w-auto"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-32 bg-secondary-900 text-white">
        <div className="container-site text-center">
          <h2 className="text-5xl md:text-6xl font-serif mb-8">{t('home.questions.title')}</h2>
          <p className="text-secondary-300 mb-12 max-w-xl mx-auto text-lg">
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

export default HomeV4;

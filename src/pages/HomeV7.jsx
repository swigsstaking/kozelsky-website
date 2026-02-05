import SEOHead from '../components/SEOHead';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

const IMAGES = {
  hero: 'https://swigs.online/uploads/kozelsky/1770287934724-703344864.webp',
  traiteur: 'https://swigs.online/uploads/kozelsky/1770287934404-213249432.webp',
  logo1197: 'https://swigs.online/uploads/kozelsky/1770040801871-137372873.png',
  catering: [
    'https://swigs.online/uploads/kozelsky/1770039736918-802731963.webp',
    'https://swigs.online/uploads/kozelsky/1770039737276-978932392.webp',
    'https://swigs.online/uploads/kozelsky/1770039737716-863842881.webp',
  ],
  bus: [
    'https://swigs.online/uploads/kozelsky/1770039666874-770981752.webp',
    'https://swigs.online/uploads/kozelsky/1770039666610-182643998.webp',
  ],
  salle: 'https://swigs.online/uploads/kozelsky/1770040779195-635217521.webp',
};

const partners = [
  { name: 'FVS Group', logo: 'https://swigs.online/uploads/kozelsky/1770040819957-513010942.png', url: 'https://www.fvsgroup.ch/' },
  { name: 'Friderici Special', logo: 'https://swigs.online/uploads/kozelsky/1770040819922-192473091.png', url: 'https://www.friderici.com/' },
  { name: 'Fovahm', logo: 'https://swigs.online/uploads/kozelsky/1770040819889-43322005.png', url: 'https://www.fovahm.ch/' },
  { name: 'Praedikat', logo: 'https://swigs.online/uploads/kozelsky/1770040820022-168069152.png', url: 'https://www.praedikat.ch/' },
];

const HomeV7 = () => {
  const { t, language } = useLanguage();

  const content = {
    fr: {
      contactUs: 'Nous contacter',
      discover: 'Découvrir',
      welcomeOnBoard: 'Bienvenue à bord',
    },
    de: {
      contactUs: 'Kontaktieren Sie uns',
      discover: 'Entdecken',
      welcomeOnBoard: 'Willkommen an Bord',
    },
    en: {
      contactUs: 'Contact us',
      discover: 'Discover',
      welcomeOnBoard: 'Welcome on board',
    },
  };

  const c = content[language] || content.fr;

  return (
    <>
      <SEOHead page="home" />

      {/* Hero - Full screen with large image */}
      <section
        className="relative h-screen flex items-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.3)), url(${IMAGES.hero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container-site relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-8">
              {t('home.hero.title')}
            </h1>
            <p className="text-white/80 text-xl mb-10 max-w-lg">
              {t('home.since2021.companyDesc')}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent-500 text-white hover:bg-accent-600 transition-all font-medium text-lg"
            >
              {c.contactUs}
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Depuis 2021 */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-serif text-secondary-900 leading-none mb-8">
                {t('home.since2021.title')}
              </h2>
              <div className="w-24 h-1 bg-accent-500 mb-8"></div>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-accent-600 uppercase tracking-widest mb-4">
                  {t('home.since2021.ourCompany')}
                </h3>
                <p className="text-secondary-600 text-lg leading-relaxed">
                  {t('home.since2021.companyDesc')}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-accent-600 uppercase tracking-widest mb-4">
                  {t('home.since2021.ourValues')}
                </h3>
                <p className="text-secondary-600 text-lg leading-relaxed">
                  {t('home.since2021.valuesDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Le Traiteur - Full width image with overlay */}
      <section className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image */}
          <div
            className="h-[500px] lg:h-[700px]"
            style={{
              backgroundImage: `url(${IMAGES.traiteur})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          {/* Content */}
          <div className="flex items-center bg-cream p-10 lg:p-20">
            <div className="max-w-lg">
              <h2 className="text-5xl md:text-6xl font-serif text-secondary-900 mb-6">
                {t('home.caterer.title')}
              </h2>
              <div className="w-16 h-1 bg-accent-500 mb-6"></div>
              <p className="text-secondary-600 text-lg leading-relaxed mb-8">
                {t('home.caterer.desc')}
              </p>
              <Link
                to="/catering"
                className="inline-flex items-center gap-3 px-8 py-4 bg-accent-500 text-white hover:bg-accent-600 transition-all font-medium"
              >
                {c.discover}
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sur-mesure - Reversed layout */}
      <section className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Content */}
          <div className="flex items-center bg-white p-10 lg:p-20 order-2 lg:order-1">
            <div className="max-w-lg">
              <h2 className="text-5xl md:text-6xl font-serif text-secondary-900 mb-6">
                {t('home.custom.title')}
              </h2>
              <div className="w-16 h-1 bg-accent-500 mb-6"></div>
              <p className="text-secondary-600 text-lg leading-relaxed mb-4">
                {t('home.custom.desc')}
              </p>
              <p className="text-accent-600 font-semibold text-lg">
                {t('home.custom.minPersons')}
              </p>
            </div>
          </div>
          {/* Image */}
          <div
            className="h-[500px] lg:h-[700px] order-1 lg:order-2"
            style={{
              backgroundImage: `url(${IMAGES.catering[0]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        </div>
      </section>

      {/* Notre Salle */}
      <section className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image */}
          <div
            className="h-[500px] lg:h-[700px]"
            style={{
              backgroundImage: `url(${IMAGES.salle})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          {/* Content */}
          <div className="flex items-center bg-cream p-10 lg:p-20">
            <div className="max-w-lg">
              <h2 className="text-5xl md:text-6xl font-serif text-secondary-900 mb-6">
                {t('home.welcome.title')}
              </h2>
              <div className="w-16 h-1 bg-accent-500 mb-6"></div>
              <p className="text-secondary-600 text-lg leading-relaxed mb-8">
                {t('home.welcome.hallDesc')}
              </p>
              <Link
                to="/nous"
                className="inline-flex items-center gap-3 px-8 py-4 bg-accent-500 text-white hover:bg-accent-600 transition-all font-medium"
              >
                {c.discover}
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bus 11-97 - Full screen dark section */}
      <section
        className="relative py-32 lg:py-40"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.5)), url(${IMAGES.bus[0]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container-site">
          <div className="max-w-2xl">
            <img
              src={IMAGES.logo1197}
              alt="11-97.ch"
              className="h-20 lg:h-28 mb-8 brightness-0 invert"
            />
            <p className="text-white/80 text-xl leading-relaxed mb-10">
              {t('home.bus.desc')}
            </p>
            <Link
              to="/bus-11-97"
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent-500 text-white hover:bg-accent-600 transition-colors font-medium"
            >
              {c.welcomeOnBoard}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-white">
        <div className="container-site">
          <h2 className="text-center text-sm uppercase tracking-[0.3em] text-secondary-500 mb-12">
            {t('home.partners')}
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
            {partners.map((partner, index) => (
              <a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-cream hover:bg-accent-100 transition-all grayscale hover:grayscale-0"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 lg:h-14 w-auto"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Contact */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="container-site text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-secondary-900 mb-6">
            {t('home.questions.title')}
          </h2>
          <p className="text-secondary-600 mb-10 max-w-xl mx-auto text-lg">
            {t('home.questions.desc')}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-accent-500 text-white hover:bg-accent-600 transition-all font-medium text-lg"
          >
            {t('cta.contact')}
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomeV7;

import SEOHead from '../components/SEOHead';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

const IMAGES = {
  heroVideo: 'https://swigs.online/uploads/kozelsky/1770114967497-666715467.webm#t=10',
  heroFallback: 'https://swigs.online/uploads/kozelsky/1770040860124-33442328.webp',
  logo1197: 'https://swigs.online/uploads/kozelsky/1770040801871-137372873.png',
  illuBusIcon: 'https://swigs.online/uploads/kozelsky/1770039758885-105968538.webp',
  catering: [
    'https://swigs.online/uploads/kozelsky/1770039736918-802731963.webp',
    'https://swigs.online/uploads/kozelsky/1770039737276-978932392.webp',
    'https://swigs.online/uploads/kozelsky/1770039737716-863842881.webp',
  ],
  bus: [
    'https://swigs.online/uploads/kozelsky/1770039666874-770981752.webp',
    'https://swigs.online/uploads/kozelsky/1770039666610-182643998.webp',
  ],
  welcome: [
    'https://swigs.online/uploads/kozelsky/1770040779195-635217521.webp',
    'https://swigs.online/uploads/kozelsky/1770040779617-662408557.webp',
  ],
  impressions: [
    'https://swigs.online/uploads/kozelsky/1770040779195-635217521.webp',
    'https://swigs.online/uploads/kozelsky/1770040779617-662408557.webp',
    'https://swigs.online/uploads/kozelsky/1770040777537-755205822.webp',
    'https://swigs.online/uploads/kozelsky/1770040776743-362731661.webp',
  ],
};

const partners = [
  { name: 'FVS Group', logo: 'https://swigs.online/uploads/kozelsky/1770040819957-513010942.png', url: 'https://www.fvsgroup.ch/' },
  { name: 'Friderici Special', logo: 'https://swigs.online/uploads/kozelsky/1770040819922-192473091.png', url: 'https://www.friderici.com/' },
  { name: 'Fovahm', logo: 'https://swigs.online/uploads/kozelsky/1770040819889-43322005.png', url: 'https://www.fovahm.ch/' },
  { name: 'Praedikat', logo: 'https://swigs.online/uploads/kozelsky/1770040820022-168069152.png', url: 'https://www.praedikat.ch/' },
];

const HomeV5 = () => {
  const { t, language } = useLanguage();

  const content = {
    fr: {
      contactUs: 'Nous contacter',
      ourServices: 'Nos services',
      theCaterer: 'Le Traiteur',
      theBus: 'Le Bus',
      welcomeOnBoard: 'Bienvenue à bord',
    },
    de: {
      contactUs: 'Kontaktieren Sie uns',
      ourServices: 'Unsere Dienstleistungen',
      theCaterer: 'Der Caterer',
      theBus: 'Der Bus',
      welcomeOnBoard: 'Willkommen an Bord',
    },
    en: {
      contactUs: 'Contact us',
      ourServices: 'Our services',
      theCaterer: 'The Caterer',
      theBus: 'The Bus',
      welcomeOnBoard: 'Welcome on board',
    },
  };

  const c = content[language] || content.fr;

  return (
    <>
      <SEOHead page="home" />

      {/* Hero Section with Video */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
        </div>

        <div className="container-site relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight">
              {t('home.hero.title')}
            </h1>
            <div className="flex flex-wrap gap-5">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-10 py-4 bg-white text-secondary-900 rounded-full hover:bg-accent-400 hover:text-white transition-all font-medium"
              >
                {c.contactUs}
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Depuis 2021 - Notre Entreprise */}
      <section className="py-32 bg-cream">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <p className="text-accent-600 uppercase tracking-[0.3em] text-sm mb-6">Kozelsky Catering</p>
              <h2 className="text-5xl md:text-6xl font-serif text-secondary-900 mb-10">{t('home.since2021.title')}</h2>

              <div className="mb-10">
                <h3 className="text-2xl font-serif text-secondary-900 mb-4">{t('home.since2021.ourCompany')}</h3>
                <p className="text-secondary-600 leading-relaxed text-lg">
                  {t('home.since2021.companyDesc')}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-serif text-secondary-900 mb-4">{t('home.since2021.ourValues')}</h3>
                <p className="text-secondary-600 leading-relaxed text-lg">
                  {t('home.since2021.valuesDesc')}
                </p>
                <p className="text-secondary-600 leading-relaxed text-lg mt-4">
                  {t('home.since2021.listenDesc')}
                </p>
              </div>
            </div>

            {/* Images Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <img
                  src={IMAGES.catering[0]}
                  alt="Catering 1"
                  className="w-full aspect-[4/5] object-cover rounded-3xl"
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
          </div>
        </div>
      </section>

      {/* Le Traiteur Card */}
      <section className="py-32 bg-white">
        <div className="container-site">
          <div className="bg-cream p-12 lg:p-16 rounded-3xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-accent-600 uppercase tracking-[0.3em] text-sm mb-6">{c.ourServices}</p>
                <h2 className="text-4xl lg:text-5xl font-serif text-secondary-900 mb-6">
                  {t('home.caterer.title')}
                </h2>
                <p className="text-secondary-600 text-lg leading-relaxed mb-8">
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
              <div className="relative">
                <img
                  src={IMAGES.catering[0]}
                  alt="Le Traiteur"
                  className="w-full aspect-[4/3] object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sur-mesure */}
      <section className="py-32 bg-cream">
        <div className="container-site">
          <div className="max-w-4xl">
            <p className="text-accent-600 uppercase tracking-[0.3em] text-sm mb-6">{c.ourServices}</p>
            <h2 className="text-5xl md:text-6xl font-serif text-secondary-900 mb-8">{t('home.custom.title')}</h2>
            <h3 className="text-2xl font-serif text-accent-600 mb-8">
              {t('home.custom.subtitle')}
            </h3>
            <p className="text-secondary-600 leading-relaxed text-lg mb-4">
              {t('home.custom.desc')}
            </p>
            <p className="text-secondary-600 text-lg">
              {t('home.custom.minPersons')}
            </p>
          </div>
        </div>
      </section>

      {/* Bienvenue à la maison */}
      <section className="py-32 bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Images */}
            <div className="grid grid-cols-2 gap-6">
              <img
                src={IMAGES.welcome[0]}
                alt="Événements"
                className="w-full aspect-[3/4] object-cover rounded-3xl"
              />
              <img
                src={IMAGES.welcome[1]}
                alt="Événements"
                className="w-full aspect-[3/4] object-cover rounded-3xl mt-12"
              />
            </div>

            {/* Content */}
            <div className="lg:pl-8">
              <h2 className="text-5xl md:text-6xl font-serif text-secondary-900 mb-12">{t('home.welcome.title')}</h2>

              <div className="mb-10">
                <h3 className="text-2xl font-serif text-secondary-900 mb-4">{t('home.welcome.subtitle')}</h3>
                <p className="text-secondary-600 leading-relaxed text-lg mb-4">
                  {t('home.welcome.hallDesc')}
                </p>
                <p className="text-secondary-600 leading-relaxed text-lg">
                  {t('home.welcome.accessDesc')}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-serif text-secondary-900 mb-4">
                  {t('home.welcome.eventsTitle')}
                </h3>
                <p className="text-secondary-600 leading-relaxed text-lg">
                  {t('home.welcome.eventsDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Services CTA */}
      <section className="py-32 bg-cream">
        <div className="container-site">
          <div className="bg-white p-12 lg:p-16 rounded-3xl shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-accent-600 uppercase tracking-[0.3em] text-sm mb-6">{c.ourServices}</p>
                <h2 className="text-4xl lg:text-5xl font-serif text-secondary-900 mb-6">
                  {t('home.services.title')}
                </h2>
                <p className="text-secondary-600 text-lg leading-relaxed mb-8">
                  {t('home.services.desc')}
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-secondary-900 text-white rounded-full hover:bg-accent-600 transition-colors font-medium"
                >
                  {t('cta.discover')}
                  <ArrowRight size={18} />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {IMAGES.impressions.map((src, index) => (
                  <div key={index} className="overflow-hidden rounded-2xl">
                    <img
                      src={src}
                      alt={`Service ${index + 1}`}
                      className="w-full aspect-square object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bus 11-97 Promo */}
      <section className="py-32 bg-secondary-900 text-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <img
                src={IMAGES.logo1197}
                alt="11-97.ch"
                className="h-20 lg:h-24 mb-8 mx-auto lg:mx-0 brightness-0 invert"
              />
              <h2 className="text-5xl md:text-6xl font-serif mb-8">
                {c.theBus}
              </h2>
              <p className="text-secondary-300 text-lg leading-relaxed mb-10">
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

            <div className="grid grid-cols-2 gap-6">
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

      {/* Partners */}
      <section className="py-28 bg-cream">
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
                className="p-6 bg-white rounded-2xl opacity-60 hover:opacity-100 transition-all hover:shadow-lg"
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

      {/* CTA Contact */}
      <section className="py-32 bg-white">
        <div className="container-site text-center">
          <h2 className="text-5xl md:text-6xl font-serif text-secondary-900 mb-8">{t('home.questions.title')}</h2>
          <p className="text-secondary-600 mb-12 max-w-xl mx-auto text-lg">
            {t('home.questions.desc')}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-secondary-900 text-white rounded-full hover:bg-accent-600 transition-all font-medium"
          >
            {t('cta.contact')}
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomeV5;

import SEOHead from '../components/SEOHead';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

const IMAGES = {
  hero: [
    'https://swigs.online/uploads/kozelsky/1770287934724-703344864.webp',
    'https://swigs.online/uploads/kozelsky/1770287934404-213249432.webp',
  ],
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

const HomeV7 = () => {
  const { t, language } = useLanguage();

  const content = {
    fr: {
      contactUs: 'Nous contacter',
      ourServices: 'Nos services',
      theCaterer: 'Le Traiteur',
      theBus: 'Le Bus',
      welcomeOnBoard: 'Bienvenue à bord',
      customService: 'Service sur-mesure',
      ourHall: 'Notre salle',
    },
    de: {
      contactUs: 'Kontaktieren Sie uns',
      ourServices: 'Unsere Dienstleistungen',
      theCaterer: 'Der Caterer',
      theBus: 'Der Bus',
      welcomeOnBoard: 'Willkommen an Bord',
      customService: 'Maßgeschneiderter Service',
      ourHall: 'Unser Saal',
    },
    en: {
      contactUs: 'Contact us',
      ourServices: 'Our services',
      theCaterer: 'The Caterer',
      theBus: 'The Bus',
      welcomeOnBoard: 'Welcome on board',
      customService: 'Custom service',
      ourHall: 'Our hall',
    },
  };

  const c = content[language] || content.fr;

  return (
    <>
      <SEOHead page="home" />

      {/* Hero Section - Images complètes sans crop */}
      <section className="py-16 lg:py-24 bg-[#F2F5F7]">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-secondary-900 mb-8 leading-[1.1]">
                {t('home.hero.title')}
              </h1>
              <p className="text-secondary-600 text-lg lg:text-xl leading-relaxed mb-10 max-w-lg">
                {t('home.since2021.companyDesc')}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-[#ffcd57] text-secondary-900 rounded-full hover:bg-[#f5c342] transition-all font-semibold text-lg shadow-lg shadow-[#ffcd57]/30"
              >
                {c.contactUs}
                <ArrowRight size={20} />
              </Link>
            </div>

            {/* Hero Images - object-contain pour voir l'image entière */}
            <div className="order-1 lg:order-2 grid grid-cols-2 gap-4 lg:gap-6">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden p-2">
                <img
                  src={IMAGES.hero[0]}
                  alt="Kozelsky Catering"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden p-2 mt-8 lg:mt-12">
                <img
                  src={IMAGES.hero[1]}
                  alt="Kozelsky Service"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depuis 2021 - Notre Entreprise */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Images Grid */}
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              <div className="space-y-4 lg:space-y-6">
                <div className="bg-[#F2F5F7] rounded-3xl p-2">
                  <img
                    src={IMAGES.catering[0]}
                    alt="Catering 1"
                    className="w-full h-auto rounded-2xl"
                  />
                </div>
              </div>
              <div className="space-y-4 lg:space-y-6 pt-8 lg:pt-12">
                <div className="bg-[#F2F5F7] rounded-3xl p-2">
                  <img
                    src={IMAGES.catering[1]}
                    alt="Catering 2"
                    className="w-full h-auto rounded-2xl"
                  />
                </div>
                <div className="bg-[#F2F5F7] rounded-3xl p-2">
                  <img
                    src={IMAGES.catering[2]}
                    alt="Catering 3"
                    className="w-full h-auto rounded-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:pl-8">
              <p className="text-[#060097] uppercase tracking-[0.3em] text-sm font-semibold mb-6">Kozelsky Catering</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-secondary-900 mb-10 leading-tight">{t('home.since2021.title')}</h2>

              <div className="mb-10">
                <h3 className="text-xl lg:text-2xl font-serif text-secondary-900 mb-4">{t('home.since2021.ourCompany')}</h3>
                <p className="text-secondary-600 leading-relaxed text-base lg:text-lg">
                  {t('home.since2021.companyDesc')}
                </p>
              </div>

              <div>
                <h3 className="text-xl lg:text-2xl font-serif text-secondary-900 mb-4">{t('home.since2021.ourValues')}</h3>
                <p className="text-secondary-600 leading-relaxed text-base lg:text-lg">
                  {t('home.since2021.valuesDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-24 lg:py-32 bg-[#F2F5F7]">
        <div className="container-site">
          <div className="text-center mb-16">
            <p className="text-[#060097] uppercase tracking-[0.3em] text-sm font-semibold mb-6">{c.ourServices}</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-secondary-900">{t('home.services.title')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Le Traiteur */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
              <div className="p-3">
                <img
                  src={IMAGES.catering[0]}
                  alt="Le Traiteur"
                  className="w-full h-auto rounded-2xl group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="p-6 lg:p-8 pt-2">
                <h3 className="text-xl lg:text-2xl font-serif text-secondary-900 mb-3">{c.theCaterer}</h3>
                <p className="text-secondary-600 mb-5 text-sm lg:text-base">{t('home.caterer.desc')}</p>
                <Link
                  to="/catering"
                  className="inline-flex items-center gap-2 text-[#060097] font-semibold hover:gap-4 transition-all text-sm lg:text-base"
                >
                  {t('cta.discover')}
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Sur-mesure */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
              <div className="p-3">
                <img
                  src={IMAGES.catering[1]}
                  alt="Sur-mesure"
                  className="w-full h-auto rounded-2xl group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="p-6 lg:p-8 pt-2">
                <h3 className="text-xl lg:text-2xl font-serif text-secondary-900 mb-3">{c.customService}</h3>
                <p className="text-secondary-600 mb-5 text-sm lg:text-base">{t('home.custom.desc')}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-[#060097] font-semibold hover:gap-4 transition-all text-sm lg:text-base"
                >
                  {t('cta.discover')}
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* La Salle */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
              <div className="p-3">
                <img
                  src={IMAGES.welcome[0]}
                  alt="Notre salle"
                  className="w-full h-auto rounded-2xl group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="p-6 lg:p-8 pt-2">
                <h3 className="text-xl lg:text-2xl font-serif text-secondary-900 mb-3">{c.ourHall}</h3>
                <p className="text-secondary-600 mb-5 text-sm lg:text-base">{t('home.welcome.hallDesc')}</p>
                <Link
                  to="/nous"
                  className="inline-flex items-center gap-2 text-[#060097] font-semibold hover:gap-4 transition-all text-sm lg:text-base"
                >
                  {t('cta.discover')}
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bus 11-97 Promo */}
      <section className="py-24 lg:py-32 bg-secondary-900 text-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <img
                src={IMAGES.logo1197}
                alt="11-97.ch"
                className="h-16 lg:h-24 mb-8 mx-auto lg:mx-0 brightness-0 invert"
              />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6">
                {c.theBus}
              </h2>
              <p className="text-secondary-300 text-base lg:text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                {t('home.bus.desc')}
              </p>
              <Link
                to="/bus-11-97"
                className="inline-flex items-center gap-3 px-8 lg:px-10 py-4 lg:py-5 bg-[#ffcd57] text-secondary-900 rounded-full hover:bg-[#f5c342] transition-colors font-semibold text-base lg:text-lg"
              >
                {c.welcomeOnBoard}
                <ArrowRight size={20} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              <div className="bg-secondary-800 rounded-3xl p-2">
                <img
                  src={IMAGES.bus[0]}
                  alt="Bus 11-97"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="bg-secondary-800 rounded-3xl p-2 mt-8 lg:mt-12">
                <img
                  src={IMAGES.bus[1]}
                  alt="Bus Interior"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-white">
        <div className="container-site">
          <h2 className="text-center text-sm uppercase tracking-[0.3em] text-secondary-500 mb-12">
            {t('home.partners')}
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {partners.map((partner, index) => (
              <a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 lg:p-6 bg-[#F2F5F7] rounded-2xl opacity-70 hover:opacity-100 transition-all hover:shadow-lg"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-10 lg:h-12 w-auto"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Contact */}
      <section className="py-24 lg:py-32 bg-[#F2F5F7]">
        <div className="container-site text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-secondary-900 mb-6">{t('home.questions.title')}</h2>
          <p className="text-secondary-600 mb-10 max-w-xl mx-auto text-base lg:text-lg">
            {t('home.questions.desc')}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-10 lg:px-12 py-5 lg:py-6 bg-[#ffcd57] text-secondary-900 rounded-full hover:bg-[#f5c342] transition-all font-semibold text-base lg:text-lg shadow-lg shadow-[#ffcd57]/30"
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

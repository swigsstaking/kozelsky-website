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
      customService: 'Sur-mesure',
      ourHall: 'Notre salle',
      discover: 'Découvrir',
    },
    de: {
      contactUs: 'Kontaktieren Sie uns',
      ourServices: 'Unsere Dienstleistungen',
      theCaterer: 'Der Caterer',
      theBus: 'Der Bus',
      welcomeOnBoard: 'Willkommen an Bord',
      customService: 'Maßgeschneidert',
      ourHall: 'Unser Saal',
      discover: 'Entdecken',
    },
    en: {
      contactUs: 'Contact us',
      ourServices: 'Our services',
      theCaterer: 'The Caterer',
      theBus: 'The Bus',
      welcomeOnBoard: 'Welcome on board',
      customService: 'Custom',
      ourHall: 'Our hall',
      discover: 'Discover',
    },
  };

  const c = content[language] || content.fr;

  return (
    <>
      <SEOHead page="home" />

      {/* Hero Section - Grande image plein écran style kozelsky.ch */}
      <section className="relative min-h-[90vh] flex items-center bg-secondary-900 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={IMAGES.hero[0]}
            alt="Kozelsky Catering"
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        {/* Content overlay */}
        <div className="relative z-10 container-site py-20">
          <div className="max-w-3xl">
            <div className="bg-accent-500/90 p-10 lg:p-14">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-[1.1]">
                {t('home.hero.title')}
              </h1>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-secondary-900 hover:bg-secondary-100 transition-all font-medium"
              >
                {c.contactUs}
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Depuis 2021 - Style kozelsky.ch */}
      <section className="py-24 lg:py-32 bg-[#F2F5F7]">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Titre à gauche */}
            <div>
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-serif text-secondary-900 leading-none">
                {t('home.since2021.title')}
              </h2>
            </div>

            {/* Contenu à droite */}
            <div className="space-y-12">
              <div>
                <h3 className="text-lg font-bold text-secondary-900 uppercase tracking-wider mb-4">
                  {t('home.since2021.ourCompany')}
                </h3>
                <p className="text-secondary-600 leading-relaxed text-lg">
                  {t('home.since2021.companyDesc')}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-secondary-900 uppercase tracking-wider mb-4">
                  {t('home.since2021.ourValues')}
                </h3>
                <p className="text-secondary-600 leading-relaxed text-lg">
                  {t('home.since2021.valuesDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Le Traiteur - Grande image à gauche style kozelsky.ch */}
      <section className="bg-[#F2F5F7]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Grande image à gauche - pleine hauteur */}
          <div className="relative min-h-[500px] lg:min-h-[700px]">
            <img
              src={IMAGES.hero[1]}
              alt="Le Traiteur"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Contenu à droite */}
          <div className="flex items-center p-10 lg:p-20 bg-white">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-secondary-900 mb-6 italic">
                {c.theCaterer}
              </h2>
              <p className="text-secondary-600 text-lg leading-relaxed mb-8">
                {t('home.caterer.desc')}
              </p>
              <Link
                to="/catering"
                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-accent-500 text-accent-600 hover:bg-accent-500 hover:text-white transition-all font-medium"
              >
                {c.discover}
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sur-mesure - Image à droite */}
      <section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Contenu à gauche */}
          <div className="flex items-center p-10 lg:p-20 order-2 lg:order-1">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-secondary-900 mb-6 italic">
                {c.customService}
              </h2>
              <p className="text-secondary-600 text-lg leading-relaxed mb-4">
                {t('home.custom.desc')}
              </p>
              <p className="text-secondary-900 font-semibold text-lg">
                {t('home.custom.minPersons')}
              </p>
            </div>
          </div>

          {/* Grande image à droite */}
          <div className="relative min-h-[500px] lg:min-h-[700px] order-1 lg:order-2">
            <img
              src={IMAGES.catering[0]}
              alt="Sur-mesure"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Notre Salle - Grande image */}
      <section className="bg-[#F2F5F7]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Grande image à gauche */}
          <div className="relative min-h-[500px] lg:min-h-[700px]">
            <img
              src={IMAGES.welcome[0]}
              alt="Notre salle"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Contenu à droite */}
          <div className="flex items-center p-10 lg:p-20 bg-white">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-secondary-900 mb-6 italic">
                {c.ourHall}
              </h2>
              <p className="text-secondary-600 text-lg leading-relaxed mb-8">
                {t('home.welcome.hallDesc')}
              </p>
              <Link
                to="/nous"
                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-accent-500 text-accent-600 hover:bg-accent-500 hover:text-white transition-all font-medium"
              >
                {c.discover}
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bus 11-97 - Plein écran sombre */}
      <section className="relative min-h-[80vh] flex items-center bg-secondary-900 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={IMAGES.bus[0]}
            alt="Bus 11-97"
            className="w-full h-full object-cover opacity-50"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 container-site py-20">
          <div className="max-w-2xl">
            <img
              src={IMAGES.logo1197}
              alt="11-97.ch"
              className="h-24 lg:h-32 mb-10 brightness-0 invert"
            />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
              {c.theBus}
            </h2>
            <p className="text-white/80 text-lg lg:text-xl leading-relaxed mb-10">
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
      <section className="py-20 bg-[#F2F5F7]">
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
                className="p-4 lg:p-6 bg-white opacity-70 hover:opacity-100 transition-all hover:shadow-lg"
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
      <section className="py-24 lg:py-32 bg-white">
        <div className="container-site text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-secondary-900 mb-6 italic">
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

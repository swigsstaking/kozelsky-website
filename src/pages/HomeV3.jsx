import SEOHead from '../components/SEOHead';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import ImageGallery from '../components/ImageGallery';

const IMAGES = {
  hero: 'https://swigs.online/uploads/kozelsky/1770040860124-33442328.webp',
  catering1: 'https://swigs.online/uploads/kozelsky/1770039737716-863842881.webp',
  catering2: 'https://swigs.online/uploads/kozelsky/1770039737276-978932392.webp',
  catering3: 'https://swigs.online/uploads/kozelsky/1770039736918-802731963.webp',
  bus1: 'https://swigs.online/uploads/kozelsky/1770039666874-770981752.webp',
  bus2: 'https://swigs.online/uploads/kozelsky/1770039666610-182643998.webp',
  aviation1: 'https://swigs.online/uploads/kozelsky/1770039644120-200457217.webp',
  aviation2: 'https://swigs.online/uploads/kozelsky/1770039644473-825639362.webp',
  illuPoireGrains: 'https://swigs.online/uploads/kozelsky/1770040801754-206438863.webp',
  illuLegumes: 'https://swigs.online/uploads/kozelsky/1770040801687-349584166.webp',
  illuFruitcake: 'https://swigs.online/uploads/kozelsky/1770040779195-635217521.webp',
  illuDesert: 'https://swigs.online/uploads/kozelsky/1770040779454-338616033.webp',
  illuCreamPie: 'https://swigs.online/uploads/kozelsky/1770040780777-808677046.webp',
  illuCitrus: 'https://swigs.online/uploads/kozelsky/1770040801618-296993494.webp',
  illuFlower: 'https://swigs.online/uploads/kozelsky/1770040801649-673988208.webp',
  logo1197: 'https://swigs.online/uploads/kozelsky/1770040801871-137372873.png',
};

const partners = [
  { name: 'FVS Group', logo: 'https://swigs.online/uploads/kozelsky/1770040819957-513010942.png', url: 'https://www.fvsgroup.ch/' },
  { name: 'Friderici Special', logo: 'https://swigs.online/uploads/kozelsky/1770040819922-192473091.png', url: 'https://www.friderici.com/' },
  { name: 'Fovahm', logo: 'https://swigs.online/uploads/kozelsky/1770040819889-43322005.png', url: 'https://www.fovahm.ch/' },
  { name: 'Praedikat', logo: 'https://swigs.online/uploads/kozelsky/1770040820022-168069152.png', url: 'https://www.praedikat.ch/' },
];

const HomeV3 = () => {
  const { t, language } = useLanguage();

  const content = {
    fr: {
      heroLine1: 'Événements',
      heroLine2: 'gourmands',
      heroLine3: 'de qualité',
      ourServices: 'Nos services',
      servicesDesc: 'Découvrez les services que nous avons mis en place pour vous.',
      discover: 'Découvrir',
      theCaterer: 'Le Traiteur',
      theBus: 'Le Bus 11-97',
      welcomeOnBoard: 'Welcome on board',
    },
    de: {
      heroLine1: 'Hochwertige',
      heroLine2: 'Gourmet-',
      heroLine3: 'Veranstaltungen',
      ourServices: 'Unsere Dienstleistungen',
      servicesDesc: 'Entdecken Sie die Services, die wir für Sie eingerichtet haben.',
      discover: 'Entdecken',
      theCaterer: 'Der Caterer',
      theBus: 'Der Bus 11-97',
      welcomeOnBoard: 'Willkommen an Bord',
    },
    en: {
      heroLine1: 'Quality',
      heroLine2: 'gourmet',
      heroLine3: 'events',
      ourServices: 'Our services',
      servicesDesc: 'Discover the services we have set up for you.',
      discover: 'Discover',
      theCaterer: 'The Caterer',
      theBus: 'The Bus 11-97',
      welcomeOnBoard: 'Welcome on board',
    },
  };

  const c = content[language] || content.fr;

  return (
    <>
      <SEOHead page="home" />

      {/* Hero - Clean with overlay text box */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src={IMAGES.hero}
            alt="Kozelsky Catering"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="bg-accent-600/95 px-16 py-20 backdrop-blur-sm max-w-4xl text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight">
              {c.heroLine1}<br />
              {c.heroLine2}<br />
              {c.heroLine3}
            </h1>
          </div>
        </div>
      </section>

      {/* Nos services - Image assembly inspired by original site */}
      <section className="relative bg-cream">
        <div className="container-site py-20 md:py-32">
          <div className="relative">
            {/* Title centered */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-serif text-secondary-900">
                {c.ourServices}
              </h2>
            </div>

            {/* Image Assembly Grid */}
            <div className="grid grid-cols-12 gap-8 items-center">
              {/* Left side: Stacked images */}
              <div className="col-span-12 lg:col-span-6 relative">
                <ImageGallery
                  images={[
                    { src: IMAGES.catering1, alt: 'Catering 1' },
                    { src: IMAGES.catering2, alt: 'Catering 2' },
                    { src: IMAGES.catering3, alt: 'Catering 3' },
                  ]}
                  layout="grid"
                />

                {/* Floating illustrations */}
                <div className="absolute -bottom-12 -left-12 w-48 h-48 opacity-80 hidden lg:block">
                  <img src={IMAGES.illuPoireGrains} alt="" className="w-full h-full object-contain" />
                </div>
                <div className="absolute -top-8 -right-8 w-36 h-36 opacity-80 hidden lg:block">
                  <img src={IMAGES.illuLegumes} alt="" className="w-full h-full object-contain" />
                </div>
              </div>

              {/* Right side: Text block */}
              <div className="col-span-12 lg:col-span-6">
                <div className="bg-white p-12 shadow-2xl">
                  <p className="text-secondary-600 text-lg leading-relaxed mb-8">
                    {c.servicesDesc}
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-accent-600 hover:text-accent-700 font-medium transition-colors group border-b-2 border-accent-600 pb-1"
                  >
                    {c.discover}
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Le Traiteur - Alternating layout */}
      <section className="relative bg-white">
        <div className="container-site py-20 md:py-32">
          <div className="relative">
            <div className="grid grid-cols-12 gap-8 items-center">
              {/* Left: Text */}
              <div className="col-span-12 lg:col-span-6 order-2 lg:order-1">
                <h2 className="text-4xl md:text-6xl font-serif text-secondary-900 mb-8">
                  {c.theCaterer}
                </h2>
                <p className="text-secondary-600 text-lg leading-relaxed mb-8">
                  {t('home.caterer.desc')}
                </p>
                <Link
                  to="/catering"
                  className="inline-flex items-center gap-2 text-secondary-900 hover:text-accent-600 font-medium transition-colors group border-b-2 border-secondary-900 hover:border-accent-600 pb-1"
                >
                  {c.discover}
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Right: Images with illustration */}
              <div className="col-span-12 lg:col-span-6 order-1 lg:order-2 relative">
                <ImageGallery
                  images={[
                    { src: IMAGES.catering2, alt: 'Le Traiteur 1' },
                    { src: IMAGES.catering1, alt: 'Le Traiteur 2' },
                  ]}
                  layout="grid"
                />

                {/* Floating illustrations */}
                <div className="absolute -bottom-16 -right-16 w-44 h-44 opacity-80 hidden lg:block">
                  <img src={IMAGES.illuFruitcake} alt="" className="w-full h-full object-contain" />
                </div>
                <div className="absolute top-1/4 -left-12 w-32 h-32 opacity-80 hidden lg:block">
                  <img src={IMAGES.illuCitrus} alt="" className="w-full h-full object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Le Bus 11-97 */}
      <section className="relative bg-cream">
        <div className="container-site py-20 md:py-32">
          <div className="relative">
            <div className="grid grid-cols-12 gap-8 items-center">
              {/* Left: Images */}
              <div className="col-span-12 lg:col-span-6 relative">
                <ImageGallery
                  images={[
                    { src: IMAGES.bus1, alt: 'Bus 11-97 extérieur' },
                    { src: IMAGES.bus2, alt: 'Bus 11-97 intérieur' },
                  ]}
                  layout="grid"
                />

                {/* Floating illustration */}
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-52 h-52 opacity-80 hidden lg:block">
                  <img src={IMAGES.illuDesert} alt="" className="w-full h-full object-contain" />
                </div>
              </div>

              {/* Right: Text */}
              <div className="col-span-12 lg:col-span-6">
                <img
                  src={IMAGES.logo1197}
                  alt="11-97"
                  className="h-16 mb-6"
                />
                <h2 className="text-4xl md:text-6xl font-serif text-secondary-900 mb-8">
                  {c.theBus}
                </h2>
                <p className="text-secondary-600 text-lg leading-relaxed mb-8">
                  {t('home.bus.desc')}
                </p>
                <Link
                  to="/bus-11-97"
                  className="inline-flex items-center gap-2 text-accent-600 hover:text-accent-700 font-medium transition-colors group border-b-2 border-accent-600 pb-1"
                >
                  {c.welcomeOnBoard}
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aviation Privée */}
      <section className="relative bg-white">
        <div className="container-site py-20 md:py-32">
          <div className="relative">
            <div className="grid grid-cols-12 gap-8 items-center">
              {/* Left: Text */}
              <div className="col-span-12 lg:col-span-6 order-2 lg:order-1">
                <h2 className="text-4xl md:text-6xl font-serif text-secondary-900 mb-8">
                  {t('nav.aviation')}
                </h2>
                <p className="text-secondary-600 text-lg leading-relaxed mb-8">
                  {t('aviation.hero.subtitle')}
                </p>
                <Link
                  to="/aviation-privee"
                  className="inline-flex items-center gap-2 text-secondary-900 hover:text-accent-600 font-medium transition-colors group border-b-2 border-secondary-900 hover:border-accent-600 pb-1"
                >
                  {c.discover}
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Right: Images */}
              <div className="col-span-12 lg:col-span-6 order-1 lg:order-2 relative">
                <ImageGallery
                  images={[
                    { src: IMAGES.aviation1, alt: 'Aviation privée 1' },
                    { src: IMAGES.aviation2, alt: 'Aviation privée 2' },
                  ]}
                  layout="grid"
                />

                {/* Floating illustrations */}
                <div className="absolute -top-8 right-1/4 w-36 h-36 opacity-80 hidden lg:block">
                  <img src={IMAGES.illuFlower} alt="" className="w-full h-full object-contain" />
                </div>
                <div className="absolute -bottom-12 -left-12 w-40 h-40 opacity-80 hidden lg:block">
                  <img src={IMAGES.illuCreamPie} alt="" className="w-full h-full object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 md:py-24 bg-cream">
        <div className="container-site">
          <h2 className="text-center text-sm uppercase tracking-[0.3em] text-secondary-500 mb-12">
            {t('home.partners')}
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {partners.map((partner, index) => (
              <a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-50 hover:opacity-100 transition-opacity"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-10 w-auto"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 md:py-32 bg-secondary-900 text-white">
        <div className="container-site text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">{t('home.questions.title')}</h2>
          <p className="text-secondary-300 mb-10 max-w-xl mx-auto">
            {t('home.questions.desc')}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 border-2 border-white text-white hover:bg-white hover:text-secondary-900 transition-all uppercase tracking-wider text-sm font-semibold"
          >
            {t('cta.contact')}
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomeV3;

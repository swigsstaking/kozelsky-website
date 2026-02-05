import SEOHead from '../components/SEOHead';
import { ArrowRight, ArrowDown, MapPin, Users, Calendar, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { useRef } from 'react';

const IMAGES = {
  heroVideo: 'https://swigs.online/uploads/kozelsky/1770114967005-178815678.webm',
  heroImage: 'https://swigs.online/uploads/kozelsky/1770039666381-591898801.webp',
  presentedBy: 'https://swigs.online/uploads/kozelsky/1770040801840-440762802.png',
  kozelskyCatering: 'https://swigs.online/uploads/kozelsky/1770040801905-355143210.png',
  busPhoto: 'https://swigs.online/uploads/kozelsky/1770039666874-770981752.webp',
  busInterior: 'https://swigs.online/uploads/kozelsky/1770039666610-182643998.webp',
  logo1197: 'https://swigs.online/uploads/kozelsky/1770040801871-137372873.png',
};

const partners = [
  { name: 'FVS Group', logo: 'https://swigs.online/uploads/kozelsky/1770040819957-513010942.png', url: 'https://www.fvsgroup.ch/' },
  { name: 'Friderici Special', logo: 'https://swigs.online/uploads/kozelsky/1770040819922-192473091.png', url: 'https://www.friderici.com/' },
  { name: 'Fovahm', logo: 'https://swigs.online/uploads/kozelsky/1770040819889-43322005.png', url: 'https://www.fovahm.ch/' },
  { name: 'Praedikat', logo: 'https://swigs.online/uploads/kozelsky/1770040820022-168069152.png', url: 'https://www.praedikat.ch/' },
];

const BusV3 = () => {
  const { t, language } = useLanguage();
  const contentRef = useRef(null);

  const content = {
    fr: {
      bookBus: 'Réserver le Bus',
      seeEquipment: "Voir l'équipement",
      presentedBy: 'Un concept unique en Suisse, présenté par Kozelsky Catering.',
      uniqueConcept: 'Un concept unique',
      discoverHistory: "Découvrir l'histoire",
      mobileBar: 'Bar mobile',
      rental: 'La location',
      equipment: 'Équipement',
      equipmentDesc: 'Bar 100% équipé, tireuse à bière, caves à vin, espaces réfrigérés.',
      services: 'Services',
      servicesDesc: 'Transport, mise en place, personnel de service, nettoyage inclus.',
      team: "L'équipe",
      teamDesc: 'Mélanie et Fabian, les créateurs passionnés de ce projet unique.',
      discover: 'Découvrir',
      busCaterer: 'Le Bus + Le Traiteur',
      discoverCaterer: 'Découvrir le traiteur',
      features: [
        { icon: MapPin, title: 'Mobile', desc: 'Se déplace partout en Suisse' },
        { icon: Users, title: 'Capacité', desc: "Jusqu'à 18 personnes debout" },
        { icon: Calendar, title: 'Événements', desc: 'Mariages, corporate, privés' },
        { icon: Sparkles, title: 'Unique', desc: 'Le seul en Suisse' },
      ],
    },
    de: {
      bookBus: 'Bus reservieren',
      seeEquipment: 'Ausstattung ansehen',
      presentedBy: 'Ein einzigartiges Konzept in der Schweiz, präsentiert von Kozelsky Catering.',
      uniqueConcept: 'Ein einzigartiges Konzept',
      discoverHistory: 'Geschichte entdecken',
      mobileBar: 'Mobile Bar',
      rental: 'Die Vermietung',
      equipment: 'Ausstattung',
      equipmentDesc: 'Voll ausgestattete Bar, Zapfanlage, Weinkühler, Kühlräume.',
      services: 'Dienstleistungen',
      servicesDesc: 'Transport, Aufbau, Servicepersonal, Reinigung inklusive.',
      team: 'Das Team',
      teamDesc: 'Mélanie und Fabian, die leidenschaftlichen Schöpfer dieses einzigartigen Projekts.',
      discover: 'Entdecken',
      busCaterer: 'Der Bus + Der Caterer',
      discoverCaterer: 'Caterer entdecken',
      features: [
        { icon: MapPin, title: 'Mobil', desc: 'Überall in der Schweiz verfügbar' },
        { icon: Users, title: 'Kapazität', desc: 'Bis zu 18 Personen stehend' },
        { icon: Calendar, title: 'Events', desc: 'Hochzeiten, Firmen, Privat' },
        { icon: Sparkles, title: 'Einzigartig', desc: 'Der einzige in der Schweiz' },
      ],
    },
    en: {
      bookBus: 'Book the Bus',
      seeEquipment: 'See equipment',
      presentedBy: 'A unique concept in Switzerland, presented by Kozelsky Catering.',
      uniqueConcept: 'A unique concept',
      discoverHistory: 'Discover the history',
      mobileBar: 'Mobile bar',
      rental: 'The rental',
      equipment: 'Equipment',
      equipmentDesc: 'Fully equipped bar, beer tap, wine coolers, refrigerated spaces.',
      services: 'Services',
      servicesDesc: 'Transport, setup, service staff, cleaning included.',
      team: 'The team',
      teamDesc: 'Mélanie and Fabian, the passionate creators of this unique project.',
      discover: 'Discover',
      busCaterer: 'The Bus + The Caterer',
      discoverCaterer: 'Discover the caterer',
      features: [
        { icon: MapPin, title: 'Mobile', desc: 'Travels anywhere in Switzerland' },
        { icon: Users, title: 'Capacity', desc: 'Up to 18 people standing' },
        { icon: Calendar, title: 'Events', desc: 'Weddings, corporate, private' },
        { icon: Sparkles, title: 'Unique', desc: 'The only one in Switzerland' },
      ],
    },
  };

  const c = content[language] || content.fr;

  const scrollToContent = () => {
    contentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <SEOHead page="bus" />

      {/* Hero - Full screen video */}
      <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster={IMAGES.heroImage}
          >
            <source src={IMAGES.heroVideo} type="video/webm" />
          </video>
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 text-center px-4">
          <img
            src={IMAGES.logo1197}
            alt="11-97"
            className="h-24 md:h-32 mx-auto mb-8 brightness-0 invert"
          />
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">
            {t('bus.hero.title')}
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-xl mx-auto">
            {t('bus.hero.subtitle')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent-500 text-white hover:bg-accent-600 transition-colors"
            >
              {c.bookBus}
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/bus-11-97/v3/equipment"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/50 text-white hover:bg-white/10 transition-colors"
            >
              {c.seeEquipment}
            </Link>
          </div>
        </div>

        <button
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        >
          <ArrowDown size={32} />
        </button>
      </section>

      {/* Presented by - Dark section */}
      <section ref={contentRef} className="py-16 bg-secondary-800">
        <div className="container-site flex flex-col items-center">
          <img
            src={IMAGES.presentedBy}
            alt="Presented by Kozelsky Catering"
            className="h-16 md:h-24 mb-6 brightness-0 invert opacity-80"
          />
          <p className="text-secondary-300 text-center max-w-2xl">
            {c.presentedBy}
          </p>
        </div>
      </section>

      {/* Features - Lighter contrast section */}
      <section className="py-20 bg-cream text-secondary-900">
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {c.features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-secondary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon size={28} className="text-accent-400" />
                </div>
                <h3 className="text-lg font-serif mb-2">{feature.title}</h3>
                <p className="text-secondary-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Split Content - Dark */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative h-[50vh] lg:h-auto">
          <img
            src={IMAGES.busPhoto}
            alt="Bus 11-97"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="flex items-center bg-secondary-900 p-12 lg:p-20">
          <div>
            <p className="text-accent-400 uppercase tracking-[0.3em] text-sm mb-6">{c.uniqueConcept}</p>
            <h2 className="text-4xl font-serif text-white mb-6">
              {t('bus.unique.title')}
            </h2>
            <p className="text-secondary-300 leading-relaxed mb-6">
              {t('bus.unique.desc')}
            </p>
            <Link
              to="/bus-11-97/v3/history"
              className="inline-flex items-center gap-3 text-white font-medium group"
            >
              <span className="uppercase tracking-wider text-sm">{c.discoverHistory}</span>
              <span className="w-12 h-px bg-white group-hover:w-20 transition-all" />
            </Link>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center bg-secondary-800 p-12 lg:p-20 order-2 lg:order-1">
          <div>
            <p className="text-accent-400 uppercase tracking-[0.3em] text-sm mb-6">{c.mobileBar}</p>
            <h2 className="text-4xl font-serif text-white mb-6">
              {t('bus.atHand.title')}
            </h2>
            <p className="text-secondary-300 leading-relaxed mb-6">
              {t('bus.atHand.desc')}
            </p>
            <Link
              to="/bus-11-97/v3/equipment"
              className="inline-flex items-center gap-3 text-white font-medium group"
            >
              <span className="uppercase tracking-wider text-sm">{c.seeEquipment}</span>
              <span className="w-12 h-px bg-white group-hover:w-20 transition-all" />
            </Link>
          </div>
        </div>
        <div className="relative h-[50vh] lg:h-auto order-1 lg:order-2">
          <img
            src={IMAGES.busInterior}
            alt="Bus Interior"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Services Cards - Dark with light cards */}
      <section className="py-24 bg-secondary-900">
        <div className="container-site">
          <div className="text-center mb-16">
            <p className="text-accent-400 uppercase tracking-[0.3em] text-sm mb-4">Services</p>
            <h2 className="text-4xl md:text-5xl font-serif text-white">
              {c.rental}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/bus-11-97/v3/equipment" className="group bg-secondary-800 p-8 hover:bg-cream transition-colors">
              <h3 className="text-xl font-serif text-white group-hover:text-secondary-900 mb-4 transition-colors">
                {c.equipment}
              </h3>
              <p className="text-secondary-400 group-hover:text-secondary-600 mb-6 transition-colors">
                {c.equipmentDesc}
              </p>
              <span className="inline-flex items-center gap-2 text-accent-400 text-sm">
                {c.discover} <ArrowRight size={14} />
              </span>
            </Link>

            <Link to="/bus-11-97/v3/services" className="group bg-secondary-800 p-8 hover:bg-cream transition-colors">
              <h3 className="text-xl font-serif text-white group-hover:text-secondary-900 mb-4 transition-colors">
                {c.services}
              </h3>
              <p className="text-secondary-400 group-hover:text-secondary-600 mb-6 transition-colors">
                {c.servicesDesc}
              </p>
              <span className="inline-flex items-center gap-2 text-accent-400 text-sm">
                {c.discover} <ArrowRight size={14} />
              </span>
            </Link>

            <Link to="/bus-11-97/v3/team" className="group bg-secondary-800 p-8 hover:bg-cream transition-colors">
              <h3 className="text-xl font-serif text-white group-hover:text-secondary-900 mb-4 transition-colors">
                {c.team}
              </h3>
              <p className="text-secondary-400 group-hover:text-secondary-600 mb-6 transition-colors">
                {c.teamDesc}
              </p>
              <span className="inline-flex items-center gap-2 text-accent-400 text-sm">
                {c.discover} <ArrowRight size={14} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Catering Promo - Light contrast section */}
      <section className="py-24 bg-cream text-secondary-900">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <p className="text-accent-600 uppercase tracking-[0.3em] text-sm mb-6">Kozelsky Catering</p>
              <h2 className="text-4xl font-serif mb-6">
                {c.busCaterer}
              </h2>
              <p className="text-secondary-600 leading-relaxed mb-8">
                {t('home.caterer.desc')}
              </p>
              <Link
                to="/catering"
                className="inline-flex items-center gap-2 px-8 py-4 bg-secondary-900 text-white hover:bg-accent-600 transition-colors"
              >
                {c.discoverCaterer}
                <ArrowRight size={18} />
              </Link>
            </div>
            <div className="flex justify-center">
              <img
                src={IMAGES.kozelskyCatering}
                alt="Kozelsky Catering"
                className="max-w-xs"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partners - Dark */}
      <section className="py-20 bg-secondary-900">
        <div className="container-site">
          <h2 className="text-center text-2xl font-serif text-white mb-12">{t('home.partners')}</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {partners.map((partner, index) => (
              <a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary-800 p-4 hover:bg-secondary-700 transition-colors"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 lg:h-16 w-auto object-contain brightness-0 invert opacity-60 hover:opacity-100 transition-opacity"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Dark */}
      <section className="py-24 bg-secondary-800">
        <div className="container-site text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            {t('home.questions.title')}
          </h2>
          <p className="text-secondary-300 mb-10 max-w-xl mx-auto">
            {t('home.questions.desc')}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent-500 text-white hover:bg-accent-600 transition-colors"
          >
            {t('cta.contact')}
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default BusV3;

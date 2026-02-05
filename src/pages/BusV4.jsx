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

const BusV4 = () => {
  const { t, language } = useLanguage();
  const contentRef = useRef(null);

  const content = {
    fr: {
      features: [
        { icon: MapPin, title: 'Mobile', desc: 'Se déplace partout en Suisse' },
        { icon: Users, title: 'Capacité', desc: 'Jusqu\'à 18 personnes debout' },
        { icon: Calendar, title: 'Événements', desc: 'Mariages, corporate, privés' },
        { icon: Sparkles, title: 'Unique', desc: 'Le seul en Suisse' },
      ],
      bookBus: 'Réserver le Bus',
      seeEquipment: 'Voir l\'équipement',
      presentedByDesc: 'Un concept unique en Suisse, présenté par Kozelsky Catering.',
      uniqueConcept: 'Un concept unique',
      discoverHistory: 'Découvrir l\'histoire',
      mobileBar: 'Bar mobile',
      servicesLabel: 'Services',
      rental: 'La location',
      equipment: 'Équipement',
      equipmentDesc: 'Bar 100% équipé, tireuse à bière, caves à vin, espaces réfrigérés.',
      services: 'Services',
      servicesDesc: 'Transport, mise en place, personnel de service, nettoyage inclus.',
      team: 'L\'équipe',
      teamDesc: 'Mélanie et Fabian, les créateurs passionnés de ce projet unique.',
      discover: 'Découvrir',
      busAndCaterer: 'Le Bus + Le Traiteur',
      discoverCaterer: 'Découvrir le traiteur',
    },
    de: {
      features: [
        { icon: MapPin, title: 'Mobil', desc: 'Fährt überall in der Schweiz' },
        { icon: Users, title: 'Kapazität', desc: 'Bis zu 18 Personen stehend' },
        { icon: Calendar, title: 'Veranstaltungen', desc: 'Hochzeiten, Firmen, privat' },
        { icon: Sparkles, title: 'Einzigartig', desc: 'Der einzige in der Schweiz' },
      ],
      bookBus: 'Bus reservieren',
      seeEquipment: 'Ausstattung ansehen',
      presentedByDesc: 'Ein einzigartiges Konzept in der Schweiz, präsentiert von Kozelsky Catering.',
      uniqueConcept: 'Ein einzigartiges Konzept',
      discoverHistory: 'Geschichte entdecken',
      mobileBar: 'Mobile Bar',
      servicesLabel: 'Dienstleistungen',
      rental: 'Die Vermietung',
      equipment: 'Ausstattung',
      equipmentDesc: 'Voll ausgestattete Bar, Bierzapfanlage, Weinkeller, Kühlbereiche.',
      services: 'Dienstleistungen',
      servicesDesc: 'Transport, Aufbau, Servicepersonal, Reinigung inklusive.',
      team: 'Das Team',
      teamDesc: 'Mélanie und Fabian, die leidenschaftlichen Schöpfer dieses einzigartigen Projekts.',
      discover: 'Entdecken',
      busAndCaterer: 'Der Bus + Der Caterer',
      discoverCaterer: 'Den Caterer entdecken',
    },
    en: {
      features: [
        { icon: MapPin, title: 'Mobile', desc: 'Travels everywhere in Switzerland' },
        { icon: Users, title: 'Capacity', desc: 'Up to 18 people standing' },
        { icon: Calendar, title: 'Events', desc: 'Weddings, corporate, private' },
        { icon: Sparkles, title: 'Unique', desc: 'The only one in Switzerland' },
      ],
      bookBus: 'Book the Bus',
      seeEquipment: 'See equipment',
      presentedByDesc: 'A unique concept in Switzerland, presented by Kozelsky Catering.',
      uniqueConcept: 'A unique concept',
      discoverHistory: 'Discover the history',
      mobileBar: 'Mobile bar',
      servicesLabel: 'Services',
      rental: 'The rental',
      equipment: 'Equipment',
      equipmentDesc: 'Fully equipped bar, beer tap, wine cellars, refrigerated spaces.',
      services: 'Services',
      servicesDesc: 'Transport, setup, service staff, cleaning included.',
      team: 'The Team',
      teamDesc: 'Mélanie and Fabian, the passionate creators of this unique project.',
      discover: 'Discover',
      busAndCaterer: 'The Bus + The Caterer',
      discoverCaterer: 'Discover the caterer',
    },
  };

  const c = content[language] || content.fr;

  const scrollToContent = () => {
    contentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <SEOHead page="bus" />

      {/* Hero - Full screen video with rounded bottom */}
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
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center px-6">
          <img
            src={IMAGES.logo1197}
            alt="11-97"
            className="h-28 md:h-36 mx-auto mb-10 brightness-0 invert"
          />
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">
            {t('bus.hero.title')}
          </h1>
          <p className="text-xl text-white/80 mb-12 max-w-xl mx-auto">
            {t('bus.hero.subtitle')}
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-4 bg-white text-secondary-900 rounded-full hover:bg-accent-400 hover:text-white transition-colors font-medium"
            >
              {c.bookBus}
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/bus-11-97/v4/equipment"
              className="inline-flex items-center gap-3 px-10 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-secondary-900 transition-colors font-medium"
            >
              {c.seeEquipment}
            </Link>
          </div>
        </div>

        <button
          onClick={scrollToContent}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        >
          <ArrowDown size={36} />
        </button>
      </section>

      {/* Presented by */}
      <section ref={contentRef} className="py-24 bg-cream">
        <div className="container-site flex flex-col items-center">
          <img
            src={IMAGES.presentedBy}
            alt="Presented by Kozelsky Catering"
            className="h-20 md:h-28 mb-8"
          />
          <p className="text-secondary-600 text-center text-lg max-w-2xl">
            {c.presentedByDesc}
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-28 bg-secondary-900 text-white">
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {c.features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-accent-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-xl font-serif mb-3">{feature.title}</h3>
                <p className="text-secondary-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Split Content - Un concept unique */}
      <section className="py-32 bg-cream">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src={IMAGES.busPhoto}
                alt="Bus 11-97"
                className="w-full aspect-[4/3] object-cover rounded-3xl"
              />
            </div>
            <div className="lg:pl-8">
              <p className="text-accent-600 uppercase tracking-[0.3em] text-sm mb-6">{c.uniqueConcept}</p>
              <h2 className="text-5xl font-serif text-secondary-900 mb-8">
                {t('bus.unique.title')}
              </h2>
              <p className="text-secondary-600 leading-relaxed text-lg mb-10">
                {t('bus.unique.desc')}
              </p>
              <Link
                to="/bus-11-97/v4/history"
                className="inline-flex items-center gap-3 px-8 py-4 bg-secondary-900 text-white rounded-full hover:bg-accent-600 transition-colors"
              >
                {c.discoverHistory}
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Split Content - Bar mobile */}
      <section className="py-32 bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 lg:pr-8">
              <p className="text-accent-600 uppercase tracking-[0.3em] text-sm mb-6">{c.mobileBar}</p>
              <h2 className="text-5xl font-serif text-secondary-900 mb-8">
                {t('bus.atHand.title')}
              </h2>
              <p className="text-secondary-600 leading-relaxed text-lg mb-10">
                {t('bus.atHand.desc')}
              </p>
              <Link
                to="/bus-11-97/v4/equipment"
                className="inline-flex items-center gap-3 px-8 py-4 bg-secondary-900 text-white rounded-full hover:bg-accent-600 transition-colors"
              >
                {c.seeEquipment}
                <ArrowRight size={18} />
              </Link>
            </div>
            <div className="order-1 lg:order-2 relative">
              <img
                src={IMAGES.busInterior}
                alt="Bus Interior"
                className="w-full aspect-[4/3] object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-32 bg-cream">
        <div className="container-site">
          <div className="text-center mb-20">
            <p className="text-accent-600 uppercase tracking-[0.3em] text-sm mb-6">{c.servicesLabel}</p>
            <h2 className="text-5xl md:text-6xl font-serif text-secondary-900">
              {c.rental}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Link to="/bus-11-97/v4/equipment" className="group bg-white p-10 rounded-3xl hover:shadow-2xl transition-all">
              <h3 className="text-2xl font-serif text-secondary-900 mb-5 group-hover:text-accent-600 transition-colors">
                {c.equipment}
              </h3>
              <p className="text-secondary-600 mb-8 leading-relaxed">
                {c.equipmentDesc}
              </p>
              <span className="inline-flex items-center gap-2 text-accent-600 font-medium">
                {c.discover} <ArrowRight size={16} />
              </span>
            </Link>

            <Link to="/bus-11-97/v4/services" className="group bg-white p-10 rounded-3xl hover:shadow-2xl transition-all">
              <h3 className="text-2xl font-serif text-secondary-900 mb-5 group-hover:text-accent-600 transition-colors">
                {c.services}
              </h3>
              <p className="text-secondary-600 mb-8 leading-relaxed">
                {c.servicesDesc}
              </p>
              <span className="inline-flex items-center gap-2 text-accent-600 font-medium">
                {c.discover} <ArrowRight size={16} />
              </span>
            </Link>

            <Link to="/bus-11-97/v4/team" className="group bg-white p-10 rounded-3xl hover:shadow-2xl transition-all">
              <h3 className="text-2xl font-serif text-secondary-900 mb-5 group-hover:text-accent-600 transition-colors">
                {c.team}
              </h3>
              <p className="text-secondary-600 mb-8 leading-relaxed">
                {c.teamDesc}
              </p>
              <span className="inline-flex items-center gap-2 text-accent-600 font-medium">
                {c.discover} <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Catering Promo */}
      <section className="py-32 bg-secondary-900 text-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <p className="text-accent-400 uppercase tracking-[0.3em] text-sm mb-8">Kozelsky Catering</p>
              <h2 className="text-5xl font-serif mb-8">
                {c.busAndCaterer}
              </h2>
              <p className="text-secondary-300 leading-relaxed text-lg mb-12">
                {t('home.caterer.desc')}
              </p>
              <Link
                to="/catering"
                className="inline-flex items-center gap-3 px-10 py-4 bg-white text-secondary-900 rounded-full hover:bg-accent-400 hover:text-white transition-colors font-medium"
              >
                {c.discoverCaterer}
                <ArrowRight size={18} />
              </Link>
            </div>
            <div className="flex justify-center">
              <img
                src={IMAGES.kozelskyCatering}
                alt="Kozelsky Catering"
                className="max-w-sm brightness-0 invert"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-28 bg-white">
        <div className="container-site">
          <h2 className="text-center text-2xl font-serif text-secondary-900 mb-16">{t('home.partners')}</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {partners.map((partner, index) => (
              <a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cream p-6 rounded-2xl hover:shadow-lg transition-all"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-14 lg:h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-cream">
        <div className="container-site text-center">
          <h2 className="text-5xl md:text-6xl font-serif text-secondary-900 mb-8">
            {t('home.questions.title')}
          </h2>
          <p className="text-secondary-600 mb-12 max-w-xl mx-auto text-lg">
            {t('home.questions.desc')}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-secondary-900 text-white rounded-full hover:bg-accent-600 transition-colors font-medium"
          >
            {t('cta.contact')}
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default BusV4;

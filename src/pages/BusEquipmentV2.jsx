import SEOHead from '../components/SEOHead';
import { ArrowRight, Wine, Beer, Snowflake, Sparkles, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import ImageGallery from '../components/ImageGallery';

const IMAGES = {
  hero: 'https://swigs.online/uploads/kozelsky/1770039666610-182643998.webp',
  gallery: [
    'https://swigs.online/uploads/kozelsky/1770109764759-407520572.webp',
    'https://swigs.online/uploads/kozelsky/1770109766235-205897698.webp',
    'https://swigs.online/uploads/kozelsky/1770109763892-298445974.webp',
    'https://swigs.online/uploads/kozelsky/1770109765488-773628541.webp',
    'https://swigs.online/uploads/kozelsky/1770109767023-540149873.webp',
    'https://swigs.online/uploads/kozelsky/1770109766013-271056711.webp',
    'https://swigs.online/uploads/kozelsky/1770109766484-48589031.webp',
    'https://swigs.online/uploads/kozelsky/1770109765760-198072946.webp',
  ],
};

const BusEquipmentV2 = () => {
  const { t, language } = useLanguage();

  const content = {
    fr: {
      heroTitle: 'Équipement du Bus',
      heroSubtitle: 'Un bar mobile 100% équipé',
      modular: 'Modulable',
      modularDesc: 'Modulez le bus pour votre évènement, mariage, anniversaire, ou simplement pour de la promotion marketing.',
      refined: 'Raffiné',
      refinedDesc: 'Grâce à notre équipement de haut standing, retrouvez tout ce dont vous avez besoin dans un seul véhicule.',
      groundFloor: 'Rez-de-chaussée',
      lowerDeck: 'Lower Deck',
      lowerDeckDesc: 'Le rez-de-chaussée se compose d\'un bar 100% équipé : tireuse à bière 3 robinets, 2 grandes caves à vin, machine à glaçons, évier, lave-verres et espaces réfrigérés.',
      firstFloor: 'Premier étage',
      upperDeck: 'Upper Deck',
      upperDeckDesc: 'Au premier étage, plusieurs possibilités s\'offrent à vous grâce à notre assortiment de tables hautes et basses.',
      equipmentLower: [
        { icon: Beer, title: 'Tireuse à bière', desc: '3 robinets' },
        { icon: Wine, title: 'Caves à vin', desc: '2 grandes caves' },
        { icon: Snowflake, title: 'Machine à glaçons', desc: 'Production continue' },
        { icon: Sparkles, title: 'Lave-verres', desc: 'Professionnel' },
      ],
      upperDeckFeatures: [
        'Tables hautes pour apéritif debout (max. 18 pers.)',
        'Tables basses pour repas assis (max. 15 pers.)',
        'Éclairage d\'ambiance personnalisable',
        'Sonorisation intégrée',
      ],
      navServices: 'Services',
      navServicesDesc: 'Transport, mise en place, personnel',
      navTeam: 'L\'équipe',
      navTeamDesc: 'Mélanie et Fabian',
      navHistory: 'Histoire',
      navHistoryDesc: 'La naissance du projet',
    },
    de: {
      heroTitle: 'Bus-Ausstattung',
      heroSubtitle: 'Eine voll ausgestattete mobile Bar',
      modular: 'Modular',
      modularDesc: 'Passen Sie den Bus für Ihre Veranstaltung an: Hochzeit, Geburtstag oder Marketing-Promotion.',
      refined: 'Raffiniert',
      refinedDesc: 'Dank unserer hochwertigen Ausstattung finden Sie alles in einem Fahrzeug.',
      groundFloor: 'Erdgeschoss',
      lowerDeck: 'Lower Deck',
      lowerDeckDesc: 'Das Erdgeschoss besteht aus einer voll ausgestatteten Bar: 3-Hahn-Bierzapfanlage, 2 große Weinkeller, Eismaschine, Spüle, Gläserspüler und Kühlbereiche.',
      firstFloor: 'Erste Etage',
      upperDeck: 'Upper Deck',
      upperDeckDesc: 'Im ersten Stock stehen Ihnen mehrere Möglichkeiten dank unserer Auswahl an hohen und niedrigen Tischen zur Verfügung.',
      equipmentLower: [
        { icon: Beer, title: 'Bierzapfanlage', desc: '3 Zapfhähne' },
        { icon: Wine, title: 'Weinkeller', desc: '2 große Keller' },
        { icon: Snowflake, title: 'Eismaschine', desc: 'Kontinuierliche Produktion' },
        { icon: Sparkles, title: 'Gläserspüler', desc: 'Professionell' },
      ],
      upperDeckFeatures: [
        'Hohe Tische für Stehapéro (max. 18 Pers.)',
        'Niedrige Tische für Sitzessen (max. 15 Pers.)',
        'Anpassbare Ambientebeleuchtung',
        'Integrierte Beschallung',
      ],
      navServices: 'Dienstleistungen',
      navServicesDesc: 'Transport, Aufbau, Personal',
      navTeam: 'Das Team',
      navTeamDesc: 'Mélanie und Fabian',
      navHistory: 'Geschichte',
      navHistoryDesc: 'Die Geburt des Projekts',
    },
    en: {
      heroTitle: 'Bus Equipment',
      heroSubtitle: 'A fully equipped mobile bar',
      modular: 'Modular',
      modularDesc: 'Customize the bus for your event, wedding, birthday, or marketing promotion.',
      refined: 'Refined',
      refinedDesc: 'Thanks to our high-end equipment, find everything you need in a single vehicle.',
      groundFloor: 'Ground floor',
      lowerDeck: 'Lower Deck',
      lowerDeckDesc: 'The ground floor consists of a fully equipped bar: 3-tap beer dispenser, 2 large wine cellars, ice machine, sink, glass washer and refrigerated spaces.',
      firstFloor: 'First floor',
      upperDeck: 'Upper Deck',
      upperDeckDesc: 'On the first floor, several options are available thanks to our assortment of high and low tables.',
      equipmentLower: [
        { icon: Beer, title: 'Beer tap', desc: '3 taps' },
        { icon: Wine, title: 'Wine cellars', desc: '2 large cellars' },
        { icon: Snowflake, title: 'Ice machine', desc: 'Continuous production' },
        { icon: Sparkles, title: 'Glass washer', desc: 'Professional' },
      ],
      upperDeckFeatures: [
        'High tables for standing aperitif (max. 18 pers.)',
        'Low tables for seated meals (max. 15 pers.)',
        'Customizable ambient lighting',
        'Integrated sound system',
      ],
      navServices: 'Services',
      navServicesDesc: 'Transport, setup, staff',
      navTeam: 'The Team',
      navTeamDesc: 'Mélanie and Fabian',
      navHistory: 'History',
      navHistoryDesc: 'The birth of the project',
    },
  };

  const c = content[language] || content.fr;

  return (
    <>
      <SEOHead page="bus-equipment" />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={IMAGES.hero}
            alt="Bus Equipment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>
        <div className="container-site relative z-10 text-white">
          <p className="text-accent-400 uppercase tracking-[0.3em] text-sm mb-4">Bus 11-97</p>
          <h1 className="text-5xl md:text-7xl font-serif mb-4">{c.heroTitle}</h1>
          <p className="text-xl text-white/80">{c.heroSubtitle}</p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-cream">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-3xl font-serif text-secondary-900 mb-4">{c.modular}</h3>
              <p className="text-secondary-600">{c.modularDesc}</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-serif text-secondary-900 mb-4">{c.refined}</h3>
              <p className="text-secondary-600">{c.refinedDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery with Lightbox */}
      <section className="py-16 bg-white">
        <div className="container-site">
          <ImageGallery
            images={IMAGES.gallery.map((src, i) => ({ src, alt: `Equipment ${i + 1}` }))}
            layout="masonry"
          />
        </div>
      </section>

      {/* Lower Deck */}
      <section className="py-24 bg-secondary-900 text-white">
        <div className="container-site">
          <div className="text-center mb-16">
            <p className="text-accent-400 uppercase tracking-[0.3em] text-sm mb-4">{c.groundFloor}</p>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">{c.lowerDeck}</h2>
            <p className="text-secondary-300 max-w-2xl mx-auto">{c.lowerDeckDesc}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {c.equipmentLower.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 border border-accent-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon size={28} className="text-accent-400" />
                </div>
                <h3 className="text-lg font-medium mb-1">{item.title}</h3>
                <p className="text-secondary-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upper Deck */}
      <section className="py-24 bg-cream">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent-600 uppercase tracking-[0.3em] text-sm mb-4">{c.firstFloor}</p>
              <h2 className="text-4xl font-serif text-secondary-900 mb-6">{c.upperDeck}</h2>
              <p className="text-secondary-600 leading-relaxed mb-8">{c.upperDeckDesc}</p>
              <ul className="space-y-4">
                {c.upperDeckFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check size={20} className="text-accent-600 mt-0.5 flex-shrink-0" />
                    <span className="text-secondary-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src={IMAGES.gallery[0]}
                alt="Upper Deck"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/bus-11-97/v2/services" className="group p-8 bg-cream hover:bg-secondary-900 transition-colors text-center">
              <h3 className="text-xl font-serif text-secondary-900 group-hover:text-white mb-2 transition-colors">
                {c.navServices}
              </h3>
              <p className="text-secondary-600 group-hover:text-secondary-300 text-sm transition-colors">
                {c.navServicesDesc}
              </p>
            </Link>
            <Link to="/bus-11-97/v2/team" className="group p-8 bg-cream hover:bg-secondary-900 transition-colors text-center">
              <h3 className="text-xl font-serif text-secondary-900 group-hover:text-white mb-2 transition-colors">
                {c.navTeam}
              </h3>
              <p className="text-secondary-600 group-hover:text-secondary-300 text-sm transition-colors">
                {c.navTeamDesc}
              </p>
            </Link>
            <Link to="/bus-11-97/v2/history" className="group p-8 bg-cream hover:bg-secondary-900 transition-colors text-center">
              <h3 className="text-xl font-serif text-secondary-900 group-hover:text-white mb-2 transition-colors">
                {c.navHistory}
              </h3>
              <p className="text-secondary-600 group-hover:text-secondary-300 text-sm transition-colors">
                {c.navHistoryDesc}
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-cream">
        <div className="container-site text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-secondary-900 mb-6">
            {t('home.questions.title')}
          </h2>
          <p className="text-secondary-600 mb-10 max-w-xl mx-auto">
            {t('home.questions.desc')}
          </p>
          <Link to="/contact" className="btn-primary">
            {t('cta.contact')}
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default BusEquipmentV2;

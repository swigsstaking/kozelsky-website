import SEOHead from '../components/SEOHead';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

const IMAGES = {
  heroVideo: 'https://swigs.online/uploads/kozelsky/1770114967005-178815678.webm',
  heroImage: 'https://swigs.online/uploads/kozelsky/1770039666381-591898801.webp',
  busInterior: 'https://swigs.online/uploads/kozelsky/1770039666610-182643998.webp',
  gallery: [
    'https://swigs.online/uploads/kozelsky/1770109764759-407520572.webp',
    'https://swigs.online/uploads/kozelsky/1770109766235-205897698.webp',
    'https://swigs.online/uploads/kozelsky/1770109763892-298445974.webp',
    'https://swigs.online/uploads/kozelsky/1770109765488-773628541.webp',
    'https://swigs.online/uploads/kozelsky/1770109767023-540149873.webp',
    'https://swigs.online/uploads/kozelsky/1770109766013-271056711.webp',
    'https://swigs.online/uploads/kozelsky/1770109766484-48589031.webp',
    'https://swigs.online/uploads/kozelsky/1770109765760-198072946.webp',
    'https://swigs.online/uploads/kozelsky/1770109767306-973519583.webp',
    'https://swigs.online/uploads/kozelsky/1770109766750-82319250.webp',
    'https://swigs.online/uploads/kozelsky/1770109764167-40911891.webp',
    'https://swigs.online/uploads/kozelsky/1770109765237-492809332.webp',
  ],
};

const BusEquipment = () => {
  const { t, language } = useLanguage();

  const content = {
    fr: {
      heroTitle: 'Votre évènement avec le Bus',
      heroSubtitle: 'Impérial London Bus 11-97',
      madeForYou: 'Made for you',
      modular: 'MODULABLE...',
      modularDesc: 'Modulez le bus pour votre évènement, mariage, anniversaire, ou simplement pour de la promotion marketing.',
      refined: '...ET RAFFINÉ',
      refinedDesc: 'Grâce à notre équipement de haut standing, retrouvez tout ce dont vous avez besoin dans un seul véhicule.',
      specs: 'Spécifications et configuration du Bus',
      lowerDeck: 'LOWER DECK',
      lowerDeckDesc: 'Le rez-de-chaussée se compose d\'un bar 100% équipé : tireuse à bière 3 robinets, 2 grandes caves à vin, machine à glaçons, évier, lave-verres et espaces réfrigérés. Cet équipement fait sur-mesure rends cet espace de travail complet et efficace. Le bar est totalement neutre et peut-être utilisé par n\'importe quelle marque de boissons.',
      upperDeck: 'UPPER DECK',
      upperDeckDesc: 'Au premier étage, plusieurs possibilités s\'offrent à vous : grâce à notre assortiment de tables hautes et basses, choisissez l\'aménagement qui vous conviendrait le mieux. Utilisez nos tables hautes pour un apéritif ou un cocktail dinatoire debout (max. 18 personnes), ou nos tables basses pour un repas intime entre amis ou collègues, ou encore pour permettre à votre clientèle de s\'y installer pour boire un verre (max. 15 personnes).',
      cateringPromo: 'Notre entreprise Traiteur et nos différentes prestations.',
      hungry: 'J\'ai faim !',
    },
    de: {
      heroTitle: 'Ihr Event mit dem Bus',
      heroSubtitle: 'Imperial London Bus 11-97',
      madeForYou: 'Made for you',
      modular: 'MODULAR...',
      modularDesc: 'Passen Sie den Bus für Ihre Veranstaltung an: Hochzeit, Geburtstag oder einfach für Marketing-Promotion.',
      refined: '...UND RAFFINIERT',
      refinedDesc: 'Dank unserer hochwertigen Ausstattung finden Sie alles, was Sie brauchen, in einem einzigen Fahrzeug.',
      specs: 'Spezifikationen und Konfiguration des Busses',
      lowerDeck: 'LOWER DECK',
      lowerDeckDesc: 'Das Erdgeschoss besteht aus einer voll ausgestatteten Bar: Zapfanlage mit 3 Hähnen, 2 große Weinkühler, Eismaschine, Spüle, Gläserspüler und Kühlräume.',
      upperDeck: 'UPPER DECK',
      upperDeckDesc: 'Im ersten Stock stehen Ihnen mehrere Möglichkeiten zur Verfügung: Mit unserem Sortiment an hohen und niedrigen Tischen können Sie die Einrichtung wählen, die am besten zu Ihnen passt.',
      cateringPromo: 'Unser Catering-Unternehmen und unsere verschiedenen Dienstleistungen.',
      hungry: 'Ich habe Hunger!',
    },
    en: {
      heroTitle: 'Your event with the Bus',
      heroSubtitle: 'Imperial London Bus 11-97',
      madeForYou: 'Made for you',
      modular: 'MODULAR...',
      modularDesc: 'Customize the bus for your event, wedding, birthday, or simply for marketing promotion.',
      refined: '...AND REFINED',
      refinedDesc: 'Thanks to our high-end equipment, find everything you need in a single vehicle.',
      specs: 'Bus Specifications and Configuration',
      lowerDeck: 'LOWER DECK',
      lowerDeckDesc: 'The ground floor consists of a fully equipped bar: 3-tap beer dispenser, 2 large wine cellars, ice machine, sink, glass washer and refrigerated spaces. This custom-made equipment makes this workspace complete and efficient. The bar is completely neutral and can be used by any beverage brand.',
      upperDeck: 'UPPER DECK',
      upperDeckDesc: 'On the first floor, several options are available: thanks to our assortment of high and low tables, choose the layout that suits you best. Use our high tables for an aperitif or standing cocktail dinner (max. 18 people), or our low tables for an intimate meal with friends or colleagues (max. 15 people).',
      cateringPromo: 'Our catering company and our various services.',
      hungry: 'I\'m hungry!',
    },
  };

  const c = content[language] || content.fr;

  return (
    <>
      <SEOHead page="bus-equipment" />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster={IMAGES.heroImage}
          >
            <source src={IMAGES.heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/60 to-secondary-900/40" />
        </div>

        <div className="container-site relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4">
            {c.heroTitle}
          </h1>
          <p className="text-xl text-white/80">{c.heroSubtitle}</p>
        </div>
      </section>

      {/* Made for you */}
      <section className="section bg-cream">
        <div className="container-site">
          <h2 className="section-title mb-8">{c.madeForYou}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="heading-accent mb-4">{c.modular}</h3>
              <p className="text-secondary-600 leading-relaxed">{c.modularDesc}</p>
            </div>
            <div>
              <h3 className="heading-accent mb-4">{c.refined}</h3>
              <p className="text-secondary-600 leading-relaxed">{c.refinedDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section bg-white">
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {IMAGES.gallery.map((img, index) => (
              <div key={index} className="aspect-square overflow-hidden">
                <img
                  src={img}
                  alt={`Bus interior ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="section bg-cream">
        <div className="container-site">
          <h2 className="section-title mb-8">{c.specs}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="heading-accent mb-4">{c.lowerDeck}</h3>
              <p className="text-secondary-600 leading-relaxed">{c.lowerDeckDesc}</p>
            </div>
            <div>
              <h3 className="heading-accent mb-4">{c.upperDeck}</h3>
              <p className="text-secondary-600 leading-relaxed">{c.upperDeckDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bus Interior Image */}
      <section className="bg-white py-12">
        <div className="container-site">
          <img
            src={IMAGES.busInterior}
            alt="Bus 11-97 Interior"
            className="w-full max-w-4xl mx-auto h-auto"
          />
        </div>
      </section>

      {/* Catering Promo */}
      <section className="section bg-secondary-900 text-white">
        <div className="container-site text-center">
          <p className="text-secondary-300 text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
            {c.cateringPromo}
          </p>
          <Link
            to="/catering"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white font-semibold hover:bg-white hover:text-secondary-900 transition-all duration-300 uppercase tracking-wider text-sm"
          >
            {c.hungry}
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Services CTA */}
      <section className="section bg-cream">
        <div className="container-site">
          <div className="bg-white p-8 lg:p-12 shadow-sm">
            <h2 className="text-2xl lg:text-3xl font-serif text-secondary-900 mb-4">
              {t('home.services.title')}
            </h2>
            <p className="text-secondary-600 mb-6">
              {t('home.services.desc')}
            </p>
            <Link to="/bus-11-97/services" className="btn-outline">
              {t('cta.discover')}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section bg-white">
        <div className="container-site text-center">
          <h2 className="section-title mb-4">{t('home.questions.title')}</h2>
          <p className="text-secondary-600 mb-8 max-w-xl mx-auto">
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

export default BusEquipment;

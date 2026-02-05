import SEOHead from '../components/SEOHead';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

const IMAGES = {
  heroVideo: 'https://swigs.online/uploads/kozelsky/1770114967005-178815678.webm',
  heroImage: 'https://swigs.online/uploads/kozelsky/1770039666381-591898801.webp',
  busInterior: 'https://swigs.online/uploads/kozelsky/1770039666610-182643998.webp',
};

const CONTACT = {
  phone: '+41 79 217 71 61',
  email: 'welcome@kozelsky.ch',
};

const BusServices = () => {
  const { t, language } = useLanguage();

  const content = {
    fr: {
      heroTitle: 'Service complet et mobile',
      heroSubtitle: 'Impérial London Bus 11-97',
      atYourService: 'Nous sommes à votre service',
      atYourServiceDesc: 'Nous prenons le temps pour chacun de nos clients et nous les accompagnons tout au long de la création et de l\'organisation de leur évènement.',
      locations: 'Lieux d\'exception',
      locationsDesc: 'Êtes-vous à la recherche du lieu parfait pour votre évènement ? Kozelsky Catering s\'occupe de trouver l\'endroit idéal pour votre prestation. Parlez-nous de vos préférences et de vos envies, nous nous occuperons du reste.',
      transport: 'Transport',
      transportDesc1: 'Le déplacement du Bus de son stockage au point de rendez-vous sera effectué uniquement par nos chauffeurs.',
      transportDesc2: 'Le personnel de Kozelsky Catering prévu à cet effet est composé de chauffeurs professionnels uniquement et agréés à la conduite de ce type d\'anciens véhicules.',
      setup: 'Mise en place et montage',
      setupDesc1: 'Seule l\'équipe de Kozelsky Sàrl est habilitée à installer et désinstaller le Bus.',
      setupDesc2: 'Pour que le Bus soit totalement exploitable, certaines options doivent être disponibles ou prévues sur le lieu de la prestation : branchement électrique 32A, arrivée d\'eau propre et écoulement d\'eau usagée.',
      catering: 'Service Traiteur',
      cateringDesc: 'En plus du bar, Kozelsky Catering reste à votre disposition si vous souhaitez un apéritif, un cocktail dinatoire ou un repas assis sur-mesure. Parlez-nous de vos envies et laissez parler votre côté gourmand.',
      staff: 'Personnel de service',
      staffDesc: 'Notre personnel a été minutieusement sélectionné pour que leur service soit des plus professionnels. Nous assurerons une ambiance sereine et sans stress.',
      cleaning: 'Nettoyage',
      cleaningDesc: 'Un service de nettoyage du Bus est mis en place et est obligatoirement à la charge du client. Les frais de nettoyage sont compris dans le forfait montage et démontage sous certaines conditions. Ils peuvent également varier selon la durée de location du Bus et surtout son état après la location / prestation.',
      pricing: 'Tarifs',
      alsoCustom: 'ÉGALEMENT SUR-MESURE',
      pricingDesc: 'Les tarifs varient selon le nombre de kilomètres à parcourir, la durée de location, le personnel nécessaire sur place pour assurer la prestation, le mobilier etc…',
      contactUs: 'CONTACTEZ-NOUS',
      contactDesc: 'Contactez-nous par téléphone ou par mail, ou encore via notre formulaire de contact pour plus de renseignements, en nous donnant le maximum d\'informations possible pour que nous puissions vous faire un devis au plus juste.',
      cateringPromo: 'Notre entreprise Traiteur et nos différentes prestations.',
      hungry: 'J\'ai faim !',
    },
    de: {
      heroTitle: 'Kompletter und mobiler Service',
      heroSubtitle: 'Imperial London Bus 11-97',
      atYourService: 'Wir sind für Sie da',
      atYourServiceDesc: 'Wir nehmen uns Zeit für jeden unserer Kunden und begleiten sie während der gesamten Planung und Organisation ihrer Veranstaltung.',
      locations: 'Außergewöhnliche Orte',
      locationsDesc: 'Suchen Sie den perfekten Ort für Ihre Veranstaltung? Kozelsky Catering findet den idealen Ort für Sie.',
      transport: 'Transport',
      transportDesc1: 'Der Transport des Busses von seinem Lager zum Treffpunkt wird ausschließlich von unseren Fahrern durchgeführt.',
      transportDesc2: 'Das für diesen Zweck vorgesehene Personal von Kozelsky Catering besteht ausschließlich aus professionellen Fahrern.',
      setup: 'Aufbau und Montage',
      setupDesc1: 'Nur das Team von Kozelsky Sàrl ist berechtigt, den Bus auf- und abzubauen.',
      setupDesc2: 'Damit der Bus voll funktionsfähig ist, müssen bestimmte Optionen am Veranstaltungsort verfügbar sein: 32A Stromanschluss, Frischwasserzufuhr und Abwasserablauf.',
      catering: 'Catering-Service',
      cateringDesc: 'Neben der Bar steht Ihnen Kozelsky Catering zur Verfügung, wenn Sie einen Aperitif, ein Cocktail-Dinner oder ein maßgeschneidertes Sitzmenü wünschen.',
      staff: 'Servicepersonal',
      staffDesc: 'Unser Personal wurde sorgfältig ausgewählt, um einen professionellen Service zu gewährleisten.',
      cleaning: 'Reinigung',
      cleaningDesc: 'Ein Reinigungsservice für den Bus ist eingerichtet und geht obligatorisch zu Lasten des Kunden.',
      pricing: 'Preise',
      alsoCustom: 'AUCH MAßGESCHNEIDERT',
      pricingDesc: 'Die Preise variieren je nach Anzahl der zurückzulegenden Kilometer, der Mietdauer, dem benötigten Personal vor Ort usw.',
      contactUs: 'KONTAKTIEREN SIE UNS',
      contactDesc: 'Kontaktieren Sie uns telefonisch oder per E-Mail für weitere Informationen.',
      cateringPromo: 'Unser Catering-Unternehmen und unsere verschiedenen Dienstleistungen.',
      hungry: 'Ich habe Hunger!',
    },
    en: {
      heroTitle: 'Complete and mobile service',
      heroSubtitle: 'Imperial London Bus 11-97',
      atYourService: 'We are at your service',
      atYourServiceDesc: 'We take time for each of our clients and accompany them throughout the creation and organization of their event.',
      locations: 'Exceptional locations',
      locationsDesc: 'Are you looking for the perfect location for your event? Kozelsky Catering will find the ideal place for your event. Tell us about your preferences and desires, we\'ll take care of the rest.',
      transport: 'Transport',
      transportDesc1: 'The Bus will be moved from its storage to the meeting point only by our drivers.',
      transportDesc2: 'Kozelsky Catering staff assigned for this purpose consists of professional drivers only, licensed to drive this type of vintage vehicle.',
      setup: 'Setup and assembly',
      setupDesc1: 'Only the Kozelsky Sàrl team is authorized to install and uninstall the Bus.',
      setupDesc2: 'For the Bus to be fully operational, certain options must be available at the venue: 32A electrical connection, clean water supply and wastewater drainage.',
      catering: 'Catering Service',
      cateringDesc: 'In addition to the bar, Kozelsky Catering is at your disposal if you want an aperitif, cocktail dinner or custom seated meal. Tell us about your desires and let your gourmet side speak.',
      staff: 'Service staff',
      staffDesc: 'Our staff has been carefully selected to ensure the most professional service. We will ensure a serene and stress-free atmosphere.',
      cleaning: 'Cleaning',
      cleaningDesc: 'A Bus cleaning service is in place and is mandatory at the client\'s expense. Cleaning costs are included in the setup and dismantling package under certain conditions.',
      pricing: 'Pricing',
      alsoCustom: 'ALSO CUSTOM',
      pricingDesc: 'Prices vary according to the number of kilometers to travel, rental duration, staff needed on site, furniture, etc.',
      contactUs: 'CONTACT US',
      contactDesc: 'Contact us by phone or email, or via our contact form for more information, giving us as much information as possible so we can give you an accurate quote.',
      cateringPromo: 'Our catering company and our various services.',
      hungry: 'I\'m hungry!',
    },
  };

  const c = content[language] || content.fr;

  return (
    <>
      <SEOHead page="bus-services" />

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

      {/* At your service */}
      <section className="section bg-cream">
        <div className="container-site">
          <h2 className="section-title mb-4">{c.atYourService}</h2>
          <p className="text-secondary-600 leading-relaxed max-w-3xl">
            {c.atYourServiceDesc}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-serif text-secondary-900 mb-4">{c.locations}</h3>
              <p className="text-secondary-600 leading-relaxed">{c.locationsDesc}</p>
            </div>

            <div>
              <h3 className="text-2xl font-serif text-secondary-900 mb-4">{c.transport}</h3>
              <p className="text-secondary-600 leading-relaxed mb-4">{c.transportDesc1}</p>
              <p className="text-secondary-600 leading-relaxed">{c.transportDesc2}</p>
            </div>

            <div>
              <h3 className="text-2xl font-serif text-secondary-900 mb-4">{c.setup}</h3>
              <p className="text-secondary-600 leading-relaxed mb-4">{c.setupDesc1}</p>
              <p className="text-secondary-600 leading-relaxed">{c.setupDesc2}</p>
            </div>

            <div>
              <h3 className="text-2xl font-serif text-secondary-900 mb-4">{c.catering}</h3>
              <p className="text-secondary-600 leading-relaxed">{c.cateringDesc}</p>
            </div>

            <div>
              <h3 className="text-2xl font-serif text-secondary-900 mb-4">{c.staff}</h3>
              <p className="text-secondary-600 leading-relaxed">{c.staffDesc}</p>
            </div>

            <div>
              <h3 className="text-2xl font-serif text-secondary-900 mb-4">{c.cleaning}</h3>
              <p className="text-secondary-600 leading-relaxed">{c.cleaningDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section bg-cream">
        <div className="container-site">
          <h2 className="section-title mb-8">{c.pricing}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="heading-accent mb-4">{c.alsoCustom}</h3>
              <p className="text-secondary-600 leading-relaxed">{c.pricingDesc}</p>
            </div>
            <div>
              <h3 className="heading-accent mb-4">{c.contactUs}</h3>
              <p className="text-secondary-600 leading-relaxed mb-4">{c.contactDesc}</p>
              <p className="text-secondary-600">
                <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="text-accent-600 hover:underline">
                  {CONTACT.phone}
                </a>
                {' | '}
                <a href={`mailto:${CONTACT.email}`} className="text-accent-600 hover:underline">
                  {CONTACT.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Catering Promo */}
      <section className="section bg-secondary-900 text-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="hidden lg:block">
              <img
                src={IMAGES.busInterior}
                alt="Bus 11-97"
                className="w-full max-w-md mx-auto h-auto"
              />
            </div>
            <div className="text-center lg:text-left">
              <p className="text-secondary-300 text-lg leading-relaxed mb-6">
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

export default BusServices;

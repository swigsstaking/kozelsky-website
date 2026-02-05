import SEOHead from '../components/SEOHead';
import { ArrowRight, Plane, Clock, Star, Shield, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import ImageGallery from '../components/ImageGallery';

const IMAGES = {
  hero: 'https://swigs.online/uploads/kozelsky/1770039644120-200457217.webp',
  gallery: [
    'https://swigs.online/uploads/kozelsky/1770039644473-825639362.webp',
    'https://swigs.online/uploads/kozelsky/1770039644837-210862301.webp',
    'https://swigs.online/uploads/kozelsky/1770039645201-640852255.webp',
    'https://swigs.online/uploads/kozelsky/1770039645671-63344933.webp',
    'https://swigs.online/uploads/kozelsky/1770039645973-490822970.webp',
    'https://swigs.online/uploads/kozelsky/1770039646418-881633611.webp',
    'https://swigs.online/uploads/kozelsky/1770039646825-564397817.webp',
    'https://swigs.online/uploads/kozelsky/1770039647264-581713973.webp',
    'https://swigs.online/uploads/kozelsky/1770039647605-699578059.webp',
  ],
};

const AviationV4 = () => {
  const { t, language } = useLanguage();

  const content = {
    fr: {
      features: [
        { icon: Plane, title: 'Service en vol', desc: 'Menus adaptés aux contraintes de l\'aviation' },
        { icon: Clock, title: 'Flexibilité horaire', desc: 'Disponibles 24h/24, 7j/7' },
        { icon: Star, title: 'Haute gastronomie', desc: 'Qualité restaurant étoilé' },
        { icon: Shield, title: 'Certifications', desc: 'Conformité aux normes aériennes' },
      ],
      heroTitle: 'L\'excellence<br />en altitude',
      heroDesc: 'Service traiteur d\'exception pour l\'aviation privée. Une expérience gastronomique unique à 10 000 mètres d\'altitude.',
      requestQuote: 'Demander un devis',
      catalogOnRequest: 'Catalogue sur demande',
      ourExpertise: 'Notre expertise',
      localSource: 'Source Locale,<br />Inspiration Mondiale',
      expertiseText1: 'Le travail d\'un traiteur dans le domaine de l\'aviation privée allie savoir-faire culinaire, logistique performante et service haut de gamme pour répondre aux attentes d\'une clientèle très exigeante.',
      expertiseText2: 'Depuis Février 2024, nous avons l\'honneur de pouvoir relever ce challenge chaque jour en mettant en avant des produits de haute qualité, une extrême flexibilité et une passion pour la gastronomie.',
      custom: 'Sur-mesure',
      customTitle: 'Une personnalisation<br />sans limite',
      customText1: 'Chaque client ayant des préférences uniques, notre travail commence par une écoute attentive. Que ce soit pour des restrictions alimentaires spécifiques, des préférences culturelles ou des demandes particulières.',
      customText2: 'Nous proposons des menus sur-mesure qui répondent aux attentes les plus précises, pour une expérience culinaire exceptionnelle à bord.',
      gallery: 'Galerie',
      ourCreationsInFlight: 'Nos créations en vol',
      process: 'Processus',
      howToOrder: 'Comment commander ?',
      steps: [
        { num: '1', title: 'Contactez-nous', desc: 'Par email ou téléphone, décrivez-nous votre vol et vos attentes.' },
        { num: '2', title: 'Devis personnalisé', desc: 'Recevez une proposition sur-mesure adaptée à vos besoins.' },
        { num: '3', title: 'Livraison à bord', desc: 'Nous livrons directement à l\'aéroport selon vos horaires.' },
      ],
      readyToTakeOff: 'Prêt à décoller ?',
      catalogAvailable: 'Notre catalogue est disponible sur demande. Contactez-nous pour recevoir notre offre complète.',
    },
    de: {
      features: [
        { icon: Plane, title: 'Bordservice', desc: 'Menüs angepasst an Luftfahrtanforderungen' },
        { icon: Clock, title: 'Zeitliche Flexibilität', desc: 'Verfügbar 24/7' },
        { icon: Star, title: 'Haute Cuisine', desc: 'Sternerestaurant-Qualität' },
        { icon: Shield, title: 'Zertifizierungen', desc: 'Konform mit Luftfahrtstandards' },
      ],
      heroTitle: 'Exzellenz<br />in der Höhe',
      heroDesc: 'Außergewöhnlicher Catering-Service für die Privatluftfahrt. Ein einzigartiges gastronomisches Erlebnis auf 10.000 Metern Höhe.',
      requestQuote: 'Angebot anfordern',
      catalogOnRequest: 'Katalog auf Anfrage',
      ourExpertise: 'Unsere Expertise',
      localSource: 'Lokale Quelle,<br />Weltweite Inspiration',
      expertiseText1: 'Die Arbeit eines Caterers im Bereich der Privatluftfahrt vereint kulinarisches Know-how, leistungsstarke Logistik und erstklassigen Service.',
      expertiseText2: 'Seit Februar 2024 haben wir die Ehre, diese Herausforderung jeden Tag mit hochwertigen Produkten, extremer Flexibilität und Leidenschaft für die Gastronomie anzunehmen.',
      custom: 'Maßgeschneidert',
      customTitle: 'Grenzenlose<br />Personalisierung',
      customText1: 'Da jeder Kunde einzigartige Vorlieben hat, beginnt unsere Arbeit mit aufmerksamem Zuhören. Ob bei Ernährungseinschränkungen, kulturellen Vorlieben oder besonderen Anfragen.',
      customText2: 'Wir bieten maßgeschneiderte Menüs, die den präzisesten Erwartungen entsprechen, für ein außergewöhnliches kulinarisches Erlebnis an Bord.',
      gallery: 'Galerie',
      ourCreationsInFlight: 'Unsere Kreationen im Flug',
      process: 'Prozess',
      howToOrder: 'Wie bestellen?',
      steps: [
        { num: '1', title: 'Kontaktieren Sie uns', desc: 'Per E-Mail oder Telefon, beschreiben Sie Ihren Flug und Ihre Erwartungen.' },
        { num: '2', title: 'Individuelles Angebot', desc: 'Erhalten Sie einen maßgeschneiderten Vorschlag.' },
        { num: '3', title: 'Lieferung an Bord', desc: 'Wir liefern direkt zum Flughafen nach Ihrem Zeitplan.' },
      ],
      readyToTakeOff: 'Bereit zum Abheben?',
      catalogAvailable: 'Unser Katalog ist auf Anfrage erhältlich. Kontaktieren Sie uns für unser vollständiges Angebot.',
    },
    en: {
      features: [
        { icon: Plane, title: 'In-flight service', desc: 'Menus adapted to aviation constraints' },
        { icon: Clock, title: 'Time flexibility', desc: 'Available 24/7' },
        { icon: Star, title: 'Haute cuisine', desc: 'Michelin-star quality' },
        { icon: Shield, title: 'Certifications', desc: 'Compliance with aviation standards' },
      ],
      heroTitle: 'Excellence<br />at altitude',
      heroDesc: 'Exceptional catering service for private aviation. A unique gastronomic experience at 10,000 meters altitude.',
      requestQuote: 'Request a quote',
      catalogOnRequest: 'Catalog on request',
      ourExpertise: 'Our expertise',
      localSource: 'Local Source,<br />Global Inspiration',
      expertiseText1: 'The work of a caterer in private aviation combines culinary expertise, efficient logistics and premium service to meet the expectations of very demanding clientele.',
      expertiseText2: 'Since February 2024, we have had the honor of taking on this challenge every day by showcasing high-quality products, extreme flexibility and a passion for gastronomy.',
      custom: 'Custom',
      customTitle: 'Limitless<br />customization',
      customText1: 'As each client has unique preferences, our work begins with attentive listening. Whether for specific dietary restrictions, cultural preferences or special requests.',
      customText2: 'We offer custom menus that meet the most precise expectations, for an exceptional culinary experience on board.',
      gallery: 'Gallery',
      ourCreationsInFlight: 'Our in-flight creations',
      process: 'Process',
      howToOrder: 'How to order?',
      steps: [
        { num: '1', title: 'Contact us', desc: 'By email or phone, describe your flight and expectations.' },
        { num: '2', title: 'Custom quote', desc: 'Receive a tailored proposal for your needs.' },
        { num: '3', title: 'Delivery on board', desc: 'We deliver directly to the airport according to your schedule.' },
      ],
      readyToTakeOff: 'Ready to take off?',
      catalogAvailable: 'Our catalog is available on request. Contact us to receive our complete offer.',
    },
  };

  const c = content[language] || content.fr;

  return (
    <>
      <SEOHead page="aviation" />

      {/* Hero */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src={IMAGES.hero}
            alt="Aviation privée"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>
        <div className="container-site relative z-10">
          <div className="max-w-2xl">
            <p className="text-accent-400 uppercase tracking-[0.3em] text-sm mb-8">
              Kozelsky Aviation
            </p>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-10 leading-tight" dangerouslySetInnerHTML={{ __html: c.heroTitle }} />
            <p className="text-xl text-white/80 mb-12 leading-relaxed">
              {c.heroDesc}
            </p>
            <div className="flex flex-wrap gap-5">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-10 py-4 bg-white text-secondary-900 rounded-full hover:bg-accent-400 hover:text-white transition-colors font-medium"
              >
                {c.requestQuote}
                <ArrowRight size={18} />
              </Link>
              <a
                href="mailto:welcome@kozelsky.ch"
                className="inline-flex items-center gap-3 px-10 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-secondary-900 transition-colors font-medium"
              >
                <Mail size={18} />
                {c.catalogOnRequest}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-32 bg-cream">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {c.features.map((feature, index) => (
              <div key={index} className="text-center bg-white p-10 rounded-3xl">
                <div className="w-20 h-20 bg-secondary-900 rounded-full flex items-center justify-center mx-auto mb-8">
                  <feature.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-serif text-secondary-900 mb-4">{feature.title}</h3>
                <p className="text-secondary-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content - Split sections */}
      <section className="py-32 bg-secondary-900 text-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent-400 uppercase tracking-[0.3em] text-sm mb-8">{c.ourExpertise}</p>
              <h2 className="text-5xl font-serif mb-10" dangerouslySetInnerHTML={{ __html: c.localSource }} />
              <p className="text-secondary-300 leading-relaxed text-lg mb-6">
                {c.expertiseText1}
              </p>
              <p className="text-secondary-300 leading-relaxed text-lg">
                {c.expertiseText2}
              </p>
            </div>
            <div>
              <img
                src={IMAGES.gallery[0]}
                alt="Service aviation"
                className="w-full aspect-[4/3] object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src={IMAGES.gallery[1]}
                alt="Personnalisation"
                className="w-full aspect-[4/3] object-cover rounded-3xl"
              />
            </div>
            <div className="order-1 lg:order-2 lg:pl-8">
              <p className="text-accent-600 uppercase tracking-[0.3em] text-sm mb-8">{c.custom}</p>
              <h2 className="text-5xl font-serif text-secondary-900 mb-10" dangerouslySetInnerHTML={{ __html: c.customTitle }} />
              <p className="text-secondary-600 leading-relaxed text-lg mb-6">
                {c.customText1}
              </p>
              <p className="text-secondary-600 leading-relaxed text-lg">
                {c.customText2}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-32 bg-cream">
        <div className="container-site">
          <div className="text-center mb-20">
            <p className="text-accent-600 uppercase tracking-[0.3em] text-sm mb-6">{c.gallery}</p>
            <h2 className="text-5xl md:text-6xl font-serif text-secondary-900">
              {c.ourCreationsInFlight}
            </h2>
          </div>

          <ImageGallery
            images={IMAGES.gallery.map((src, idx) => ({ src, alt: `Aviation ${idx + 1}` }))}
            layout="masonry"
          />
        </div>
      </section>

      {/* How it works */}
      <section className="py-32 bg-secondary-900 text-white">
        <div className="container-site">
          <div className="text-center mb-20">
            <p className="text-accent-400 uppercase tracking-[0.3em] text-sm mb-6">{c.process}</p>
            <h2 className="text-5xl md:text-6xl font-serif">
              {c.howToOrder}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {c.steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 border-2 border-accent-400 rounded-full flex items-center justify-center mx-auto mb-8">
                  <span className="text-3xl font-serif text-accent-400">{step.num}</span>
                </div>
                <h3 className="text-xl font-serif mb-4">{step.title}</h3>
                <p className="text-secondary-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-32 bg-cream">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-serif text-secondary-900 mb-8">
              {c.readyToTakeOff}
            </h2>
            <p className="text-secondary-600 mb-12 max-w-xl mx-auto text-lg">
              {c.catalogAvailable}
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              <a
                href="mailto:welcome@kozelsky.ch"
                className="inline-flex items-center gap-3 px-10 py-4 bg-secondary-900 text-white rounded-full hover:bg-accent-600 transition-colors font-medium"
              >
                <Mail size={20} />
                welcome@kozelsky.ch
              </a>
              <a
                href="tel:+41792177161"
                className="inline-flex items-center gap-3 px-10 py-4 border-2 border-secondary-900 text-secondary-900 rounded-full hover:bg-secondary-900 hover:text-white transition-colors font-medium"
              >
                <Phone size={20} />
                +41 79 217 71 61
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AviationV4;

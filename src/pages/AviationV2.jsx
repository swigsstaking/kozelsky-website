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

const AviationV2 = () => {
  const { language } = useLanguage();

  const content = {
    fr: {
      heroTitle: "L'excellence\nen altitude",
      heroSubtitle: "Service traiteur d'exception pour l'aviation privée. Une expérience gastronomique unique à 10 000 mètres d'altitude.",
      requestQuote: 'Demander un devis',
      catalogOnRequest: 'Catalogue sur demande',
      features: [
        { icon: Plane, title: 'Service en vol', desc: "Menus adaptés aux contraintes de l'aviation" },
        { icon: Clock, title: 'Flexibilité horaire', desc: 'Disponibles 24h/24, 7j/7' },
        { icon: Star, title: 'Haute gastronomie', desc: 'Qualité restaurant étoilé' },
        { icon: Shield, title: 'Certifications', desc: 'Conformité aux normes aériennes' },
      ],
      expertise: 'Notre expertise',
      localSource: 'Source Locale,\nInspiration Mondiale',
      expertiseDesc1: "Le travail d'un traiteur dans le domaine de l'aviation privée allie savoir-faire culinaire, logistique performante et service haut de gamme pour répondre aux attentes d'une clientèle très exigeante.",
      expertiseDesc2: "Depuis Février 2024, nous avons l'honneur de pouvoir relever ce challenge chaque jour en mettant en avant des produits de haute qualité, une extrême flexibilité et une passion pour la gastronomie.",
      customization: 'Sur-mesure',
      customTitle: 'Une personnalisation\nsans limite',
      customDesc1: "Chaque client ayant des préférences uniques, notre travail commence par une écoute attentive. Que ce soit pour des restrictions alimentaires spécifiques, des préférences culturelles ou des demandes particulières.",
      customDesc2: "Nous proposons des menus sur-mesure qui répondent aux attentes les plus précises, pour une expérience culinaire exceptionnelle à bord.",
      gallery: 'Galerie',
      ourCreations: 'Nos créations en vol',
      process: 'Processus',
      howToOrder: 'Comment commander ?',
      step1Title: 'Contactez-nous',
      step1Desc: 'Par email ou téléphone, décrivez-nous votre vol et vos attentes.',
      step2Title: 'Devis personnalisé',
      step2Desc: 'Recevez une proposition sur-mesure adaptée à vos besoins.',
      step3Title: 'Livraison à bord',
      step3Desc: "Nous livrons directement à l'aéroport selon vos horaires.",
      readyToTakeoff: 'Prêt à décoller ?',
      catalogDesc: 'Notre catalogue est disponible sur demande. Contactez-nous pour recevoir notre offre complète.',
    },
    de: {
      heroTitle: 'Exzellenz\nin der Höhe',
      heroSubtitle: 'Außergewöhnlicher Catering-Service für die Privatluftfahrt. Ein einzigartiges gastronomisches Erlebnis in 10.000 Metern Höhe.',
      requestQuote: 'Angebot anfordern',
      catalogOnRequest: 'Katalog auf Anfrage',
      features: [
        { icon: Plane, title: 'Bordservice', desc: 'An die Luftfahrt angepasste Menüs' },
        { icon: Clock, title: 'Zeitliche Flexibilität', desc: 'Verfügbar 24/7' },
        { icon: Star, title: 'Haute Cuisine', desc: 'Sternerestaurant-Qualität' },
        { icon: Shield, title: 'Zertifizierungen', desc: 'Konform mit Luftfahrtnormen' },
      ],
      expertise: 'Unsere Expertise',
      localSource: 'Lokale Herkunft,\nWeltweite Inspiration',
      expertiseDesc1: 'Die Arbeit eines Caterers im Bereich der Privatluftfahrt vereint kulinarisches Know-how, leistungsfähige Logistik und erstklassigen Service für anspruchsvolle Kunden.',
      expertiseDesc2: 'Seit Februar 2024 haben wir die Ehre, diese Herausforderung täglich anzunehmen mit hochwertigen Produkten, extremer Flexibilität und Leidenschaft für die Gastronomie.',
      customization: 'Maßgeschneidert',
      customTitle: 'Grenzenlose\nPersonalisierung',
      customDesc1: 'Da jeder Kunde einzigartige Vorlieben hat, beginnt unsere Arbeit mit aufmerksamem Zuhören. Ob für spezifische Ernährungseinschränkungen, kulturelle Präferenzen oder besondere Wünsche.',
      customDesc2: 'Wir bieten maßgeschneiderte Menüs, die den präzisesten Erwartungen entsprechen, für ein außergewöhnliches kulinarisches Erlebnis an Bord.',
      gallery: 'Galerie',
      ourCreations: 'Unsere Kreationen im Flug',
      process: 'Prozess',
      howToOrder: 'Wie bestellen?',
      step1Title: 'Kontaktieren Sie uns',
      step1Desc: 'Per E-Mail oder Telefon, beschreiben Sie uns Ihren Flug und Ihre Erwartungen.',
      step2Title: 'Individuelles Angebot',
      step2Desc: 'Erhalten Sie ein maßgeschneidertes Angebot für Ihre Bedürfnisse.',
      step3Title: 'Lieferung an Bord',
      step3Desc: 'Wir liefern direkt zum Flughafen nach Ihrem Zeitplan.',
      readyToTakeoff: 'Bereit zum Abheben?',
      catalogDesc: 'Unser Katalog ist auf Anfrage erhältlich. Kontaktieren Sie uns für unser vollständiges Angebot.',
    },
    en: {
      heroTitle: 'Excellence\nat altitude',
      heroSubtitle: 'Exceptional catering service for private aviation. A unique gastronomic experience at 10,000 meters altitude.',
      requestQuote: 'Request a quote',
      catalogOnRequest: 'Catalog on request',
      features: [
        { icon: Plane, title: 'In-flight service', desc: 'Menus adapted to aviation constraints' },
        { icon: Clock, title: 'Time flexibility', desc: 'Available 24/7' },
        { icon: Star, title: 'Fine dining', desc: 'Michelin-star quality' },
        { icon: Shield, title: 'Certifications', desc: 'Compliant with aviation standards' },
      ],
      expertise: 'Our expertise',
      localSource: 'Local Source,\nGlobal Inspiration',
      expertiseDesc1: 'The work of a caterer in the private aviation sector combines culinary expertise, efficient logistics and premium service to meet the expectations of a very demanding clientele.',
      expertiseDesc2: 'Since February 2024, we have had the honor of taking on this challenge every day by showcasing high-quality products, extreme flexibility and a passion for gastronomy.',
      customization: 'Custom-made',
      customTitle: 'Unlimited\npersonalization',
      customDesc1: 'Since each client has unique preferences, our work begins with attentive listening. Whether for specific dietary restrictions, cultural preferences or particular requests.',
      customDesc2: 'We offer custom menus that meet the most precise expectations, for an exceptional culinary experience on board.',
      gallery: 'Gallery',
      ourCreations: 'Our in-flight creations',
      process: 'Process',
      howToOrder: 'How to order?',
      step1Title: 'Contact us',
      step1Desc: 'By email or phone, describe your flight and your expectations.',
      step2Title: 'Custom quote',
      step2Desc: 'Receive a tailored proposal adapted to your needs.',
      step3Title: 'On-board delivery',
      step3Desc: 'We deliver directly to the airport according to your schedule.',
      readyToTakeoff: 'Ready to take off?',
      catalogDesc: 'Our catalog is available on request. Contact us to receive our complete offer.',
    },
  };

  const c = content[language] || content.fr;

  return (
    <>
      <SEOHead page="aviation" />

      {/* Hero - Luxurious full-screen */}
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
            <p className="text-accent-400 uppercase tracking-[0.3em] text-sm mb-6">
              Kozelsky Aviation
            </p>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight whitespace-pre-line">
              {c.heroTitle}
            </h1>
            <p className="text-xl text-white/80 mb-10 leading-relaxed">
              {c.heroSubtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-secondary-900 hover:bg-accent-400 hover:text-white transition-colors"
              >
                {c.requestQuote}
                <ArrowRight size={18} />
              </Link>
              <a
                href="mailto:welcome@kozelsky.ch"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white text-white hover:bg-white hover:text-secondary-900 transition-colors"
              >
                <Mail size={18} />
                {c.catalogOnRequest}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-cream">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {c.features.map((feature, index) => (
              <div key={index} className="text-center p-8">
                <div className="w-20 h-20 bg-secondary-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-serif text-secondary-900 mb-3">{feature.title}</h3>
                <p className="text-secondary-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content - Split sections */}
      <section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-12 lg:p-20 flex items-center bg-secondary-900 text-white">
            <div>
              <p className="text-accent-400 uppercase tracking-[0.3em] text-sm mb-6">{c.expertise}</p>
              <h2 className="text-4xl font-serif mb-8 whitespace-pre-line">
                {c.localSource}
              </h2>
              <p className="text-secondary-300 leading-relaxed mb-6">
                {c.expertiseDesc1}
              </p>
              <p className="text-secondary-300 leading-relaxed">
                {c.expertiseDesc2}
              </p>
            </div>
          </div>
          <div className="relative h-[50vh] lg:h-auto">
            <img
              src={IMAGES.gallery[0]}
              alt="Service aviation"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative h-[50vh] lg:h-auto order-2 lg:order-1">
            <img
              src={IMAGES.gallery[1]}
              alt="Personnalisation"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="p-12 lg:p-20 flex items-center bg-cream order-1 lg:order-2">
            <div>
              <p className="text-accent-600 uppercase tracking-[0.3em] text-sm mb-6">{c.customization}</p>
              <h2 className="text-4xl font-serif text-secondary-900 mb-8 whitespace-pre-line">
                {c.customTitle}
              </h2>
              <p className="text-secondary-600 leading-relaxed mb-6">
                {c.customDesc1}
              </p>
              <p className="text-secondary-600 leading-relaxed">
                {c.customDesc2}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery - Elegant grid */}
      <section className="py-24 bg-white">
        <div className="container-site">
          <div className="text-center mb-16">
            <p className="text-accent-600 uppercase tracking-[0.3em] text-sm mb-4">{c.gallery}</p>
            <h2 className="text-4xl md:text-5xl font-serif text-secondary-900">
              {c.ourCreations}
            </h2>
          </div>

          <ImageGallery
            images={IMAGES.gallery.map((src, idx) => ({ src, alt: `Aviation ${idx + 1}` }))}
            layout="grid"
          />
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-secondary-900 text-white">
        <div className="container-site">
          <div className="text-center mb-16">
            <p className="text-accent-400 uppercase tracking-[0.3em] text-sm mb-4">{c.process}</p>
            <h2 className="text-4xl md:text-5xl font-serif">
              {c.howToOrder}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 border-2 border-accent-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-serif text-accent-400">1</span>
              </div>
              <h3 className="text-xl font-serif mb-3">{c.step1Title}</h3>
              <p className="text-secondary-400">
                {c.step1Desc}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 border-2 border-accent-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-serif text-accent-400">2</span>
              </div>
              <h3 className="text-xl font-serif mb-3">{c.step2Title}</h3>
              <p className="text-secondary-400">
                {c.step2Desc}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 border-2 border-accent-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-serif text-accent-400">3</span>
              </div>
              <h3 className="text-xl font-serif mb-3">{c.step3Title}</h3>
              <p className="text-secondary-400">
                {c.step3Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-cream">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-secondary-900 mb-6">
              {c.readyToTakeoff}
            </h2>
            <p className="text-secondary-600 mb-10 max-w-xl mx-auto">
              {c.catalogDesc}
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="mailto:welcome@kozelsky.ch"
                className="inline-flex items-center gap-3 px-8 py-4 bg-secondary-900 text-white hover:bg-secondary-800 transition-colors"
              >
                <Mail size={20} />
                welcome@kozelsky.ch
              </a>
              <a
                href="tel:+41792177161"
                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-secondary-900 text-secondary-900 hover:bg-secondary-900 hover:text-white transition-colors"
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

export default AviationV2;

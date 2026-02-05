import SEOHead from '../components/SEOHead';
import { ArrowRight, Utensils, Users, Truck, Clock, Star, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

const ServicesV2 = () => {
  const { t, language } = useLanguage();

  const content = {
    fr: {
      requestQuote: 'Demander un devis',
      services: [
        {
          icon: Utensils,
          title: 'Gastronomie',
          desc: 'Menus sur-mesure créés selon vos envies',
          features: ['Cuisine française', 'Influences internationales', 'Options végétariennes', 'Allergènes pris en compte'],
        },
        {
          icon: Users,
          title: 'Personnel',
          desc: 'Une équipe professionnelle à votre service',
          features: ['Chefs expérimentés', 'Service en salle', 'Coordination', 'Tenue soignée'],
        },
        {
          icon: Truck,
          title: 'Logistique',
          desc: 'Transport et installation inclus',
          features: ['Livraison', 'Mise en place', 'Matériel fourni', 'Nettoyage'],
        },
        {
          icon: Clock,
          title: 'Flexibilité',
          desc: 'Adaptation à tous vos besoins',
          features: ['Horaires flexibles', 'Dernière minute', 'Modifications possibles', 'Conseil personnalisé'],
        },
      ],
      forAllEvents: 'Pour tous vos événements',
      serviceTypes: 'Types de prestations',
      eventTypes: [
        { title: 'Mariages', desc: 'Faites de ce jour un moment inoubliable' },
        { title: 'Événements corporate', desc: 'Impressionnez vos partenaires et collaborateurs' },
        { title: 'Anniversaires', desc: 'Célébrez en grand avec vos proches' },
        { title: 'Cocktails', desc: 'Réceptions élégantes et conviviales' },
      ],
      pricing: 'Tarification',
      pricingTitle: 'Des prix adaptés à chaque projet',
      pricingDesc: "Chaque événement est unique, c'est pourquoi nous établissons un devis personnalisé pour chaque demande. Notre tarification prend en compte :",
      pricingItems: [
        'Le nombre de convives',
        'Le type de menu choisi',
        'Les services additionnels',
        'La distance et la logistique',
      ],
      freeQuote: 'Demandez votre devis gratuit',
      quoteDesc: 'Contactez-nous pour recevoir une proposition détaillée sous 48h.',
      contactForm: 'Formulaire de contact',
      call: 'Appeler',
      readyToOrganize: 'Prêt à organiser votre événement ?',
      teamAtService: 'Notre équipe est à votre disposition pour créer un moment inoubliable.',
    },
    de: {
      requestQuote: 'Angebot anfordern',
      services: [
        {
          icon: Utensils,
          title: 'Gastronomie',
          desc: 'Maßgeschneiderte Menüs nach Ihren Wünschen',
          features: ['Französische Küche', 'Internationale Einflüsse', 'Vegetarische Optionen', 'Allergene berücksichtigt'],
        },
        {
          icon: Users,
          title: 'Personal',
          desc: 'Ein professionelles Team zu Ihren Diensten',
          features: ['Erfahrene Köche', 'Saalservice', 'Koordination', 'Gepflegte Kleidung'],
        },
        {
          icon: Truck,
          title: 'Logistik',
          desc: 'Transport und Aufbau inklusive',
          features: ['Lieferung', 'Aufbau', 'Material bereitgestellt', 'Reinigung'],
        },
        {
          icon: Clock,
          title: 'Flexibilität',
          desc: 'Anpassung an all Ihre Bedürfnisse',
          features: ['Flexible Zeiten', 'Kurzfristig möglich', 'Änderungen möglich', 'Persönliche Beratung'],
        },
      ],
      forAllEvents: 'Für all Ihre Veranstaltungen',
      serviceTypes: 'Leistungsarten',
      eventTypes: [
        { title: 'Hochzeiten', desc: 'Machen Sie diesen Tag unvergesslich' },
        { title: 'Firmenevents', desc: 'Beeindrucken Sie Ihre Partner und Kollegen' },
        { title: 'Geburtstage', desc: 'Feiern Sie groß mit Ihren Liebsten' },
        { title: 'Cocktails', desc: 'Elegante und gesellige Empfänge' },
      ],
      pricing: 'Preisgestaltung',
      pricingTitle: 'Preise angepasst an jedes Projekt',
      pricingDesc: 'Jede Veranstaltung ist einzigartig, deshalb erstellen wir für jede Anfrage ein individuelles Angebot. Unsere Preisgestaltung berücksichtigt:',
      pricingItems: [
        'Die Anzahl der Gäste',
        'Die Art des gewählten Menüs',
        'Zusätzliche Dienstleistungen',
        'Entfernung und Logistik',
      ],
      freeQuote: 'Fordern Sie Ihr kostenloses Angebot an',
      quoteDesc: 'Kontaktieren Sie uns, um innerhalb von 48 Stunden ein detailliertes Angebot zu erhalten.',
      contactForm: 'Kontaktformular',
      call: 'Anrufen',
      readyToOrganize: 'Bereit, Ihre Veranstaltung zu organisieren?',
      teamAtService: 'Unser Team steht Ihnen zur Verfügung, um einen unvergesslichen Moment zu schaffen.',
    },
    en: {
      requestQuote: 'Request a quote',
      services: [
        {
          icon: Utensils,
          title: 'Gastronomy',
          desc: 'Custom menus created to your wishes',
          features: ['French cuisine', 'International influences', 'Vegetarian options', 'Allergens considered'],
        },
        {
          icon: Users,
          title: 'Staff',
          desc: 'A professional team at your service',
          features: ['Experienced chefs', 'Room service', 'Coordination', 'Smart attire'],
        },
        {
          icon: Truck,
          title: 'Logistics',
          desc: 'Transport and setup included',
          features: ['Delivery', 'Setup', 'Equipment provided', 'Cleaning'],
        },
        {
          icon: Clock,
          title: 'Flexibility',
          desc: 'Adapting to all your needs',
          features: ['Flexible hours', 'Last minute', 'Changes possible', 'Personalized advice'],
        },
      ],
      forAllEvents: 'For all your events',
      serviceTypes: 'Service types',
      eventTypes: [
        { title: 'Weddings', desc: 'Make this day an unforgettable moment' },
        { title: 'Corporate events', desc: 'Impress your partners and colleagues' },
        { title: 'Birthdays', desc: 'Celebrate big with your loved ones' },
        { title: 'Cocktails', desc: 'Elegant and friendly receptions' },
      ],
      pricing: 'Pricing',
      pricingTitle: 'Prices adapted to each project',
      pricingDesc: 'Each event is unique, which is why we prepare a personalized quote for each request. Our pricing takes into account:',
      pricingItems: [
        'The number of guests',
        'The type of menu chosen',
        'Additional services',
        'Distance and logistics',
      ],
      freeQuote: 'Request your free quote',
      quoteDesc: 'Contact us to receive a detailed proposal within 48 hours.',
      contactForm: 'Contact form',
      call: 'Call',
      readyToOrganize: 'Ready to organize your event?',
      teamAtService: 'Our team is at your disposal to create an unforgettable moment.',
    },
  };

  const c = content[language] || content.fr;

  return (
    <>
      <SEOHead page="services" />

      {/* Hero - Gradient background */}
      <section className="relative py-32 bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent-500 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-500 rounded-full filter blur-3xl" />
        </div>
        <div className="container-site relative z-10">
          <div className="max-w-3xl">
            <p className="text-accent-400 uppercase tracking-[0.3em] text-sm mb-6">{c.forAllEvents}</p>
            <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
              {t('services.hero.title')}
            </h1>
            <p className="text-xl text-white/80 mb-10">
              {t('services.hero.subtitle')}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent-600 text-white hover:bg-accent-500 transition-colors"
            >
              {c.requestQuote}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-24 bg-cream">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {c.services.map((service, index) => (
              <div key={index} className="bg-white p-10 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-secondary-900 rounded-full flex items-center justify-center mb-6">
                  <service.icon size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-serif text-secondary-900 mb-4">{service.title}</h3>
                <p className="text-secondary-600 mb-6">{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-secondary-600">
                      <Star size={14} className="text-accent-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-24 bg-white">
        <div className="container-site">
          <div className="text-center mb-16">
            <p className="text-accent-600 uppercase tracking-[0.3em] text-sm mb-4">{c.forAllEvents}</p>
            <h2 className="text-4xl md:text-5xl font-serif text-secondary-900">
              {c.serviceTypes}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {c.eventTypes.map((event, index) => (
              <div
                key={index}
                className="group relative p-8 bg-secondary-900 text-white hover:bg-accent-600 transition-colors cursor-pointer"
              >
                <h3 className="text-xl font-serif mb-2">{event.title}</h3>
                <p className="text-white/70 group-hover:text-white/90 transition-colors">{event.desc}</p>
                <ArrowRight size={20} className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Info */}
      <section className="py-24 bg-secondary-900 text-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent-400 uppercase tracking-[0.3em] text-sm mb-6">{c.pricing}</p>
              <h2 className="text-4xl md:text-5xl font-serif mb-8">
                {c.pricingTitle}
              </h2>
              <p className="text-secondary-300 leading-relaxed mb-6">
                {c.pricingDesc}
              </p>
              <ul className="space-y-3 text-secondary-300">
                {c.pricingItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-accent-400 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 p-10 backdrop-blur">
              <h3 className="text-2xl font-serif mb-6">{c.freeQuote}</h3>
              <p className="text-secondary-300 mb-8">
                {c.quoteDesc}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-secondary-900 hover:bg-accent-400 hover:text-white transition-colors"
                >
                  {c.contactForm}
                  <ArrowRight size={16} />
                </Link>
                <a
                  href="tel:+41792177161"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white text-white hover:bg-white hover:text-secondary-900 transition-colors"
                >
                  <Phone size={16} />
                  {c.call}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-cream">
        <div className="container-site text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-secondary-900 mb-6">
            {c.readyToOrganize}
          </h2>
          <p className="text-secondary-600 mb-10 max-w-xl mx-auto">
            {c.teamAtService}
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

export default ServicesV2;

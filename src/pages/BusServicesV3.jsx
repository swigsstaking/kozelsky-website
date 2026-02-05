import SEOHead from '../components/SEOHead';
import { ArrowRight, MapPin, Truck, Settings, Utensils, Users, Sparkles, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

const IMAGES = {
  hero: 'https://swigs.online/uploads/kozelsky/1770039666874-770981752.webp',
  busInterior: 'https://swigs.online/uploads/kozelsky/1770039666610-182643998.webp',
};

const CONTACT = {
  phone: '+41 79 217 71 61',
  email: 'welcome@kozelsky.ch',
};

const BusServicesV3 = () => {
  const { t, language } = useLanguage();

  const content = {
    fr: {
      heroTitle: 'Nos Services',
      heroSubtitle: 'Service complet et mobile',
      atYourService: 'À votre service',
      atYourServiceDesc: 'Nous prenons le temps pour chacun de nos clients et nous les accompagnons tout au long de la création et de l\'organisation de leur évènement.',
      services: [
        { icon: MapPin, title: 'Lieux d\'exception', desc: 'Nous trouvons l\'endroit idéal pour votre prestation selon vos préférences.' },
        { icon: Truck, title: 'Transport', desc: 'Le déplacement du Bus est effectué par nos chauffeurs professionnels agréés.' },
        { icon: Settings, title: 'Mise en place', desc: 'Installation complète incluant branchement électrique 32A, eau propre et évacuation.' },
        { icon: Utensils, title: 'Service Traiteur', desc: 'Apéritif, cocktail dînatoire ou repas assis sur-mesure selon vos envies.' },
        { icon: Users, title: 'Personnel', desc: 'Équipe professionnelle sélectionnée pour un service irréprochable.' },
        { icon: Sparkles, title: 'Nettoyage', desc: 'Service de nettoyage inclus dans le forfait montage/démontage.' },
      ],
      pricingLabel: 'Tarification',
      pricing: 'Tarification sur-mesure',
      pricingDesc: 'Les tarifs varient selon le nombre de kilomètres, la durée de location, le personnel nécessaire et le mobilier. Contactez-nous pour un devis personnalisé.',
      navEquipment: 'Équipement',
      navEquipmentDesc: 'Bar 100% équipé',
      navTeam: 'L\'équipe',
      navTeamDesc: 'Mélanie et Fabian',
      navHistory: 'Histoire',
      navHistoryDesc: 'La naissance du projet',
    },
    de: {
      heroTitle: 'Unsere Dienstleistungen',
      heroSubtitle: 'Kompletter und mobiler Service',
      atYourService: 'Zu Ihren Diensten',
      atYourServiceDesc: 'Wir nehmen uns Zeit für jeden unserer Kunden und begleiten sie während der gesamten Organisation ihrer Veranstaltung.',
      services: [
        { icon: MapPin, title: 'Außergewöhnliche Orte', desc: 'Wir finden den idealen Ort für Ihre Veranstaltung nach Ihren Wünschen.' },
        { icon: Truck, title: 'Transport', desc: 'Der Transport des Busses erfolgt durch unsere zugelassenen professionellen Fahrer.' },
        { icon: Settings, title: 'Aufbau', desc: 'Komplette Installation einschließlich 32A-Stromanschluss, Frischwasser und Abwasser.' },
        { icon: Utensils, title: 'Catering-Service', desc: 'Aperitif, Cocktail-Dinner oder Sitzessen nach Maß nach Ihren Wünschen.' },
        { icon: Users, title: 'Personal', desc: 'Professionelles Team, ausgewählt für tadellosen Service.' },
        { icon: Sparkles, title: 'Reinigung', desc: 'Reinigungsservice im Auf-/Abbaupaket enthalten.' },
      ],
      pricingLabel: 'Preisgestaltung',
      pricing: 'Maßgeschneiderte Preise',
      pricingDesc: 'Die Preise variieren je nach Entfernung, Mietdauer, benötigtem Personal und Mobiliar. Kontaktieren Sie uns für ein individuelles Angebot.',
      navEquipment: 'Ausstattung',
      navEquipmentDesc: 'Voll ausgestattete Bar',
      navTeam: 'Das Team',
      navTeamDesc: 'Mélanie und Fabian',
      navHistory: 'Geschichte',
      navHistoryDesc: 'Die Geburt des Projekts',
    },
    en: {
      heroTitle: 'Our Services',
      heroSubtitle: 'Complete and mobile service',
      atYourService: 'At your service',
      atYourServiceDesc: 'We take time for each of our clients and accompany them throughout the creation and organization of their event.',
      services: [
        { icon: MapPin, title: 'Exceptional locations', desc: 'We find the ideal location for your event according to your preferences.' },
        { icon: Truck, title: 'Transport', desc: 'The bus is transported by our licensed professional drivers.' },
        { icon: Settings, title: 'Setup', desc: 'Complete installation including 32A electrical connection, clean water and drainage.' },
        { icon: Utensils, title: 'Catering Service', desc: 'Aperitif, cocktail dinner or custom seated meal according to your wishes.' },
        { icon: Users, title: 'Staff', desc: 'Professional team selected for impeccable service.' },
        { icon: Sparkles, title: 'Cleaning', desc: 'Cleaning service included in the setup/teardown package.' },
      ],
      pricingLabel: 'Pricing',
      pricing: 'Custom pricing',
      pricingDesc: 'Prices vary according to kilometers, rental duration, staff needed and furniture. Contact us for a personalized quote.',
      navEquipment: 'Equipment',
      navEquipmentDesc: 'Fully equipped bar',
      navTeam: 'The Team',
      navTeamDesc: 'Mélanie and Fabian',
      navHistory: 'History',
      navHistoryDesc: 'The birth of the project',
    },
  };

  const c = content[language] || content.fr;

  return (
    <>
      <SEOHead page="bus-services" />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={IMAGES.hero}
            alt="Bus Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50" />
        </div>
        <div className="container-site relative z-10 text-white">
          <p className="text-accent-400 uppercase tracking-[0.3em] text-sm mb-4">Bus 11-97</p>
          <h1 className="text-5xl md:text-7xl font-serif mb-4">{c.heroTitle}</h1>
          <p className="text-xl text-white/80">{c.heroSubtitle}</p>
        </div>
      </section>

      {/* At your service - Dark */}
      <section className="py-20 bg-secondary-900">
        <div className="container-site text-center">
          <h2 className="text-4xl font-serif text-white mb-6">{c.atYourService}</h2>
          <p className="text-secondary-300 max-w-2xl mx-auto text-lg">{c.atYourServiceDesc}</p>
        </div>
      </section>

      {/* Services Grid - Dark with light hover */}
      <section className="py-24 bg-secondary-800">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {c.services.map((service, index) => (
              <div key={index} className="p-8 bg-secondary-900 hover:bg-cream group transition-colors">
                <div className="w-14 h-14 bg-accent-600 rounded-full flex items-center justify-center mb-6">
                  <service.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-serif text-white group-hover:text-secondary-900 mb-3 transition-colors">
                  {service.title}
                </h3>
                <p className="text-secondary-400 group-hover:text-secondary-600 transition-colors">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing - Light contrast section */}
      <section className="py-24 bg-cream text-secondary-900">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent-600 uppercase tracking-[0.3em] text-sm mb-6">{c.pricingLabel}</p>
              <h2 className="text-4xl font-serif mb-6">{c.pricing}</h2>
              <p className="text-secondary-600 leading-relaxed mb-8">{c.pricingDesc}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondary-900 text-white hover:bg-accent-600 transition-colors"
                >
                  <Phone size={18} />
                  {CONTACT.phone}
                </a>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-secondary-900 text-secondary-900 hover:bg-secondary-900 hover:text-white transition-colors"
                >
                  <Mail size={18} />
                  {CONTACT.email}
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src={IMAGES.busInterior}
                alt="Bus Interior"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Navigation - Dark */}
      <section className="py-16 bg-secondary-900">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/bus-11-97/v3/equipment" className="group p-8 bg-secondary-800 hover:bg-cream transition-colors text-center">
              <h3 className="text-xl font-serif text-white group-hover:text-secondary-900 mb-2 transition-colors">
                {c.navEquipment}
              </h3>
              <p className="text-secondary-400 group-hover:text-secondary-600 text-sm transition-colors">
                {c.navEquipmentDesc}
              </p>
            </Link>
            <Link to="/bus-11-97/v3/team" className="group p-8 bg-secondary-800 hover:bg-cream transition-colors text-center">
              <h3 className="text-xl font-serif text-white group-hover:text-secondary-900 mb-2 transition-colors">
                {c.navTeam}
              </h3>
              <p className="text-secondary-400 group-hover:text-secondary-600 text-sm transition-colors">
                {c.navTeamDesc}
              </p>
            </Link>
            <Link to="/bus-11-97/v3/history" className="group p-8 bg-secondary-800 hover:bg-cream transition-colors text-center">
              <h3 className="text-xl font-serif text-white group-hover:text-secondary-900 mb-2 transition-colors">
                {c.navHistory}
              </h3>
              <p className="text-secondary-400 group-hover:text-secondary-600 text-sm transition-colors">
                {c.navHistoryDesc}
              </p>
            </Link>
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

export default BusServicesV3;

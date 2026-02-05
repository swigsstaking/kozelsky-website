import SEOHead from '../components/SEOHead';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import ImageGallery from '../components/ImageGallery';

const IMAGES = {
  hero: 'https://swigs.online/uploads/kozelsky/1770039737716-863842881.webp',
  gallery: [
    'https://swigs.online/uploads/kozelsky/1770039736918-802731963.webp',
    'https://swigs.online/uploads/kozelsky/1770039737276-978932392.webp',
    'https://swigs.online/uploads/kozelsky/1770039738151-670307754.webp',
    'https://swigs.online/uploads/kozelsky/1770039738575-939373300.webp',
    'https://swigs.online/uploads/kozelsky/1770039739018-947645911.webp',
    'https://swigs.online/uploads/kozelsky/1770039739451-101414876.webp',
  ],
};

const CateringV4 = () => {
  const { t, language } = useLanguage();

  const content = {
    fr: {
      services: [
        { title: 'Cocktails dînatoires', desc: 'Créations raffinées pour vos réceptions' },
        { title: 'Repas assis', desc: 'Menus personnalisés jusqu\'à 200 couverts' },
        { title: 'Buffets', desc: 'Variété et abondance pour tous les goûts' },
        { title: 'Événements privés', desc: 'Mariages, anniversaires, célébrations' },
        { title: 'Événements corporate', desc: 'Séminaires, lancements, team building' },
        { title: 'Service complet', desc: 'Personnel, matériel et mise en place' },
      ],
      requestQuote: 'Demander un devis',
      ourServices: 'Nos Services',
      completeOffer: 'Une offre complète',
      gallery: 'Galerie',
      ourCreations: 'Nos créations',
      howItWorks: 'Comment ça marche',
      simpleProcess: 'Un processus simple',
      steps: [
        { num: '01', title: 'Contact', desc: 'Parlez-nous de votre événement' },
        { num: '02', title: 'Devis', desc: 'Recevez une proposition personnalisée' },
        { num: '03', title: 'Création', desc: 'Nous élaborons votre menu' },
        { num: '04', title: 'Jour J', desc: 'Nous gérons tout pour vous' },
      ],
    },
    de: {
      services: [
        { title: 'Cocktail-Dinner', desc: 'Raffinierte Kreationen für Ihre Empfänge' },
        { title: 'Sitzessen', desc: 'Personalisierte Menüs bis zu 200 Gedecke' },
        { title: 'Buffets', desc: 'Vielfalt und Fülle für jeden Geschmack' },
        { title: 'Private Veranstaltungen', desc: 'Hochzeiten, Geburtstage, Feiern' },
        { title: 'Firmenveranstaltungen', desc: 'Seminare, Launches, Team Building' },
        { title: 'Kompletter Service', desc: 'Personal, Material und Aufbau' },
      ],
      requestQuote: 'Angebot anfordern',
      ourServices: 'Unsere Dienstleistungen',
      completeOffer: 'Ein komplettes Angebot',
      gallery: 'Galerie',
      ourCreations: 'Unsere Kreationen',
      howItWorks: 'Wie es funktioniert',
      simpleProcess: 'Ein einfacher Prozess',
      steps: [
        { num: '01', title: 'Kontakt', desc: 'Erzählen Sie uns von Ihrer Veranstaltung' },
        { num: '02', title: 'Angebot', desc: 'Erhalten Sie einen personalisierten Vorschlag' },
        { num: '03', title: 'Kreation', desc: 'Wir erstellen Ihr Menü' },
        { num: '04', title: 'Der Tag', desc: 'Wir kümmern uns um alles für Sie' },
      ],
    },
    en: {
      services: [
        { title: 'Cocktail dinners', desc: 'Refined creations for your receptions' },
        { title: 'Seated meals', desc: 'Customized menus up to 200 guests' },
        { title: 'Buffets', desc: 'Variety and abundance for all tastes' },
        { title: 'Private events', desc: 'Weddings, birthdays, celebrations' },
        { title: 'Corporate events', desc: 'Seminars, launches, team building' },
        { title: 'Complete service', desc: 'Staff, equipment and setup' },
      ],
      requestQuote: 'Request a quote',
      ourServices: 'Our Services',
      completeOffer: 'A complete offer',
      gallery: 'Gallery',
      ourCreations: 'Our creations',
      howItWorks: 'How it works',
      simpleProcess: 'A simple process',
      steps: [
        { num: '01', title: 'Contact', desc: 'Tell us about your event' },
        { num: '02', title: 'Quote', desc: 'Receive a personalized proposal' },
        { num: '03', title: 'Creation', desc: 'We create your menu' },
        { num: '04', title: 'The Day', desc: 'We manage everything for you' },
      ],
    },
  };

  const c = content[language] || content.fr;

  return (
    <>
      <SEOHead page="catering" />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center py-32">
        <div className="absolute inset-0">
          <img
            src={IMAGES.hero}
            alt="Catering Kozelsky"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/90 via-secondary-900/70 to-secondary-900/40" />
        </div>
        <div className="container-site relative z-10">
          <div className="max-w-2xl">
            <p className="text-accent-400 uppercase tracking-[0.3em] text-sm mb-8">Kozelsky Catering</p>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-10 leading-tight">
              {t('catering.hero.title')}
            </h1>
            <p className="text-white/80 text-xl leading-relaxed mb-12">
              {t('catering.lastWord.wishesDesc')}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-secondary-900 rounded-full hover:bg-accent-400 hover:text-white transition-colors font-medium"
            >
              {c.requestQuote}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-cream">
        <div className="container-site">
          <div className="text-center mb-20">
            <p className="text-accent-600 uppercase tracking-[0.3em] text-sm mb-6">{c.ourServices}</p>
            <h2 className="text-5xl md:text-6xl font-serif text-secondary-900">
              {c.completeOffer}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {c.services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-10 rounded-3xl hover:shadow-2xl transition-all group"
              >
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mb-8 group-hover:bg-accent-600 transition-colors">
                  <Check size={28} className="text-accent-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-serif text-secondary-900 mb-4">{service.title}</h3>
                <p className="text-secondary-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-32 bg-white">
        <div className="container-site">
          <div className="text-center mb-20">
            <p className="text-accent-600 uppercase tracking-[0.3em] text-sm mb-6">{c.gallery}</p>
            <h2 className="text-5xl md:text-6xl font-serif text-secondary-900">
              {c.ourCreations}
            </h2>
          </div>

          <ImageGallery
            images={IMAGES.gallery.map((src, idx) => ({ src, alt: `Création ${idx + 1}` }))}
            layout="masonry"
          />
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-secondary-900 text-white">
        <div className="container-site">
          <div className="text-center mb-20">
            <p className="text-accent-400 uppercase tracking-[0.3em] text-sm mb-6">{c.howItWorks}</p>
            <h2 className="text-5xl md:text-6xl font-serif">
              {c.simpleProcess}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {c.steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 border-2 border-accent-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <p className="text-4xl font-serif text-accent-400">{step.num}</p>
                </div>
                <h3 className="text-xl font-medium mb-3">{step.title}</h3>
                <p className="text-secondary-400">{step.desc}</p>
              </div>
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

export default CateringV4;

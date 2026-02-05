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

const CateringV2 = () => {
  const { t, language } = useLanguage();

  const content = {
    fr: {
      requestQuote: 'Demander un devis',
      ourServices: 'Nos Services',
      completeOffer: 'Une offre complète',
      services: [
        { title: 'Cocktails dînatoires', desc: 'Créations raffinées pour vos réceptions' },
        { title: 'Repas assis', desc: 'Menus personnalisés jusqu\'à 200 couverts' },
        { title: 'Buffets', desc: 'Variété et abondance pour tous les goûts' },
        { title: 'Événements privés', desc: 'Mariages, anniversaires, célébrations' },
        { title: 'Événements corporate', desc: 'Séminaires, lancements, team building' },
        { title: 'Service complet', desc: 'Personnel, matériel et mise en place' },
      ],
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
      requestQuote: 'Angebot anfordern',
      ourServices: 'Unsere Dienstleistungen',
      completeOffer: 'Ein komplettes Angebot',
      services: [
        { title: 'Cocktail-Dinner', desc: 'Raffinierte Kreationen für Ihre Empfänge' },
        { title: 'Sitzmenü', desc: 'Individuelle Menüs bis zu 200 Gedecken' },
        { title: 'Buffets', desc: 'Vielfalt und Fülle für jeden Geschmack' },
        { title: 'Private Events', desc: 'Hochzeiten, Geburtstage, Feiern' },
        { title: 'Firmenveranstaltungen', desc: 'Seminare, Produkteinführungen, Teambuilding' },
        { title: 'Komplettservice', desc: 'Personal, Material und Aufbau' },
      ],
      gallery: 'Galerie',
      ourCreations: 'Unsere Kreationen',
      howItWorks: 'So funktioniert es',
      simpleProcess: 'Ein einfacher Prozess',
      steps: [
        { num: '01', title: 'Kontakt', desc: 'Erzählen Sie uns von Ihrem Event' },
        { num: '02', title: 'Angebot', desc: 'Erhalten Sie ein individuelles Angebot' },
        { num: '03', title: 'Kreation', desc: 'Wir erstellen Ihr Menü' },
        { num: '04', title: 'Der Tag', desc: 'Wir kümmern uns um alles' },
      ],
    },
    en: {
      requestQuote: 'Request a quote',
      ourServices: 'Our Services',
      completeOffer: 'A complete offer',
      services: [
        { title: 'Cocktail dinners', desc: 'Refined creations for your receptions' },
        { title: 'Seated meals', desc: 'Custom menus up to 200 covers' },
        { title: 'Buffets', desc: 'Variety and abundance for all tastes' },
        { title: 'Private events', desc: 'Weddings, birthdays, celebrations' },
        { title: 'Corporate events', desc: 'Seminars, launches, team building' },
        { title: 'Full service', desc: 'Staff, equipment and setup' },
      ],
      gallery: 'Gallery',
      ourCreations: 'Our creations',
      howItWorks: 'How it works',
      simpleProcess: 'A simple process',
      steps: [
        { num: '01', title: 'Contact', desc: 'Tell us about your event' },
        { num: '02', title: 'Quote', desc: 'Receive a personalized proposal' },
        { num: '03', title: 'Creation', desc: 'We design your menu' },
        { num: '04', title: 'D-Day', desc: 'We handle everything for you' },
      ],
    },
  };

  const c = content[language] || content.fr;

  return (
    <>
      <SEOHead page="catering" />

      {/* Hero - Horizontal split */}
      <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
        <div className="relative order-2 lg:order-1">
          <img
            src={IMAGES.hero}
            alt="Catering Kozelsky"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="flex items-center justify-center bg-secondary-900 text-white p-12 lg:p-20 order-1 lg:order-2">
          <div className="max-w-lg">
            <p className="text-accent-400 uppercase tracking-[0.3em] text-sm mb-6">Kozelsky Catering</p>
            <h1 className="text-5xl md:text-6xl font-serif mb-8 leading-tight">
              {t('catering.hero.title')}
            </h1>
            <p className="text-secondary-300 text-lg leading-relaxed mb-10">
              {t('catering.lastWord.wishesDesc')}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-secondary-900 hover:bg-accent-400 hover:text-white transition-colors"
            >
              {c.requestQuote}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-cream">
        <div className="container-site">
          <div className="text-center mb-16">
            <p className="text-accent-600 uppercase tracking-[0.3em] text-sm mb-4">{c.ourServices}</p>
            <h2 className="text-4xl md:text-5xl font-serif text-secondary-900">
              {c.completeOffer}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {c.services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 hover:shadow-xl transition-shadow group"
              >
                <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent-600 transition-colors">
                  <Check size={24} className="text-accent-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-serif text-secondary-900 mb-3">{service.title}</h3>
                <p className="text-secondary-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery - Masonry style */}
      <section className="py-24 bg-white">
        <div className="container-site">
          <div className="text-center mb-16">
            <p className="text-accent-600 uppercase tracking-[0.3em] text-sm mb-4">{c.gallery}</p>
            <h2 className="text-4xl md:text-5xl font-serif text-secondary-900">
              {c.ourCreations}
            </h2>
          </div>

          <ImageGallery
            images={IMAGES.gallery.map((src, idx) => ({ src, alt: `${c.ourCreations} ${idx + 1}` }))}
            layout="grid"
          />
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-secondary-900 text-white">
        <div className="container-site">
          <div className="text-center mb-16">
            <p className="text-accent-400 uppercase tracking-[0.3em] text-sm mb-4">{c.howItWorks}</p>
            <h2 className="text-4xl md:text-5xl font-serif">
              {c.simpleProcess}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {c.steps.map((step, index) => (
              <div key={index} className="text-center">
                <p className="text-6xl font-serif text-accent-400 mb-4">{step.num}</p>
                <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                <p className="text-secondary-400">{step.desc}</p>
              </div>
            ))}
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

export default CateringV2;

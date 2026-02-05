import SEOHead from '../components/SEOHead';
import { ArrowRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

const IMAGES = {
  team: 'https://swigs.online/uploads/kozelsky/1770040834133-111431822.webp',
  kitchen: 'https://swigs.online/uploads/kozelsky/1770039737716-863842881.webp',
  bus: 'https://swigs.online/uploads/kozelsky/1770039666874-770981752.webp',
};

const NousV4 = () => {
  const { t, language } = useLanguage();

  const content = {
    fr: {
      ourHistory: 'Notre Histoire',
      quote: '"Notre passion pour la gastronomie et notre amour du service nous poussent chaque jour à donner le meilleur de nous-mêmes."',
      founders: '— Mélanie & Fabian, Fondateurs',
      ourJourney: 'Notre Parcours',
      milestones: 'Les grandes étapes',
      timeline: [
        { year: '2018', title: 'Création', desc: 'Naissance de Kozelsky Catering à Fribourg' },
        { year: '2019', title: 'Expansion', desc: 'Premiers grands événements corporate' },
        { year: '2021', title: 'Le Bus', desc: 'Acquisition et rénovation du Bus 11-97' },
        { year: '2023', title: 'Excellence', desc: 'Reconnaissance régionale et nationale' },
      ],
      whatDefinesUs: 'Ce qui nous définit',
      ourValues: 'Nos valeurs',
      values: [
        { title: 'Passion', desc: 'Chaque plat est créé avec amour et dévouement' },
        { title: 'Qualité', desc: 'Ingrédients frais et locaux, sans compromis' },
        { title: 'Créativité', desc: 'Innovation constante dans nos créations' },
        { title: 'Service', desc: 'Votre satisfaction est notre priorité absolue' },
      ],
      ourExpertise: 'Notre savoir-faire',
      inTheKitchen: 'En cuisine',
      kitchenText1: 'Chaque création est pensée, élaborée et exécutée avec la plus grande attention. Nous travaillons exclusivement avec des produits frais et de saison, privilégiant les circuits courts et les producteurs locaux.',
      kitchenText2: 'Notre équipe de cuisiniers passionnés met tout son savoir-faire au service de vos événements, pour des moments inoubliables.',
      wantToCollaborate: 'Envie de collaborer ?',
      contactForEvent: 'Contactez-nous pour discuter de votre prochain événement.',
    },
    de: {
      ourHistory: 'Unsere Geschichte',
      quote: '"Unsere Leidenschaft für die Gastronomie und unsere Liebe zum Service treiben uns jeden Tag an, unser Bestes zu geben."',
      founders: '— Mélanie & Fabian, Gründer',
      ourJourney: 'Unser Werdegang',
      milestones: 'Die großen Etappen',
      timeline: [
        { year: '2018', title: 'Gründung', desc: 'Geburt von Kozelsky Catering in Freiburg' },
        { year: '2019', title: 'Expansion', desc: 'Erste große Firmenveranstaltungen' },
        { year: '2021', title: 'Der Bus', desc: 'Erwerb und Renovierung des Bus 11-97' },
        { year: '2023', title: 'Exzellenz', desc: 'Regionale und nationale Anerkennung' },
      ],
      whatDefinesUs: 'Was uns ausmacht',
      ourValues: 'Unsere Werte',
      values: [
        { title: 'Leidenschaft', desc: 'Jedes Gericht wird mit Liebe und Hingabe kreiert' },
        { title: 'Qualität', desc: 'Frische und lokale Zutaten, ohne Kompromisse' },
        { title: 'Kreativität', desc: 'Ständige Innovation in unseren Kreationen' },
        { title: 'Service', desc: 'Ihre Zufriedenheit ist unsere oberste Priorität' },
      ],
      ourExpertise: 'Unser Know-how',
      inTheKitchen: 'In der Küche',
      kitchenText1: 'Jede Kreation wird mit größter Sorgfalt durchdacht, ausgearbeitet und ausgeführt. Wir arbeiten ausschließlich mit frischen und saisonalen Produkten und bevorzugen kurze Wege und lokale Produzenten.',
      kitchenText2: 'Unser Team leidenschaftlicher Köche setzt sein ganzes Know-how für Ihre Veranstaltungen ein, für unvergessliche Momente.',
      wantToCollaborate: 'Lust auf Zusammenarbeit?',
      contactForEvent: 'Kontaktieren Sie uns, um über Ihre nächste Veranstaltung zu sprechen.',
    },
    en: {
      ourHistory: 'Our History',
      quote: '"Our passion for gastronomy and our love of service drive us every day to give the best of ourselves."',
      founders: '— Mélanie & Fabian, Founders',
      ourJourney: 'Our Journey',
      milestones: 'The milestones',
      timeline: [
        { year: '2018', title: 'Creation', desc: 'Birth of Kozelsky Catering in Freiburg' },
        { year: '2019', title: 'Expansion', desc: 'First major corporate events' },
        { year: '2021', title: 'The Bus', desc: 'Acquisition and renovation of Bus 11-97' },
        { year: '2023', title: 'Excellence', desc: 'Regional and national recognition' },
      ],
      whatDefinesUs: 'What defines us',
      ourValues: 'Our values',
      values: [
        { title: 'Passion', desc: 'Every dish is created with love and dedication' },
        { title: 'Quality', desc: 'Fresh and local ingredients, without compromise' },
        { title: 'Creativity', desc: 'Constant innovation in our creations' },
        { title: 'Service', desc: 'Your satisfaction is our top priority' },
      ],
      ourExpertise: 'Our expertise',
      inTheKitchen: 'In the kitchen',
      kitchenText1: 'Each creation is thoughtfully designed, developed and executed with the greatest attention. We work exclusively with fresh, seasonal products, favoring short circuits and local producers.',
      kitchenText2: 'Our team of passionate cooks puts all their expertise at the service of your events, for unforgettable moments.',
      wantToCollaborate: 'Want to collaborate?',
      contactForEvent: 'Contact us to discuss your next event.',
    },
  };

  const c = content[language] || content.fr;

  return (
    <>
      <SEOHead page="nous" />

      {/* Hero */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={IMAGES.team}
            alt="L'équipe Kozelsky"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
        </div>
        <div className="container-site relative z-10 text-white">
          <p className="text-accent-400 uppercase tracking-[0.3em] text-sm mb-8">{c.ourHistory}</p>
          <h1 className="text-5xl md:text-7xl font-serif mb-8 max-w-3xl leading-tight">
            {t('nous.hero.title')}
          </h1>
          <p className="text-xl text-white/80 max-w-xl">
            {t('nous.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-32 bg-cream">
        <div className="container-site">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-10">
              <Quote size={40} className="text-accent-600" />
            </div>
            <blockquote className="text-3xl md:text-4xl font-serif text-secondary-900 leading-relaxed mb-10">
              {c.quote}
            </blockquote>
            <p className="text-secondary-600 text-lg">{c.founders}</p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 bg-white">
        <div className="container-site">
          <div className="text-center mb-20">
            <p className="text-accent-600 uppercase tracking-[0.3em] text-sm mb-6">{c.ourJourney}</p>
            <h2 className="text-5xl md:text-6xl font-serif text-secondary-900">
              {c.milestones}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {c.timeline.map((item, index) => (
              <div key={index} className="text-center bg-cream p-10 rounded-3xl">
                <p className="text-6xl font-serif text-accent-600 mb-4">{item.year}</p>
                <h3 className="text-2xl font-serif text-secondary-900 mb-3">{item.title}</h3>
                <p className="text-secondary-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-secondary-900 text-white">
        <div className="container-site">
          <div className="text-center mb-20">
            <p className="text-accent-400 uppercase tracking-[0.3em] text-sm mb-6">{c.whatDefinesUs}</p>
            <h2 className="text-5xl md:text-6xl font-serif">
              {c.ourValues}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {c.values.map((value, index) => (
              <div key={index} className="text-center p-10 bg-white/5 rounded-3xl hover:bg-white/10 transition-colors">
                <h3 className="text-2xl font-serif mb-5">{value.title}</h3>
                <p className="text-secondary-400">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image + Text Section */}
      <section className="py-32 bg-cream">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src={IMAGES.kitchen}
                alt="En cuisine"
                className="w-full aspect-[4/3] object-cover rounded-3xl"
              />
            </div>
            <div className="lg:pl-8">
              <p className="text-accent-600 uppercase tracking-[0.3em] text-sm mb-6">{c.ourExpertise}</p>
              <h2 className="text-5xl font-serif text-secondary-900 mb-8">
                {c.inTheKitchen}
              </h2>
              <p className="text-secondary-600 leading-relaxed text-lg mb-6">
                {c.kitchenText1}
              </p>
              <p className="text-secondary-600 leading-relaxed text-lg">
                {c.kitchenText2}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-white">
        <div className="container-site text-center">
          <h2 className="text-5xl md:text-6xl font-serif text-secondary-900 mb-8">
            {c.wantToCollaborate}
          </h2>
          <p className="text-secondary-600 mb-12 max-w-xl mx-auto text-lg">
            {c.contactForEvent}
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

export default NousV4;

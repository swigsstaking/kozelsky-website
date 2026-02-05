import SEOHead from '../components/SEOHead';
import { ArrowRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

const IMAGES = {
  team: 'https://swigs.online/uploads/kozelsky/1770040834133-111431822.webp',
  kitchen: 'https://swigs.online/uploads/kozelsky/1770039737716-863842881.webp',
  bus: 'https://swigs.online/uploads/kozelsky/1770039666874-770981752.webp',
};

const NousV2 = () => {
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
      inKitchen: 'En cuisine',
      kitchenDesc1: 'Chaque création est pensée, élaborée et exécutée avec la plus grande attention. Nous travaillons exclusivement avec des produits frais et de saison, privilégiant les circuits courts et les producteurs locaux.',
      kitchenDesc2: 'Notre équipe de cuisiniers passionnés met tout son savoir-faire au service de vos événements, pour des moments inoubliables.',
      collaborate: 'Envie de collaborer ?',
      collaborateDesc: 'Contactez-nous pour discuter de votre prochain événement.',
    },
    de: {
      ourHistory: 'Unsere Geschichte',
      quote: '"Unsere Leidenschaft für die Gastronomie und unsere Liebe zum Service treiben uns jeden Tag an, unser Bestes zu geben."',
      founders: '— Mélanie & Fabian, Gründer',
      ourJourney: 'Unser Weg',
      milestones: 'Die wichtigsten Meilensteine',
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
      inKitchen: 'In der Küche',
      kitchenDesc1: 'Jede Kreation wird mit größter Sorgfalt erdacht, entwickelt und ausgeführt. Wir arbeiten ausschließlich mit frischen, saisonalen Produkten und bevorzugen kurze Wege und lokale Produzenten.',
      kitchenDesc2: 'Unser Team aus leidenschaftlichen Köchen stellt all sein Können in den Dienst Ihrer Veranstaltungen, für unvergessliche Momente.',
      collaborate: 'Lust auf Zusammenarbeit?',
      collaborateDesc: 'Kontaktieren Sie uns, um über Ihre nächste Veranstaltung zu sprechen.',
    },
    en: {
      ourHistory: 'Our History',
      quote: '"Our passion for gastronomy and our love of service push us every day to give the best of ourselves."',
      founders: '— Mélanie & Fabian, Founders',
      ourJourney: 'Our Journey',
      milestones: 'Key milestones',
      timeline: [
        { year: '2018', title: 'Creation', desc: 'Birth of Kozelsky Catering in Fribourg' },
        { year: '2019', title: 'Expansion', desc: 'First major corporate events' },
        { year: '2021', title: 'The Bus', desc: 'Acquisition and renovation of Bus 11-97' },
        { year: '2023', title: 'Excellence', desc: 'Regional and national recognition' },
      ],
      whatDefinesUs: 'What defines us',
      ourValues: 'Our values',
      values: [
        { title: 'Passion', desc: 'Every dish is created with love and dedication' },
        { title: 'Quality', desc: 'Fresh and local ingredients, no compromise' },
        { title: 'Creativity', desc: 'Constant innovation in our creations' },
        { title: 'Service', desc: 'Your satisfaction is our absolute priority' },
      ],
      inKitchen: 'In the kitchen',
      kitchenDesc1: 'Every creation is thoughtfully designed, developed and executed with the utmost care. We work exclusively with fresh, seasonal products, favoring short supply chains and local producers.',
      kitchenDesc2: 'Our team of passionate chefs puts all their expertise at the service of your events, for unforgettable moments.',
      collaborate: 'Want to collaborate?',
      collaborateDesc: 'Contact us to discuss your next event.',
    },
  };

  const c = content[language] || content.fr;

  return (
    <>
      <SEOHead page="nous" />

      {/* Hero - Full width with overlay text */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={IMAGES.team}
            alt="L'équipe Kozelsky"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container-site relative z-10 text-white">
          <p className="text-accent-400 uppercase tracking-[0.3em] text-sm mb-6">{c.ourHistory}</p>
          <h1 className="text-5xl md:text-7xl font-serif mb-6 max-w-3xl leading-tight">
            {t('nous.hero.title')}
          </h1>
          <p className="text-xl text-white/80 max-w-xl">
            {t('nous.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 bg-cream">
        <div className="container-site">
          <div className="max-w-4xl mx-auto text-center">
            <Quote size={48} className="text-accent-400 mx-auto mb-8" />
            <blockquote className="text-3xl md:text-4xl font-serif text-secondary-900 leading-relaxed mb-8">
              {c.quote}
            </blockquote>
            <p className="text-secondary-600">{c.founders}</p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="container-site">
          <div className="text-center mb-16">
            <p className="text-accent-600 uppercase tracking-[0.3em] text-sm mb-4">{c.ourJourney}</p>
            <h2 className="text-4xl md:text-5xl font-serif text-secondary-900">
              {c.milestones}
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-secondary-200 hidden md:block" />

            <div className="space-y-12">
              {c.timeline.map((item, index) => (
                <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <p className="text-5xl font-serif text-accent-600 mb-2">{item.year}</p>
                    <h3 className="text-2xl font-serif text-secondary-900 mb-2">{item.title}</h3>
                    <p className="text-secondary-600">{item.desc}</p>
                  </div>
                  <div className="hidden md:flex w-4 h-4 bg-accent-600 rounded-full relative z-10" />
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-secondary-900 text-white">
        <div className="container-site">
          <div className="text-center mb-16">
            <p className="text-accent-400 uppercase tracking-[0.3em] text-sm mb-4">{c.whatDefinesUs}</p>
            <h2 className="text-4xl md:text-5xl font-serif">
              {c.ourValues}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {c.values.map((value, index) => (
              <div key={index} className="text-center p-8 border border-white/20 hover:border-accent-400 transition-colors">
                <h3 className="text-2xl font-serif mb-4">{value.title}</h3>
                <p className="text-secondary-400">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image + Text Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative h-[50vh] lg:h-auto">
          <img
            src={IMAGES.kitchen}
            alt={c.inKitchen}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="flex items-center bg-cream p-12 lg:p-20">
          <div>
            <h2 className="text-4xl font-serif text-secondary-900 mb-6">
              {c.inKitchen}
            </h2>
            <p className="text-secondary-600 leading-relaxed mb-6">
              {c.kitchenDesc1}
            </p>
            <p className="text-secondary-600 leading-relaxed">
              {c.kitchenDesc2}
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="container-site text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-secondary-900 mb-6">
            {c.collaborate}
          </h2>
          <p className="text-secondary-600 mb-10 max-w-xl mx-auto">
            {c.collaborateDesc}
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

export default NousV2;

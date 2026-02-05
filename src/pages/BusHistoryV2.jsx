import SEOHead from '../components/SEOHead';
import { ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { useState, useEffect, useCallback } from 'react';

// Custom 2x2 Grid Gallery with lightbox
const Grid2x2Gallery = ({ images, altPrefix }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [lightboxOpen, goNext, goPrev]);

  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="cursor-pointer overflow-hidden group"
            onClick={() => openLightbox(index)}
          >
            <img
              src={src}
              alt={`${altPrefix} ${index + 1}`}
              className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-accent-400 transition-colors z-10"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>

          <button
            className="absolute left-4 text-white hover:text-accent-400 transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
          >
            <ChevronLeft size={48} />
          </button>

          <img
            src={images[currentIndex]}
            alt={`${altPrefix} ${currentIndex + 1}`}
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="absolute right-4 text-white hover:text-accent-400 transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); goNext(); }}
          >
            <ChevronRight size={48} />
          </button>

          <div className="absolute bottom-4 text-white text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
};

const IMAGES = {
  hero: 'https://swigs.online/uploads/kozelsky/1770039666381-591898801.webp',
  birthGallery: [
    'https://swigs.online/uploads/kozelsky/1770109836531-220273564.webp',
    'https://swigs.online/uploads/kozelsky/1770109834665-274260182.webp',
    'https://swigs.online/uploads/kozelsky/1770109835484-192348464.webp',
    'https://swigs.online/uploads/kozelsky/1770109840567-192801908.webp',
    'https://swigs.online/uploads/kozelsky/1770109835153-346887973.webp',
    'https://swigs.online/uploads/kozelsky/1770109840204-217183836.webp',
  ],
  transportGallery: [
    'https://swigs.online/uploads/kozelsky/1770109839238-715380146.webp',
    'https://swigs.online/uploads/kozelsky/1770109835810-634479348.webp',
    'https://swigs.online/uploads/kozelsky/1770109836678-375826392.webp',
    'https://swigs.online/uploads/kozelsky/1770109838738-434036014.webp',
  ],
  renovationGallery: [
    'https://swigs.online/uploads/kozelsky/1770109838406-294112483.webp',
    'https://swigs.online/uploads/kozelsky/1770109836146-718641680.webp',
    'https://swigs.online/uploads/kozelsky/1770109837905-695908295.webp',
    'https://swigs.online/uploads/kozelsky/1770109839681-572873176.webp',
  ],
};

const BusHistoryV2 = () => {
  const { t, language } = useLanguage();

  const content = {
    fr: {
      heroTitle: 'L\'Histoire du 11-97',
      heroSubtitle: 'Une deuxième vie pour ce bus légendaire',
      timeline: [
        { year: '2020', title: 'La découverte', desc: 'Mélanie et Fabian trouvent le bus à Fribourg' },
        { year: '2021', title: 'Le transport', desc: 'Retour du bus en Angleterre pour rénovation' },
        { year: '2022', title: 'Les travaux', desc: 'Rénovation complète et design intérieur' },
        { year: '2022', title: 'Foire du Valais', desc: 'Première présentation officielle' },
      ],
      august2020: 'Août 2020',
      birth: 'Naissance du projet',
      birthDesc: 'C\'est en août 2020 que Mélanie et Fabian trouvent le bus sur un site de petites annonces. Après une visite et un gros coup de coeur, ils décident de l\'acheter pour lui donner une seconde vie.',
      transport: 'Le voyage vers l\'Angleterre',
      transportDesc: 'Le bus étant de 1962 avec une mécanique anglaise particulière, la meilleure option était de le renvoyer en Angleterre, là où il a parcouru plus d\'1 million de km entre 1962 et 1985.',
      renovation: 'La renaissance',
      renovationDesc: 'Démontage total, nouvelle mécanique, carrosserie, génératrice, découpage du toit pour les lois suisses, puis design intérieur : matériaux, couleurs, luminaires et bar sur-mesure.',
      valaisFair: 'Foire du Valais 2022',
      finish: 'Le projet abouti',
      finishDesc: 'Après la fin des travaux et le retour en Suisse, le bus a été présenté pour la première fois à la Foire du Valais en 2022, permettant au grand public de découvrir ce projet unique.',
      navEquipment: 'Équipement',
      navEquipmentDesc: 'Bar 100% équipé',
      navServices: 'Services',
      navServicesDesc: 'Transport, mise en place',
      navTeam: 'L\'équipe',
      navTeamDesc: 'Mélanie et Fabian',
    },
    de: {
      heroTitle: 'Die Geschichte des 11-97',
      heroSubtitle: 'Ein zweites Leben für diesen legendären Bus',
      timeline: [
        { year: '2020', title: 'Die Entdeckung', desc: 'Mélanie und Fabian finden den Bus in Freiburg' },
        { year: '2021', title: 'Der Transport', desc: 'Rückkehr des Busses nach England zur Renovierung' },
        { year: '2022', title: 'Die Arbeiten', desc: 'Komplette Renovierung und Innendesign' },
        { year: '2022', title: 'Walliser Messe', desc: 'Erste offizielle Präsentation' },
      ],
      august2020: 'August 2020',
      birth: 'Geburt des Projekts',
      birthDesc: 'Im August 2020 finden Mélanie und Fabian den Bus auf einer Kleinanzeigenseite. Nach einem Besuch und einem großen Coup de Coeur beschließen sie, ihn zu kaufen, um ihm ein zweites Leben zu geben.',
      transport: 'Die Reise nach England',
      transportDesc: 'Da der Bus von 1962 mit einer besonderen englischen Mechanik stammt, war die beste Option, ihn nach England zurückzuschicken, wo er zwischen 1962 und 1985 über 1 Million km zurückgelegt hat.',
      renovation: 'Die Wiedergeburt',
      renovationDesc: 'Komplette Demontage, neue Mechanik, Karosserie, Generator, Dachschnitt für Schweizer Gesetze, dann Innendesign: Materialien, Farben, Beleuchtung und maßgefertigte Bar.',
      valaisFair: 'Walliser Messe 2022',
      finish: 'Das vollendete Projekt',
      finishDesc: 'Nach Abschluss der Arbeiten und der Rückkehr in die Schweiz wurde der Bus erstmals auf der Walliser Messe 2022 präsentiert.',
      navEquipment: 'Ausstattung',
      navEquipmentDesc: 'Voll ausgestattete Bar',
      navServices: 'Dienstleistungen',
      navServicesDesc: 'Transport, Aufbau',
      navTeam: 'Das Team',
      navTeamDesc: 'Mélanie und Fabian',
    },
    en: {
      heroTitle: 'The History of 11-97',
      heroSubtitle: 'A second life for this legendary bus',
      timeline: [
        { year: '2020', title: 'The discovery', desc: 'Mélanie and Fabian find the bus in Freiburg' },
        { year: '2021', title: 'The transport', desc: 'Return of the bus to England for renovation' },
        { year: '2022', title: 'The work', desc: 'Complete renovation and interior design' },
        { year: '2022', title: 'Valais Fair', desc: 'First official presentation' },
      ],
      august2020: 'August 2020',
      birth: 'Birth of the project',
      birthDesc: 'It was in August 2020 that Mélanie and Fabian found the bus on a classifieds site. After a visit and a big crush, they decided to buy it to give it a second life.',
      transport: 'The journey to England',
      transportDesc: 'The bus being from 1962 with particular English mechanics, the best option was to send it back to England, where it traveled over 1 million km between 1962 and 1985.',
      renovation: 'The rebirth',
      renovationDesc: 'Complete dismantling, new mechanics, bodywork, generator, roof cutting for Swiss laws, then interior design: materials, colors, lighting and custom bar.',
      valaisFair: 'Valais Fair 2022',
      finish: 'The finished project',
      finishDesc: 'After the work was completed and the return to Switzerland, the bus was presented for the first time at the Valais Fair in 2022, allowing the public to discover this unique project.',
      navEquipment: 'Equipment',
      navEquipmentDesc: 'Fully equipped bar',
      navServices: 'Services',
      navServicesDesc: 'Transport, setup',
      navTeam: 'The Team',
      navTeamDesc: 'Mélanie and Fabian',
    },
  };

  const c = content[language] || content.fr;

  return (
    <>
      <SEOHead page="bus-history" />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={IMAGES.hero}
            alt="Bus History"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>
        <div className="container-site relative z-10 text-white">
          <p className="text-accent-400 uppercase tracking-[0.3em] text-sm mb-4">Bus 11-97</p>
          <h1 className="text-5xl md:text-7xl font-serif mb-4">{c.heroTitle}</h1>
          <p className="text-xl text-white/80">{c.heroSubtitle}</p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-secondary-900 text-white">
        <div className="container-site">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {c.timeline.map((item, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-serif text-accent-400 mb-2">{item.year}</p>
                <h3 className="text-lg font-medium mb-1">{item.title}</h3>
                <p className="text-secondary-400 text-sm max-w-[150px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Birth */}
      <section className="py-24 bg-cream">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent-600 uppercase tracking-[0.3em] text-sm mb-4">{c.august2020}</p>
              <h2 className="text-4xl font-serif text-secondary-900 mb-6">{c.birth}</h2>
              <p className="text-secondary-600 leading-relaxed">{c.birthDesc}</p>
            </div>
            <Grid2x2Gallery
              images={IMAGES.birthGallery.slice(0, 4)}
              altPrefix={c.birth}
            />
          </div>
        </div>
      </section>

      {/* Transport */}
      <section className="py-24 bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <Grid2x2Gallery
                images={IMAGES.transportGallery}
                altPrefix={c.transport}
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-accent-600 uppercase tracking-[0.3em] text-sm mb-4">2021</p>
              <h2 className="text-4xl font-serif text-secondary-900 mb-6">{c.transport}</h2>
              <p className="text-secondary-600 leading-relaxed">{c.transportDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Renovation */}
      <section className="py-24 bg-cream">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent-600 uppercase tracking-[0.3em] text-sm mb-4">2022</p>
              <h2 className="text-4xl font-serif text-secondary-900 mb-6">{c.renovation}</h2>
              <p className="text-secondary-600 leading-relaxed">{c.renovationDesc}</p>
            </div>
            <Grid2x2Gallery
              images={IMAGES.renovationGallery}
              altPrefix={c.renovation}
            />
          </div>
        </div>
      </section>

      {/* Finish */}
      <section className="py-24 bg-secondary-900 text-white">
        <div className="container-site text-center">
          <p className="text-accent-400 uppercase tracking-[0.3em] text-sm mb-4">{c.valaisFair}</p>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">{c.finish}</h2>
          <p className="text-secondary-300 max-w-2xl mx-auto leading-relaxed">{c.finishDesc}</p>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 bg-cream">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/bus-11-97/v2/equipment" className="group p-8 bg-white hover:bg-secondary-900 transition-colors text-center">
              <h3 className="text-xl font-serif text-secondary-900 group-hover:text-white mb-2 transition-colors">
                {c.navEquipment}
              </h3>
              <p className="text-secondary-600 group-hover:text-secondary-300 text-sm transition-colors">
                {c.navEquipmentDesc}
              </p>
            </Link>
            <Link to="/bus-11-97/v2/services" className="group p-8 bg-white hover:bg-secondary-900 transition-colors text-center">
              <h3 className="text-xl font-serif text-secondary-900 group-hover:text-white mb-2 transition-colors">
                {c.navServices}
              </h3>
              <p className="text-secondary-600 group-hover:text-secondary-300 text-sm transition-colors">
                {c.navServicesDesc}
              </p>
            </Link>
            <Link to="/bus-11-97/v2/team" className="group p-8 bg-white hover:bg-secondary-900 transition-colors text-center">
              <h3 className="text-xl font-serif text-secondary-900 group-hover:text-white mb-2 transition-colors">
                {c.navTeam}
              </h3>
              <p className="text-secondary-600 group-hover:text-secondary-300 text-sm transition-colors">
                {c.navTeamDesc}
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
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

export default BusHistoryV2;

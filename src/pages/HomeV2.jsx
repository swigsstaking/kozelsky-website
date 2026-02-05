import SEOHead from '../components/SEOHead';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import ImageGallery from '../components/ImageGallery';

const IMAGES = {
  hero: 'https://swigs.online/uploads/kozelsky/1770040860124-33442328.webp',
  catering: [
    'https://swigs.online/uploads/kozelsky/1770039736918-802731963.webp',
    'https://swigs.online/uploads/kozelsky/1770039737276-978932392.webp',
    'https://swigs.online/uploads/kozelsky/1770039737716-863842881.webp',
  ],
  bus: [
    'https://swigs.online/uploads/kozelsky/1770039666874-770981752.webp',
    'https://swigs.online/uploads/kozelsky/1770039666610-182643998.webp',
  ],
  aviation: [
    'https://swigs.online/uploads/kozelsky/1770039644120-200457217.webp',
    'https://swigs.online/uploads/kozelsky/1770039644473-825639362.webp',
  ],
  impressions: [
    'https://swigs.online/uploads/kozelsky/1770040779195-635217521.webp',
    'https://swigs.online/uploads/kozelsky/1770040779617-662408557.webp',
    'https://swigs.online/uploads/kozelsky/1770040777537-755205822.webp',
  ],
  logo1197: 'https://swigs.online/uploads/kozelsky/1770040801871-137372873.png',
};

const partners = [
  { name: 'FVS Group', logo: 'https://swigs.online/uploads/kozelsky/1770040819957-513010942.png', url: 'https://www.fvsgroup.ch/' },
  { name: 'Friderici Special', logo: 'https://swigs.online/uploads/kozelsky/1770040819922-192473091.png', url: 'https://www.friderici.com/' },
  { name: 'Fovahm', logo: 'https://swigs.online/uploads/kozelsky/1770040819889-43322005.png', url: 'https://www.fovahm.ch/' },
  { name: 'Praedikat', logo: 'https://swigs.online/uploads/kozelsky/1770040820022-168069152.png', url: 'https://www.praedikat.ch/' },
];

const HomeV2 = () => {
  const { t } = useLanguage();

  return (
    <>
      <SEOHead page="home" />

      {/* Hero - Minimalist with large typography */}
      <section className="relative h-screen flex flex-col justify-center items-center bg-secondary-900 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src={IMAGES.hero}
            alt="Kozelsky"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-[15vw] md:text-[12vw] font-serif text-white leading-none tracking-tight">
            Kozelsky
          </h1>
          <div className="flex items-center justify-center gap-8 mt-8">
            <span className="w-20 h-px bg-white/50" />
            <p className="text-white/80 uppercase tracking-[0.5em] text-sm">Catering</p>
            <span className="w-20 h-px bg-white/50" />
          </div>
        </div>
      </section>

      {/* Le Traiteur - Images collage with CTA */}
      <section className="relative py-16 md:py-24">
        <div className="grid grid-cols-12">
          {/* Left images - 7 columns */}
          <div className="col-span-12 lg:col-span-7">
            <ImageGallery
              images={IMAGES.catering.map((src, idx) => ({ src, alt: `Catering ${idx + 1}` }))}
              layout="grid"
            />
          </div>

          {/* Right CTA - 5 columns */}
          <div className="col-span-12 lg:col-span-5 bg-cream flex items-center">
            <div className="p-12 lg:p-16">
              <h2 className="text-4xl md:text-5xl font-serif text-secondary-900 mb-6">
                Le Traiteur
              </h2>
              <p className="text-secondary-600 leading-relaxed mb-8">
                {t('home.caterer.desc')}
              </p>
              <Link
                to="/catering"
                className="inline-flex items-center gap-2 text-accent-600 hover:text-accent-700 font-medium transition-colors group"
              >
                {t('cta.discover')}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Le Bus 11-97 - Reversed layout */}
      <section className="relative py-16 md:py-24">
        <div className="grid grid-cols-12">
          {/* Left CTA - 5 columns */}
          <div className="col-span-12 lg:col-span-5 bg-secondary-900 flex items-center order-2 lg:order-1">
            <div className="p-12 lg:p-16">
              <img
                src={IMAGES.logo1197}
                alt="11-97"
                className="h-16 mb-8"
              />
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
                Le Bus 11-97
              </h2>
              <p className="text-secondary-300 leading-relaxed mb-8">
                {t('home.bus.desc')}
              </p>
              <Link
                to="/bus-11-97"
                className="inline-flex items-center gap-2 text-white border-b border-white pb-1 hover:text-accent-400 hover:border-accent-400 transition-colors group"
              >
                {t('cta.discover')}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right images - 7 columns */}
          <div className="col-span-12 lg:col-span-7 order-1 lg:order-2">
            <ImageGallery
              images={IMAGES.bus.map((src, idx) => ({ src, alt: `Bus 11-97 ${idx + 1}` }))}
              layout="grid"
            />
          </div>
        </div>
      </section>

      {/* Aviation Privée */}
      <section className="relative py-16 md:py-24">
        <div className="grid grid-cols-12">
          {/* Left images */}
          <div className="col-span-12 lg:col-span-8">
            <ImageGallery
              images={IMAGES.aviation.map((src, idx) => ({ src, alt: `Aviation privée ${idx + 1}` }))}
              layout="grid"
            />
          </div>

          {/* Right CTA */}
          <div className="col-span-12 lg:col-span-4 bg-primary-100 flex items-center">
            <div className="p-12 lg:p-16">
              <h2 className="text-3xl md:text-4xl font-serif text-secondary-900 mb-6">
                {t('nav.aviation')}
              </h2>
              <p className="text-secondary-600 leading-relaxed mb-8">
                {t('aviation.hero.subtitle')}
              </p>
              <Link
                to="/aviation-privee"
                className="inline-flex items-center gap-2 text-accent-600 hover:text-accent-700 font-medium transition-colors group"
              >
                {t('cta.discover')}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impressions - Full width mosaic */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-site mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-secondary-900 text-center">
            {t('impressions.hero.title')}
          </h2>
        </div>
        <ImageGallery
          images={IMAGES.impressions.map((src, idx) => ({ src, alt: `Impression ${idx + 1}` }))}
          layout="grid"
        />
        <div className="container-site mt-12 text-center">
          <Link
            to="/impressions"
            className="inline-flex items-center gap-2 px-8 py-4 bg-secondary-900 text-white hover:bg-secondary-800 transition-colors"
          >
            {t('cta.viewAll')}
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 md:py-24 bg-cream">
        <div className="container-site">
          <h2 className="text-center text-sm uppercase tracking-[0.3em] text-secondary-500 mb-12">
            {t('home.partners')}
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {partners.map((partner, index) => (
              <a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-50 hover:opacity-100 transition-opacity"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-10 w-auto"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 md:py-32 bg-secondary-900 text-white">
        <div className="container-site text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">{t('home.questions.title')}</h2>
          <p className="text-secondary-300 mb-10 max-w-xl mx-auto">
            {t('home.questions.desc')}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 border-2 border-white text-white hover:bg-white hover:text-secondary-900 transition-all uppercase tracking-wider text-sm font-semibold"
          >
            {t('cta.contact')}
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomeV2;

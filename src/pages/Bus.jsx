import SEOHead from '../components/SEOHead';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import BusScrollAnimation from '../components/BusScrollAnimation';
import PartnersCarousel from '../components/PartnersCarousel';
import ImageGallery from '../components/ImageGallery';

const IMAGES = {
  heroVideo: 'https://swigs.online/uploads/kozelsky/1770114967005-178815678.webm',
  heroImage: 'https://swigs.online/uploads/kozelsky/1770039666381-591898801.webp',
  presentedBy: 'https://swigs.online/uploads/kozelsky/1770040801840-440762802.png',
  kozelskyCatering: 'https://swigs.online/uploads/kozelsky/1770040801905-355143210.png',
  busPhoto: 'https://swigs.online/uploads/kozelsky/1770039666874-770981752.webp',
  busInterior: 'https://swigs.online/uploads/kozelsky/1770039666610-182643998.webp',
  logo1197: 'https://swigs.online/uploads/kozelsky/1770040801871-137372873.png',
  busGallery: [
    'https://swigs.online/uploads/kozelsky/1770039666874-770981752.webp',
    'https://swigs.online/uploads/kozelsky/1770039666610-182643998.webp',
    'https://swigs.online/uploads/kozelsky/1770039666381-591898801.webp',
  ],
};

const Bus = () => {
  const { t } = useLanguage();

  return (
    <>
      <SEOHead page="bus" />

      {/* Hero Section with Video */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster={IMAGES.heroImage}
          >
            <source src={IMAGES.heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/60 to-secondary-900/40" />
        </div>

        <div className="container-site relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4">
            {t('bus.hero.title')}
          </h1>
          <p className="text-xl text-white/80">{t('bus.hero.subtitle')}</p>
        </div>
      </section>

      {/* Logos Side by Side */}
      <section className="section bg-cream">
        <div className="container-site">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <img
              src={IMAGES.presentedBy}
              alt="Presented by Kozelsky Catering"
              className="h-20 lg:h-28 w-auto"
            />
            <img
              src={IMAGES.logo1197}
              alt="11-97.ch"
              className="h-20 lg:h-28 w-auto"
            />
          </div>
        </div>
      </section>

      {/* Bus Scroll Animation */}
      <BusScrollAnimation />

      {/* Un concept unique */}
      <section className="section bg-cream">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="heading-accent mb-4">{t('bus.unique.title')}</h3>
              <p className="text-secondary-600 leading-relaxed">
                {t('bus.unique.desc')}
              </p>
            </div>

            <div>
              <h3 className="heading-accent mb-4">{t('bus.atHand.title')}</h3>
              <p className="text-secondary-600 leading-relaxed">
                {t('bus.atHand.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Son équipement */}
      <section className="section bg-white">
        <div className="container-site">
          <div className="bg-cream p-8 lg:p-12">
            <h2 className="text-2xl lg:text-3xl font-serif text-secondary-900 mb-4">
              {t('bus.equipment.title')}
            </h2>
            <p className="text-secondary-600 mb-6">
              {t('bus.equipment.desc')}
            </p>
            <div className="mb-8">
              <img
                src={IMAGES.busInterior}
                alt="Bus 11-97 Interior"
                className="w-full h-auto"
              />
            </div>
            <Link to="/contact" className="btn-outline-gold">
              {t('cta.contact')}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* La location */}
      <section className="section bg-cream">
        <div className="container-site">
          <h2 className="section-title mb-8">{t('bus.rental.title')}</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="heading-accent mb-4">{t('bus.rental.complete')}</h3>
              <p className="text-secondary-600 leading-relaxed">
                {t('bus.unique.desc')}
              </p>
            </div>

            <div>
              <h3 className="heading-accent mb-4">{t('bus.rental.promotion')}</h3>
              <p className="text-secondary-600 leading-relaxed">
                {t('bus.atHand.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bus Gallery */}
      <section className="section bg-white">
        <div className="container-site">
          <ImageGallery
            images={IMAGES.busGallery.map((src, i) => ({ src, alt: `Bus 11-97 - ${i + 1}` }))}
            layout="grid"
          />
        </div>
      </section>

      {/* Unique et exclusif */}
      <section className="section bg-cream">
        <div className="container-site">
          <h2 className="section-title mb-4">{t('bus.uniqueExclusive.title')}</h2>
          <h3 className="heading-accent mb-6">{t('bus.uniqueExclusive.subtitle')}</h3>
          <p className="text-secondary-600 leading-relaxed max-w-3xl">
            {t('home.bus.desc')}
          </p>
        </div>
      </section>

      {/* Nos services */}
      <section className="section bg-white">
        <div className="container-site">
          <div className="bg-primary-200 p-8 lg:p-12">
            <h2 className="text-2xl lg:text-3xl font-serif text-secondary-900 mb-4">
              {t('home.services.title')}
            </h2>
            <p className="text-secondary-600 mb-6">
              {t('home.services.desc')}
            </p>
            <Link to="/services" className="btn-outline">
              {t('cta.discover')}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Catering Promo */}
      <section className="section bg-secondary-900 text-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="hidden lg:block">
              <img
                src={IMAGES.kozelskyCatering}
                alt="Kozelsky Catering"
                className="w-full max-w-sm mx-auto h-auto brightness-0 invert"
              />
            </div>

            <div className="text-center lg:text-left">
              <p className="text-secondary-300 text-lg leading-relaxed mb-6">
                {t('home.caterer.desc')}
              </p>
              <Link
                to="/catering"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white font-semibold hover:bg-white hover:text-secondary-900 transition-all duration-300 uppercase tracking-wider text-sm"
              >
                {t('cta.discover')}
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partenaires */}
      <PartnersCarousel title={t('home.partners')} />

      {/* CTA Contact */}
      <section className="section bg-white">
        <div className="container-site text-center">
          <h2 className="section-title mb-4">{t('home.questions.title')}</h2>
          <p className="text-secondary-600 mb-8 max-w-xl mx-auto">
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

export default Bus;

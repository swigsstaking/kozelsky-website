import SEOHead from '../components/SEOHead';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import PartnersCarousel from '../components/PartnersCarousel';

const IMAGES = {
  heroVideo: 'https://swigs.online/uploads/kozelsky/1770114967620-853210341.webm#t=10',
  logo1197: 'https://swigs.online/uploads/kozelsky/1770040801871-137372873.png',
  illuBusIcon: 'https://swigs.online/uploads/kozelsky/1770039758885-105968538.webp',
};

const CONTACT = {
  phone: '+41 79 217 71 61',
  email: 'welcome@kozelsky.ch',
};

const Services = () => {
  const { t } = useLanguage();

  return (
    <>
      <SEOHead page="services" />

      {/* Hero Section with Video */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src={IMAGES.heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/60 to-secondary-900/40" />
        </div>

        <div className="container-site relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4">
            {t('services.hero.title')}
          </h1>
        </div>
      </section>

      {/* Introduction */}
      <section className="section bg-cream">
        <div className="container-site">
          <h2 className="section-title mb-4">{t('services.atYourService.title')}</h2>
          <p className="text-secondary-600 leading-relaxed max-w-3xl">
            {t('services.atYourService.desc')}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-serif text-secondary-900 mb-4">{t('services.locations.title')}</h3>
              <p className="text-secondary-600 leading-relaxed mb-4">
                {t('services.locations.question')}
              </p>
              <p className="text-secondary-600 leading-relaxed">
                {t('services.locations.desc')}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-serif text-secondary-900 mb-4">{t('services.delivery.title')}</h3>
              <p className="text-secondary-600 leading-relaxed mb-4">
                {t('services.delivery.free')}
              </p>
              <p className="text-secondary-600 leading-relaxed">
                {t('services.delivery.charged')}
              </p>
            </div>

            <div className="md:col-span-2">
              <h3 className="text-2xl font-serif text-secondary-900 mb-6">
                {t('services.buffet.title')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="heading-accent mb-4">{t('services.buffet.simpleDelivery')}</h4>
                  <p className="text-secondary-600 leading-relaxed mb-4">
                    {t('services.buffet.simpleDesc1')}
                  </p>
                  <p className="text-secondary-600 leading-relaxed">
                    {t('services.buffet.simpleDesc2')}
                  </p>
                </div>
                <div>
                  <h4 className="heading-accent mb-4">{t('services.buffet.onSiteService')}</h4>
                  <p className="text-secondary-600 leading-relaxed">
                    {t('services.buffet.onSiteDesc')}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-serif text-secondary-900 mb-4">{t('services.staff.title')}</h3>
              <p className="text-secondary-600 leading-relaxed mb-4">
                {t('services.staff.desc1')}
              </p>
              <p className="text-secondary-600 leading-relaxed">
                {t('services.staff.desc2')}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-serif text-secondary-900 mb-4">{t('services.pricing.title')}</h3>
              <h4 className="heading-accent mb-4">{t('services.pricing.custom')}</h4>
              <p className="text-secondary-600 leading-relaxed mb-4">
                {t('services.pricing.customDesc')}
              </p>
              <h4 className="heading-accent mb-4 mt-6">{t('services.pricing.contactUs')}</h4>
              <p className="text-secondary-600 leading-relaxed">
                {t('services.pricing.contactDesc')}{' '}
                <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="text-accent-600 hover:underline">
                  {CONTACT.phone}
                </a>{' '}
                |{' '}
                <a href={`mailto:${CONTACT.email}`} className="text-accent-600 hover:underline">
                  {CONTACT.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bus 11-97 Promo */}
      <section className="section bg-secondary-900 text-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <img
                src={IMAGES.logo1197}
                alt="11-97.ch"
                className="h-16 lg:h-20 mb-6 mx-auto lg:mx-0 brightness-0 invert opacity-90"
                style={{ filter: 'brightness(0) invert(1) sepia(1) saturate(0) hue-rotate(0deg) brightness(1.1)' }}
              />
              <p className="text-secondary-300 text-lg leading-relaxed mb-6">
                {t('home.bus.desc')}
              </p>
              <Link
                to="/bus-11-97"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white font-semibold hover:bg-white hover:text-secondary-900 transition-all duration-300 uppercase tracking-wider text-sm"
              >
                {t('cta.welcomeOnBoard')}
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="hidden lg:flex justify-center">
              <img src={IMAGES.illuBusIcon} alt="" className="w-48 lg:w-64 opacity-90" />
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

export default Services;

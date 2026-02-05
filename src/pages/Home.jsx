import SEOHead from '../components/SEOHead';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import PartnersCarousel from '../components/PartnersCarousel';

// Image URLs
const IMAGES = {
  heroVideo: 'https://swigs.online/uploads/kozelsky/1770114967497-666715467.webm#t=10',
  heroFallback: 'https://swigs.online/uploads/kozelsky/1770040860124-33442328.webp',
  logo1197: 'https://swigs.online/uploads/kozelsky/1770040801871-137372873.png',
  illuBusIcon: 'https://swigs.online/uploads/kozelsky/1770039758885-105968538.webp',
};

const Home = () => {
  const { t } = useLanguage();

  return (
    <>
      <SEOHead page="home" />

      {/* Hero Section with Video */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster={IMAGES.heroFallback}
          >
            <source src={IMAGES.heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/60 to-secondary-900/40" />
        </div>

        <div className="container-site relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight">
              {t('home.hero.title')}
            </h1>
          </div>
        </div>
      </section>

      {/* Depuis 2021 - Notre Entreprise */}
      <section className="section bg-cream">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column */}
            <div>
              <h2 className="section-title mb-8">{t('home.since2021.title')}</h2>

              <div className="mb-8">
                <h3 className="heading-accent mb-4">{t('home.since2021.ourCompany')}</h3>
                <p className="text-secondary-600 leading-relaxed">
                  {t('home.since2021.companyDesc')}
                </p>
              </div>

              <div>
                <h3 className="heading-accent mb-4">{t('home.since2021.ourValues')}</h3>
                <p className="text-secondary-600 leading-relaxed">
                  {t('home.since2021.valuesDesc')}
                </p>
                <p className="text-secondary-600 leading-relaxed mt-4">
                  {t('home.since2021.listenDesc')}
                </p>
              </div>
            </div>

            {/* Right Column - Le Traiteur Card */}
            <div className="flex items-center">
              <div className="bg-white p-8 lg:p-10 shadow-sm w-full">
                <h2 className="text-2xl lg:text-3xl font-serif text-secondary-900 mb-4">
                  {t('home.caterer.title')}
                </h2>
                <p className="text-secondary-600 mb-6">
                  {t('home.caterer.desc')}
                </p>
                <Link to="/catering" className="btn-outline-gold">
                  {t('cta.discover')}
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sur-mesure */}
      <section className="section bg-white">
        <div className="container-site">
          <h2 className="section-title mb-4">{t('home.custom.title')}</h2>
          <h3 className="heading-accent mb-6">
            {t('home.custom.subtitle')}
          </h3>
          <p className="text-secondary-600 leading-relaxed max-w-3xl">
            {t('home.custom.desc')}
          </p>
          <p className="text-secondary-600 mt-4">
            {t('home.custom.minPersons')}
          </p>
        </div>
      </section>

      {/* Bienvenue à la maison */}
      <section className="section bg-cream">
        <div className="container-site">
          <h2 className="section-title mb-12">{t('home.welcome.title')}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="heading-accent mb-4">{t('home.welcome.subtitle')}</h3>
              <p className="text-secondary-600 leading-relaxed mb-4">
                {t('home.welcome.hallDesc')}
              </p>
              <p className="text-secondary-600 leading-relaxed">
                {t('home.welcome.accessDesc')}
              </p>
            </div>

            <div>
              <h3 className="heading-accent mb-4">
                {t('home.welcome.eventsTitle')}
              </h3>
              <p className="text-secondary-600 leading-relaxed mb-4">
                {t('home.welcome.eventsDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Services CTA */}
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
              <img
                src={IMAGES.illuBusIcon}
                alt=""
                className="w-48 lg:w-64 opacity-90"
              />
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

export default Home;

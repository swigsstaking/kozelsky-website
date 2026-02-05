import SEOHead from '../components/SEOHead';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import ImageGallery from '../components/ImageGallery';

const IMAGES = {
  gallery: [
    'https://swigs.online/uploads/kozelsky/1770039644120-200457217.webp',
    'https://swigs.online/uploads/kozelsky/1770039644473-825639362.webp',
    'https://swigs.online/uploads/kozelsky/1770039644837-210862301.webp',
    'https://swigs.online/uploads/kozelsky/1770039645201-640852255.webp',
    'https://swigs.online/uploads/kozelsky/1770039645671-63344933.webp',
    'https://swigs.online/uploads/kozelsky/1770039645973-490822970.webp',
    'https://swigs.online/uploads/kozelsky/1770039646418-881633611.webp',
    'https://swigs.online/uploads/kozelsky/1770039646825-564397817.webp',
    'https://swigs.online/uploads/kozelsky/1770039647264-581713973.webp',
    'https://swigs.online/uploads/kozelsky/1770039647605-699578059.webp',
  ],
};

const CONTACT = {
  phone: '+41 79 217 71 61',
  email: 'welcome@kozelsky.ch',
};

const Aviation = () => {
  const { t } = useLanguage();

  return (
    <>
      <SEOHead page="aviation" />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMAGES.gallery[0]}
            alt={t('aviation.hero.title')}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/70 to-secondary-900/50" />
        </div>

        <div className="container-site relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4">
            {t('aviation.hero.title')}
          </h1>
          <p className="text-xl text-white/80">{t('aviation.hero.subtitle')}</p>
        </div>
      </section>

      {/* Source Locale, Inspiration Mondiale */}
      <section className="section bg-cream">
        <div className="container-site">
          <h2 className="section-title mb-8">{t('aviation.local.title')}</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="heading-accent mb-4">{t('aviation.local.ourRole')}</h3>
              <p className="text-secondary-600 leading-relaxed mb-4">
                {t('aviation.local.roleDesc1')}
              </p>
              <p className="text-secondary-600 leading-relaxed">
                {t('aviation.local.roleDesc2')}
              </p>
            </div>

            <div>
              <h3 className="heading-accent mb-4">{t('aviation.local.customization')}</h3>
              <p className="text-secondary-600 leading-relaxed">
                {t('aviation.local.customDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section className="section bg-white">
        <div className="container-site">
          <ImageGallery
            images={IMAGES.gallery.map((src, i) => ({ src, alt: `${t('aviation.hero.title')} ${i + 1}` }))}
            layout="grid"
          />
        </div>
      </section>

      {/* Comment cela fonctionne */}
      <section className="section bg-cream">
        <div className="container-site">
          <h2 className="section-title mb-8">{t('aviation.howItWorks.title')}</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="heading-accent mb-4">{t('aviation.howItWorks.contactUs')}</h3>
              <p className="text-secondary-600 leading-relaxed mb-4">
                {t('aviation.howItWorks.contactDesc1')}{' '}
                <a href={`mailto:${CONTACT.email}`} className="text-accent-600 hover:underline">
                  {CONTACT.email}
                </a>
              </p>
              <p className="text-secondary-600 leading-relaxed">
                {t('aviation.howItWorks.contactDesc2')}{' '}
                <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="text-accent-600 hover:underline">
                  {CONTACT.phone}
                </a>
              </p>
            </div>

            <div>
              <h3 className="heading-accent mb-4">{t('aviation.howItWorks.catalog')}</h3>
              <p className="text-secondary-600 leading-relaxed mb-4">
                {t('aviation.howItWorks.catalogDesc1')}
              </p>
              <p className="text-secondary-600 leading-relaxed">
                {t('aviation.howItWorks.catalogDesc2')}
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

      {/* CTA Contact */}
      <section className="section bg-cream">
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

export default Aviation;

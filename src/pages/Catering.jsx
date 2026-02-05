import SEOHead from '../components/SEOHead';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import ImageGallery from '../components/ImageGallery';

const IMAGES = {
  heroVideo: 'https://swigs.online/uploads/kozelsky/1770114967274-366932636.webm#t=10',
  gallery: [
    'https://swigs.online/uploads/kozelsky/1770039736918-802731963.webp',
    'https://swigs.online/uploads/kozelsky/1770039737276-978932392.webp',
    'https://swigs.online/uploads/kozelsky/1770039737716-863842881.webp',
    'https://swigs.online/uploads/kozelsky/1770039738151-670307754.webp',
    'https://swigs.online/uploads/kozelsky/1770039738575-939373300.webp',
    'https://swigs.online/uploads/kozelsky/1770039739018-947645911.webp',
    'https://swigs.online/uploads/kozelsky/1770039739451-101414876.webp',
    'https://swigs.online/uploads/kozelsky/1770039739760-189734666.webp',
    'https://swigs.online/uploads/kozelsky/1770039740138-793219844.webp',
    'https://swigs.online/uploads/kozelsky/1770039740572-157431606.webp',
    'https://swigs.online/uploads/kozelsky/1770039740960-517126122.webp',
    'https://swigs.online/uploads/kozelsky/1770039741349-871885030.webp',
  ],
};

const CONTACT = {
  phone: '+41 79 217 71 61',
  email: 'welcome@kozelsky.ch',
};

const Catering = () => {
  const { t } = useLanguage();

  return (
    <>
      <SEOHead page="catering" />

      {/* Hero Section with Video */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={IMAGES.heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/60 to-secondary-900/40" />
        </div>

        <div className="container-site relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4">
            {t('catering.hero.title')}
          </h1>
        </div>
      </section>

      {/* Vous avez le dernier mot */}
      <section className="section bg-cream">
        <div className="container-site">
          <h2 className="section-title mb-8">{t('catering.lastWord.title')}</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="heading-accent mb-4">{t('catering.lastWord.yourWishes')}</h3>
              <p className="text-secondary-600 leading-relaxed mb-4">
                {t('catering.lastWord.wishesDesc')}
              </p>
              <p className="text-secondary-600 leading-relaxed">
                {t('catering.lastWord.possible')}
              </p>
            </div>

            <div>
              <h3 className="heading-accent mb-4">{t('catering.lastWord.ourWork')}</h3>
              <p className="text-secondary-600 leading-relaxed">
                {t('catering.lastWord.workDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section className="section bg-white overflow-hidden">
        <div className="container-site">
          <ImageGallery
            images={IMAGES.gallery.map((src, i) => ({ src, alt: `Catering ${i + 1}` }))}
            layout="grid"
          />
        </div>
      </section>

      {/* Comment cela fonctionne */}
      <section className="section bg-cream">
        <div className="container-site">
          <h2 className="section-title mb-8">{t('catering.howItWorks.title')}</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="heading-accent mb-4">{t('catering.howItWorks.contactUs')}</h3>
              <p className="text-secondary-600 leading-relaxed">
                {t('catering.howItWorks.contactDesc')}
              </p>
            </div>

            <div>
              <h3 className="heading-accent mb-4">{t('catering.howItWorks.makeChoice')}</h3>
              <p className="text-secondary-600 leading-relaxed">
                {t('catering.howItWorks.choiceDesc')}
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

export default Catering;

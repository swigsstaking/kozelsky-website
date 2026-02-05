import SEOHead from '../components/SEOHead';
import { ArrowRight, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import ImageGallery from '../components/ImageGallery';

const IMAGES = {
  mariages: [
    'https://swigs.online/uploads/kozelsky/1770040779195-635217521.webp',
    'https://swigs.online/uploads/kozelsky/1770040779617-662408557.webp',
    'https://swigs.online/uploads/kozelsky/1770040779986-212042804.webp',
    'https://swigs.online/uploads/kozelsky/1770040780402-501614299.webp',
    'https://swigs.online/uploads/kozelsky/1770040780800-460919146.webp',
    'https://swigs.online/uploads/kozelsky/1770040781215-745735702.webp',
  ],
  foire: [
    'https://swigs.online/uploads/kozelsky/1770040777537-755205822.webp',
    'https://swigs.online/uploads/kozelsky/1770040777900-793317583.webp',
    'https://swigs.online/uploads/kozelsky/1770040778355-383607409.webp',
    'https://swigs.online/uploads/kozelsky/1770040778822-404360274.webp',
    'https://swigs.online/uploads/kozelsky/1770111873402-467961691.webp',
    'https://swigs.online/uploads/kozelsky/1770111874852-950771800.webp',
  ],
  events: [
    'https://swigs.online/uploads/kozelsky/1770040776743-362731661.webp',
    'https://swigs.online/uploads/kozelsky/1770040777096-459282072.webp',
    'https://swigs.online/uploads/kozelsky/1770111874400-71437953.webp',
    'https://swigs.online/uploads/kozelsky/1770111871687-316185385.webp',
    'https://swigs.online/uploads/kozelsky/1770111873910-889147096.webp',
    'https://swigs.online/uploads/kozelsky/1770111872924-610888243.webp',
  ],
};

const SOCIAL = {
  facebook: 'https://www.facebook.com/Kozelsky.Catering/',
  instagram: 'https://www.instagram.com/kozelsky_catering/',
  linkedin: 'https://www.linkedin.com/in/kozelsky-catering-7b9754264/',
};

const Impressions = () => {
  const { t } = useLanguage();

  return (
    <>
      <SEOHead page="impressions" />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMAGES.mariages[0]}
            alt={t('impressions.hero.title')}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/70 to-secondary-900/50" />
        </div>

        <div className="container-site relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4">
            {t('impressions.hero.title')}
          </h1>
        </div>
      </section>

      {/* Quelques évents */}
      <section className="section bg-cream">
        <div className="container-site">
          <h2 className="section-title mb-8">{t('impressions.events.title')}</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="heading-accent mb-4">{t('impressions.events.semiGastro')}</h3>
              <p className="text-secondary-600 leading-relaxed">
                Création d'un menu 5 plats à thème avec accord mets/vins pour un
                total de 75 personnes sur 3 soirs.
              </p>
            </div>

            <div>
              <h3 className="heading-accent mb-4">{t('impressions.events.weddings')}</h3>
              <p className="text-secondary-600 leading-relaxed">
                Apéritif de mariage à thème, repas à l'assiette ou sur buffet etc..
              </p>
            </div>
          </div>

          {/* Galerie Mariages */}
          <ImageGallery
            images={IMAGES.mariages.map((src, i) => ({ src, alt: `Mariage ${i + 1}` }))}
            layout="grid"
          />
        </div>
      </section>

      {/* Mais encore */}
      <section className="section bg-white">
        <div className="container-site">
          <h2 className="section-title mb-8">{t('impressions.more.title')}</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="heading-accent mb-4">{t('impressions.more.foire')}</h3>
              <p className="text-secondary-600 leading-relaxed mb-4">
                Depuis 2022, nous avons un stand à la Foire du Valais situé à
                l'Espace Innothèque.
              </p>
              <p className="text-secondary-600 leading-relaxed">
                Vous avez la possibilité d'y déguster cocktails et tapas, mais
                aussi d'y organiser des apéritifs privés ou d'entreprises
                jusqu'à 80 personnes, sur réservation uniquement.
              </p>
            </div>

            <div>
              <h3 className="heading-accent mb-4">{t('impressions.more.liveCooking')}</h3>
              <p className="text-secondary-600 leading-relaxed">
                Vidéos de live cooking, création de recettes avec les produits d'un client.
              </p>
            </div>
          </div>

          {/* Galerie Foire */}
          <ImageGallery
            images={IMAGES.foire.map((src, i) => ({ src, alt: `Foire ${i + 1}` }))}
            layout="grid"
          />
        </div>
      </section>

      {/* Et bien plus */}
      <section className="section bg-cream">
        <div className="container-site">
          <h2 className="section-title mb-4">{t('impressions.andMore.title')}</h2>
          <p className="text-secondary-600 leading-relaxed mb-4">
            Sorties d'entreprises, repas exclusifs, anniversaires, baptêmes, Afterworks, Brunch etc..
          </p>
          <p className="text-secondary-600 leading-relaxed mb-8">
            Vous avez été nombreux à nous faire confiance et nous vous en remercions !
          </p>

          {/* Galerie Events */}
          <div className="mb-12">
            <ImageGallery
              images={IMAGES.events.map((src, i) => ({ src, alt: `Event ${i + 1}` }))}
              layout="grid"
            />
          </div>

          {/* Follow us */}
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-secondary-500 mb-4">{t('impressions.andMore.followUs')}</p>
            <div className="flex justify-center gap-6">
              <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" className="text-secondary-600 hover:text-accent-600 transition-colors">
                <Facebook size={24} />
              </a>
              <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="text-secondary-600 hover:text-accent-600 transition-colors">
                <Instagram size={24} />
              </a>
              <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" className="text-secondary-600 hover:text-accent-600 transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Le Traiteur CTA */}
      <section className="section bg-white">
        <div className="container-site">
          <div className="bg-primary-200 p-8 lg:p-12">
            <h2 className="text-2xl lg:text-3xl font-serif text-secondary-900 mb-4">{t('home.caterer.title')}</h2>
            <p className="text-secondary-600 mb-6">
              {t('home.caterer.desc')}
            </p>
            <Link to="/catering" className="btn-outline">
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

export default Impressions;

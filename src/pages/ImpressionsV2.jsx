import SEOHead from '../components/SEOHead';
import { ArrowRight, Facebook, Instagram, Linkedin, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import ImageGallery from '../components/ImageGallery';

const IMAGES = {
  hero: 'https://swigs.online/uploads/kozelsky/1770040779195-635217521.webp',
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

const ImpressionsV2 = () => {
  const { t } = useLanguage();

  return (
    <>
      <SEOHead page="impressions" />

      {/* Hero - Full screen image */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={IMAGES.hero}
            alt="Nos prestations"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>
        <div className="container-site relative z-10 text-white">
          <p className="text-accent-400 uppercase tracking-[0.3em] text-sm mb-4">Portfolio</p>
          <h1 className="text-5xl md:text-7xl font-serif mb-4">
            {t('impressions.hero.title')}
          </h1>
          <p className="text-xl text-white/80 max-w-xl">
            Mariages, événements corporate, fêtes privées... Découvrez nos créations.
          </p>
        </div>
      </section>

      {/* Section 1: Quelques évents - Mariages */}
      <section className="py-20 bg-cream">
        <div className="container-site">
          <div className="text-center mb-12">
            <p className="text-accent-600 uppercase tracking-[0.3em] text-sm mb-4">Nos réalisations</p>
            <h2 className="text-4xl md:text-5xl font-serif text-secondary-900 mb-6">
              {t('impressions.events.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div className="bg-white p-8">
              <h3 className="text-2xl font-serif text-secondary-900 mb-4">{t('impressions.events.semiGastro')}</h3>
              <p className="text-secondary-600 leading-relaxed">
                Création d'un menu 5 plats à thème avec accord mets/vins pour un
                total de 75 personnes sur 3 soirs.
              </p>
            </div>
            <div className="bg-white p-8">
              <h3 className="text-2xl font-serif text-secondary-900 mb-4">{t('impressions.events.weddings')}</h3>
              <p className="text-secondary-600 leading-relaxed">
                Apéritif de mariage à thème, repas à l'assiette ou sur buffet etc..
              </p>
            </div>
          </div>

          <ImageGallery
            images={IMAGES.mariages.map((src, i) => ({ src, alt: `Mariage ${i + 1}` }))}
            layout="masonry"
          />
        </div>
      </section>

      {/* Section 2: Mais encore - Foire */}
      <section className="py-20 bg-white">
        <div className="container-site">
          <div className="text-center mb-12">
            <p className="text-accent-600 uppercase tracking-[0.3em] text-sm mb-4">Foire du Valais</p>
            <h2 className="text-4xl md:text-5xl font-serif text-secondary-900 mb-6">
              {t('impressions.more.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div className="bg-cream p-8">
              <h3 className="text-2xl font-serif text-secondary-900 mb-4">{t('impressions.more.foire')}</h3>
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
            <div className="bg-cream p-8">
              <h3 className="text-2xl font-serif text-secondary-900 mb-4">{t('impressions.more.liveCooking')}</h3>
              <p className="text-secondary-600 leading-relaxed">
                Vidéos de live cooking, création de recettes avec les produits d'un client.
              </p>
            </div>
          </div>

          <ImageGallery
            images={IMAGES.foire.map((src, i) => ({ src, alt: `Foire du Valais ${i + 1}` }))}
            layout="masonry"
          />
        </div>
      </section>

      {/* Section 3: Et bien plus - Events */}
      <section className="py-20 bg-cream">
        <div className="container-site">
          <div className="text-center mb-12">
            <p className="text-accent-600 uppercase tracking-[0.3em] text-sm mb-4">Événements privés</p>
            <h2 className="text-4xl md:text-5xl font-serif text-secondary-900 mb-6">
              {t('impressions.andMore.title')}
            </h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              Sorties d'entreprises, repas exclusifs, anniversaires, baptêmes, Afterworks, Brunch etc..
            </p>
          </div>

          <ImageGallery
            images={IMAGES.events.map((src, i) => ({ src, alt: `Événement ${i + 1}` }))}
            layout="masonry"
          />
        </div>
      </section>

      {/* Thank you section (from V2) */}
      <section className="py-24 bg-secondary-900 text-white">
        <div className="container-site text-center">
          <Heart size={48} className="text-accent-400 mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Merci de votre confiance
          </h2>
          <p className="text-secondary-300 max-w-2xl mx-auto mb-12">
            Vous avez été nombreux à nous faire confiance et nous vous en remercions !
            Chaque événement est une nouvelle histoire que nous sommes fiers de contribuer à écrire.
          </p>

          {/* Social Links */}
          <p className="text-sm uppercase tracking-[0.3em] text-secondary-500 mb-6">
            {t('impressions.andMore.followUs')}
          </p>
          <div className="flex justify-center gap-6">
            <a
              href={SOCIAL.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent-600 transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href={SOCIAL.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent-600 transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href={SOCIAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent-600 transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-cream">
        <div className="container-site text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-secondary-900 mb-6">
            Prêt à créer votre événement ?
          </h2>
          <p className="text-secondary-600 mb-10 max-w-xl mx-auto">
            Contactez-nous pour discuter de votre prochain projet.
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

export default ImpressionsV2;

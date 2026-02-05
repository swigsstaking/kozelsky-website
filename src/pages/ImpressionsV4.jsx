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

const ImpressionsV4 = () => {
  const { t, language } = useLanguage();

  const content = {
    fr: {
      heroDesc: 'Mariages, événements corporate, fêtes privées... Découvrez nos créations.',
      ourAchievements: 'Nos réalisations',
      semiGastroDesc: 'Création d\'un menu 5 plats à thème avec accord mets/vins pour un total de 75 personnes sur 3 soirs.',
      weddingsDesc: 'Apéritif de mariage à thème, repas à l\'assiette ou sur buffet etc..',
      foireDesc1: 'Depuis 2022, nous avons un stand à la Foire du Valais situé à l\'Espace Innothèque.',
      foireDesc2: 'Vous avez la possibilité d\'y déguster cocktails et tapas, mais aussi d\'y organiser des apéritifs privés ou d\'entreprises jusqu\'à 80 personnes, sur réservation uniquement.',
      liveCookingDesc: 'Vidéos de live cooking, création de recettes avec les produits d\'un client.',
      privateEvents: 'Événements privés',
      eventsDesc: 'Sorties d\'entreprises, repas exclusifs, anniversaires, baptêmes, Afterworks, Brunch etc..',
      thankYou: 'Merci de votre confiance',
      thankYouDesc: 'Vous avez été nombreux à nous faire confiance et nous vous en remercions ! Chaque événement est une nouvelle histoire que nous sommes fiers de contribuer à écrire.',
      readyToCreate: 'Prêt à créer votre événement ?',
      contactForProject: 'Contactez-nous pour discuter de votre prochain projet.',
    },
    de: {
      heroDesc: 'Hochzeiten, Firmenveranstaltungen, private Feste... Entdecken Sie unsere Kreationen.',
      ourAchievements: 'Unsere Realisierungen',
      semiGastroDesc: 'Kreation eines 5-Gänge-Themenmenüs mit Wein-Paarung für insgesamt 75 Personen an 3 Abenden.',
      weddingsDesc: 'Thematisches Hochzeitsapéro, Tellerservice oder Buffet etc..',
      foireDesc1: 'Seit 2022 haben wir einen Stand auf der Walliser Messe im Espace Innothèque.',
      foireDesc2: 'Sie können dort Cocktails und Tapas genießen, aber auch private oder Firmenapéros für bis zu 80 Personen organisieren, nur auf Reservierung.',
      liveCookingDesc: 'Live-Cooking-Videos, Rezeptkreation mit Kundenprodukten.',
      privateEvents: 'Private Veranstaltungen',
      eventsDesc: 'Firmenausflüge, exklusive Essen, Geburtstage, Taufen, Afterworks, Brunch etc..',
      thankYou: 'Vielen Dank für Ihr Vertrauen',
      thankYouDesc: 'Viele von Ihnen haben uns ihr Vertrauen geschenkt und wir danken Ihnen dafür! Jede Veranstaltung ist eine neue Geschichte, zu der wir stolz beitragen.',
      readyToCreate: 'Bereit, Ihre Veranstaltung zu kreieren?',
      contactForProject: 'Kontaktieren Sie uns, um über Ihr nächstes Projekt zu sprechen.',
    },
    en: {
      heroDesc: 'Weddings, corporate events, private parties... Discover our creations.',
      ourAchievements: 'Our achievements',
      semiGastroDesc: 'Creation of a 5-course themed menu with wine pairings for a total of 75 people over 3 evenings.',
      weddingsDesc: 'Themed wedding aperitif, plated dinner or buffet etc..',
      foireDesc1: 'Since 2022, we have a stand at the Valais Fair located at Espace Innothèque.',
      foireDesc2: 'You can enjoy cocktails and tapas there, but also organize private or corporate aperitifs for up to 80 people, by reservation only.',
      liveCookingDesc: 'Live cooking videos, recipe creation with customer products.',
      privateEvents: 'Private events',
      eventsDesc: 'Corporate outings, exclusive dinners, birthdays, baptisms, Afterworks, Brunch etc..',
      thankYou: 'Thank you for your trust',
      thankYouDesc: 'Many of you have trusted us and we thank you for it! Each event is a new story that we are proud to help write.',
      readyToCreate: 'Ready to create your event?',
      contactForProject: 'Contact us to discuss your next project.',
    },
  };

  const c = content[language] || content.fr;

  return (
    <>
      <SEOHead page="impressions" />

      {/* Hero */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={IMAGES.hero}
            alt="Nos prestations"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>
        <div className="container-site relative z-10 text-white">
          <p className="text-accent-400 uppercase tracking-[0.3em] text-sm mb-8">Portfolio</p>
          <h1 className="text-5xl md:text-7xl font-serif mb-8">
            {t('impressions.hero.title')}
          </h1>
          <p className="text-xl text-white/80 max-w-xl">
            {c.heroDesc}
          </p>
        </div>
      </section>

      {/* Section 1: Mariages */}
      <section className="py-32 bg-cream">
        <div className="container-site">
          <div className="text-center mb-16">
            <p className="text-accent-600 uppercase tracking-[0.3em] text-sm mb-6">{c.ourAchievements}</p>
            <h2 className="text-5xl md:text-6xl font-serif text-secondary-900 mb-8">
              {t('impressions.events.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
            <div className="bg-white p-10 rounded-3xl">
              <h3 className="text-2xl font-serif text-secondary-900 mb-5">{t('impressions.events.semiGastro')}</h3>
              <p className="text-secondary-600 leading-relaxed text-lg">
                {c.semiGastroDesc}
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl">
              <h3 className="text-2xl font-serif text-secondary-900 mb-5">{t('impressions.events.weddings')}</h3>
              <p className="text-secondary-600 leading-relaxed text-lg">
                {c.weddingsDesc}
              </p>
            </div>
          </div>

          <ImageGallery
            images={IMAGES.mariages.map((src, i) => ({ src, alt: `Mariage ${i + 1}` }))}
            layout="masonry"
          />
        </div>
      </section>

      {/* Section 2: Foire */}
      <section className="py-32 bg-white">
        <div className="container-site">
          <div className="text-center mb-16">
            <p className="text-accent-600 uppercase tracking-[0.3em] text-sm mb-6">Foire du Valais</p>
            <h2 className="text-5xl md:text-6xl font-serif text-secondary-900 mb-8">
              {t('impressions.more.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
            <div className="bg-cream p-10 rounded-3xl">
              <h3 className="text-2xl font-serif text-secondary-900 mb-5">{t('impressions.more.foire')}</h3>
              <p className="text-secondary-600 leading-relaxed text-lg mb-4">
                {c.foireDesc1}
              </p>
              <p className="text-secondary-600 leading-relaxed text-lg">
                {c.foireDesc2}
              </p>
            </div>
            <div className="bg-cream p-10 rounded-3xl">
              <h3 className="text-2xl font-serif text-secondary-900 mb-5">{t('impressions.more.liveCooking')}</h3>
              <p className="text-secondary-600 leading-relaxed text-lg">
                {c.liveCookingDesc}
              </p>
            </div>
          </div>

          <ImageGallery
            images={IMAGES.foire.map((src, i) => ({ src, alt: `Foire du Valais ${i + 1}` }))}
            layout="masonry"
          />
        </div>
      </section>

      {/* Section 3: Events */}
      <section className="py-32 bg-cream">
        <div className="container-site">
          <div className="text-center mb-16">
            <p className="text-accent-600 uppercase tracking-[0.3em] text-sm mb-6">{c.privateEvents}</p>
            <h2 className="text-5xl md:text-6xl font-serif text-secondary-900 mb-8">
              {t('impressions.andMore.title')}
            </h2>
            <p className="text-secondary-600 max-w-2xl mx-auto text-lg">
              {c.eventsDesc}
            </p>
          </div>

          <ImageGallery
            images={IMAGES.events.map((src, i) => ({ src, alt: `Événement ${i + 1}` }))}
            layout="masonry"
          />
        </div>
      </section>

      {/* Thank you section */}
      <section className="py-32 bg-secondary-900 text-white">
        <div className="container-site text-center">
          <div className="w-24 h-24 bg-accent-600 rounded-full flex items-center justify-center mx-auto mb-12">
            <Heart size={48} />
          </div>
          <h2 className="text-5xl md:text-6xl font-serif mb-8">
            {c.thankYou}
          </h2>
          <p className="text-secondary-300 max-w-2xl mx-auto mb-16 text-lg">
            {c.thankYouDesc}
          </p>

          {/* Social Links */}
          <p className="text-sm uppercase tracking-[0.3em] text-secondary-500 mb-8">
            {t('impressions.andMore.followUs')}
          </p>
          <div className="flex justify-center gap-6">
            <a
              href={SOCIAL.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent-600 transition-colors"
            >
              <Facebook size={24} />
            </a>
            <a
              href={SOCIAL.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent-600 transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a
              href={SOCIAL.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent-600 transition-colors"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-cream">
        <div className="container-site text-center">
          <h2 className="text-5xl md:text-6xl font-serif text-secondary-900 mb-8">
            {c.readyToCreate}
          </h2>
          <p className="text-secondary-600 mb-12 max-w-xl mx-auto text-lg">
            {c.contactForProject}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-secondary-900 text-white rounded-full hover:bg-accent-600 transition-colors font-medium"
          >
            {t('cta.contact')}
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default ImpressionsV4;

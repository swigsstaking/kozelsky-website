import SEOHead from '../components/SEOHead';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import ImageGallery from '../components/ImageGallery';

const IMAGES = {
  heroVideo: 'https://swigs.online/uploads/kozelsky/1770114967005-178815678.webm',
  heroImage: 'https://swigs.online/uploads/kozelsky/1770039666381-591898801.webp',
  cateringBar: 'https://swigs.online/uploads/kozelsky/1770039666381-591898801.webp',
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
    'https://swigs.online/uploads/kozelsky/1770109837448-387869701.webp',
    'https://swigs.online/uploads/kozelsky/1770109836317-503268323.webp',
  ],
  renovationGallery: [
    'https://swigs.online/uploads/kozelsky/1770109838406-294112483.webp',
    'https://swigs.online/uploads/kozelsky/1770109836146-718641680.webp',
    'https://swigs.online/uploads/kozelsky/1770109837905-695908295.webp',
    'https://swigs.online/uploads/kozelsky/1770109839681-572873176.webp',
    'https://swigs.online/uploads/kozelsky/1770109840848-139847466.webp',
    'https://swigs.online/uploads/kozelsky/1770109764759-407520572.webp',
  ],
};

const BusHistory = () => {
  const { t, language } = useLanguage();

  const content = {
    fr: {
      heroTitle: 'Une deuxième vie pour le 11-97',
      heroSubtitle: 'Impérial London Bus 11-97',
      birth: 'Naissance d\'un projet',
      busVisit: 'LA VISITE DU BUS',
      busVisitDesc: 'C\'est en août 2020 que Mélanie et Fabian trouve le bus sur un site de petites annonces, localisé alors à Fribourg en Suisse. Après une visite et surtout un gros coup de coeur, ils décident de l\'acheter dans le but de lui donner une seconde vie.',
      partnerSearch: 'LES RECHERCHES DE PARTENAIRES',
      partnerSearchDesc: 'Avec une idée bien précise en tête, ils commencent à chercher en Suisse les entreprises capables de rénover le bus exactement comme ils le souhaitent. Le bus étant de 1962 et ayant une mécanique anglaise assez particulière, la meilleure option est de le renvoyer directement en Angleterre, là où il a parcouru plus d\'1 million de kilomètres en tant que transport public entre 1962 et 1985.',
      transport: 'Le transport',
      specializedCompany: 'UNE ENTREPRISE SPÉCIALISÉE DANS LES ROUTEMASTERS',
      specializedCompanyDesc: 'En cherchant sur internet, Mélanie et Fabian finissent par trouver une entreprise spécialisée dans les rénovations de ce type de vieux bus anglais. Ladite entreprise rénove des routemasters depuis 25 ans et est capable de réaliser les transformations voulues.',
      returnHome: 'RETOUR À LA MAISON',
      returnHomeDesc: 'Commence alors l\'organisation complète du retour en Angleterre via un transporteur spécial, en faisant attention à chaque route qu\'il doit emprunter suite à la hauteur du convoi atteignant presque 5 mètres.',
      renovations: 'Les rénovations',
      headToToe: 'DE LA TÊTE AUX PIEDS',
      headToToeDesc: 'Commence alors le démontage total de ce bus de 60 ans pour le refaire à neuf : mécanique, carrosserie, mise en place d\'une génératrice, découpage du toit pour adapter la hauteur du véhicule selon les lois suisses, etc..',
      interiorDesign: 'DESIGN INTÉRIEUR',
      interiorDesignDesc: 'Mélanie et Fabian réfléchissent ensuite à l\'aménagement intérieur : choix des matériaux, couleur des murs et plafond, luminaires, bar 100% équipé et sur-mesure.',
      finishedProject: 'Le projet fini',
      returnSwiss: 'RETOUR EN SUISSE',
      returnSwissDesc: 'Après la fin des travaux, un transport spécial pour le retour en Suisse est mis en place. Une fois rentré, le bar sur-mesure est installé et prêt à être utilisé. Plus tard, la présentation au SCN se mettra en place dans le but d\'homologuer le Bus et lui mettre de belles plaques valaisannes.',
      fairPresentation: 'PRÉSENTATION À LA FOIRE DU VALAIS',
      fairPresentationDesc: 'Pour son tout premier évènement, nous avons eu la chance d\'avoir un stand à la Foire du Valais en 2022 pour pouvoir présenter le projet et le faire connaître. Bar à tapas, cocktails, privatisation du rooftop et apéritifs d\'entreprises sur le stand, la Foire du Valais a permis au Bus d\'être mis en avant à sa juste valeur tout en faisant la joie des petits et grands.',
      equipment: 'Son équipement',
      equipmentDesc: 'Découvrez l\'équipement du Bus 11-97 et prenez connaissance du matériel complémentaire que nous avons.',
    },
    de: {
      heroTitle: 'Ein zweites Leben für den 11-97',
      heroSubtitle: 'Imperial London Bus 11-97',
      birth: 'Geburt eines Projekts',
      busVisit: 'DER BUSBESUCH',
      busVisitDesc: 'Im August 2020 finden Mélanie und Fabian den Bus auf einer Kleinanzeigenseite in Freiburg, Schweiz. Nach einem Besuch und vor allem einem großen Coup de Coeur beschließen sie, ihn zu kaufen, um ihm ein zweites Leben zu geben.',
      partnerSearch: 'DIE SUCHE NACH PARTNERN',
      partnerSearchDesc: 'Mit einer genauen Vorstellung beginnen sie in der Schweiz nach Unternehmen zu suchen, die den Bus genau nach ihren Wünschen renovieren können.',
      transport: 'Der Transport',
      specializedCompany: 'EIN AUF ROUTEMASTERS SPEZIALISIERTES UNTERNEHMEN',
      specializedCompanyDesc: 'Bei der Internetsuche finden Mélanie und Fabian schließlich ein Unternehmen, das auf die Renovierung dieser Art von alten englischen Bussen spezialisiert ist.',
      returnHome: 'ZURÜCK NACH HAUSE',
      returnHomeDesc: 'Dann beginnt die komplette Organisation der Rückkehr nach England über einen Spezialtransporter.',
      renovations: 'Die Renovierungen',
      headToToe: 'VON KOPF BIS FUß',
      headToToeDesc: 'Dann beginnt die komplette Demontage dieses 60 Jahre alten Busses: Mechanik, Karosserie, Installation eines Generators, Dachschnitt usw.',
      interiorDesign: 'INNENDESIGN',
      interiorDesignDesc: 'Mélanie und Fabian denken dann über die Innenausstattung nach: Materialauswahl, Wand- und Deckenfarbe, Beleuchtung, voll ausgestattete und maßgeschneiderte Bar.',
      finishedProject: 'Das fertige Projekt',
      returnSwiss: 'ZURÜCK IN DIE SCHWEIZ',
      returnSwissDesc: 'Nach Abschluss der Arbeiten wird ein Spezialtransport für die Rückkehr in die Schweiz organisiert.',
      fairPresentation: 'PRÄSENTATION AN DER WALLISER MESSE',
      fairPresentationDesc: 'Für seine allererste Veranstaltung hatten wir das Glück, 2022 einen Stand auf der Walliser Messe zu haben.',
      equipment: 'Seine Ausstattung',
      equipmentDesc: 'Entdecken Sie die Ausstattung des Bus 11-97 und erfahren Sie mehr über unser zusätzliches Material.',
    },
    en: {
      heroTitle: 'A second life for the 11-97',
      heroSubtitle: 'Imperial London Bus 11-97',
      birth: 'Birth of a project',
      busVisit: 'THE BUS VISIT',
      busVisitDesc: 'It was in August 2020 that Mélanie and Fabian found the bus on a classifieds site, located in Fribourg, Switzerland. After a visit and especially a big crush, they decided to buy it to give it a second life.',
      partnerSearch: 'SEARCHING FOR PARTNERS',
      partnerSearchDesc: 'With a precise idea in mind, they began searching in Switzerland for companies capable of renovating the bus exactly as they wanted. The bus being from 1962 and having quite particular English mechanics, the best option was to send it directly back to England, where it had traveled over 1 million kilometers as public transport between 1962 and 1985.',
      transport: 'The transport',
      specializedCompany: 'A COMPANY SPECIALIZED IN ROUTEMASTERS',
      specializedCompanyDesc: 'Searching online, Mélanie and Fabian finally found a company specialized in renovating this type of old English bus. The company has been renovating routemasters for 25 years and was capable of carrying out the desired transformations.',
      returnHome: 'RETURN HOME',
      returnHomeDesc: 'Then began the complete organization of the return to England via a special transporter, paying attention to each route due to the convoy height reaching almost 5 meters.',
      renovations: 'The renovations',
      headToToe: 'FROM HEAD TO TOE',
      headToToeDesc: 'Then began the complete dismantling of this 60-year-old bus to rebuild it: mechanics, bodywork, installation of a generator, roof cutting to adapt the vehicle height according to Swiss laws, etc.',
      interiorDesign: 'INTERIOR DESIGN',
      interiorDesignDesc: 'Mélanie and Fabian then thought about the interior design: choice of materials, wall and ceiling colors, lighting, 100% equipped and custom bar.',
      finishedProject: 'The finished project',
      returnSwiss: 'RETURN TO SWITZERLAND',
      returnSwissDesc: 'After the work was completed, a special transport for the return to Switzerland was set up. Once back, the custom bar was installed and ready to use.',
      fairPresentation: 'PRESENTATION AT THE VALAIS FAIR',
      fairPresentationDesc: 'For its very first event, we were lucky to have a stand at the Valais Fair in 2022 to present the project. Tapas bar, cocktails, rooftop privatization and corporate aperitifs at the stand, the Valais Fair allowed the Bus to be highlighted at its true value while delighting young and old.',
      equipment: 'Its equipment',
      equipmentDesc: 'Discover the equipment of the Bus 11-97 and learn about the additional equipment we have.',
    },
  };

  const c = content[language] || content.fr;

  return (
    <>
      <SEOHead page="bus-history" />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
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
            {c.heroTitle}
          </h1>
          <p className="text-xl text-white/80">{c.heroSubtitle}</p>
        </div>
      </section>

      {/* Birth of project */}
      <section className="section bg-cream">
        <div className="container-site">
          <h2 className="section-title mb-8">{c.birth}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="heading-accent mb-4">{c.busVisit}</h3>
              <p className="text-secondary-600 leading-relaxed">{c.busVisitDesc}</p>
            </div>
            <div>
              <h3 className="heading-accent mb-4">{c.partnerSearch}</h3>
              <p className="text-secondary-600 leading-relaxed">{c.partnerSearchDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Birth Gallery */}
      <section className="py-8 bg-white">
        <div className="container-site">
          <ImageGallery
            images={IMAGES.birthGallery.map((src, i) => ({ src, alt: `Naissance du projet ${i + 1}` }))}
            layout="grid"
          />
        </div>
      </section>

      {/* Transport */}
      <section className="section bg-cream">
        <div className="container-site">
          <h2 className="section-title mb-8">{c.transport}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="heading-accent mb-4">{c.specializedCompany}</h3>
              <p className="text-secondary-600 leading-relaxed">{c.specializedCompanyDesc}</p>
            </div>
            <div>
              <h3 className="heading-accent mb-4">{c.returnHome}</h3>
              <p className="text-secondary-600 leading-relaxed">{c.returnHomeDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Transport Gallery */}
      <section className="py-8 bg-white">
        <div className="container-site">
          <ImageGallery
            images={IMAGES.transportGallery.map((src, i) => ({ src, alt: `Transport ${i + 1}` }))}
            layout="grid"
          />
        </div>
      </section>

      {/* Renovations */}
      <section className="section bg-cream">
        <div className="container-site">
          <h2 className="section-title mb-8">{c.renovations}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="heading-accent mb-4">{c.headToToe}</h3>
              <p className="text-secondary-600 leading-relaxed">{c.headToToeDesc}</p>
            </div>
            <div>
              <h3 className="heading-accent mb-4">{c.interiorDesign}</h3>
              <p className="text-secondary-600 leading-relaxed">{c.interiorDesignDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Renovation Gallery */}
      <section className="py-8 bg-white">
        <div className="container-site">
          <ImageGallery
            images={IMAGES.renovationGallery.map((src, i) => ({ src, alt: `Rénovation ${i + 1}` }))}
            layout="grid"
          />
        </div>
      </section>

      {/* Finished Project */}
      <section className="section bg-cream">
        <div className="container-site">
          <h2 className="section-title mb-8">{c.finishedProject}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="heading-accent mb-4">{c.returnSwiss}</h3>
              <p className="text-secondary-600 leading-relaxed">{c.returnSwissDesc}</p>
            </div>
            <div>
              <h3 className="heading-accent mb-4">{c.fairPresentation}</h3>
              <p className="text-secondary-600 leading-relaxed">{c.fairPresentationDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Catering Bar Image */}
      <section className="bg-white py-12">
        <div className="container-site">
          <img
            src={IMAGES.cateringBar}
            alt="Catering Bar"
            className="w-full max-w-4xl mx-auto h-auto"
          />
        </div>
      </section>

      {/* Equipment CTA */}
      <section className="section bg-cream">
        <div className="container-site">
          <div className="bg-white p-8 lg:p-12 shadow-sm">
            <h2 className="text-2xl lg:text-3xl font-serif text-secondary-900 mb-4">
              {c.equipment}
            </h2>
            <p className="text-secondary-600 mb-6">
              {c.equipmentDesc}
            </p>
            <Link to="/bus-11-97/equipment" className="btn-outline">
              {t('cta.discover')}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
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

export default BusHistory;

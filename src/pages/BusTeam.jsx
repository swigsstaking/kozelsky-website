import SEOHead from '../components/SEOHead';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

const IMAGES = {
  heroVideo: 'https://swigs.online/uploads/kozelsky/1770114967005-178815678.webm',
  heroImage: 'https://swigs.online/uploads/kozelsky/1770039666381-591898801.webp',
  busInterior: 'https://swigs.online/uploads/kozelsky/1770039666610-182643998.webp',
};

const BusTeam = () => {
  const { t, language } = useLanguage();

  const content = {
    fr: {
      heroTitle: 'La Team du Bus',
      heroSubtitle: 'Impérial London Bus 11-97',
      teamwork: 'Un travail d\'équipe',
      theyDreamed: 'ILS EN ONT RÊVÉ...',
      theyDreamedDesc1: 'Les deux jeunes, c\'est Mélanie et Fabian.',
      theyDreamedDesc2: 'Deux associés, mais surtout un couple de grands rêveurs qui ont fusionné leurs passions : la gastronomie et l\'automobile.',
      theyDreamedDesc3: 'Tous deux viennent du monde de la restauration : Fabian en cuisine et Mélanie en service.',
      theyDreamedDesc4: 'Ils ont décidés de relever le défi ensemble et de se lancer à 100% dans sa réalisation.',
      theyDidIt: '... ET ILS L\'ONT FAIT.',
      theyDidItDesc1: 'Le projet 11-97 c\'est :',
      theyDidItDesc2: 'Du travail, trois business plans, des nuits blanches, des disputes comme des rires, des téléphones à n\'en plus finir, mais c\'est surtout un travail d\'équipe. Aller au bout des choses et les faire correctement.',
      creation: 'Création d\'une entreprise suite au projet du Bus',
      kozelskyCatering: 'KOZELSKY CATERING',
      kozelskyCateringDesc1: 'Mélanie et Fabian, en travaillant sur le Bus, se sont rendus compte qu\'ils pourraient allier ce projet complètement fou avec leur métier : la restauration.',
      kozelskyCateringDesc2: 'Ils décident alors de créer Kozelsky Catering, une entreprise traiteur qui fait exclusivement du sur-mesure en fonction du budget et des envies de leur clientèle.',
      kozelskyCateringDesc3: 'Le Bus 11-97 est le tout nouvel outil de travail de leur entreprise Traiteur.',
      cateringPromo: 'Notre entreprise Traiteur et nos différentes prestations.',
      hungry: 'J\'ai faim !',
    },
    de: {
      heroTitle: 'Das Bus-Team',
      heroSubtitle: 'Imperial London Bus 11-97',
      teamwork: 'Teamarbeit',
      theyDreamed: 'SIE HABEN DAVON GETRÄUMT...',
      theyDreamedDesc1: 'Die beiden Jungen sind Mélanie und Fabian.',
      theyDreamedDesc2: 'Zwei Partner, aber vor allem ein Paar großer Träumer, die ihre Leidenschaften vereint haben: Gastronomie und Automobile.',
      theyDreamedDesc3: 'Beide kommen aus der Gastronomie: Fabian aus der Küche und Mélanie aus dem Service.',
      theyDreamedDesc4: 'Sie beschlossen, die Herausforderung gemeinsam anzunehmen.',
      theyDidIt: '... UND SIE HABEN ES GETAN.',
      theyDidItDesc1: 'Das Projekt 11-97 bedeutet:',
      theyDidItDesc2: 'Arbeit, drei Businesspläne, schlaflose Nächte, Streit und Lachen, endlose Telefonate, aber vor allem Teamarbeit.',
      creation: 'Unternehmensgründung nach dem Bus-Projekt',
      kozelskyCatering: 'KOZELSKY CATERING',
      kozelskyCateringDesc1: 'Mélanie und Fabian erkannten bei der Arbeit am Bus, dass sie dieses verrückte Projekt mit ihrem Beruf verbinden konnten.',
      kozelskyCateringDesc2: 'Sie beschlossen, Kozelsky Catering zu gründen, ein Catering-Unternehmen, das ausschließlich maßgeschneiderte Dienstleistungen anbietet.',
      kozelskyCateringDesc3: 'Der Bus 11-97 ist das brandneue Arbeitswerkzeug ihres Catering-Unternehmens.',
      cateringPromo: 'Unser Catering-Unternehmen und unsere verschiedenen Dienstleistungen.',
      hungry: 'Ich habe Hunger!',
    },
    en: {
      heroTitle: 'The Bus Team',
      heroSubtitle: 'Imperial London Bus 11-97',
      teamwork: 'A team effort',
      theyDreamed: 'THEY DREAMED OF IT...',
      theyDreamedDesc1: 'The two young people are Mélanie and Fabian.',
      theyDreamedDesc2: 'Two partners, but above all a couple of big dreamers who merged their passions: gastronomy and automobiles.',
      theyDreamedDesc3: 'Both come from the restaurant industry: Fabian in the kitchen and Mélanie in service.',
      theyDreamedDesc4: 'They decided to take on the challenge together and commit 100% to making it happen.',
      theyDidIt: '... AND THEY DID IT.',
      theyDidItDesc1: 'The 11-97 project is:',
      theyDidItDesc2: 'Work, three business plans, sleepless nights, arguments and laughter, endless phone calls, but above all teamwork. Going all the way and doing things right.',
      creation: 'Creating a company following the Bus project',
      kozelskyCatering: 'KOZELSKY CATERING',
      kozelskyCateringDesc1: 'While working on the Bus, Mélanie and Fabian realized they could combine this crazy project with their profession: catering.',
      kozelskyCateringDesc2: 'They then decided to create Kozelsky Catering, a catering company that exclusively offers custom services based on their clients\' budgets and desires.',
      kozelskyCateringDesc3: 'The Bus 11-97 is the brand new work tool of their Catering company.',
      cateringPromo: 'Our catering company and our various services.',
      hungry: 'I\'m hungry!',
    },
  };

  const c = content[language] || content.fr;

  return (
    <>
      <SEOHead page="bus-team" />

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

      {/* Teamwork */}
      <section className="section bg-cream">
        <div className="container-site">
          <h2 className="section-title mb-8">{c.teamwork}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="heading-accent mb-4">{c.theyDreamed}</h3>
              <p className="text-secondary-600 leading-relaxed mb-4">{c.theyDreamedDesc1}</p>
              <p className="text-secondary-600 leading-relaxed mb-4">{c.theyDreamedDesc2}</p>
              <p className="text-secondary-600 leading-relaxed mb-4">{c.theyDreamedDesc3}</p>
              <p className="text-secondary-600 leading-relaxed">{c.theyDreamedDesc4}</p>
            </div>
            <div>
              <h3 className="heading-accent mb-4">{c.theyDidIt}</h3>
              <p className="text-secondary-600 leading-relaxed mb-4">{c.theyDidItDesc1}</p>
              <p className="text-secondary-600 leading-relaxed">{c.theyDidItDesc2}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Kozelsky Catering Creation */}
      <section className="section bg-white">
        <div className="container-site">
          <h2 className="section-title mb-8">{c.creation}</h2>
          <div className="max-w-3xl">
            <h3 className="heading-accent mb-4">{c.kozelskyCatering}</h3>
            <p className="text-secondary-600 leading-relaxed mb-4">{c.kozelskyCateringDesc1}</p>
            <p className="text-secondary-600 leading-relaxed mb-4">{c.kozelskyCateringDesc2}</p>
            <p className="text-secondary-600 leading-relaxed">{c.kozelskyCateringDesc3}</p>
          </div>
        </div>
      </section>

      {/* Services CTA */}
      <section className="section bg-cream">
        <div className="container-site">
          <div className="bg-white p-8 lg:p-12 shadow-sm">
            <h2 className="text-2xl lg:text-3xl font-serif text-secondary-900 mb-4">
              {t('home.services.title')}
            </h2>
            <p className="text-secondary-600 mb-6">
              {t('home.services.desc')}
            </p>
            <Link to="/bus-11-97/services" className="btn-outline">
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
                src={IMAGES.busInterior}
                alt="Bus 11-97"
                className="w-full max-w-md mx-auto h-auto"
              />
            </div>
            <div className="text-center lg:text-left">
              <p className="text-secondary-300 text-lg leading-relaxed mb-6">
                {c.cateringPromo}
              </p>
              <Link
                to="/catering"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white font-semibold hover:bg-white hover:text-secondary-900 transition-all duration-300 uppercase tracking-wider text-sm"
              >
                {c.hungry}
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
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

export default BusTeam;

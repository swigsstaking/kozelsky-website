import SEOHead from '../components/SEOHead';
import { ArrowRight, Heart, Lightbulb, Users, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

const IMAGES = {
  hero: 'https://swigs.online/uploads/kozelsky/1770040834133-111431822.webp',
  busInterior: 'https://swigs.online/uploads/kozelsky/1770039666610-182643998.webp',
  kozelskyCatering: 'https://swigs.online/uploads/kozelsky/1770040801905-355143210.png',
};

const BusTeamV5 = () => {
  const { t, language } = useLanguage();

  const content = {
    fr: {
      heroTitle: 'La Team du Bus',
      heroSubtitle: 'Mélanie & Fabian',
      values: [
        { icon: Heart, title: 'Passion', desc: 'L\'amour de la gastronomie et de l\'automobile' },
        { icon: Lightbulb, title: 'Créativité', desc: 'Un projet fou devenu réalité' },
        { icon: Users, title: 'Travail d\'équipe', desc: 'Ensemble depuis le premier jour' },
        { icon: Utensils, title: 'Savoir-faire', desc: 'Années d\'expérience en restauration' },
      ],
      dreamers: 'Ils en ont rêvé...',
      dreamersDesc: 'Deux associés, mais surtout un couple de grands rêveurs qui ont fusionné leurs passions : la gastronomie et l\'automobile. Tous deux viennent du monde de la restauration : Fabian en cuisine et Mélanie en service.',
      madeIt: '...Et ils l\'ont fait.',
      madeItDesc: 'Le projet 11-97 c\'est du travail, trois business plans, des nuits blanches, des disputes comme des rires, mais c\'est surtout un travail d\'équipe. Aller au bout des choses et les faire correctement.',
      companyCreation: 'Création d\'entreprise',
      kozelsky: 'Kozelsky Catering',
      kozelskyCateringDesc: 'En travaillant sur le Bus, Mélanie et Fabian se sont rendus compte qu\'ils pourraient allier ce projet avec leur métier. Ils décident alors de créer Kozelsky Catering, une entreprise traiteur qui fait exclusivement du sur-mesure.',
      discoverCaterer: 'Découvrir le traiteur',
      navEquipment: 'Équipement',
      navEquipmentDesc: 'Bar 100% équipé',
      navServices: 'Services',
      navServicesDesc: 'Transport, mise en place',
      navHistory: 'Histoire',
      navHistoryDesc: 'La naissance du projet',
    },
    de: {
      heroTitle: 'Das Bus-Team',
      heroSubtitle: 'Mélanie & Fabian',
      values: [
        { icon: Heart, title: 'Leidenschaft', desc: 'Die Liebe zur Gastronomie und Automobilen' },
        { icon: Lightbulb, title: 'Kreativität', desc: 'Ein verrücktes Projekt wurde Realität' },
        { icon: Users, title: 'Teamarbeit', desc: 'Zusammen seit dem ersten Tag' },
        { icon: Utensils, title: 'Know-how', desc: 'Jahre an Erfahrung in der Gastronomie' },
      ],
      dreamers: 'Sie haben davon geträumt...',
      dreamersDesc: 'Zwei Partner, aber vor allem ein Paar großer Träumer, die ihre Leidenschaften vereint haben: Gastronomie und Automobile. Beide kommen aus der Gastronomie: Fabian in der Küche und Mélanie im Service.',
      madeIt: '...Und sie haben es getan.',
      madeItDesc: 'Das Projekt 11-97 bedeutet Arbeit, drei Businesspläne, schlaflose Nächte, Streit und Lachen, aber vor allem Teamarbeit. Die Dinge zu Ende bringen und sie richtig machen.',
      companyCreation: 'Unternehmensgründung',
      kozelsky: 'Kozelsky Catering',
      kozelskyCateringDesc: 'Bei der Arbeit am Bus erkannten Mélanie und Fabian, dass sie dieses Projekt mit ihrem Beruf verbinden konnten. Sie gründeten Kozelsky Catering, ein maßgeschneidertes Catering-Unternehmen.',
      discoverCaterer: 'Den Caterer entdecken',
      navEquipment: 'Ausstattung',
      navEquipmentDesc: 'Voll ausgestattete Bar',
      navServices: 'Dienstleistungen',
      navServicesDesc: 'Transport, Aufbau',
      navHistory: 'Geschichte',
      navHistoryDesc: 'Die Geburt des Projekts',
    },
    en: {
      heroTitle: 'The Bus Team',
      heroSubtitle: 'Mélanie & Fabian',
      values: [
        { icon: Heart, title: 'Passion', desc: 'The love of gastronomy and automobiles' },
        { icon: Lightbulb, title: 'Creativity', desc: 'A crazy project became reality' },
        { icon: Users, title: 'Teamwork', desc: 'Together since day one' },
        { icon: Utensils, title: 'Expertise', desc: 'Years of experience in catering' },
      ],
      dreamers: 'They dreamed of it...',
      dreamersDesc: 'Two partners, but above all a couple of big dreamers who merged their passions: gastronomy and automobiles. Both come from the restaurant industry: Fabian in the kitchen and Mélanie in service.',
      madeIt: '...And they did it.',
      madeItDesc: 'The 11-97 project is work, three business plans, sleepless nights, arguments and laughter, but above all teamwork. Going all the way and doing things right.',
      companyCreation: 'Company creation',
      kozelsky: 'Kozelsky Catering',
      kozelskyCateringDesc: 'While working on the Bus, Mélanie and Fabian realized they could combine this project with their profession. They created Kozelsky Catering, a custom catering company.',
      discoverCaterer: 'Discover the caterer',
      navEquipment: 'Equipment',
      navEquipmentDesc: 'Fully equipped bar',
      navServices: 'Services',
      navServicesDesc: 'Transport, setup',
      navHistory: 'History',
      navHistoryDesc: 'The birth of the project',
    },
  };

  const c = content[language] || content.fr;

  return (
    <>
      <SEOHead page="bus-team" />

      {/* Hero */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={IMAGES.hero}
            alt="The Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/50" />
        </div>
        <div className="container-site relative z-10 text-white">
          <p className="text-accent-400 uppercase tracking-[0.3em] text-sm mb-6">Bus 11-97</p>
          <h1 className="text-5xl md:text-7xl font-serif mb-6">{c.heroTitle}</h1>
          <p className="text-3xl text-white/70 font-serif">{c.heroSubtitle}</p>
        </div>
      </section>

      {/* Values - Dark */}
      <section className="py-32 bg-secondary-900">
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {c.values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-accent-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-serif text-white mb-3">{value.title}</h3>
                <p className="text-secondary-400">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story - Dark */}
      <section className="py-40 bg-secondary-800">
        <div className="container-site">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-serif text-white mb-10">{c.dreamers}</h2>
            <p className="text-2xl text-secondary-300 leading-relaxed mb-16">{c.dreamersDesc}</p>

            <div className="w-32 h-px bg-accent-400 mx-auto my-16" />

            <h2 className="text-5xl md:text-6xl font-serif text-white mb-10">{c.madeIt}</h2>
            <p className="text-2xl text-secondary-300 leading-relaxed">{c.madeItDesc}</p>
          </div>
        </div>
      </section>

      {/* Kozelsky Catering - LIGHT (links to catering) */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        <div className="relative min-h-[50vh] lg:min-h-full">
          <img
            src={IMAGES.busInterior}
            alt="Bus Interior"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="flex items-center bg-cream text-secondary-900 p-12 lg:p-24">
          <div>
            <p className="text-accent-600 uppercase tracking-[0.3em] text-sm mb-8">{c.companyCreation}</p>
            <h2 className="text-5xl font-serif mb-8">{c.kozelsky}</h2>
            <p className="text-secondary-600 leading-relaxed text-lg mb-12">{c.kozelskyCateringDesc}</p>
            <Link
              to="/catering"
              className="inline-flex items-center gap-3 px-10 py-5 bg-secondary-900 text-white hover:bg-accent-600 transition-colors font-medium"
            >
              {c.discoverCaterer}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Navigation - Dark */}
      <section className="py-24 bg-secondary-900">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Link to="/bus-11-97/v5/equipment" className="group p-12 bg-secondary-800 hover:bg-secondary-700 transition-colors text-center">
              <h3 className="text-2xl font-serif text-white mb-4">
                {c.navEquipment}
              </h3>
              <p className="text-secondary-500 group-hover:text-secondary-400 transition-colors">
                {c.navEquipmentDesc}
              </p>
            </Link>
            <Link to="/bus-11-97/v5/services" className="group p-12 bg-secondary-800 hover:bg-secondary-700 transition-colors text-center">
              <h3 className="text-2xl font-serif text-white mb-4">
                {c.navServices}
              </h3>
              <p className="text-secondary-500 group-hover:text-secondary-400 transition-colors">
                {c.navServicesDesc}
              </p>
            </Link>
            <Link to="/bus-11-97/v5/history" className="group p-12 bg-secondary-800 hover:bg-secondary-700 transition-colors text-center">
              <h3 className="text-2xl font-serif text-white mb-4">
                {c.navHistory}
              </h3>
              <p className="text-secondary-500 group-hover:text-secondary-400 transition-colors">
                {c.navHistoryDesc}
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA - Dark */}
      <section className="py-40 bg-secondary-800">
        <div className="container-site text-center">
          <h2 className="text-5xl md:text-6xl font-serif text-white mb-10">
            {t('home.questions.title')}
          </h2>
          <p className="text-secondary-300 mb-14 max-w-xl mx-auto text-lg">
            {t('home.questions.desc')}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-12 py-6 bg-accent-500 text-white hover:bg-accent-600 transition-colors font-medium text-lg"
          >
            {t('cta.contact')}
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default BusTeamV5;

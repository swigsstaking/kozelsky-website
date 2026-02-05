import SEOHead from '../components/SEOHead';
import { ArrowRight, Heart, Lightbulb, Users, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

const IMAGES = {
  hero: 'https://swigs.online/uploads/kozelsky/1770040834133-111431822.webp',
  busInterior: 'https://swigs.online/uploads/kozelsky/1770039666610-182643998.webp',
  kozelskyCatering: 'https://swigs.online/uploads/kozelsky/1770040801905-355143210.png',
};

const BusTeamV2 = () => {
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
      <section className="relative h-[70vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={IMAGES.hero}
            alt="The Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        </div>
        <div className="container-site relative z-10 text-white">
          <p className="text-accent-400 uppercase tracking-[0.3em] text-sm mb-4">Bus 11-97</p>
          <h1 className="text-5xl md:text-7xl font-serif mb-4">{c.heroTitle}</h1>
          <p className="text-2xl text-white/80 font-serif">{c.heroSubtitle}</p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-cream">
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {c.values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-secondary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon size={28} className="text-white" />
                </div>
                <h3 className="text-lg font-serif text-secondary-900 mb-2">{value.title}</h3>
                <p className="text-secondary-600 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-secondary-900 mb-8">{c.dreamers}</h2>
            <p className="text-xl text-secondary-600 leading-relaxed mb-12">{c.dreamersDesc}</p>

            <div className="w-24 h-px bg-accent-400 mx-auto my-12" />

            <h2 className="text-4xl md:text-5xl font-serif text-secondary-900 mb-8">{c.madeIt}</h2>
            <p className="text-xl text-secondary-600 leading-relaxed">{c.madeItDesc}</p>
          </div>
        </div>
      </section>

      {/* Kozelsky Catering */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative h-[50vh] lg:h-auto">
          <img
            src={IMAGES.busInterior}
            alt="Bus Interior"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="flex items-center bg-secondary-900 text-white p-12 lg:p-20">
          <div>
            <p className="text-accent-400 uppercase tracking-[0.3em] text-sm mb-6">{c.companyCreation}</p>
            <h2 className="text-4xl font-serif mb-6">{c.kozelsky}</h2>
            <p className="text-secondary-300 leading-relaxed mb-8">{c.kozelskyCateringDesc}</p>
            <Link
              to="/catering"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white text-white hover:bg-white hover:text-secondary-900 transition-colors"
            >
              {c.discoverCaterer}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 bg-cream">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/bus-11-97/v2/equipment" className="group p-8 bg-white hover:bg-secondary-900 transition-colors text-center">
              <h3 className="text-xl font-serif text-secondary-900 group-hover:text-white mb-2 transition-colors">
                {c.navEquipment}
              </h3>
              <p className="text-secondary-600 group-hover:text-secondary-300 text-sm transition-colors">
                {c.navEquipmentDesc}
              </p>
            </Link>
            <Link to="/bus-11-97/v2/services" className="group p-8 bg-white hover:bg-secondary-900 transition-colors text-center">
              <h3 className="text-xl font-serif text-secondary-900 group-hover:text-white mb-2 transition-colors">
                {c.navServices}
              </h3>
              <p className="text-secondary-600 group-hover:text-secondary-300 text-sm transition-colors">
                {c.navServicesDesc}
              </p>
            </Link>
            <Link to="/bus-11-97/v2/history" className="group p-8 bg-white hover:bg-secondary-900 transition-colors text-center">
              <h3 className="text-xl font-serif text-secondary-900 group-hover:text-white mb-2 transition-colors">
                {c.navHistory}
              </h3>
              <p className="text-secondary-600 group-hover:text-secondary-300 text-sm transition-colors">
                {c.navHistoryDesc}
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="container-site text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-secondary-900 mb-6">
            {t('home.questions.title')}
          </h2>
          <p className="text-secondary-600 mb-10 max-w-xl mx-auto">
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

export default BusTeamV2;

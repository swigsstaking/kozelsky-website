import SEOHead from '../components/SEOHead';
import { useLanguage } from '../i18n/LanguageContext';

const Impressum = () => {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: 'Impressum',
    },
    de: {
      title: 'Impressum',
    },
    en: {
      title: 'Legal Notice',
    },
  };

  const c = content[language] || content.fr;

  return (
    <>
      <SEOHead page="impressum" />

      <section className="section bg-cream min-h-[60vh]">
        <div className="container-site">
          <h1 className="text-4xl md:text-5xl font-serif text-secondary-900 mb-12">
            {c.title}
          </h1>

          <div className="max-w-2xl space-y-4 text-secondary-600">
            <p className="font-semibold text-secondary-900">Kozelsky Sàrl,</p>
            <p>Passage de la Matze 3</p>
            <p>1950 Sion</p>

            <p className="pt-4">
              <span className="font-medium text-secondary-900">Direction :</span> Fabian Kozelsky et Mélanie Rausis
            </p>

            <p>
              <span className="font-medium text-secondary-900">Numéro de téléphone :</span>{' '}
              <a href="tel:+41792177161" className="text-accent-600 hover:underline">
                +41 79 217 71 61
              </a>
            </p>

            <p>
              <span className="font-medium text-secondary-900">E-mail :</span>{' '}
              <a href="mailto:welcome@kozelsky.ch" className="text-accent-600 hover:underline">
                welcome@kozelsky.ch
              </a>
            </p>

            <p className="pt-4">
              <span className="font-medium text-secondary-900">N° du registre du commerce :</span> CH-626.4.021.562-6
            </p>

            <p>
              <span className="font-medium text-secondary-900">Forme juridique :</span> société à responsabilité limitée
            </p>

            <p>
              <span className="font-medium text-secondary-900">Numéro d'identification de la taxe sur le chiffre d'affaires :</span> CHE-264.732.489
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Impressum;

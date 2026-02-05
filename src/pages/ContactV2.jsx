import { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { useContact } from '../hooks/useContact';
import { useLanguage } from '../i18n/LanguageContext';
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  AlertCircle,
  Users,
  Calendar,
  MapPin,
  Utensils,
  Send,
  Phone,
  Mail
} from 'lucide-react';

const ContactV2 = () => {
  const contactMutation = useContact();
  const { language } = useLanguage();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    eventType: '',
    serviceType: '',
    guestRange: '',
    eventDate: '',
    eventLocation: '',
    budget: '',
    message: '',
    civility: '',
    firstName: '',
    lastName: '',
    company: '',
    phone: '',
    email: '',
  });
  const [submitted, setSubmitted] = useState(false);

  // Translations
  const content = {
    fr: {
      configurator: 'Configurateur',
      title: 'Planifiez votre événement',
      subtitle: 'Répondez à quelques questions pour recevoir un devis personnalisé.',
      steps: [
        { id: 1, title: "Type d'événement", icon: Utensils },
        { id: 2, title: 'Détails', icon: Calendar },
        { id: 3, title: 'Vos coordonnées', icon: Users },
        { id: 4, title: 'Confirmation', icon: CheckCircle },
      ],
      eventTypes: [
        { id: 'mariage', label: 'Mariage', desc: 'Célébrez votre union avec élégance' },
        { id: 'corporate', label: 'Événement corporate', desc: 'Séminaires, team building, réceptions' },
        { id: 'anniversaire', label: 'Anniversaire', desc: 'Fêtez en grand avec vos proches' },
        { id: 'cocktail', label: 'Cocktail / Apéritif', desc: 'Réception élégante et conviviale' },
        { id: 'bus', label: 'Bus 11-97', desc: 'Une expérience unique et mobile' },
        { id: 'aviation', label: 'Aviation privée', desc: 'Service traiteur en vol' },
        { id: 'autre', label: 'Autre', desc: 'Dites-nous en plus sur votre projet' },
      ],
      serviceTypes: [
        { id: 'cocktail', label: 'Cocktail dînatoire' },
        { id: 'buffet', label: 'Buffet' },
        { id: 'assis', label: 'Repas assis' },
        { id: 'brunch', label: 'Brunch' },
        { id: 'autre', label: 'Je ne sais pas encore' },
      ],
      guestRanges: [
        { id: '10-30', label: '10 - 30 personnes' },
        { id: '30-50', label: '30 - 50 personnes' },
        { id: '50-100', label: '50 - 100 personnes' },
        { id: '100-200', label: '100 - 200 personnes' },
        { id: '200+', label: 'Plus de 200 personnes' },
      ],
      budgetOptions: [
        { value: '', label: 'Sélectionner' },
        { value: '<2000', label: "Moins de 2'000 CHF" },
        { value: '2000-5000', label: "2'000 - 5'000 CHF" },
        { value: '5000-10000', label: "5'000 - 10'000 CHF" },
        { value: '10000-20000', label: "10'000 - 20'000 CHF" },
        { value: '>20000', label: "Plus de 20'000 CHF" },
      ],
      step1Title: "Quel type d'événement organisez-vous ?",
      step2Title: 'Précisez les détails',
      step3Title: 'Vos coordonnées',
      step4Title: 'Récapitulatif de votre demande',
      serviceLabel: 'Type de service souhaité',
      guestsLabel: 'Nombre de convives',
      dateLabel: 'Date souhaitée',
      locationLabel: "Lieu de l'événement",
      locationPlaceholder: 'Ville ou adresse',
      budgetLabel: 'Budget estimé (optionnel)',
      messageLabel: 'Message ou précisions (optionnel)',
      messagePlaceholder: 'Décrivez votre projet, vos attentes particulières...',
      civilities: ['Madame', 'Monsieur'],
      firstNameLabel: 'Prénom *',
      lastNameLabel: 'Nom *',
      companyLabel: 'Entreprise (optionnel)',
      phoneLabel: 'Téléphone *',
      emailLabel: 'Email',
      summaryEventType: "Type d'événement",
      summaryServiceType: 'Type de service',
      summaryGuests: 'Nombre de convives',
      summaryDate: 'Date',
      summaryLocation: 'Lieu',
      summaryBudget: 'Budget',
      summaryContact: 'Contact',
      summaryMessage: 'Message',
      back: 'Retour',
      next: 'Suivant',
      sending: 'Envoi...',
      send: 'Envoyer ma demande',
      errorMessage: 'Une erreur est survenue. Veuillez réessayer.',
      successTitle: 'Demande envoyée !',
      successMessage: 'Merci pour votre demande. Nous vous répondrons dans les plus brefs délais avec une proposition personnalisée.',
      newRequest: 'Nouvelle demande',
      callUs: 'Nous appeler',
      directContact: 'Vous préférez nous contacter directement ?',
    },
    de: {
      configurator: 'Konfigurator',
      title: 'Planen Sie Ihr Event',
      subtitle: 'Beantworten Sie einige Fragen, um ein individuelles Angebot zu erhalten.',
      steps: [
        { id: 1, title: 'Eventtyp', icon: Utensils },
        { id: 2, title: 'Details', icon: Calendar },
        { id: 3, title: 'Ihre Kontaktdaten', icon: Users },
        { id: 4, title: 'Bestätigung', icon: CheckCircle },
      ],
      eventTypes: [
        { id: 'mariage', label: 'Hochzeit', desc: 'Feiern Sie Ihre Vereinigung mit Eleganz' },
        { id: 'corporate', label: 'Firmenveranstaltung', desc: 'Seminare, Teambuilding, Empfänge' },
        { id: 'anniversaire', label: 'Geburtstag', desc: 'Feiern Sie groß mit Ihren Liebsten' },
        { id: 'cocktail', label: 'Cocktail / Apéro', desc: 'Eleganter und geselliger Empfang' },
        { id: 'bus', label: 'Bus 11-97', desc: 'Ein einzigartiges, mobiles Erlebnis' },
        { id: 'aviation', label: 'Privatflug', desc: 'Catering-Service an Bord' },
        { id: 'autre', label: 'Andere', desc: 'Erzählen Sie uns mehr über Ihr Projekt' },
      ],
      serviceTypes: [
        { id: 'cocktail', label: 'Cocktail-Dinner' },
        { id: 'buffet', label: 'Buffet' },
        { id: 'assis', label: 'Sitzmenü' },
        { id: 'brunch', label: 'Brunch' },
        { id: 'autre', label: 'Noch nicht sicher' },
      ],
      guestRanges: [
        { id: '10-30', label: '10 - 30 Personen' },
        { id: '30-50', label: '30 - 50 Personen' },
        { id: '50-100', label: '50 - 100 Personen' },
        { id: '100-200', label: '100 - 200 Personen' },
        { id: '200+', label: 'Mehr als 200 Personen' },
      ],
      budgetOptions: [
        { value: '', label: 'Auswählen' },
        { value: '<2000', label: "Weniger als 2'000 CHF" },
        { value: '2000-5000', label: "2'000 - 5'000 CHF" },
        { value: '5000-10000', label: "5'000 - 10'000 CHF" },
        { value: '10000-20000', label: "10'000 - 20'000 CHF" },
        { value: '>20000', label: "Mehr als 20'000 CHF" },
      ],
      step1Title: 'Welche Art von Veranstaltung planen Sie?',
      step2Title: 'Details angeben',
      step3Title: 'Ihre Kontaktdaten',
      step4Title: 'Zusammenfassung Ihrer Anfrage',
      serviceLabel: 'Gewünschte Serviceart',
      guestsLabel: 'Anzahl der Gäste',
      dateLabel: 'Gewünschtes Datum',
      locationLabel: 'Veranstaltungsort',
      locationPlaceholder: 'Stadt oder Adresse',
      budgetLabel: 'Geschätztes Budget (optional)',
      messageLabel: 'Nachricht oder Anmerkungen (optional)',
      messagePlaceholder: 'Beschreiben Sie Ihr Projekt, Ihre besonderen Wünsche...',
      civilities: ['Frau', 'Herr'],
      firstNameLabel: 'Vorname *',
      lastNameLabel: 'Nachname *',
      companyLabel: 'Firma (optional)',
      phoneLabel: 'Telefon *',
      emailLabel: 'E-Mail',
      summaryEventType: 'Eventtyp',
      summaryServiceType: 'Serviceart',
      summaryGuests: 'Anzahl der Gäste',
      summaryDate: 'Datum',
      summaryLocation: 'Ort',
      summaryBudget: 'Budget',
      summaryContact: 'Kontakt',
      summaryMessage: 'Nachricht',
      back: 'Zurück',
      next: 'Weiter',
      sending: 'Senden...',
      send: 'Anfrage senden',
      errorMessage: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.',
      successTitle: 'Anfrage gesendet!',
      successMessage: 'Vielen Dank für Ihre Anfrage. Wir werden Ihnen schnellstmöglich mit einem individuellen Angebot antworten.',
      newRequest: 'Neue Anfrage',
      callUs: 'Uns anrufen',
      directContact: 'Möchten Sie uns lieber direkt kontaktieren?',
    },
    en: {
      configurator: 'Configurator',
      title: 'Plan your event',
      subtitle: 'Answer a few questions to receive a personalized quote.',
      steps: [
        { id: 1, title: 'Event type', icon: Utensils },
        { id: 2, title: 'Details', icon: Calendar },
        { id: 3, title: 'Your details', icon: Users },
        { id: 4, title: 'Confirmation', icon: CheckCircle },
      ],
      eventTypes: [
        { id: 'mariage', label: 'Wedding', desc: 'Celebrate your union with elegance' },
        { id: 'corporate', label: 'Corporate event', desc: 'Seminars, team building, receptions' },
        { id: 'anniversaire', label: 'Birthday', desc: 'Celebrate big with your loved ones' },
        { id: 'cocktail', label: 'Cocktail / Aperitif', desc: 'Elegant and friendly reception' },
        { id: 'bus', label: 'Bus 11-97', desc: 'A unique and mobile experience' },
        { id: 'aviation', label: 'Private aviation', desc: 'In-flight catering service' },
        { id: 'autre', label: 'Other', desc: 'Tell us more about your project' },
      ],
      serviceTypes: [
        { id: 'cocktail', label: 'Cocktail dinner' },
        { id: 'buffet', label: 'Buffet' },
        { id: 'assis', label: 'Seated meal' },
        { id: 'brunch', label: 'Brunch' },
        { id: 'autre', label: 'Not sure yet' },
      ],
      guestRanges: [
        { id: '10-30', label: '10 - 30 guests' },
        { id: '30-50', label: '30 - 50 guests' },
        { id: '50-100', label: '50 - 100 guests' },
        { id: '100-200', label: '100 - 200 guests' },
        { id: '200+', label: 'More than 200 guests' },
      ],
      budgetOptions: [
        { value: '', label: 'Select' },
        { value: '<2000', label: 'Less than CHF 2,000' },
        { value: '2000-5000', label: 'CHF 2,000 - 5,000' },
        { value: '5000-10000', label: 'CHF 5,000 - 10,000' },
        { value: '10000-20000', label: 'CHF 10,000 - 20,000' },
        { value: '>20000', label: 'More than CHF 20,000' },
      ],
      step1Title: 'What type of event are you organizing?',
      step2Title: 'Specify the details',
      step3Title: 'Your contact details',
      step4Title: 'Summary of your request',
      serviceLabel: 'Desired service type',
      guestsLabel: 'Number of guests',
      dateLabel: 'Desired date',
      locationLabel: 'Event location',
      locationPlaceholder: 'City or address',
      budgetLabel: 'Estimated budget (optional)',
      messageLabel: 'Message or details (optional)',
      messagePlaceholder: 'Describe your project, your particular expectations...',
      civilities: ['Mrs', 'Mr'],
      firstNameLabel: 'First name *',
      lastNameLabel: 'Last name *',
      companyLabel: 'Company (optional)',
      phoneLabel: 'Phone *',
      emailLabel: 'Email',
      summaryEventType: 'Event type',
      summaryServiceType: 'Service type',
      summaryGuests: 'Number of guests',
      summaryDate: 'Date',
      summaryLocation: 'Location',
      summaryBudget: 'Budget',
      summaryContact: 'Contact',
      summaryMessage: 'Message',
      back: 'Back',
      next: 'Next',
      sending: 'Sending...',
      send: 'Send my request',
      errorMessage: 'An error occurred. Please try again.',
      successTitle: 'Request sent!',
      successMessage: 'Thank you for your request. We will respond shortly with a personalized proposal.',
      newRequest: 'New request',
      callUs: 'Call us',
      directContact: 'Prefer to contact us directly?',
    },
  };

  const c = content[language] || content.fr;
  const STEPS = c.steps;
  const EVENT_TYPES = c.eventTypes;
  const SERVICE_TYPES = c.serviceTypes;
  const GUEST_RANGES = c.guestRanges;

  const handleSelect = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.eventType !== '';
      case 2:
        return formData.serviceType !== '' && formData.guestRange !== '';
      case 3:
        return formData.firstName !== '' && formData.lastName !== '' && formData.phone !== '';
      default:
        return true;
    }
  };

  const handleSubmit = async () => {
    try {
      const eventTypeLabel = EVENT_TYPES.find(e => e.id === formData.eventType)?.label || formData.eventType;
      const serviceTypeLabel = SERVICE_TYPES.find(s => s.id === formData.serviceType)?.label || formData.serviceType;
      const guestRangeLabel = GUEST_RANGES.find(g => g.id === formData.guestRange)?.label || formData.guestRange;

      const apiData = {
        name: `${formData.civility} ${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        phone: formData.phone,
        message: `
=== DEMANDE CONFIGURATEUR ===

TYPE D'ÉVÉNEMENT: ${eventTypeLabel}
TYPE DE SERVICE: ${serviceTypeLabel}
NOMBRE DE CONVIVES: ${guestRangeLabel}
DATE SOUHAITÉE: ${formData.eventDate || 'Non précisée'}
LIEU: ${formData.eventLocation || 'Non précisé'}
BUDGET ESTIMÉ: ${formData.budget || 'Non précisé'}

ENTREPRISE: ${formData.company || 'N/A'}

MESSAGE:
${formData.message || 'Pas de message supplémentaire'}
        `.trim(),
      };

      await contactMutation.mutateAsync(apiData);
      setSubmitted(true);
    } catch (error) {
      console.error('Erreur:', error);
    }
  };

  if (submitted) {
    return (
      <>
        <SEOHead page="contact" />
        <section className="min-h-screen flex items-center justify-center bg-cream py-24">
          <div className="container-site">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle size={48} className="text-green-500" />
              </div>
              <h1 className="text-4xl md:text-5xl font-serif text-secondary-900 mb-6">
                {c.successTitle}
              </h1>
              <p className="text-secondary-600 text-lg mb-8">
                {c.successMessage}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setCurrentStep(1);
                    setFormData({
                      eventType: '',
                      serviceType: '',
                      guestRange: '',
                      eventDate: '',
                      eventLocation: '',
                      budget: '',
                      message: '',
                      civility: '',
                      firstName: '',
                      lastName: '',
                      company: '',
                      phone: '',
                      email: '',
                    });
                  }}
                  className="btn-primary"
                >
                  {c.newRequest}
                  <ArrowRight size={16} />
                </button>
                <a
                  href="tel:+41792177161"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-secondary-900 text-secondary-900 hover:bg-secondary-900 hover:text-white transition-colors"
                >
                  <Phone size={16} />
                  {c.callUs}
                </a>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <SEOHead page="contact" />

      {/* Header */}
      <section className="bg-secondary-900 text-white py-16">
        <div className="container-site text-center">
          <p className="text-accent-400 uppercase tracking-[0.3em] text-sm mb-4">{c.configurator}</p>
          <h1 className="text-4xl md:text-5xl font-serif mb-4">
            {c.title}
          </h1>
          <p className="text-secondary-300 max-w-xl mx-auto">
            {c.subtitle}
          </p>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="bg-white border-b border-secondary-200">
        <div className="container-site py-6">
          <div className="flex justify-between items-center max-w-3xl mx-auto">
            {STEPS.map((step, index) => (
              <div
                key={step.id}
                className={`flex items-center ${index < STEPS.length - 1 ? 'flex-1' : ''}`}
              >
                <div className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                      currentStep >= step.id
                        ? 'bg-accent-600 text-white'
                        : 'bg-secondary-100 text-secondary-400'
                    }`}
                  >
                    {currentStep > step.id ? (
                      <CheckCircle size={20} />
                    ) : (
                      <step.icon size={20} />
                    )}
                  </div>
                  <span
                    className={`text-xs mt-2 hidden md:block ${
                      currentStep >= step.id ? 'text-secondary-900' : 'text-secondary-400'
                    }`}
                  >
                    {step.title}
                  </span>
                </div>
                {index < STEPS.length - 1 && (
                  <div
                    className={`flex-1 h-1 mx-4 rounded ${
                      currentStep > step.id ? 'bg-accent-600' : 'bg-secondary-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Content */}
      <section className="py-16 bg-cream min-h-[60vh]">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">

            {/* Step 1: Event Type */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-serif text-secondary-900 mb-8 text-center">
                  {c.step1Title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {EVENT_TYPES.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => handleSelect('eventType', type.id)}
                      className={`p-6 text-left transition-all border-2 ${
                        formData.eventType === type.id
                          ? 'border-accent-600 bg-white shadow-lg'
                          : 'border-secondary-200 bg-white hover:border-secondary-300'
                      }`}
                    >
                      <h3 className="text-lg font-medium text-secondary-900 mb-1">{type.label}</h3>
                      <p className="text-sm text-secondary-500">{type.desc}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Details */}
            {currentStep === 2 && (
              <div className="space-y-8">
                <h2 className="text-2xl font-serif text-secondary-900 mb-8 text-center">
                  {c.step2Title}
                </h2>

                {/* Service Type */}
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-4">
                    {c.serviceLabel}
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {SERVICE_TYPES.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => handleSelect('serviceType', type.id)}
                        className={`p-4 text-center transition-all border-2 ${
                          formData.serviceType === type.id
                            ? 'border-accent-600 bg-white'
                            : 'border-secondary-200 bg-white hover:border-secondary-300'
                        }`}
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Guest Range */}
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-4">
                    <Users size={16} className="inline mr-2" />
                    {c.guestsLabel}
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {GUEST_RANGES.map((range) => (
                      <button
                        key={range.id}
                        onClick={() => handleSelect('guestRange', range.id)}
                        className={`p-4 text-center transition-all border-2 ${
                          formData.guestRange === range.id
                            ? 'border-accent-600 bg-white'
                            : 'border-secondary-200 bg-white hover:border-secondary-300'
                        }`}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Date & Location */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      <Calendar size={16} className="inline mr-2" />
                      {c.dateLabel}
                    </label>
                    <input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-secondary-300 bg-white focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      <MapPin size={16} className="inline mr-2" />
                      {c.locationLabel}
                    </label>
                    <input
                      type="text"
                      name="eventLocation"
                      value={formData.eventLocation}
                      onChange={handleChange}
                      placeholder={c.locationPlaceholder}
                      className="w-full px-4 py-3 border border-secondary-300 bg-white focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                    />
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    {c.budgetLabel}
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-secondary-300 bg-white focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                  >
                    {c.budgetOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    {c.messageLabel}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder={c.messagePlaceholder}
                    className="w-full px-4 py-3 border border-secondary-300 bg-white focus:ring-2 focus:ring-accent-500 focus:border-accent-500 resize-none"
                  />
                </div>
              </div>
            )}

            {/* Step 3: Contact Info */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-serif text-secondary-900 mb-8 text-center">
                  {c.step3Title}
                </h2>

                {/* Civility */}
                <div className="flex gap-6 justify-center">
                  {c.civilities.map((civ) => (
                    <label key={civ} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="civility"
                        value={civ}
                        checked={formData.civility === civ}
                        onChange={handleChange}
                        className="w-4 h-4 text-accent-600"
                      />
                      <span>{civ}</span>
                    </label>
                  ))}
                </div>

                {/* Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      {c.firstNameLabel}
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-secondary-300 bg-white focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      {c.lastNameLabel}
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-secondary-300 bg-white focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    {c.companyLabel}
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-secondary-300 bg-white focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                  />
                </div>

                {/* Phone & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      <Phone size={16} className="inline mr-2" />
                      {c.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-secondary-300 bg-white focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      <Mail size={16} className="inline mr-2" />
                      {c.emailLabel}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-secondary-300 bg-white focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Confirmation */}
            {currentStep === 4 && (
              <div className="space-y-8">
                <h2 className="text-2xl font-serif text-secondary-900 mb-8 text-center">
                  {c.step4Title}
                </h2>

                <div className="bg-white p-8 border border-secondary-200 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm text-secondary-500 mb-1">{c.summaryEventType}</p>
                      <p className="font-medium text-secondary-900">
                        {EVENT_TYPES.find(e => e.id === formData.eventType)?.label}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-secondary-500 mb-1">{c.summaryServiceType}</p>
                      <p className="font-medium text-secondary-900">
                        {SERVICE_TYPES.find(s => s.id === formData.serviceType)?.label}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-secondary-500 mb-1">{c.summaryGuests}</p>
                      <p className="font-medium text-secondary-900">
                        {GUEST_RANGES.find(g => g.id === formData.guestRange)?.label}
                      </p>
                    </div>
                    {formData.eventDate && (
                      <div>
                        <p className="text-sm text-secondary-500 mb-1">{c.summaryDate}</p>
                        <p className="font-medium text-secondary-900">{formData.eventDate}</p>
                      </div>
                    )}
                    {formData.eventLocation && (
                      <div>
                        <p className="text-sm text-secondary-500 mb-1">{c.summaryLocation}</p>
                        <p className="font-medium text-secondary-900">{formData.eventLocation}</p>
                      </div>
                    )}
                    {formData.budget && (
                      <div>
                        <p className="text-sm text-secondary-500 mb-1">{c.summaryBudget}</p>
                        <p className="font-medium text-secondary-900">{formData.budget}</p>
                      </div>
                    )}
                  </div>

                  <hr className="border-secondary-200" />

                  <div>
                    <p className="text-sm text-secondary-500 mb-1">{c.summaryContact}</p>
                    <p className="font-medium text-secondary-900">
                      {formData.civility} {formData.firstName} {formData.lastName}
                    </p>
                    {formData.company && <p className="text-secondary-600">{formData.company}</p>}
                    <p className="text-secondary-600">{formData.phone}</p>
                    {formData.email && <p className="text-secondary-600">{formData.email}</p>}
                  </div>

                  {formData.message && (
                    <>
                      <hr className="border-secondary-200" />
                      <div>
                        <p className="text-sm text-secondary-500 mb-1">{c.summaryMessage}</p>
                        <p className="text-secondary-600">{formData.message}</p>
                      </div>
                    </>
                  )}
                </div>

                {contactMutation.isError && (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 p-4">
                    <AlertCircle size={20} />
                    <span>{c.errorMessage}</span>
                  </div>
                )}
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-12">
              {currentStep > 1 ? (
                <button
                  onClick={prevStep}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-secondary-300 text-secondary-700 hover:bg-secondary-100 transition-colors"
                >
                  <ArrowLeft size={16} />
                  {c.back}
                </button>
              ) : (
                <div />
              )}

              {currentStep < 4 ? (
                <button
                  onClick={nextStep}
                  disabled={!canProceed()}
                  className="inline-flex items-center gap-2 px-8 py-3 bg-secondary-900 text-white hover:bg-secondary-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {c.next}
                  <ArrowRight size={16} />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={contactMutation.isPending}
                  className="inline-flex items-center gap-2 px-8 py-3 bg-accent-600 text-white hover:bg-accent-500 transition-colors disabled:opacity-50"
                >
                  {contactMutation.isPending ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                      {c.sending}
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      {c.send}
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="py-16 bg-white">
        <div className="container-site text-center">
          <p className="text-secondary-500 mb-4">{c.directContact}</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="tel:+41792177161"
              className="inline-flex items-center gap-2 text-secondary-900 hover:text-accent-600 transition-colors"
            >
              <Phone size={20} />
              +41 79 217 71 61
            </a>
            <a
              href="mailto:welcome@kozelsky.ch"
              className="inline-flex items-center gap-2 text-secondary-900 hover:text-accent-600 transition-colors"
            >
              <Mail size={20} />
              welcome@kozelsky.ch
            </a>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="h-96 bg-secondary-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2760.123456789!2d7.2844!3d46.2231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDEzJzIzLjIiTiA3wrAxNycwMy44IkU!5e0!3m2!1sfr!2sch!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Kozelsky Catering - Rte du Camping 7, 1963 Vétroz"
        />
      </section>
    </>
  );
};

export default ContactV2;

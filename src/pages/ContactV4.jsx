import { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { useContact } from '../hooks/useContact';
import { useLanguage } from '../i18n/LanguageContext';
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Users,
  Calendar,
  Utensils,
  Send,
  Sparkles,
} from 'lucide-react';

const ContactV4 = () => {
  const contactMutation = useContact();
  const { language } = useLanguage();
  const [step, setStep] = useState(1);
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
      steps: [
        { id: 1, title: 'Type', icon: Utensils },
        { id: 2, title: 'Détails', icon: Calendar },
        { id: 3, title: 'Contact', icon: Users },
        { id: 4, title: 'Confirmation', icon: CheckCircle },
      ],
      eventTypes: [
        { id: 'mariage', label: 'Mariage', desc: 'Célébrez votre union avec élégance' },
        { id: 'corporate', label: 'Corporate', desc: 'Séminaires, team building' },
        { id: 'anniversaire', label: 'Anniversaire', desc: 'Fête mémorable' },
        { id: 'cocktail', label: 'Cocktail', desc: 'Réception élégante' },
        { id: 'bus', label: 'Bus 11-97', desc: 'Expérience unique' },
        { id: 'aviation', label: 'Aviation', desc: 'Service en vol' },
      ],
      serviceTypes: [
        { id: 'cocktail', label: 'Cocktail dînatoire', icon: Sparkles },
        { id: 'buffet', label: 'Buffet', icon: Utensils },
        { id: 'assis', label: 'Repas assis', icon: Users },
        { id: 'brunch', label: 'Brunch', icon: Calendar },
      ],
      guestRanges: [
        { id: '10-30', label: '10 - 30', count: '20' },
        { id: '30-50', label: '30 - 50', count: '40' },
        { id: '50-100', label: '50 - 100', count: '75' },
        { id: '100-200', label: '100 - 200', count: '150' },
        { id: '200+', label: '200+', count: '200+' },
      ],
      configurator: "Configurateur d'événement",
      stepOf: 'Étape',
      step1Title: "Quel type d'événement organisez-vous ?",
      step1Subtitle: "Sélectionnez le type d'événement qui correspond à vos besoins.",
      step2Title: 'Parlez-nous de votre événement',
      step2Subtitle: 'Aidez-nous à mieux comprendre vos besoins.',
      step3Title: 'Vos coordonnées',
      step3Subtitle: 'Pour que nous puissions vous recontacter avec une proposition.',
      step4Title: 'Récapitulatif',
      step4Subtitle: "Vérifiez les informations avant d'envoyer votre demande.",
      serviceLabel: 'Type de service *',
      guestsLabel: "Nombre d'invités *",
      dateLabel: "Date de l'événement",
      locationLabel: 'Lieu',
      locationPlaceholder: 'Ville ou région',
      budgetLabel: 'Budget estimé',
      budgetPlaceholder: 'Ex: 5000 CHF',
      messageLabel: 'Message (optionnel)',
      messagePlaceholder: 'Informations supplémentaires...',
      civilityLabel: 'Civilité',
      firstNameLabel: 'Prénom *',
      lastNameLabel: 'Nom *',
      companyLabel: 'Entreprise (optionnel)',
      phoneLabel: 'Téléphone *',
      emailLabel: 'Email *',
      summaryEventType: "TYPE D'ÉVÉNEMENT",
      summaryService: 'SERVICE',
      summaryGuests: 'INVITÉS',
      summaryDate: 'DATE',
      summaryContact: 'CONTACT',
      guests: 'personnes',
      back: 'Retour',
      continue: 'Continuer',
      sending: 'Envoi en cours...',
      send: 'Envoyer ma demande',
      successTitle: 'Demande envoyée !',
      successMessage: 'Merci pour votre demande. Nous vous répondrons dans les plus brefs délais avec une proposition personnalisée.',
      backToHome: "Retour à l'accueil",
      yourConfig: 'Votre configuration',
      needHelp: "Besoin d'aide ? Contactez-nous au",
      civilities: [
        { value: '', label: '-' },
        { value: 'M.', label: 'M.' },
        { value: 'Mme', label: 'Mme' },
      ],
    },
    de: {
      steps: [
        { id: 1, title: 'Typ', icon: Utensils },
        { id: 2, title: 'Details', icon: Calendar },
        { id: 3, title: 'Kontakt', icon: Users },
        { id: 4, title: 'Bestätigung', icon: CheckCircle },
      ],
      eventTypes: [
        { id: 'mariage', label: 'Hochzeit', desc: 'Feiern Sie mit Eleganz' },
        { id: 'corporate', label: 'Firmenfeier', desc: 'Seminare, Teambuilding' },
        { id: 'anniversaire', label: 'Geburtstag', desc: 'Unvergessliche Feier' },
        { id: 'cocktail', label: 'Cocktail', desc: 'Eleganter Empfang' },
        { id: 'bus', label: 'Bus 11-97', desc: 'Einzigartiges Erlebnis' },
        { id: 'aviation', label: 'Luftfahrt', desc: 'Service an Bord' },
      ],
      serviceTypes: [
        { id: 'cocktail', label: 'Cocktail-Dinner', icon: Sparkles },
        { id: 'buffet', label: 'Buffet', icon: Utensils },
        { id: 'assis', label: 'Sitzmenü', icon: Users },
        { id: 'brunch', label: 'Brunch', icon: Calendar },
      ],
      guestRanges: [
        { id: '10-30', label: '10 - 30', count: '20' },
        { id: '30-50', label: '30 - 50', count: '40' },
        { id: '50-100', label: '50 - 100', count: '75' },
        { id: '100-200', label: '100 - 200', count: '150' },
        { id: '200+', label: '200+', count: '200+' },
      ],
      configurator: 'Event-Konfigurator',
      stepOf: 'Schritt',
      step1Title: 'Welche Art von Veranstaltung planen Sie?',
      step1Subtitle: 'Wählen Sie die passende Eventart.',
      step2Title: 'Erzählen Sie uns von Ihrem Event',
      step2Subtitle: 'Helfen Sie uns, Ihre Bedürfnisse besser zu verstehen.',
      step3Title: 'Ihre Kontaktdaten',
      step3Subtitle: 'Damit wir Sie mit einem Angebot kontaktieren können.',
      step4Title: 'Zusammenfassung',
      step4Subtitle: 'Überprüfen Sie die Informationen vor dem Absenden.',
      serviceLabel: 'Serviceart *',
      guestsLabel: 'Anzahl der Gäste *',
      dateLabel: 'Veranstaltungsdatum',
      locationLabel: 'Ort',
      locationPlaceholder: 'Stadt oder Region',
      budgetLabel: 'Geschätztes Budget',
      budgetPlaceholder: 'z.B.: 5000 CHF',
      messageLabel: 'Nachricht (optional)',
      messagePlaceholder: 'Zusätzliche Informationen...',
      civilityLabel: 'Anrede',
      firstNameLabel: 'Vorname *',
      lastNameLabel: 'Nachname *',
      companyLabel: 'Firma (optional)',
      phoneLabel: 'Telefon *',
      emailLabel: 'E-Mail *',
      summaryEventType: 'EVENTTYP',
      summaryService: 'SERVICE',
      summaryGuests: 'GÄSTE',
      summaryDate: 'DATUM',
      summaryContact: 'KONTAKT',
      guests: 'Personen',
      back: 'Zurück',
      continue: 'Weiter',
      sending: 'Wird gesendet...',
      send: 'Anfrage senden',
      successTitle: 'Anfrage gesendet!',
      successMessage: 'Vielen Dank für Ihre Anfrage. Wir werden Ihnen schnellstmöglich mit einem individuellen Angebot antworten.',
      backToHome: 'Zurück zur Startseite',
      yourConfig: 'Ihre Konfiguration',
      needHelp: 'Brauchen Sie Hilfe? Kontaktieren Sie uns unter',
      civilities: [
        { value: '', label: '-' },
        { value: 'M.', label: 'Herr' },
        { value: 'Mme', label: 'Frau' },
      ],
    },
    en: {
      steps: [
        { id: 1, title: 'Type', icon: Utensils },
        { id: 2, title: 'Details', icon: Calendar },
        { id: 3, title: 'Contact', icon: Users },
        { id: 4, title: 'Confirmation', icon: CheckCircle },
      ],
      eventTypes: [
        { id: 'mariage', label: 'Wedding', desc: 'Celebrate your union with elegance' },
        { id: 'corporate', label: 'Corporate', desc: 'Seminars, team building' },
        { id: 'anniversaire', label: 'Birthday', desc: 'Memorable celebration' },
        { id: 'cocktail', label: 'Cocktail', desc: 'Elegant reception' },
        { id: 'bus', label: 'Bus 11-97', desc: 'Unique experience' },
        { id: 'aviation', label: 'Aviation', desc: 'In-flight service' },
      ],
      serviceTypes: [
        { id: 'cocktail', label: 'Cocktail dinner', icon: Sparkles },
        { id: 'buffet', label: 'Buffet', icon: Utensils },
        { id: 'assis', label: 'Seated meal', icon: Users },
        { id: 'brunch', label: 'Brunch', icon: Calendar },
      ],
      guestRanges: [
        { id: '10-30', label: '10 - 30', count: '20' },
        { id: '30-50', label: '30 - 50', count: '40' },
        { id: '50-100', label: '50 - 100', count: '75' },
        { id: '100-200', label: '100 - 200', count: '150' },
        { id: '200+', label: '200+', count: '200+' },
      ],
      configurator: 'Event Configurator',
      stepOf: 'Step',
      step1Title: 'What type of event are you organizing?',
      step1Subtitle: 'Select the event type that matches your needs.',
      step2Title: 'Tell us about your event',
      step2Subtitle: 'Help us better understand your needs.',
      step3Title: 'Your contact details',
      step3Subtitle: 'So we can contact you with a proposal.',
      step4Title: 'Summary',
      step4Subtitle: 'Review the information before sending your request.',
      serviceLabel: 'Service type *',
      guestsLabel: 'Number of guests *',
      dateLabel: 'Event date',
      locationLabel: 'Location',
      locationPlaceholder: 'City or region',
      budgetLabel: 'Estimated budget',
      budgetPlaceholder: 'e.g.: CHF 5000',
      messageLabel: 'Message (optional)',
      messagePlaceholder: 'Additional information...',
      civilityLabel: 'Title',
      firstNameLabel: 'First name *',
      lastNameLabel: 'Last name *',
      companyLabel: 'Company (optional)',
      phoneLabel: 'Phone *',
      emailLabel: 'Email *',
      summaryEventType: 'EVENT TYPE',
      summaryService: 'SERVICE',
      summaryGuests: 'GUESTS',
      summaryDate: 'DATE',
      summaryContact: 'CONTACT',
      guests: 'guests',
      back: 'Back',
      continue: 'Continue',
      sending: 'Sending...',
      send: 'Send my request',
      successTitle: 'Request sent!',
      successMessage: 'Thank you for your request. We will respond shortly with a personalized proposal.',
      backToHome: 'Back to home',
      yourConfig: 'Your configuration',
      needHelp: 'Need help? Contact us at',
      civilities: [
        { value: '', label: '-' },
        { value: 'M.', label: 'Mr.' },
        { value: 'Mme', label: 'Mrs.' },
      ],
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
    if (step < 4) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.eventType !== '';
      case 2:
        return formData.serviceType !== '' && formData.guestRange !== '';
      case 3:
        return formData.firstName !== '' && formData.lastName !== '' && formData.phone !== '' && formData.email !== '';
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
=== CONFIGURATEUR V4 ===

TYPE: ${eventTypeLabel}
SERVICE: ${serviceTypeLabel}
INVITÉS: ${guestRangeLabel} personnes
DATE: ${formData.eventDate || 'Non précisée'}
LIEU: ${formData.eventLocation || 'Non précisé'}
BUDGET: ${formData.budget || 'Non précisé'}

ENTREPRISE: ${formData.company || 'N/A'}

MESSAGE:
${formData.message || 'Aucun message'}
        `.trim(),
      };

      await contactMutation.mutateAsync(apiData);
      setSubmitted(true);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (submitted) {
    return (
      <>
        <SEOHead page="contact" />
        <div className="min-h-screen flex items-center justify-center bg-cream py-24">
          <div className="container-site">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-28 h-28 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-10">
                <CheckCircle size={56} className="text-green-500" />
              </div>
              <h1 className="text-5xl md:text-6xl font-serif text-secondary-900 mb-8">
                {c.successTitle}
              </h1>
              <p className="text-secondary-600 text-xl mb-10">
                {c.successMessage}
              </p>
              <a
                href="/"
                className="inline-flex items-center gap-3 px-10 py-4 bg-secondary-900 text-white rounded-full hover:bg-accent-600 transition-colors font-medium"
              >
                {c.backToHome}
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEOHead page="contact" />

      <div className="min-h-screen bg-cream pt-24">
        {/* Header with progress */}
        <div className="bg-white border-b border-secondary-200">
          <div className="flex flex-col lg:flex-row">
            <div className="flex-1 lg:max-w-[65%] px-6 lg:px-10 py-8">
              <div className="max-w-3xl">
                <div className="flex items-center justify-between mb-6">
                  <h1 className="text-3xl font-serif font-bold text-secondary-900">
                    {c.configurator}
                  </h1>
                  <span className="text-sm text-secondary-500 bg-cream px-4 py-2 rounded-full">
                    {c.stepOf} {step} / 4
                  </span>
                </div>

                {/* Progress bar */}
                <div className="flex items-center gap-3">
                  {[1, 2, 3, 4].map((s) => (
                    <div key={s} className="flex-1">
                      <div
                        className={`h-2 rounded-full transition-all ${
                          s <= step ? 'bg-accent-600' : 'bg-secondary-200'
                        }`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row min-h-[calc(100vh-180px)]">
          {/* Main Content - 65% */}
          <div className="flex-1 lg:max-w-[65%] px-6 lg:px-10 py-12">
            <div className="max-w-3xl">
              {/* Step 1: Event Type */}
              {step === 1 && (
                <div className="space-y-10">
                  <div>
                    <h2 className="text-4xl font-serif text-secondary-900 mb-4">
                      {c.step1Title}
                    </h2>
                    <p className="text-secondary-600 text-lg">
                      {c.step1Subtitle}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {EVENT_TYPES.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => handleSelect('eventType', type.id)}
                        className={`p-8 rounded-2xl text-left transition-all hover:shadow-lg ${
                          formData.eventType === type.id
                            ? 'bg-accent-600 text-white shadow-lg'
                            : 'bg-white border-2 border-secondary-200 hover:border-accent-400'
                        }`}
                      >
                        <h3 className={`text-2xl font-serif mb-2 ${formData.eventType === type.id ? 'text-white' : 'text-secondary-900'}`}>
                          {type.label}
                        </h3>
                        <p className={`text-sm ${formData.eventType === type.id ? 'text-white/80' : 'text-secondary-600'}`}>{type.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Details */}
              {step === 2 && (
                <div className="space-y-10">
                  <div>
                    <h2 className="text-4xl font-serif text-secondary-900 mb-4">
                      {c.step2Title}
                    </h2>
                    <p className="text-secondary-600 text-lg">
                      {c.step2Subtitle}
                    </p>
                  </div>

                  {/* Service Type */}
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-4">
                      {c.serviceLabel}
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      {SERVICE_TYPES.map((service) => (
                        <button
                          key={service.id}
                          onClick={() => handleSelect('serviceType', service.id)}
                          className={`p-5 rounded-2xl text-left transition-all flex items-center gap-4 ${
                            formData.serviceType === service.id
                              ? 'bg-accent-600 text-white'
                              : 'bg-white border-2 border-secondary-200 hover:border-accent-400'
                          }`}
                        >
                          <service.icon size={24} className={formData.serviceType === service.id ? 'text-white' : 'text-accent-600'} />
                          <span className={formData.serviceType === service.id ? 'text-white' : 'text-secondary-900'}>{service.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Guest Range */}
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-4">
                      {c.guestsLabel}
                    </label>
                    <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                      {GUEST_RANGES.map((range) => (
                        <button
                          key={range.id}
                          onClick={() => handleSelect('guestRange', range.id)}
                          className={`p-5 rounded-2xl text-center transition-all ${
                            formData.guestRange === range.id
                              ? 'bg-accent-600 text-white'
                              : 'bg-white border-2 border-secondary-200 hover:border-accent-400'
                          }`}
                        >
                          <div className={`text-xl font-bold mb-1 ${formData.guestRange === range.id ? 'text-white' : 'text-secondary-900'}`}>
                            {range.count}
                          </div>
                          <div className={`text-xs ${formData.guestRange === range.id ? 'text-white/80' : 'text-secondary-600'}`}>{range.label}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Date & Location */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-3">
                        {c.dateLabel}
                      </label>
                      <input
                        type="date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        className="w-full px-5 py-4 border-2 border-secondary-200 rounded-xl focus:border-accent-600 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-3">
                        {c.locationLabel}
                      </label>
                      <input
                        type="text"
                        name="eventLocation"
                        value={formData.eventLocation}
                        onChange={handleChange}
                        placeholder={c.locationPlaceholder}
                        className="w-full px-5 py-4 border-2 border-secondary-200 rounded-xl focus:border-accent-600 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Budget & Message */}
                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-3">
                        {c.budgetLabel}
                      </label>
                      <input
                        type="text"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        placeholder={c.budgetPlaceholder}
                        className="w-full px-5 py-4 border-2 border-secondary-200 rounded-xl focus:border-accent-600 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-3">
                        {c.messageLabel}
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder={c.messagePlaceholder}
                        className="w-full px-5 py-4 border-2 border-secondary-200 rounded-xl focus:border-accent-600 focus:outline-none resize-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Contact Info */}
              {step === 3 && (
                <div className="space-y-10">
                  <div>
                    <h2 className="text-4xl font-serif text-secondary-900 mb-4">
                      {c.step3Title}
                    </h2>
                    <p className="text-secondary-600 text-lg">
                      {c.step3Subtitle}
                    </p>
                  </div>

                  <div className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                      <div className="md:col-span-1">
                        <label className="block text-sm font-medium text-secondary-700 mb-3">
                          {c.civilityLabel}
                        </label>
                        <select
                          name="civility"
                          value={formData.civility}
                          onChange={handleChange}
                          className="w-full px-5 py-4 border-2 border-secondary-200 rounded-xl focus:border-accent-600 focus:outline-none"
                        >
                          {c.civilities.map((civ) => (
                            <option key={civ.value} value={civ.value}>{civ.label}</option>
                          ))}
                        </select>
                      </div>
                      <div className="md:col-span-1">
                        <label className="block text-sm font-medium text-secondary-700 mb-3">
                          {c.firstNameLabel}
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full px-5 py-4 border-2 border-secondary-200 rounded-xl focus:border-accent-600 focus:outline-none"
                        />
                      </div>
                      <div className="md:col-span-1">
                        <label className="block text-sm font-medium text-secondary-700 mb-3">
                          {c.lastNameLabel}
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full px-5 py-4 border-2 border-secondary-200 rounded-xl focus:border-accent-600 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-3">
                        {c.companyLabel}
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-5 py-4 border-2 border-secondary-200 rounded-xl focus:border-accent-600 focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-3">
                          {c.phoneLabel}
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-5 py-4 border-2 border-secondary-200 rounded-xl focus:border-accent-600 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-3">
                          {c.emailLabel}
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-5 py-4 border-2 border-secondary-200 rounded-xl focus:border-accent-600 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Summary */}
              {step === 4 && (
                <div className="space-y-10">
                  <div>
                    <h2 className="text-4xl font-serif text-secondary-900 mb-4">
                      {c.step4Title}
                    </h2>
                    <p className="text-secondary-600 text-lg">
                      {c.step4Subtitle}
                    </p>
                  </div>

                  <div className="bg-white p-10 rounded-3xl border-2 border-secondary-200 space-y-8">
                    <div>
                      <h3 className="text-sm font-medium text-secondary-500 mb-2">{c.summaryEventType}</h3>
                      <p className="text-xl text-secondary-900">
                        {EVENT_TYPES.find(e => e.id === formData.eventType)?.label}
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-sm font-medium text-secondary-500 mb-2">{c.summaryService}</h3>
                        <p className="text-secondary-900">
                          {SERVICE_TYPES.find(s => s.id === formData.serviceType)?.label}
                        </p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-secondary-500 mb-2">{c.summaryGuests}</h3>
                        <p className="text-secondary-900">
                          {GUEST_RANGES.find(g => g.id === formData.guestRange)?.label} {c.guests}
                        </p>
                      </div>
                    </div>
                    {formData.eventDate && (
                      <div>
                        <h3 className="text-sm font-medium text-secondary-500 mb-2">{c.summaryDate}</h3>
                        <p className="text-secondary-900">{formData.eventDate}</p>
                      </div>
                    )}
                    <div>
                      <h3 className="text-sm font-medium text-secondary-500 mb-2">{c.summaryContact}</h3>
                      <p className="text-secondary-900 text-lg">
                        {formData.firstName} {formData.lastName}
                      </p>
                      <p className="text-secondary-600">{formData.email} • {formData.phone}</p>
                    </div>
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={contactMutation.isPending}
                    className="w-full flex items-center justify-center gap-3 px-10 py-5 bg-accent-600 text-white rounded-full hover:bg-accent-700 transition-colors disabled:opacity-50 font-medium text-lg"
                  >
                    {contactMutation.isPending ? c.sending : c.send}
                    <Send size={20} />
                  </button>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-14 pt-10 border-t border-secondary-200">
                {step > 1 && (
                  <button
                    onClick={prevStep}
                    className="inline-flex items-center gap-3 px-8 py-4 border-2 border-secondary-300 text-secondary-700 rounded-full hover:border-secondary-400 transition-colors font-medium"
                  >
                    <ArrowLeft size={18} />
                    {c.back}
                  </button>
                )}
                {step < 4 && (
                  <button
                    onClick={nextStep}
                    disabled={!canProceed()}
                    className={`inline-flex items-center gap-3 px-10 py-4 rounded-full transition-colors ml-auto font-medium ${
                      canProceed()
                        ? 'bg-accent-600 text-white hover:bg-accent-700'
                        : 'bg-secondary-200 text-secondary-400 cursor-not-allowed'
                    }`}
                  >
                    {c.continue}
                    <ArrowRight size={18} />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar - 35% */}
          <div className="lg:w-[35%] bg-secondary-900 text-white p-10 lg:p-12">
            <div className="sticky top-32">
              <h3 className="text-3xl font-serif mb-10">{c.yourConfig}</h3>

              <div className="space-y-8">
                {/* Step indicators */}
                {STEPS.map((s) => {
                  const Icon = s.icon;
                  const isActive = step >= s.id;
                  return (
                    <div key={s.id} className="flex items-start gap-5">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                          isActive ? 'bg-accent-600' : 'bg-white/10'
                        }`}
                      >
                        <Icon size={22} className={isActive ? 'text-white' : 'text-white/40'} />
                      </div>
                      <div className="flex-1">
                        <div className={`text-base ${isActive ? 'text-white' : 'text-white/40'}`}>
                          {s.title}
                        </div>
                        {s.id === 1 && formData.eventType && (
                          <div className="text-sm text-accent-400 mt-1">
                            {EVENT_TYPES.find(e => e.id === formData.eventType)?.label}
                          </div>
                        )}
                        {s.id === 2 && formData.serviceType && (
                          <div className="text-sm text-accent-400 mt-1">
                            {SERVICE_TYPES.find(e => e.id === formData.serviceType)?.label}
                          </div>
                        )}
                        {s.id === 3 && formData.firstName && (
                          <div className="text-sm text-accent-400 mt-1">
                            {formData.firstName} {formData.lastName}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-14 pt-10 border-t border-white/10">
                <p className="text-base text-white/60">
                  {c.needHelp}{' '}
                  <a href="tel:+41792177161" className="text-accent-400 hover:underline">
                    +41 79 217 71 61
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactV4;

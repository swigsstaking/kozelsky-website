import { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { useContact } from '../hooks/useContact';
import { Send, CheckCircle, AlertCircle, ChevronRight, ChevronLeft, Users, Calendar, MapPin, UtensilsCrossed, Bus, MessageSquare, Plane } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const STEPS = {
  SERVICE: 0,
  DETAILS: 1,
  INFO: 2,
};

const Contact = () => {
  const { t } = useLanguage();
  const contactMutation = useContact();

  const SERVICE_OPTIONS = [
    { id: 'catering', icon: UtensilsCrossed, labelKey: 'contact.services.catering', descKey: 'contact.services.cateringDesc' },
    { id: 'bus', icon: Bus, labelKey: 'contact.services.bus', descKey: 'contact.services.busDesc' },
    { id: 'aviation', icon: Plane, labelKey: 'contact.services.aviation', descKey: 'contact.services.aviationDesc' },
    { id: 'other', icon: MessageSquare, labelKey: 'contact.services.other', descKey: 'contact.services.otherDesc' },
  ];

  const EVENT_TYPE_KEYS = [
    'contact.eventTypes.wedding',
    'contact.eventTypes.birthday',
    'contact.eventTypes.seminar',
    'contact.eventTypes.cocktail',
    'contact.eventTypes.privateParty',
    'contact.eventTypes.corporate',
    'contact.eventTypes.other',
  ];

  const [currentStep, setCurrentStep] = useState(STEPS.SERVICE);
  const [formData, setFormData] = useState({
    service: '',
    eventType: '',
    guestCount: '',
    eventDate: '',
    eventLocation: '',
    budget: '',
    additionalInfo: '',
    civility: '',
    lastName: '',
    firstName: '',
    company: '',
    phone: '',
    email: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleServiceSelect = (serviceId) => {
    setFormData({ ...formData, service: serviceId });
    setCurrentStep(STEPS.DETAILS);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (currentStep < STEPS.INFO) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > STEPS.SERVICE) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const serviceLabels = {
        catering: t('contact.services.catering'),
        bus: t('contact.services.bus'),
        aviation: t('contact.services.aviation'),
        other: t('contact.services.other'),
      };

      const apiData = {
        name: `${formData.civility} ${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        phone: formData.phone,
        message: `SERVICE DEMANDÉ: ${serviceLabels[formData.service] || formData.service}
${formData.company ? `Entreprise: ${formData.company}` : ''}

DÉTAILS DE L'ÉVÉNEMENT:
- Type: ${formData.eventType || 'Non spécifié'}
- Nombre d'invités: ${formData.guestCount || 'Non spécifié'}
- Date: ${formData.eventDate || 'Non spécifiée'}
- Lieu: ${formData.eventLocation || 'Non spécifié'}
- Budget estimé: ${formData.budget || 'Non spécifié'}

INFORMATIONS COMPLÉMENTAIRES:
${formData.additionalInfo || 'Aucune'}`,
      };

      await contactMutation.mutateAsync(apiData);
      setSubmitted(true);
    } catch (error) {
      console.error('Erreur:', error);
    }
  };

  const canProceedToInfo = formData.service === 'other' || (formData.eventType && formData.guestCount);

  if (submitted) {
    return (
      <>
        <SEOHead page="contact" />
        <section className="section bg-cream min-h-[70vh] flex items-center">
          <div className="container-site">
            <div className="max-w-xl mx-auto bg-white p-8 lg:p-12 text-center shadow-sm">
              <CheckCircle className="text-green-500 mx-auto mb-6" size={64} />
              <h2 className="text-3xl font-serif text-secondary-900 mb-4">
                {t('contact.success.title')}
              </h2>
              <p className="text-secondary-600 mb-6">
                {t('contact.success.message')}
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setCurrentStep(STEPS.SERVICE);
                  setFormData({
                    service: '',
                    eventType: '',
                    guestCount: '',
                    eventDate: '',
                    eventLocation: '',
                    budget: '',
                    additionalInfo: '',
                    civility: '',
                    lastName: '',
                    firstName: '',
                    company: '',
                    phone: '',
                    email: '',
                  });
                }}
                className="btn-outline"
              >
                {t('contact.buttons.newRequest')}
              </button>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <SEOHead page="contact" />

      {/* Hero */}
      <section className="bg-secondary-900 text-white py-16">
        <div className="container-site text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">{t('contact.hero.title')}</h1>
          <p className="text-secondary-300 text-lg max-w-2xl mx-auto">
            {t('contact.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Progress Bar */}
      <section className="bg-white border-b border-secondary-200">
        <div className="container-site py-4">
          <div className="flex items-center justify-center gap-4">
            {[t('contact.steps.service'), t('contact.steps.details'), t('contact.steps.info')].map((step, index) => (
              <div key={index} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
                    index <= currentStep
                      ? 'bg-accent-600 text-white'
                      : 'bg-secondary-200 text-secondary-500'
                  }`}
                >
                  {index + 1}
                </div>
                <span
                  className={`ml-2 text-sm hidden sm:block ${
                    index <= currentStep ? 'text-secondary-900' : 'text-secondary-400'
                  }`}
                >
                  {step}
                </span>
                {index < 2 && (
                  <ChevronRight
                    size={20}
                    className={`mx-2 ${
                      index < currentStep ? 'text-accent-600' : 'text-secondary-300'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Content */}
      <section className="section bg-cream">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            {/* Step 1: Service Selection */}
            {currentStep === STEPS.SERVICE && (
              <div>
                <h2 className="text-2xl font-serif text-secondary-900 mb-2 text-center">
                  {t('contact.questions.whatCanWeDo')}
                </h2>
                <p className="text-secondary-600 text-center mb-8">
                  {t('contact.questions.selectService')}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {SERVICE_OPTIONS.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handleServiceSelect(option.id)}
                      className={`p-6 bg-white border-2 text-left hover:border-accent-600 hover:shadow-md transition-all ${
                        formData.service === option.id
                          ? 'border-accent-600 shadow-md'
                          : 'border-transparent'
                      }`}
                    >
                      <option.icon size={32} className="text-accent-600 mb-3" />
                      <h3 className="text-lg font-semibold text-secondary-900 mb-1">
                        {t(option.labelKey)}
                      </h3>
                      <p className="text-secondary-600 text-sm">{t(option.descKey)}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Event Details */}
            {currentStep === STEPS.DETAILS && (
              <div>
                <h2 className="text-2xl font-serif text-secondary-900 mb-2 text-center">
                  {t('contact.questions.tellUsAbout')}
                </h2>
                <p className="text-secondary-600 text-center mb-8">
                  {t('contact.questions.helpPrepare')}
                </p>

                <div className="bg-white p-6 lg:p-8 shadow-sm space-y-6">
                  {formData.service !== 'other' && (
                    <>
                      {/* Event Type */}
                      <div>
                        <label className="block text-sm text-secondary-700 mb-2">
                          {t('contact.labels.eventType')} *
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                          {EVENT_TYPE_KEYS.map((typeKey) => {
                            const typeValue = t(typeKey);
                            return (
                              <button
                                key={typeKey}
                                type="button"
                                onClick={() => setFormData({ ...formData, eventType: typeValue })}
                                className={`p-3 text-sm border transition-colors ${
                                  formData.eventType === typeValue
                                    ? 'border-accent-600 bg-accent-50 text-accent-700'
                                    : 'border-secondary-200 hover:border-secondary-400'
                                }`}
                              >
                                {typeValue}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Guest Count */}
                      <div>
                        <label htmlFor="guestCount" className="block text-sm text-secondary-700 mb-2">
                          <Users size={16} className="inline mr-2" />
                          {t('contact.labels.guestCount')} *
                        </label>
                        <select
                          id="guestCount"
                          name="guestCount"
                          value={formData.guestCount}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-secondary-300 bg-white focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                        >
                          <option value="">{t('contact.placeholders.select')}</option>
                          <option value="1-20">{t('contact.guestOptions.1-20')}</option>
                          <option value="20-50">{t('contact.guestOptions.20-50')}</option>
                          <option value="50-100">{t('contact.guestOptions.50-100')}</option>
                          <option value="100-200">{t('contact.guestOptions.100-200')}</option>
                          <option value="200+">{t('contact.guestOptions.200+')}</option>
                        </select>
                      </div>

                      {/* Date */}
                      <div>
                        <label htmlFor="eventDate" className="block text-sm text-secondary-700 mb-2">
                          <Calendar size={16} className="inline mr-2" />
                          {t('contact.labels.eventDate')}
                        </label>
                        <input
                          type="date"
                          id="eventDate"
                          name="eventDate"
                          value={formData.eventDate}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-secondary-300 bg-white focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                        />
                      </div>

                      {/* Location */}
                      <div>
                        <label htmlFor="eventLocation" className="block text-sm text-secondary-700 mb-2">
                          <MapPin size={16} className="inline mr-2" />
                          {t('contact.labels.eventLocation')}
                        </label>
                        <input
                          type="text"
                          id="eventLocation"
                          name="eventLocation"
                          value={formData.eventLocation}
                          onChange={handleChange}
                          placeholder={t('contact.placeholders.cityOrAddress')}
                          className="w-full px-4 py-3 border border-secondary-300 bg-white focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                        />
                      </div>

                      {/* Budget */}
                      <div>
                        <label htmlFor="budget" className="block text-sm text-secondary-700 mb-2">
                          {t('contact.labels.budget')}
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-secondary-300 bg-white focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                        >
                          <option value="">{t('contact.placeholders.select')}</option>
                          <option value="30-50">{t('contact.budgetOptions.30-50')}</option>
                          <option value="50-80">{t('contact.budgetOptions.50-80')}</option>
                          <option value="80-120">{t('contact.budgetOptions.80-120')}</option>
                          <option value="120+">{t('contact.budgetOptions.120+')}</option>
                          <option value="unknown">{t('contact.budgetOptions.unknown')}</option>
                        </select>
                      </div>
                    </>
                  )}

                  {/* Additional Info */}
                  <div>
                    <label htmlFor="additionalInfo" className="block text-sm text-secondary-700 mb-2">
                      {formData.service === 'other' ? t('contact.labels.yourMessage') + ' *' : t('contact.labels.additionalInfo')}
                    </label>
                    <textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleChange}
                      rows={4}
                      placeholder={formData.service === 'other' ? t('contact.placeholders.describeRequest') : t('contact.placeholders.allergies')}
                      className="w-full px-4 py-3 border border-secondary-300 bg-white focus:ring-2 focus:ring-accent-500 focus:border-accent-500 resize-none"
                    />
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex justify-between mt-6">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex items-center gap-2 px-6 py-3 text-secondary-600 hover:text-secondary-900 transition-colors"
                  >
                    <ChevronLeft size={20} />
                    {t('contact.buttons.back')}
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={!canProceedToInfo && formData.service !== 'other'}
                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {t('contact.buttons.continue')}
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Personal Info */}
            {currentStep === STEPS.INFO && (
              <form onSubmit={handleSubmit}>
                <h2 className="text-2xl font-serif text-secondary-900 mb-2 text-center">
                  {t('contact.questions.yourDetails')}
                </h2>
                <p className="text-secondary-600 text-center mb-8">
                  {t('contact.questions.howContact')}
                </p>

                <div className="bg-white p-6 lg:p-8 shadow-sm space-y-6">
                  {/* Civilité */}
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="civility"
                        value={t('contact.form.madame')}
                        checked={formData.civility === t('contact.form.madame')}
                        onChange={handleChange}
                        className="w-4 h-4 text-accent-600 border-secondary-300 focus:ring-accent-500"
                      />
                      <span className="text-secondary-700">{t('contact.form.madame')}</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="civility"
                        value={t('contact.form.monsieur')}
                        checked={formData.civility === t('contact.form.monsieur')}
                        onChange={handleChange}
                        className="w-4 h-4 text-accent-600 border-secondary-300 focus:ring-accent-500"
                      />
                      <span className="text-secondary-700">{t('contact.form.monsieur')}</span>
                    </label>
                  </div>

                  {/* Nom / Prénom */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm text-secondary-700 mb-2">
                        {t('contact.form.firstName')} *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-secondary-300 bg-white focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm text-secondary-700 mb-2">
                        {t('contact.form.lastName')} *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-secondary-300 bg-white focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                      />
                    </div>
                  </div>

                  {/* Entreprise */}
                  <div>
                    <label htmlFor="company" className="block text-sm text-secondary-700 mb-2">
                      {t('contact.form.company')}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-secondary-300 bg-white focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                    />
                  </div>

                  {/* Téléphone / Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm text-secondary-700 mb-2">
                        {t('contact.form.phone')} *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder={t('contact.placeholders.phonePlaceholder')}
                        className="w-full px-4 py-3 border border-secondary-300 bg-white focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm text-secondary-700 mb-2">
                        {t('contact.form.email')} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-secondary-300 bg-white focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                      />
                    </div>
                  </div>

                  {contactMutation.isError && (
                    <div className="flex items-center gap-2 text-red-600 bg-red-50 p-4">
                      <AlertCircle size={20} />
                      <span>{t('contact.error.message')}</span>
                    </div>
                  )}
                </div>

                {/* Navigation */}
                <div className="flex justify-between mt-6">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex items-center gap-2 px-6 py-3 text-secondary-600 hover:text-secondary-900 transition-colors"
                  >
                    <ChevronLeft size={20} />
                    {t('contact.buttons.back')}
                  </button>
                  <button
                    type="submit"
                    disabled={contactMutation.isPending || !formData.firstName || !formData.lastName || !formData.phone || !formData.email}
                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {contactMutation.isPending ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        {t('contact.buttons.sending')}
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        {t('contact.buttons.sendRequest')}
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-semibold text-secondary-900 mb-2">{t('contact.info.phoneTitle')}</h3>
              <a href="tel:+41792177161" className="text-accent-600 hover:underline">
                +41 79 217 71 61
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-secondary-900 mb-2">{t('contact.info.emailTitle')}</h3>
              <a href="mailto:welcome@kozelsky.ch" className="text-accent-600 hover:underline">
                welcome@kozelsky.ch
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-secondary-900 mb-2">{t('contact.info.addressTitle')}</h3>
              <p className="text-secondary-600 whitespace-pre-line">
                {t('contact.info.address')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

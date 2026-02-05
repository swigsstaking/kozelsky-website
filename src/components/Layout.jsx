import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Menu, X, Linkedin, Instagram, Facebook, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useSiteInfo } from '../hooks/useSiteInfo';
import { useLanguage } from '../i18n/LanguageContext';

// Image URLs
const IMAGES = {
  logo: 'https://swigs.online/uploads/kozelsky/1770040801905-355143210.png',
  logoBus: 'https://swigs.online/uploads/kozelsky/1770040801871-137372873.png',
  logoWhite: 'https://swigs.online/uploads/kozelsky/1770040801951-962602387.png',
};

// PDF documents
const DOCUMENTS = {
  journalDuBus: 'https://swigs.online/uploads/kozelsky/1770111876927-123524079.pdf',
  flyer1197: 'https://swigs.online/uploads/kozelsky/1770111872504-15611432.pdf',
  cgv: 'https://swigs.online/uploads/kozelsky/1770111872347-978255704.pdf',
};

// Social links
const SOCIAL = {
  linkedin: 'https://www.linkedin.com/in/kozelsky-catering-7b9754264/',
  instagram: 'https://www.instagram.com/kozelsky_catering/',
  facebook: 'https://www.facebook.com/Kozelsky.Catering/',
};

// Contact info
const CONTACT = {
  phone: '+41 79 217 71 61',
  email: 'welcome@kozelsky.ch',
};

const Layout = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const siteInfo = useSiteInfo();
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  // Check if we're on a bus page
  const isBusSection = location.pathname.startsWith('/bus-11-97');

  // Navigation principale Kozelsky with all version submenus
  const mainNavigation = [
    {
      name: t('nav.home'),
      path: '/',
      submenu: [
        { name: 'Original', path: '/' },
        { name: 'V2', path: '/v2' },
        { name: 'V3', path: '/v3' },
        { name: 'V4 (Rounded)', path: '/v4' },
      ],
    },
    {
      name: t('nav.aviation'),
      path: '/aviation-privee',
      submenu: [
        { name: 'Original', path: '/aviation-privee' },
        { name: 'V2', path: '/aviation-privee/v2' },
        { name: 'V4 (Rounded)', path: '/aviation-privee/v4' },
      ],
    },
    {
      name: t('nav.catering'),
      path: '/catering',
      submenu: [
        { name: 'Original', path: '/catering' },
        { name: 'V2', path: '/catering/v2' },
        { name: 'V4 (Rounded)', path: '/catering/v4' },
      ],
    },
    {
      name: t('nav.nous'),
      path: '/nous',
      submenu: [
        { name: 'Original', path: '/nous' },
        { name: 'V2', path: '/nous/v2' },
        { name: 'V4 (Rounded)', path: '/nous/v4' },
      ],
    },
    {
      name: t('nav.services'),
      path: '/services',
      submenu: [
        { name: 'Original', path: '/services' },
        { name: 'V2', path: '/services/v2' },
        { name: 'V4 (Rounded)', path: '/services/v4' },
      ],
    },
    {
      name: t('nav.impressions'),
      path: '/impressions',
      submenu: [
        { name: 'Original', path: '/impressions' },
        { name: 'V2', path: '/impressions/v2' },
        { name: 'V4 (Rounded)', path: '/impressions/v4' },
      ],
    },
    {
      name: t('nav.bus'),
      path: '/bus-11-97',
      submenu: [
        { name: 'Original', path: '/bus-11-97' },
        { name: 'V2', path: '/bus-11-97/v2' },
        { name: 'V3 (Dark)', path: '/bus-11-97/v3' },
        { name: 'V4 (Rounded)', path: '/bus-11-97/v4' },
        { name: 'V5 (Full Dark)', path: '/bus-11-97/v5' },
      ],
    },
    {
      name: t('nav.contact'),
      path: '/contact',
      submenu: [
        { name: 'Original', path: '/contact' },
        { name: 'V2 (Configurateur)', path: '/contact/v2' },
        { name: 'V3 (Configurateur Pro)', path: '/contact/v3' },
        { name: 'V4 (Rounded)', path: '/contact/v4' },
      ],
    },
  ];

  // Navigation Bus 11-97
  const busNavLabels = {
    fr: { home: 'ACCUEIL', bus: 'BUS 11-97', equipment: 'ÉQUIPEMENT', team: 'ÉQUIPE', services: 'SERVICES', history: 'HISTOIRE', contact: 'CONTACT' },
    de: { home: 'STARTSEITE', bus: 'BUS 11-97', equipment: 'AUSSTATTUNG', team: 'TEAM', services: 'DIENSTLEISTUNGEN', history: 'GESCHICHTE', contact: 'KONTAKT' },
    en: { home: 'HOME', bus: 'BUS 11-97', equipment: 'EQUIPMENT', team: 'TEAM', services: 'SERVICES', history: 'HISTORY', contact: 'CONTACT' },
  };
  const busLabels = busNavLabels[language] || busNavLabels.fr;

  const busNavigation = [
    { name: busLabels.home, path: '/' },
    {
      name: busLabels.bus,
      path: '/bus-11-97',
      submenu: [
        { name: 'Original', path: '/bus-11-97' },
        { name: 'V2', path: '/bus-11-97/v2' },
        { name: 'V3 (Dark)', path: '/bus-11-97/v3' },
        { name: 'V4 (Rounded)', path: '/bus-11-97/v4' },
        { name: 'V5 (Full Dark)', path: '/bus-11-97/v5' },
      ],
    },
    {
      name: busLabels.equipment,
      path: '/bus-11-97/equipment',
      submenu: [
        { name: 'Original', path: '/bus-11-97/equipment' },
        { name: 'V2', path: '/bus-11-97/v2/equipment' },
        { name: 'V3 (Dark)', path: '/bus-11-97/v3/equipment' },
        { name: 'V4 (Rounded)', path: '/bus-11-97/v4/equipment' },
        { name: 'V5 (Full Dark)', path: '/bus-11-97/v5/equipment' },
      ],
    },
    {
      name: busLabels.team,
      path: '/bus-11-97/team',
      submenu: [
        { name: 'Original', path: '/bus-11-97/team' },
        { name: 'V2', path: '/bus-11-97/v2/team' },
        { name: 'V3 (Dark)', path: '/bus-11-97/v3/team' },
        { name: 'V4 (Rounded)', path: '/bus-11-97/v4/team' },
        { name: 'V5 (Full Dark)', path: '/bus-11-97/v5/team' },
      ],
    },
    {
      name: busLabels.services,
      path: '/bus-11-97/services',
      submenu: [
        { name: 'Original', path: '/bus-11-97/services' },
        { name: 'V2', path: '/bus-11-97/v2/services' },
        { name: 'V3 (Dark)', path: '/bus-11-97/v3/services' },
        { name: 'V4 (Rounded)', path: '/bus-11-97/v4/services' },
        { name: 'V5 (Full Dark)', path: '/bus-11-97/v5/services' },
      ],
    },
    {
      name: busLabels.history,
      path: '/bus-11-97/history',
      submenu: [
        { name: 'Original', path: '/bus-11-97/history' },
        { name: 'V2', path: '/bus-11-97/v2/history' },
        { name: 'V3 (Dark)', path: '/bus-11-97/v3/history' },
        { name: 'V4 (Rounded)', path: '/bus-11-97/v4/history' },
        { name: 'V5 (Full Dark)', path: '/bus-11-97/v5/history' },
      ],
    },
    {
      name: busLabels.contact,
      path: '/contact',
      submenu: [
        { name: 'Original', path: '/contact' },
        { name: 'V2', path: '/contact/v2' },
        { name: 'V3', path: '/contact/v3' },
        { name: 'V4 (Rounded)', path: '/contact/v4' },
      ],
    },
  ];

  // Use bus navigation when on bus pages
  const navigation = isBusSection ? busNavigation : mainNavigation;

  // Navigation mobile compacte
  const mobileNavigation = isBusSection
    ? [
        { name: busLabels.bus, path: '/bus-11-97' },
        { name: busLabels.equipment, path: '/bus-11-97/equipment' },
        { name: busLabels.contact, path: '/contact' },
      ]
    : [
        { name: t('nav.catering'), path: '/catering' },
        { name: t('nav.nous'), path: '/nous' },
        { name: t('nav.contact'), path: '/contact' },
      ];

  // Current logo based on section
  const currentLogo = isBusSection ? IMAGES.logoBus : IMAGES.logo;
  const logoAlt = isBusSection ? '11-97.ch' : 'Kozelsky Catering';

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      {/* Header */}
      <header className="bg-cream sticky top-0 z-50">
        {/* Top Bar - Mobile Navigation */}
        <div className="bg-secondary-900 text-white py-2 lg:hidden">
          <div className="container-site flex justify-center items-center gap-6 text-xs tracking-wider">
            {mobileNavigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`hover:text-accent-400 transition-colors ${
                  isActive(item.path) ? 'text-accent-400' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="container-site py-3 lg:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to={isBusSection ? '/bus-11-97' : '/'} className="flex-shrink-0">
              <img
                src={currentLogo}
                alt={logoAlt}
                className="h-12 lg:h-20 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navigation.map((item) => (
                <div key={item.path} className="relative group">
                  <Link
                    to={item.path}
                    className={`text-xs tracking-wider font-medium transition-colors inline-flex items-center gap-1 ${
                      isActive(item.path) || item.submenu?.some(sub => isActive(sub.path))
                        ? 'text-accent-600'
                        : 'text-secondary-700 hover:text-accent-600'
                    }`}
                  >
                    {item.name}
                    {item.submenu && <ChevronDown size={12} className="group-hover:rotate-180 transition-transform" />}
                  </Link>

                  {/* Dropdown menu */}
                  {item.submenu && (
                    <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="bg-white shadow-lg border border-secondary-100 py-2 min-w-[140px]">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            className={`block px-4 py-2 text-xs tracking-wider transition-colors ${
                              isActive(subItem.path)
                                ? 'text-accent-600 bg-accent-50'
                                : 'text-secondary-700 hover:text-accent-600 hover:bg-secondary-50'
                            }`}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Language selector */}
            <div className="hidden lg:flex items-center gap-2 text-xs">
              <button
                onClick={() => setLanguage('en')}
                className={`transition-colors ${
                  language === 'en' ? 'font-semibold text-secondary-900' : 'text-secondary-400 hover:text-secondary-600'
                }`}
              >
                E
              </button>
              <span className="text-secondary-300">|</span>
              <button
                onClick={() => setLanguage('de')}
                className={`transition-colors ${
                  language === 'de' ? 'font-semibold text-secondary-900' : 'text-secondary-400 hover:text-secondary-600'
                }`}
              >
                D
              </button>
              <span className="text-secondary-300">|</span>
              <button
                onClick={() => setLanguage('fr')}
                className={`transition-colors ${
                  language === 'fr' ? 'font-semibold text-secondary-900' : 'text-secondary-400 hover:text-secondary-600'
                }`}
              >
                F
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-secondary-900"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation Drawer */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-secondary-200 pt-4">
              <div className="flex flex-col gap-1">
                {navigation.map((item) => (
                  <div key={item.path}>
                    <Link
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-sm tracking-wider py-2 block transition-colors ${
                        isActive(item.path)
                          ? 'text-accent-600'
                          : 'text-secondary-700 hover:text-accent-600'
                      }`}
                    >
                      {item.name}
                    </Link>
                    {/* Mobile submenu */}
                    {item.submenu && (
                      <div className="pl-4 flex flex-wrap gap-2 pb-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`text-xs px-3 py-1 border transition-colors ${
                              isActive(subItem.path)
                                ? 'border-accent-600 text-accent-600 bg-accent-50'
                                : 'border-secondary-200 text-secondary-500 hover:border-accent-400 hover:text-accent-600'
                            }`}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-cream border-t border-secondary-200">
        <div className="container-site py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Social Links */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <a
                  href={SOCIAL.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-600 hover:text-accent-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={SOCIAL.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-600 hover:text-accent-600 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href={SOCIAL.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-600 hover:text-accent-600 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-secondary-900 font-semibold mb-4">
                KOZELSKY SÀRL
              </h4>
              <div className="space-y-2 text-sm text-secondary-600">
                <p>
                  <a
                    href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
                    className="hover:text-accent-600 transition-colors"
                  >
                    {CONTACT.phone}
                  </a>
                </p>
                <p>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="hover:text-accent-600 transition-colors"
                  >
                    {CONTACT.email}
                  </a>
                </p>
              </div>
            </div>

            {/* Documentation */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-secondary-900 font-semibold mb-4">
                {t('footer.documentation')}
              </h4>
              <div className="space-y-2 text-sm text-secondary-600">
                <p>
                  <a
                    href={DOCUMENTS.journalDuBus}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent-600 transition-colors"
                  >
                    &gt;{t('footer.busJournal')}
                  </a>
                </p>
                <p>
                  <a
                    href={DOCUMENTS.flyer1197}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent-600 transition-colors"
                  >
                    &gt;{t('footer.flyer')}
                  </a>
                </p>
              </div>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-secondary-900 font-semibold mb-4">
                Kozelsky Sàrl
              </h4>
              <div className="space-y-2 text-sm text-secondary-600">
                <p>
                  <Link
                    to="/impressum"
                    className="hover:text-accent-600 transition-colors"
                  >
                    {t('footer.impressum')}
                  </Link>
                </p>
                <p>
                  <a
                    href={DOCUMENTS.cgv}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent-600 transition-colors"
                  >
                    {t('footer.cgv')}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-secondary-200 py-6">
          <div className="container-site text-center text-xs text-secondary-500">
            <p>
              &copy; {new Date().getFullYear()} Kozelsky Sàrl. {t('footer.copyright')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

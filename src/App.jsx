import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LanguageProvider } from './i18n/LanguageContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import HomeV4 from './pages/HomeV4';
import HomeV6 from './pages/HomeV6';
import HomeV7 from './pages/HomeV7';
import Catering from './pages/Catering';
import CateringV2 from './pages/CateringV2';
import CateringV4 from './pages/CateringV4';
import Nous from './pages/Nous';
import NousV2 from './pages/NousV2';
import NousV4 from './pages/NousV4';
import Services from './pages/Services';
import ServicesV2 from './pages/ServicesV2';
import ServicesV4 from './pages/ServicesV4';
import Aviation from './pages/Aviation';
import AviationV2 from './pages/AviationV2';
import AviationV4 from './pages/AviationV4';
import Impressions from './pages/Impressions';
import ImpressionsV2 from './pages/ImpressionsV2';
import ImpressionsV4 from './pages/ImpressionsV4';
import Bus from './pages/Bus';
import BusV2 from './pages/BusV2';
import BusV3 from './pages/BusV3';
import BusV4 from './pages/BusV4';
import BusV5 from './pages/BusV5';
import BusEquipment from './pages/BusEquipment';
import BusEquipmentV2 from './pages/BusEquipmentV2';
import BusEquipmentV3 from './pages/BusEquipmentV3';
import BusEquipmentV4 from './pages/BusEquipmentV4';
import BusEquipmentV5 from './pages/BusEquipmentV5';
import BusTeam from './pages/BusTeam';
import BusTeamV2 from './pages/BusTeamV2';
import BusTeamV3 from './pages/BusTeamV3';
import BusTeamV4 from './pages/BusTeamV4';
import BusTeamV5 from './pages/BusTeamV5';
import BusServices from './pages/BusServices';
import BusServicesV2 from './pages/BusServicesV2';
import BusServicesV3 from './pages/BusServicesV3';
import BusServicesV4 from './pages/BusServicesV4';
import BusServicesV5 from './pages/BusServicesV5';
import BusHistory from './pages/BusHistory';
import BusHistoryV2 from './pages/BusHistoryV2';
import BusHistoryV3 from './pages/BusHistoryV3';
import BusHistoryV4 from './pages/BusHistoryV4';
import BusHistoryV5 from './pages/BusHistoryV5';
import Contact from './pages/Contact';
import ContactV2 from './pages/ContactV2';
import ContactV3 from './pages/ContactV3';
import ContactV4 from './pages/ContactV4';
import Impressum from './pages/Impressum';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <LanguageProvider>
          <BrowserRouter>
            <Layout>
            <Routes>
              {/* Home */}
              <Route path="/" element={<Home />} />
              <Route path="/v3" element={<HomeV6 />} />
              <Route path="/v4" element={<HomeV4 />} />
              <Route path="/v5" element={<HomeV7 />} />

              {/* Catering */}
              <Route path="/catering" element={<Catering />} />
              <Route path="/catering/v2" element={<CateringV2 />} />
              <Route path="/catering/v4" element={<CateringV4 />} />

              {/* Nous */}
              <Route path="/nous" element={<Nous />} />
              <Route path="/nous/v2" element={<NousV2 />} />
              <Route path="/nous/v4" element={<NousV4 />} />

              {/* Services */}
              <Route path="/services" element={<Services />} />
              <Route path="/services/v2" element={<ServicesV2 />} />
              <Route path="/services/v4" element={<ServicesV4 />} />

              {/* Aviation */}
              <Route path="/aviation-privee" element={<Aviation />} />
              <Route path="/aviation-privee/v2" element={<AviationV2 />} />
              <Route path="/aviation-privee/v4" element={<AviationV4 />} />

              {/* Impressions */}
              <Route path="/impressions" element={<Impressions />} />
              <Route path="/impressions/v2" element={<ImpressionsV2 />} />
              <Route path="/impressions/v4" element={<ImpressionsV4 />} />

              {/* Bus */}
              <Route path="/bus-11-97" element={<Bus />} />
              <Route path="/bus-11-97/v2" element={<BusV2 />} />
              <Route path="/bus-11-97/v3" element={<BusV3 />} />
              <Route path="/bus-11-97/v4" element={<BusV4 />} />
              <Route path="/bus-11-97/v5" element={<BusV5 />} />
              <Route path="/bus-11-97/equipment" element={<BusEquipment />} />
              <Route path="/bus-11-97/v2/equipment" element={<BusEquipmentV2 />} />
              <Route path="/bus-11-97/v3/equipment" element={<BusEquipmentV3 />} />
              <Route path="/bus-11-97/v4/equipment" element={<BusEquipmentV4 />} />
              <Route path="/bus-11-97/v5/equipment" element={<BusEquipmentV5 />} />
              <Route path="/bus-11-97/team" element={<BusTeam />} />
              <Route path="/bus-11-97/v2/team" element={<BusTeamV2 />} />
              <Route path="/bus-11-97/v3/team" element={<BusTeamV3 />} />
              <Route path="/bus-11-97/v4/team" element={<BusTeamV4 />} />
              <Route path="/bus-11-97/v5/team" element={<BusTeamV5 />} />
              <Route path="/bus-11-97/services" element={<BusServices />} />
              <Route path="/bus-11-97/v2/services" element={<BusServicesV2 />} />
              <Route path="/bus-11-97/v3/services" element={<BusServicesV3 />} />
              <Route path="/bus-11-97/v4/services" element={<BusServicesV4 />} />
              <Route path="/bus-11-97/v5/services" element={<BusServicesV5 />} />
              <Route path="/bus-11-97/history" element={<BusHistory />} />
              <Route path="/bus-11-97/v2/history" element={<BusHistoryV2 />} />
              <Route path="/bus-11-97/v3/history" element={<BusHistoryV3 />} />
              <Route path="/bus-11-97/v4/history" element={<BusHistoryV4 />} />
              <Route path="/bus-11-97/v5/history" element={<BusHistoryV5 />} />

              {/* Contact */}
              <Route path="/contact" element={<Contact />} />
              <Route path="/contact/v2" element={<ContactV2 />} />
              <Route path="/contact/v3" element={<ContactV3 />} />
              <Route path="/contact/v4" element={<ContactV4 />} />

              {/* Legal */}
              <Route path="/impressum" element={<Impressum />} />
            </Routes>
            </Layout>
          </BrowserRouter>
        </LanguageProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;

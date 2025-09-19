import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Contact from './components/Contact';
import BookAppointment from './components/BookAppointment';
import NursingCare from './components/NursingCare';
import StandaloneNursingCare from './components/StandaloneNursingCare';
import Physiotherapy from './components/Physiotherapy';
import MedicalEquipment from './components/MedicalEquipment';
import DoctorConsultation from './components/DoctorConsultation';
import LabTests from './components/LabTests';
import ElderCare from './components/ElderCare';
import BabyCare from './components/BabyCare';
import IntensiveCare from './components/IntensiveCare';
import CorporateHealth from './components/CorporateHealth';
import TrainedCaretakers from './components/TrainedCaretakers';
import AppointmentModal from './components/AppointmentModal';
import { AppointmentProvider, useAppointment } from './contexts/AppointmentContext';
import { EnquireProvider, useEnquire } from './contexts/EnquireContext';
import EnquireModal from './components/EnquireModal';
import FloatingActionButtons from './components/FloatingActionButtons';
import useScrollToTop from './hooks/useScrollToTop';
import './App.css';

function AppContent() {
  const { isModalOpen, closeModal } = useAppointment();
  const { isModalOpen: isEnquireOpen, selectedService, closeModal: closeEnquireModal } = useEnquire();
  
  // Scroll to top when route changes
  useScrollToTop();
  
  return (
    <>
      <Routes>
        {/* All pages with navbar and footer */}
        <Route path="/*" element={
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/services" element={<Services />} />
              <Route path="/nursing-care" element={<NursingCare />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/appointment" element={<BookAppointment />} />
              {/* Service pages with navbar and footer */}
              <Route path="/nursing" element={<StandaloneNursingCare />} />
              <Route path="/physiotherapy" element={<Physiotherapy />} />
              <Route path="/medical-equipment" element={<MedicalEquipment />} />
              <Route path="/doctor-consultation" element={<DoctorConsultation />} />
              <Route path="/lab-tests" element={<LabTests />} />
              <Route path="/elder-care" element={<ElderCare />} />
              <Route path="/baby-care" element={<BabyCare />} />
              <Route path="/intensive-care" element={<IntensiveCare />} />
              <Route path="/corporate-health" element={<CorporateHealth />} />
              <Route path="/trained-caretakers" element={<TrainedCaretakers />} />
            </Routes>
            <Footer />
          </>
        } />
      </Routes>
      <AppointmentModal isOpen={isModalOpen} onClose={closeModal} />
      <EnquireModal isOpen={isEnquireOpen} onClose={closeEnquireModal} serviceTitle={selectedService} />
      <FloatingActionButtons />
    </>
  );
}

function App() {
  return (
    <AppointmentProvider>
      <EnquireProvider>
        <Router>
          <div className="App">
            <AppContent />
          </div>
        </Router>
      </EnquireProvider>
    </AppointmentProvider>
  );
}

export default App

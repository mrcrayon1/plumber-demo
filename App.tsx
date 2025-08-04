import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import RatingsBanner from './components/RatingsBanner';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import AIAssistant from './components/AIAssistant';
import Coupons from './components/Coupons';
import Footer from './components/Footer';
import ScheduleModal from './components/ScheduleModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="bg-peaks-light text-peaks-dark">
      <Header onScheduleClick={handleOpenModal} />
      <main>
        <Hero onScheduleClick={handleOpenModal} />
        <RatingsBanner />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <Coupons />
        <AIAssistant />
      </main>
      <Footer onScheduleClick={handleOpenModal} />
      <ScheduleModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default App;
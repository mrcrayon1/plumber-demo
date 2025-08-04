import React from 'react';

interface HeroProps {
  onScheduleClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onScheduleClick }) => {
  return (
    <section 
      id="home" 
      className="relative bg-cover bg-center text-white py-20 md:py-32" 
      style={{ backgroundImage: "url('https://peakplumbingiowa.com/wp-content/uploads/About-Me-Rusty-Dalton-4x6-1.jpg')" }}
    >
      <div className="absolute inset-0 bg-peaks-dark bg-opacity-60"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl text-center mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display tracking-tight">
            Reach the Peak of Plumbing Service
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200">
            Your trusted, local experts for all plumbing, drain, and water heater needs in the Des Moines metro area.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={onScheduleClick}
              className="inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-white bg-peaks-accent rounded-md hover:bg-orange-600 transition-colors shadow-md hover:shadow-lg"
            >
              Schedule Service Now
            </button>
            <a 
              href="tel:515-278-8803"
              className="inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-peaks-dark bg-white rounded-md hover:bg-gray-200 transition-colors shadow-md"
            >
              Call (515) 278-8803
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
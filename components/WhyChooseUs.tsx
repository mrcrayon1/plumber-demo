import React from 'react';
import { WHY_CHOOSE_US_ITEMS } from '../constants';
import type { WhyChooseUsItem } from '../types';

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="bg-white py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="pr-0 lg:pr-8">
            <h2 className="text-3xl font-bold font-display text-peaks-blue">Why Choose Peaks Plumbing?</h2>
            <p className="mt-4 text-lg text-gray-600">
                When you need a plumber in the Des Moines area, you want a team you can trust. We're committed to providing the highest level of service and quality workmanship, guaranteed.
            </p>
            <ul className="mt-8 space-y-6">
              {WHY_CHOOSE_US_ITEMS.map((item: WhyChooseUsItem) => (
                <li key={item.title} className="flex items-start">
                  <div className="flex-shrink-0 text-peaks-blue bg-blue-100 rounded-full p-3">
                    {item.icon}
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-peaks-dark">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:block">
            <img 
              src="https://i.ibb.co/yY1hC3H/why-choose-us.jpg"
              alt="Peaks Plumbing technician working under a sink"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

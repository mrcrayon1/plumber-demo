import React from 'react';
import { SERVICES } from '../constants';
import type { Service } from '../types';

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center">
        <div className="mb-4 text-peaks-accent">{service.icon}</div>
        <h3 className="text-xl font-bold font-display text-peaks-dark mb-2">{service.title}</h3>
        <p className="text-gray-600 flex-grow">{service.description}</p>
    </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="bg-peaks-light py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-display text-peaks-blue">Our Comprehensive Plumbing Services</h2>
          <p className="mt-4 text-lg text-gray-600">We offer a wide range of expert services to meet all your plumbing needs.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

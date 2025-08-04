import React from 'react';
import { TESTIMONIALS } from '../constants';
import type { Testimonial } from '../types';

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
    <div className="flex justify-center text-peaks-accent mb-4">
        {[...Array(5)].map((_, i) => (
            <svg key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ))}
    </div>
);

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col h-full">
        <StarRating rating={5} />
        <p className="text-lg text-gray-800 italic mb-6 flex-grow">"{testimonial.quote}"</p>
        <div className="text-right">
            <p className="font-bold text-peaks-dark">{testimonial.author}</p>
            <p className="text-sm text-gray-500">{testimonial.location}</p>
        </div>
    </div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="bg-peaks-light py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-display text-peaks-blue">What Our Customers Are Saying</h2>
          <p className="mt-4 text-lg text-gray-600">Our commitment to quality service speaks for itself.</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.author} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
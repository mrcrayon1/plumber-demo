import React from 'react';
import { COUPONS } from '../constants';
import type { Coupon } from '../types';

const CouponCard: React.FC<{ coupon: Coupon }> = ({ coupon }) => (
  <div className="bg-white border-l-4 border-peaks-accent rounded-r-lg p-6 shadow-lg flex flex-col text-left">
    <h3 className="text-2xl font-bold font-display text-peaks-blue">{coupon.title}</h3>
    <p className="text-gray-600 mt-2 mb-4 flex-grow">{coupon.description}</p>
    <p className="text-xs text-gray-500">{coupon.disclaimer}</p>
  </div>
);

const Coupons: React.FC = () => {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-display text-peaks-blue">Our Web Offers</h2>
          <p className="mt-4 text-lg text-gray-600">Mention these offers when you book your service to save!</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COUPONS.map((coupon) => (
            <CouponCard key={coupon.title} coupon={coupon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coupons;
import React from 'react';
import type { Service, Testimonial, Coupon, WhyChooseUsItem } from './types';

// Icons
const EmergencyIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-peaks-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
const DrainIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-peaks-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 11-4 0 2 2 0 014 0zM5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>;
const WaterHeaterIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-peaks-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.5-7 2.5-2.5 7 0 7 7-.5 1.5-1.5 2.5-3 3.5-1.5 1-2.5 2-2.5 3.5s1 2.5 2.5 3.5c1 .5 2.5 1 3.5 1.5z" /></svg>;
const SumpPumpIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-peaks-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l-6-2m6 2l-3 1m-3-1l-3 9m0 0l6.001 0M18 7l-3 1m-3-1l-6-2m0 0l3 1m0 0l-3 9" /></svg>;
const ToiletIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-peaks-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" /></svg>;
const FaucetIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-peaks-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 0A5.002 5.002 0 0011 11.586V13h2v-1.414a5.002 5.002 0 00-3.182-4.818M12 8v5H7m5-5H7m5 5v5H7m5-5H7" /></svg>;
const DisposalIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-peaks-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>;
const SewerLineIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-peaks-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>;
const ShieldCheckIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.917l9 3 9-3a12.02 12.02 0 00-2.382-9.971z" /></svg>;
const UsersIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21v-1a6 6 0 00-5.173-5.973" /></svg>;
const ThumbUpIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.085a2 2 0 00-1.736.93L5.5 8m7 2v5m0 0v5m0-5h-2.187a2 2 0 01-1.736-1.07l-1.5-3-1.5 3a2 2 0 01-1.736 1.07H5m7 2v5" /></svg>;
const PriceTagIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 8v-3c0-1.1.9-2 2-2z" /></svg>;


// Services Data
export const SERVICES: Service[] = [
  { icon: <EmergencyIcon />, title: 'Emergency Plumbing', description: '24/7 rapid response for your most urgent plumbing issues, from burst pipes to severe leaks.' },
  { icon: <DrainIcon />, title: 'Drain Cleaning', description: 'Expert solutions for stubborn clogs in sinks, showers, and main sewer lines.' },
  { icon: <WaterHeaterIcon />, title: 'Water Heaters', description: 'Repair, replacement, and installation of tank and tankless water heaters.' },
  { icon: <SumpPumpIcon />, title: 'Sump Pumps', description: 'Keep your basement dry with our sump pump installation and repair services.' },
  { icon: <ToiletIcon />, title: 'Toilets', description: 'From simple repairs to full toilet replacements, we handle it all.' },
  { icon: <FaucetIcon />, title: 'Faucets', description: 'Leaky faucet repair and new fixture installation for kitchens and bathrooms.' },
  { icon: <DisposalIcon />, title: 'Garbage Disposals', description: 'Reliable repair and installation services for your garbage disposal unit.' },
  { icon: <SewerLineIcon />, title: 'Water & Sewer Lines', description: 'Comprehensive services for main water and sewer line repair and replacement.' },
];

// Why Choose Us Data
export const WHY_CHOOSE_US_ITEMS: WhyChooseUsItem[] = [
    { icon: <ShieldCheckIcon />, title: 'Licensed & Insured', description: 'Our entire team is licensed and insured, ensuring your property is protected and our work is top-quality.' },
    { icon: <PriceTagIcon />, title: 'StraightForward Pricing®', description: 'We provide a clear, upfront price before any work begins, so you know exactly what to expect. No surprises.' },
    { icon: <UsersIcon />, title: 'Trusted & Recommended', description: 'We are proud of our reputation in the Des Moines area, built on trust and customer satisfaction.' },
    { icon: <ThumbUpIcon />, title: 'Workmanship Guaranteed', description: 'We stand behind our work with a guarantee on all parts and workmanship for your complete peace of mind.' }
]

// Testimonials Data
export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "They do very quality work for a fair price. Very professional, responsive, and they explain everything they are doing. I wouldn't hesitate to call Peaks Plumbing again!",
    author: 'Kyle S.',
    location: 'Des Moines, IA'
  },
  {
    quote: "Fast, efficient, and very professional. The plumber who came to our house was courteous and fixed our leaky pipe in no time. Would highly recommend Peaks Plumbing to anyone.",
    author: 'Linda K.',
    location: 'Ankeny, IA'
  },
  {
    quote: "Peaks Plumbing did a fantastic job installing our new water heater. They were clean, on time, and the price was exactly what they quoted. Excellent service from start to finish.",
    author: 'Alex D.',
    location: 'West Des Moines, IA'
  }
];

// Coupons Data
export const COUPONS: Coupon[] = [
  {
    title: '$30 OFF Any Plumbing Service',
    description: 'Get a discount on any plumbing repair or service we offer.',
    disclaimer: 'Must mention this offer when booking. Cannot be combined with other offers.'
  },
  {
    title: 'FREE Plumbing Estimates',
    description: 'Get a free, no-obligation estimate for your plumbing project.',
    disclaimer: 'Contact us to schedule your free estimate today. Some restrictions may apply.'
  },
  {
    title: '$75 OFF Water Heater Install',
    description: 'Save big on the installation of a new, energy-efficient water heater.',
    disclaimer: 'Offer valid for new installations only. Not applicable to repair services.'
  }
];
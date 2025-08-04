
import type { ReactNode } from 'react';

export interface Service {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  location: string;
}

export interface Coupon {
  title: string;
  description: string;
  disclaimer: string;
}

export interface WhyChooseUsItem {
    icon: ReactNode;
    title: string;
    description: string;
}

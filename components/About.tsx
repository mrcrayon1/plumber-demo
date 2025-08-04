
import React from 'react';

const CheckmarkBullet: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-start">
        <svg className="w-5 h-5 text-3g-green mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <span>{children}</span>
    </li>
);

const About: React.FC = () => {
    return (
        <section className="bg-white py-16 sm:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <h2 className="text-3xl sm:text-4xl font-bold font-display text-3g-green uppercase tracking-wide">
                    Plumber in Central Arkansas
                </h2>
                <div className="mt-6 text-lg text-gray-700 space-y-4">
                    <p>
                        3Gen Plumbing is your trusted plumber in Central Arkansas. Our licensed and insured team of skilled local plumbers offers a complete slate of plumbing services, from drain cleaning to full sewer line repairs and replacements. We're ready to handle any plumbing situation you face, and we serve both homes and businesses with top-tier professionalism, regardless of job size.
                    </p>
                    <p>
                        3Gen Plumbing has been a local expert for years, and we're proud to be the most trusted plumbers in the region. How did we get here? It's all about our reputation for excellence, including:
                    </p>
                </div>
                <ul className="mt-8 space-y-4 text-lg text-gray-800">
                    <CheckmarkBullet>Same day service</CheckmarkBullet>
                    <CheckmarkBullet>24/7 availability</CheckmarkBullet>
                    <CheckmarkBullet>No hidden or extra charge for plumbing or drain service on holidays, nights, and weekends</CheckmarkBullet>
                    <CheckmarkBullet>Onsite and upfront estimates</CheckmarkBullet>
                    <CheckmarkBullet>Fully licensed, insured, experienced plumbers</CheckmarkBullet>
                    <CheckmarkBullet>State-of-the-art diagnostics and equipment</CheckmarkBullet>
                </ul>
            </div>
        </section>
    );
};

export default About;
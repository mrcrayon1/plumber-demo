import React from 'react';

interface FooterProps {
    onScheduleClick: () => void;
}

const Logo = () => (
    <div className="flex items-center space-x-2">
        <svg className="h-8 w-8 text-peaks-accent" viewBox="0 0 100 100">
            <path d="M50 10 L90 90 H10 Z" fill="currentColor"/>
            <path d="M50 45 a15 15 0 0 1 0 30 a15 15 0 0 1 0 -30" fill="#111827"/>
        </svg>
        <span className="text-xl font-bold font-display text-white">
            Peaks Plumbing
        </span>
    </div>
);

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} className="text-gray-400 hover:text-peaks-accent transition-colors">
        {children}
    </a>
);

const Footer: React.FC<FooterProps> = ({ onScheduleClick }) => {
  return (
    <footer id="contact" className="bg-peaks-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Logo & Info */}
          <div className="space-y-4">
            <Logo />
            <p className="text-gray-400">
              Your trusted partner for plumbing needs in the Des Moines Metro Area.
            </p>
            <div className="flex space-x-4">
              <SocialIcon href="#"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.525 0 0 .525 0 1.175v21.65C0 23.475.525 24 1.175 24h11.475v-9.294H9.375v-3.622h3.275V8.413c0-3.266 1.984-5.037 4.9-5.037 1.394 0 2.594.103 2.944.15v3.25h-1.925c-1.581 0-1.887.75-1.887 1.85v2.425h3.6l-.469 3.622h-3.131V24h6.112c.65 0 1.175-.525 1.175-1.175V1.175C24 .525 23.475 0 22.675 0z" /></svg></SocialIcon>
              <SocialIcon href="#"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.699-4.919-4.92-.058-1.265-.07-1.646-.07-4.85s.012-3.584.07-4.85c.148-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.197-4.354-2.619-6.78-6.979-6.98C15.668 0 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" /></svg></SocialIcon>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="#why-us" className="text-gray-400 hover:text-white">Why Choose Us</a></li>
              <li><a href="#reviews" className="text-gray-400 hover:text-white">Reviews</a></li>
              <li><button onClick={onScheduleClick} className="text-gray-400 hover:text-white text-left w-full cursor-pointer bg-transparent border-none p-0">Schedule Online</button></li>
            </ul>
          </div>
          
          {/* Column 3: Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center space-x-2"><span>Phone:</span> <a href="tel:515-278-8803" className="hover:text-white">(515) 278-8803</a></li>
              <li className="flex items-center space-x-2"><span>Email:</span> <a href="mailto:service@peaksplumbingiowa.com" className="hover:text-white">service@peaksplumbingiowa.com</a></li>
              <li>123 Peak Avenue<br/>Des Moines, IA 50309</li>
            </ul>
          </div>

          {/* Column 4: Service Area */}
          <div>
            <h3 className="font-bold text-lg mb-4">Service Area</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Des Moines</li>
              <li>West Des Moines</li>
              <li>Ankeny</li>
              <li>Johnston</li>
              <li>& Surrounding Areas</li>
            </ul>
          </div>

        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Peaks Plumbing. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
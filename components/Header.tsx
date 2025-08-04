import React from 'react';

interface HeaderProps {
    onScheduleClick: () => void;
}

const Logo = () => (
    <div className="flex items-center space-x-2">
        <svg className="h-10 w-10 text-peaks-blue" viewBox="0 0 100 100">
            <path d="M50 10 L90 90 H10 Z" fill="currentColor"/>
            <path d="M50 45 a15 15 0 0 1 0 30 a15 15 0 0 1 0 -30" fill="white"/>
        </svg>
        <span className="text-2xl font-bold font-display text-peaks-blue">
            Peaks <span className="text-peaks-dark">Plumbing</span>
        </span>
    </div>
);


const LocationPinIcon = () => (
    <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 20l-4.95-6.05a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
    </svg>
);

const CalendarIcon = () => (
    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
       <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
    </svg>
);

const PhoneIcon = () => (
    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
);

const Header: React.FC<HeaderProps> = ({ onScheduleClick }) => {
    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 border-b border-gray-200">
                    <a href="#" aria-label="Peaks Plumbing Home">
                        <Logo />
                    </a>
                    <nav className="hidden md:flex items-center space-x-8">
                        <a href="#services" className="text-sm font-semibold text-gray-600 hover:text-peaks-blue uppercase tracking-wider">Services</a>
                        <a href="#why-us" className="text-sm font-semibold text-gray-600 hover:text-peaks-blue uppercase tracking-wider">Why Us</a>
                        <a href="#reviews" className="text-sm font-semibold text-gray-600 hover:text-peaks-blue uppercase tracking-wider">Reviews</a>
                        <a href="#contact" className="text-sm font-semibold text-gray-600 hover:text-peaks-blue uppercase tracking-wider">Contact</a>
                    </nav>
                     <div className="hidden lg:flex items-center">
                        <PhoneIcon />
                        <div className="text-right">
                           <span className="text-xs text-gray-500">Call Us Today</span>
                            <a href="tel:515-278-8803" className="block text-base font-bold text-peaks-blue hover:text-peaks-dark">(515) 278-8803</a>
                        </div>
                    </div>
                </div>
                 <div className="flex flex-col sm:flex-row items-center justify-between py-3 gap-4">
                    <div className="flex items-center space-x-2">
                        <LocationPinIcon />
                        <span className="font-semibold text-peaks-dark text-sm">Serving the Des Moines Metro Area</span>
                    </div>
                    <button onClick={onScheduleClick} className="w-full sm:w-auto flex-none justify-center px-6 py-3 text-base font-bold text-white bg-peaks-accent rounded-lg hover:bg-orange-600 transition-colors flex items-center shadow-sm hover:shadow-md cursor-pointer">
                        <CalendarIcon />
                        <span>Book Online</span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
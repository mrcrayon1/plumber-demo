
import React from 'react';

interface InfoAndServicesProps {
    onScheduleClick: () => void;
}

const PlumbingDrainsIcon: React.FC = () => (
    <svg className="w-14 h-14" viewBox="0 0 64 64">
        <path d="M52 24h-8v-8c0-4.4-3.6-8-8-8H28c-4.4 0-8 3.6-8 8v8h-8c-4.4 0-8 3.6-8 8v8c0 4.4 3.6 8 8 8h8v8c0 4.4 3.6 8 8 8h8c4.4 0 8-3.6 8-8v-8h8c4.4 0 8-3.6 8-8v-8c0-4.4-3.6-8-8-8z" fill="#1A533E"/>
        <circle cx="32" cy="32" r="8" fill="#e0f2fe"/>
    </svg>
);

const EmergencyPhoneIcon: React.FC = () => (
    <svg className="w-14 h-14" viewBox="0 0 64 64">
        <path d="M44 8H20C15.582 8 12 11.582 12 16v32c0 4.418 3.582 8 8 8h24c4.418 0 8-3.582 8-8V16c0-4.418-3.582-8-8-8z" fill="#1A533E"/>
        <path d="M42 12H22c-1.105 0-2 2.695-2 4v32c0 1.305.895 4 2 4h20c1.105 0 2-2.695 2-4V16c0-1.305-.895-4-2-4z" fill="#e0f2fe"/>
        <path d="M32 38a3 3 0 100 6 3 3 0 000-6zm0-16v10" stroke="#D97706" strokeWidth="4" strokeLinecap="round"/>
    </svg>
);

const WaterHeaterIcon: React.FC = () => (
    <svg className="w-14 h-14" viewBox="0 0 64 64">
        <path d="M44 8H20c-4.418 0-8 3.582-8 8v40c0 4.418 3.582 8 8 8h24c4.418 0 8-3.582 8-8V16c0-4.418-3.582-8-8-8z" fill="#1A533E"/>
        <path d="M40 12H24c-2.21 0-4 1.79-4 4v32c0 2.21 1.79 4 4 4h16c2.21 0 4-1.79 4-4V16c0-2.21-1.79-4-4-4z" fill="#e0f2fe"/>
        <path d="M32 40c-6 0-8 4-8 4s2 8 8 8 8-4 8-4-2-8-8-8z" fill="#D97706"/>
    </svg>
);

const WaterDamageIcon: React.FC = () => (
    <svg className="w-14 h-14" viewBox="0 0 64 64">
        <path d="M32 2C18.745 2 8 12.745 8 26c0 7.859 3.578 14.832 9.094 19.5L32 62l14.906-16.5C52.422 40.832 56 33.859 56 26 56 12.745 45.255 2 32 2z" fill="#1A533E"/>
        <path d="M32 6c-11.046 0-20 8.954-20 20 0 6.553 2.809 12.428 7.375 16.344L32 56l12.625-13.656C49.191 38.428 52 32.553 52 26 52 14.954 43.046 6 32 6z" fill="#e0f2fe"/>
    </svg>
);

const services = [
    { title: 'Plumbing and Drains', icon: <PlumbingDrainsIcon />, href: '#services' },
    { title: 'Emergency Plumbing Services', icon: <EmergencyPhoneIcon />, href: '#services' },
    { title: 'Water Heaters', icon: <WaterHeaterIcon />, href: '#services' },
    { title: 'Water Damage', icon: <WaterDamageIcon />, href: '#services' }
];

const InfoAndServices: React.FC<InfoAndServicesProps> = ({ onScheduleClick }) => {
    return (
        <div className="bg-white">
            <div className="bg-3g-accent text-white text-center py-4 font-bold uppercase tracking-wider text-lg">
                <button onClick={onScheduleClick} className="hover:underline flex items-center justify-center w-full cursor-pointer">
                    <span>Open & Available. Click here to Schedule Now</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="bg-3g-green text-white p-8 sm:p-12 lg:p-16">
                    <h2 className="text-xl font-bold uppercase tracking-widest">Plumbers you've trusted for over 90 years</h2>
                    <h3 className="text-4xl lg:text-5xl font-bold font-display my-4">Open 24/7</h3>
                    <ul className="space-y-4 text-lg list-disc list-inside">
                        <li>Full-Service Plumbing For Home & Business</li>
                        <li>State-of-the-Art Drain Cleaning Equipment</li>
                        <li>Licensed & Insured. Trusted Since 1935</li>
                        <li><a href="#" className="hover:underline">Special Financing Available &gt;</a></li>
                    </ul>
                </div>
                <div className="bg-3g-light text-3g-green p-8 sm:p-12 lg:p-16">
                    <h2 className="text-xl font-bold uppercase tracking-widest mb-8">Our Services</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                        {services.map(service => (
                            <a key={service.title} href={service.href} className="flex items-center space-x-4 group">
                                {service.icon}
                                <span className="font-bold text-base uppercase tracking-wider text-3g-green group-hover:underline">{service.title} &gt;</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoAndServices;
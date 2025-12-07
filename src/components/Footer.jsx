import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-black text-white border-t border-white/10 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6 md:px-20">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 text-center md:text-left">
                    <div className="md:col-span-1">
                        <Link to="/" className="text-2xl font-serif font-bold tracking-widest block mb-6">
                            LEXUS
                        </Link>
                        <p className="text-white/50 text-sm leading-relaxed mb-6">
                            Experience the pinnacle of luxury and performance.
                            Designed for those who refuse to compromise.
                        </p>
                        <div className="flex gap-4 justify-center md:justify-start">
                            <a href="#" className="hover:text-brand-gold transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="hover:text-brand-gold transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="hover:text-brand-gold transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="hover:text-brand-gold transition-colors"><Youtube size={20} /></a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-white">Models</h3>
                        <ul className="space-y-4 text-sm text-white/60">
                            <li><Link to="/vehicles/ux-h" className="hover:text-white transition-colors">UX Hybrid</Link></li>
                            <li><Link to="/vehicles/lc" className="hover:text-white transition-colors">LC 500</Link></li>
                            <li><Link to="/vehicles/es" className="hover:text-white transition-colors">ES Sedan</Link></li>
                            <li><Link to="/vehicles" className="hover:text-white transition-colors">View All</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-white">Owner Support</h3>
                        <ul className="space-y-4 text-sm text-white/60">
                            <li><Link to="#" className="hover:text-white transition-colors">Find a Dealer</Link></li>
                            <li><Link to="#" className="hover:text-white transition-colors">Warranty & Services</Link></li>
                            <li><Link to="#" className="hover:text-white transition-colors">Finance Tools</Link></li>
                            <li><Link to="#" className="hover:text-white transition-colors">Brochures</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-white">Contact</h3>
                        <ul className="space-y-4 text-sm text-white/60 flex flex-col items-center md:items-start">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="mt-1 flex-shrink-0" />
                                <span>123 Luxury Blvd, Caracas, Venezuela 1010</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} />
                                <span>+58 (212) 555-0123</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} />
                                <span>contact@luxurymotors.ve</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/40">
                    <p>&copy; 2024 Luxury Motors Venezuela. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link to="#" className="hover:text-white">Privacy Policy</Link>
                        <Link to="#" className="hover:text-white">Cookie Policy</Link>
                        <Link to="#" className="hover:text-white">Accessibility</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

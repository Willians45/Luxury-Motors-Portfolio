import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ChevronDown, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CARS } from '../data/cars';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Filter cars based on search
    useEffect(() => {
        if (searchQuery.trim() === '') {
            setSearchResults([]);
        } else {
            const results = CARS.filter(car =>
                car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                car.category.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setSearchResults(results);
        }
    }, [searchQuery]);

    const navClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 py-4 flex justify-between items-center ${isScrolled || true
        ? 'bg-white/95 dark:bg-brand-black/95 backdrop-blur-md shadow-lg dark:border-b dark:border-white/10 text-brand-black dark:text-white md:bg-white/95 md:dark:bg-brand-black/95'
        : isHome
            ? 'md:bg-transparent bg-white dark:bg-brand-black md:text-white text-brand-black dark:text-white'
            : 'bg-white dark:bg-brand-black text-brand-black dark:text-white shadow-md'
        }`;

    const textColorClass = 'hover:text-brand-gold';

    return (
        <>
            <nav className={navClass}>
                <div className="flex items-center gap-8 h-full">
                    <Link to="/" className="text-2xl font-sans tracking-widest font-bold z-50 uppercase">
                        Luxury Motors
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex h-full items-center gap-8 text-sm tracking-wide font-medium">
                        <Link to="/vehicles" className={`transition-colors py-4 border-b-2 border-transparent hover:border-brand-gold ${textColorClass}`}>VEHICLES</Link>
                        <Link to="#" className={`transition-colors py-4 border-b-2 border-transparent hover:border-brand-gold ${textColorClass}`}>MY LUXUS</Link>
                        <Link to="/contact" className={`transition-colors py-4 border-b-2 border-transparent hover:border-brand-gold ${textColorClass}`}>CONTACT US</Link>
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    {/* Desktop Utilities */}
                    <div className="hidden md:flex items-center gap-4 text-sm font-medium">
                        <div className={`relative flex items-center transition-all duration-300 ${isSearchOpen ? 'w-64' : 'w-8'}`}>
                            <button
                                onClick={() => setIsSearchOpen(!isSearchOpen)}
                                className={`absolute left-0 z-10 transition-colors ${textColorClass}`}
                            >
                                <Search size={20} />
                            </button>
                            <input
                                type="text"
                                placeholder="Search model..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className={`pl-8 pr-4 py-1 bg-transparent border-b border-gray-300 dark:border-gray-600 focus:border-brand-gold outline-none text-sm w-full transition-all duration-300 ${isSearchOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                            />

                            {/* Search Dropdown */}
                            <AnimatePresence>
                                {isSearchOpen && searchResults.length > 0 && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute top-10 left-0 w-80 bg-white dark:bg-brand-gray shadow-xl rounded-sm py-2 overflow-hidden border border-gray-100 dark:border-white/10"
                                    >
                                        {searchResults.map(car => (
                                            <Link
                                                key={car.id}
                                                to={`/vehicles/${car.id}`}
                                                onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }}
                                                className="flex items-center gap-4 px-4 py-3 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                                            >
                                                <img src={car.image} alt={car.name} className="w-12 h-8 object-cover rounded-sm" />
                                                <div>
                                                    <p className="font-bold text-sm text-brand-black dark:text-white">{car.name}</p>
                                                    <p className="text-xs text-gray-400">{car.category}</p>
                                                </div>
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <ThemeToggle />

                        <Link to="/contact" className="hover:text-brand-gold transition-colors">
                            <span className="sr-only">User</span>
                        </Link>
                    </div>

                    <button
                        className="md:hidden z-50 relative"
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                    >
                        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-white dark:bg-brand-black z-40 flex flex-col pt-24 px-6 gap-8 text-brand-black dark:text-white overflow-y-auto"
                    >
                        <div className="flex flex-col gap-6 text-2xl font-sans">
                            <Link to="/vehicles" onClick={() => setIsMobileOpen(false)} className="hover:text-brand-gold border-b border-gray-100 dark:border-white/10 pb-4">VEHICLES</Link>
                            <Link to="#" onClick={() => setIsMobileOpen(false)} className="hover:text-brand-gold border-b border-gray-100 dark:border-white/10 pb-4">MY LUXUS</Link>
                            <Link to="/contact" onClick={() => setIsMobileOpen(false)} className="hover:text-brand-gold border-b border-gray-100 dark:border-white/10 pb-4">CONTACT US</Link>
                        </div>

                        <div className="flex items-center gap-4 mt-auto mb-8">
                            <ThemeToggle />
                            <span className="font-medium">Switch Theme</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

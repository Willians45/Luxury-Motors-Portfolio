import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, ShieldCheck, Zap } from 'lucide-react';
import { CARS } from '../data/cars';

/* Helper for sections */
const InfoSection = ({ title, text, linkText, image, reverse }) => (
    <section className={`py-12 md:py-20 px-6 md:px-20 max-w-7xl mx-auto flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-6 md:gap-12 border-b border-gray-100 dark:border-white/5`}>
        <div className="w-full md:flex-1 overflow-hidden rounded-sm shadow-xl aspect-[4/3] md:aspect-[3/2] group relative">
            <img src={image} alt={title} className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
        </div>
        <div className="w-full md:flex-1 space-y-3 md:space-y-6 text-center md:text-left">
            <h3 className="text-xl md:text-4xl font-sans text-brand-black dark:text-white">{title}</h3>
            <p className="text-sm md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">{text}</p>
            <Link to="#" className="inline-flex items-center gap-2 text-brand-gold font-bold tracking-widest uppercase text-xs md:text-sm hover:underline hover:text-brand-black dark:hover:text-white transition-colors">
                {linkText} <ChevronRight size={16} />
            </Link>
        </div>
    </section>
);

export default function Home() {
    return (
        <div className="w-full bg-brand-light dark:bg-brand-black transition-colors duration-500">
            {/* Hero Section */}
            <section className="relative h-screen w-full overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
                    style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2694&auto=format&fit=crop)' }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40"></div>
                </div>

                <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-20 text-white max-w-7xl mx-auto text-center md:text-left">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-brand-gold tracking-[0.2em] font-medium mb-4 uppercase text-sm md:text-base"
                    >
                        The New Era of Luxury
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                        className="text-4xl md:text-7xl lg:text-8xl font-sans font-bold mb-6 md:mb-8 leading-tight drop-shadow-2xl"
                    >
                        EXPERIENCE<br />THE EXTRAORDINARY
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.8 }}
                    >
                        <Link
                            to="/vehicles"
                            className="group inline-flex items-center gap-3 px-8 py-3 md:px-10 md:py-4 bg-white text-black font-bold tracking-widest hover:bg-brand-gold hover:text-white transition-all duration-300 rounded-sm shadow-lg text-sm md:text-base"
                        >
                            EXPLORE MODELS
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Featured Vehicles (Reverted to Grid) */}
            <section className="py-24 bg-white dark:bg-brand-gray transition-colors duration-500 border-b border-gray-100 dark:border-white/5">
                <div className="max-w-7xl mx-auto px-6 md:px-20">
                    <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-16 text-center md:text-left gap-6">
                        <div className="text-center md:text-left">
                            <h2 className="text-3xl md:text-5xl font-sans mb-3 text-brand-black dark:text-white">Featured Models</h2>
                            <p className="text-gray-500 dark:text-gray-400">Curated for excellence.</p>
                        </div>
                        <Link to="/vehicles" className="hidden md:flex items-center gap-2 text-brand-gold hover:text-brand-black dark:hover:text-white transition-colors uppercase tracking-widest text-sm font-bold">
                            View All Lineup <ChevronRight size={16} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {CARS.slice(0, 3).map((car) => (
                            <motion.div
                                key={car.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="group cursor-pointer"
                            >
                                <Link to={`/vehicles/${car.id}`}>
                                    <div className="aspect-[4/3] mb-6 overflow-hidden relative rounded-sm flex items-center justify-center p-4">
                                        <img src={car.image} alt={car.name} className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" />
                                    </div>
                                    <div className="flex justify-between items-baseline border-b border-gray-200 dark:border-white/10 pb-4 group-hover:border-brand-gold/50 transition-colors">
                                        <div>
                                            <h3 className="text-2xl font-sans text-brand-black dark:text-white">{car.name}</h3>
                                            <p className="text-xs text-brand-gold mt-1 tracking-widest uppercase">{car.tagline}</p>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-12 text-center md:hidden">
                        <Link to="/vehicles" className="inline-flex items-center gap-2 text-brand-gold uppercase tracking-widest text-sm font-bold">
                            View All Lineup <ChevronRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Info Sections */}
            <InfoSection
                title="Lexus Safety System+ 3.0"
                text="Peace of mind comes standard. Our most comprehensive safety system ever includes Pre-Collision System with Pedestrian Detection, Lane Tracing Assist, and more, working together to help protect you and your passengers."
                linkText="Learn about Safety"
                image="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=2574&auto=format&fit=crop"
            />

            <InfoSection
                title="Electrified Performance"
                text="Experience the power of efficiency. From self-charging hybrids to plug-in electric vehicles, our electrified lineup delivers exhilarating performance without compromise."
                linkText="Explore Electrified"
                image="https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=2672&auto=format&fit=crop"
                reverse={true}
            />

            {/* Mastery in Motion Update */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/assets/mastery-bg.jpg"
                        alt="Mastery Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20 text-white text-center">
                    <h2 className="text-4xl md:text-6xl font-sans mb-6 drop-shadow-lg">Mastery in Motion</h2>
                    <p className="max-w-2xl mx-auto text-lg text-white/90 mb-10 leading-relaxed font-light drop-shadow-md">
                        Every curve, every line, every detail is a testament to our relentless pursuit of perfection. Experience the harmonious blend of human artistry and advanced engineering.
                    </p>
                    <Link to="/contact" className="inline-block px-12 py-4 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-sm font-bold shadow-2xl hover:shadow-xl hover:scale-105">
                        Contact Us
                    </Link>
                </div>
            </section>
        </div>
    );
}

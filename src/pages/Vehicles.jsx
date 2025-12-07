import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CARS, CATEGORIES } from '../data/cars';
import { ChevronRight } from 'lucide-react';

export default function Vehicles() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredCars = activeCategory === 'All'
        ? CARS
        : CARS.filter(car => car.category === activeCategory || (activeCategory === 'Electric' && car.id.includes('h')));

    return (
        <div className="pt-40 min-h-screen bg-brand-light dark:bg-brand-black pb-20 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 md:px-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16 text-center"
                >
                    <h1 className="text-3xl md:text-6xl font-sans mb-4 text-brand-black dark:text-white">Our Lineup</h1>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-6 md:mt-8">
                        {CATEGORIES.map(category => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`text-xs md:text-sm tracking-widest uppercase pb-2 border-b-2 transition-colors duration-300 ${activeCategory === category
                                    ? 'text-brand-gold border-brand-gold'
                                    : 'text-gray-400 dark:text-white/50 border-transparent hover:text-brand-black dark:hover:text-white'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-16"
                >
                    <AnimatePresence>
                        {filteredCars.map((car) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={car.id}
                                className="group cursor-pointer"
                            >
                                <Link to={`/vehicles/${car.id}`}>
                                    <div className="aspect-[4/3] mb-4 md:mb-6 overflow-hidden relative rounded-sm flex items-center justify-center p-4">
                                        <img
                                            src={car.image}
                                            alt={car.name}
                                            className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                            <ChevronRight size={20} className="text-white" />
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-baseline border-b border-gray-200 dark:border-white/10 pb-4 group-hover:border-brand-gold/50 transition-colors">
                                        <div>
                                            <h2 className="text-2xl md:text-3xl font-sans font-medium text-brand-black dark:text-white">{car.name}</h2>
                                            <p className="text-[10px] md:text-xs text-brand-gold mt-1 tracking-widest">{car.tagline}</p>
                                        </div>
                                        <p className="text-sm text-gray-500 dark:text-white/70">{car.price}</p>
                                    </div>
                                    <div className="mt-4 flex gap-4 text-xs text-gray-400 dark:text-white/40">
                                        {car.features.slice(0, 2).map((feat, i) => (
                                            <span key={i}>{feat}</span>
                                        ))}
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredCars.length === 0 && (
                    <div className="text-center py-20 text-gray-400 dark:text-white/30">
                        No models found in this category.
                    </div>
                )}
            </div>
        </div>
    );
}

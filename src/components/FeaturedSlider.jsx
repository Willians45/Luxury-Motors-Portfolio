import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CARS } from '../data/cars';

export default function FeaturedSlider() {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 400;
            current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="relative group">
            <div className="flex justify-between items-center mb-8 px-6 md:px-20 max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-serif text-brand-black dark:text-white">Meet the models</h2>
                <div className="hidden md:flex gap-4">
                    {/* Filters could go here similar to image 1, keeping simple for now */}
                </div>
            </div>

            <div className="relative">
                <button
                    onClick={() => scroll('left')}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/80 dark:bg-black/50 backdrop-blur-sm shadow-lg hover:bg-brand-gold hover:text-white transition-colors opacity-0 group-hover:opacity-100 duration-300"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={() => scroll('right')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/80 dark:bg-black/50 backdrop-blur-sm shadow-lg hover:bg-brand-gold hover:text-white transition-colors opacity-0 group-hover:opacity-100 duration-300"
                >
                    <ChevronRight size={24} />
                </button>

                <div
                    ref={scrollRef}
                    className="flex gap-8 overflow-x-auto scrollbar-hide px-6 md:px-20 pb-12 snap-x snap-mandatory"
                >
                    {CARS.map((car) => (
                        <div key={car.id} className="min-w-[300px] md:min-w-[400px] snap-center flex-shrink-0">
                            <Link to={`/vehicles/${car.id}`} className="block group/card text-center">
                                {/* Car Image - Ideally transparent PNG, using object-cover for placeholder */}
                                <div className="relative aspect-[16/9] mb-6 transition-transform duration-500 group-hover/card:scale-105">
                                    <img
                                        src={car.image}
                                        alt={car.name}
                                        className="w-full h-full object-cover rounded-lg shadow-sm"
                                    />
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-brand-black dark:text-white mb-2">{car.name}</h3>
                                <p className="text-sm font-bold text-gray-400 mb-2 uppercase tracking-wide">{car.category}</p>
                                <p className="text-sm text-brand-black dark:text-white/80">{car.price}</p>
                            </Link>
                        </div>
                    ))}
                    {/* Duplicate logic for 'infinite' feel not implemented, relying on scroll */}
                    {CARS.map((car) => (
                        <div key={`${car.id}-dup`} className="min-w-[300px] md:min-w-[400px] snap-center flex-shrink-0">
                            <Link to={`/vehicles/${car.id}`} className="block group/card text-center">
                                <div className="relative aspect-[16/9] mb-6 transition-transform duration-500 group-hover/card:scale-105">
                                    <img
                                        src={car.image}
                                        alt={car.name}
                                        className="w-full h-full object-cover rounded-lg shadow-sm"
                                    />
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-brand-black dark:text-white mb-2">{car.name}</h3>
                                <p className="text-sm font-bold text-gray-400 mb-2 uppercase tracking-wide">{car.category}</p>
                                <p className="text-sm text-brand-black dark:text-white/80">{car.price}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

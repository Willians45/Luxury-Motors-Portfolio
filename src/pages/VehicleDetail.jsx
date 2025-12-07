import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Rotate3D, Download, BookOpen, ShieldCheck, ShoppingBag, Check, CircleDashed, Wind, Footprints } from 'lucide-react';
import CarViewer from '../components/CarViewer';
import { CARS } from '../data/cars';

const ACCESSORIES = [
    { id: 'wheels', name: '21" Forged Alloy Wheels', price: 2500, icon: CircleDashed },
    { id: 'spoiler', name: 'Carbon Fiber Spoiler', price: 1200, icon: Wind },
    { id: 'mats', name: 'All-Weather Floor Liners', price: 350, icon: Footprints },
];

export default function VehicleDetail() {
    const { id } = useParams();
    const car = CARS.find(c => c.id === id) || CARS[0];

    const [selectedColor, setSelectedColor] = useState(car.colors[0]);
    const [viewMode, setViewMode] = useState('exterior');
    const [activeTab, setActiveTab] = useState('specs');
    const [selectedAccessories, setSelectedAccessories] = useState([]);

    // Calculate Total Price
    const basePrice = parseInt(car.price.replace(/[^0-9]/g, '')) || 50000;
    const accessoriesTotal = selectedAccessories.reduce((sum, accId) => {
        const acc = ACCESSORIES.find(a => a.id === accId);
        return sum + (acc ? acc.price : 0);
    }, 0);
    const totalPrice = basePrice + accessoriesTotal;

    // Toggle Accessory
    const toggleAccessory = (accId) => {
        setSelectedAccessories(prev =>
            prev.includes(accId) ? prev.filter(id => id !== accId) : [...prev, accId]
        );
    };

    const quoteRef = useRef(null);
    const scrollToQuote = () => quoteRef.current?.scrollIntoView({ behavior: 'smooth' });

    useEffect(() => {
        setSelectedColor(car.colors[0]);
        setSelectedAccessories([]);
    }, [car]);

    if (!car) return <div>Loading...</div>;

    return (
        <div className="min-h-screen bg-brand-light dark:bg-brand-black text-brand-black dark:text-white pt-20 transition-colors duration-300">

            {/* 3D Configurator Section */}
            <section className="h-[85vh] w-full relative grid grid-cols-1 lg:grid-cols-12 border-b border-gray-200 dark:border-white/10">
                {/* Controls Sidebar (Left) - Desktop */}
                <div className="hidden lg:flex lg:col-span-3 flex-col justify-between p-8 border-r border-gray-200 dark:border-white/10 bg-white/80 dark:bg-brand-black/50 backdrop-blur-sm z-10 transition-colors">
                    <div>
                        <Link to="/vehicles" className="inline-flex items-center gap-2 text-gray-500 hover:text-brand-gold transition-colors mb-8">
                            <ArrowLeft size={16} /> Back to Models
                        </Link>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="mb-8"
                        >
                            <h1 className="text-4xl font-sans mb-2">{car.name}</h1>
                            <p className="text-brand-gold tracking-widest text-sm mb-4">{car.tagline}</p>
                            <p className="text-2xl font-medium">${totalPrice.toLocaleString()}</p>
                            {accessoriesTotal > 0 && <p className="text-xs text-gray-500">+${accessoriesTotal.toLocaleString()} accessories</p>}
                        </motion.div>

                        {/* View Toggle */}
                        <div className="flex gap-4 mb-8">
                            <button
                                onClick={() => setViewMode('exterior')}
                                className={`flex items-center gap-2 px-4 py-2 border text-sm transition-all ${viewMode === 'exterior' ? 'border-brand-gold text-brand-gold' : 'border-gray-300 dark:border-white/20 text-gray-500 dark:text-white/50 hover:border-gray-400'}`}
                            >
                                Exterior
                            </button>
                            <button
                                onClick={() => setViewMode('interior')}
                                className={`flex items-center gap-2 px-4 py-2 border text-sm transition-all ${viewMode === 'interior' ? 'border-brand-gold text-brand-gold' : 'border-gray-300 dark:border-white/20 text-gray-500 dark:text-white/50 hover:border-gray-400'}`}
                            >
                                Interior
                            </button>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">Select Color</p>
                            <div className="flex flex-wrap gap-3">
                                {car.colors.map(color => (
                                    <button
                                        key={color.name}
                                        onClick={() => setSelectedColor(color)}
                                        className={`w-10 h-10 rounded-full border-2 transition-all relative group shadow-sm ${selectedColor.name === color.name ? 'border-brand-gold scale-110' : 'border-gray-200 hover:scale-105'}`}
                                        title={color.name}
                                    >
                                        <div className="w-full h-full rounded-full" style={{ backgroundColor: color.hex }}></div>
                                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap pointer-events-none transition-opacity z-20">
                                            {color.name}
                                        </span>
                                    </button>
                                ))}
                            </div>
                            <p className="mt-3 text-sm font-medium">{selectedColor.name}</p>
                        </div>

                        <button
                            onClick={scrollToQuote}
                            className="w-full py-4 bg-brand-gold text-white dark:text-black font-semibold hover:bg-black hover:text-white dark:hover:bg-white transition-colors tracking-wide uppercase shadow-lg"
                        >
                            Request Quote
                        </button>
                    </div>
                </div>

                {/* 3D Viewer Area */}
                <div className="lg:col-span-9 relative h-[60vh] lg:h-full bg-gray-100 dark:bg-gray-900 transition-colors">
                    {/* Mobile Back Button */}
                    <Link to="/vehicles" className="lg:hidden absolute top-4 left-4 z-10 p-2 bg-white/20 dark:bg-black/20 backdrop-blur-md rounded-full text-brand-black dark:text-white border border-white/10 shadow-sm">
                        <ArrowLeft size={20} />
                    </Link>

                    <CarViewer color={selectedColor.hex} viewMode={viewMode} />

                    {/* Mobile Controls Overlay */}
                    <div className="lg:hidden absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white dark:from-black via-white/80 dark:via-black/80 to-transparent">
                        <div className="flex justify-between items-end mb-4">
                            <div>
                                <h2 className="text-2xl font-sans">{car.name}</h2>
                                <p className="text-sm text-brand-gold">${totalPrice.toLocaleString()}</p>
                            </div>
                            <button
                                onClick={() => setViewMode(viewMode === 'exterior' ? 'interior' : 'exterior')}
                                className="p-3 bg-white/20 dark:bg-white/10 rounded-full backdrop-blur-md border border-white/20 shadow-lg text-brand-black dark:text-white"
                            >
                                <Rotate3D size={24} />
                            </button>
                        </div>
                        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                            {car.colors.map(color => (
                                <button
                                    key={color.name}
                                    onClick={() => setSelectedColor(color)}
                                    className={`flex-shrink-0 w-12 h-12 rounded-full border-2 ${selectedColor.name === color.name ? 'border-brand-gold' : 'border-transparent shadow'}`}
                                    style={{ backgroundColor: color.hex }}
                                />
                            ))}
                        </div>
                        <button
                            onClick={scrollToQuote}
                            className="w-full mt-4 py-3 bg-brand-gold text-white font-semibold uppercase text-sm shadow-md"
                        >
                            Request Quote
                        </button>
                    </div>
                </div>
            </section>

            {/* Spotlight Section (Updated Image) */}
            <section className="py-24 bg-white dark:bg-brand-gray transition-colors border-b border-gray-100 dark:border-white/5">
                <div className="max-w-7xl mx-auto px-6 md:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <h2 className="text-3xl font-sans mb-6 text-brand-black dark:text-white">Uncompromising Detail</h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 text-lg">
                                From the meticulously stitched leather interior to the aerodynamic lines of the exterior, the {car.name} is designed to captivate. Every element serves a purpose, creating a driving experience that is as intuitive as it is exhilarating.
                            </p>
                            <div className="flex gap-12 border-t border-gray-200 dark:border-white/10 pt-8">
                                <div>
                                    <p className="text-3xl font-sans text-brand-gold mb-1">100%</p>
                                    <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">LED Lighting</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-sans text-brand-gold mb-1">24/7</p>
                                    <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">Assistance</p>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 h-[400px] lg:h-[500px] relative overflow-hidden rounded-sm shadow-2xl group">
                            {/* Replaced with a generic luxury interior/detail shot */}
                            <img
                                src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=2574&auto=format&fit=crop"
                                alt="Detail"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Details & Specs */}
            <section className="bg-brand-light dark:bg-brand-black text-brand-black dark:text-white transition-colors">
                <div className="max-w-7xl mx-auto px-6 md:px-20 py-16 md:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
                        <div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans mb-4 md:mb-6 leading-tight">
                                {car.tagline}
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6 md:mb-8 leading-relaxed">
                                {car.description}
                            </p>
                            <div className="flex gap-6 md:gap-8 border-b border-gray-300 dark:border-gray-700 pb-6 md:pb-8 mb-6 md:mb-8 overflow-x-auto">
                                <button
                                    onClick={() => setActiveTab('specs')}
                                    className={`text-xs md:text-sm font-bold tracking-widest uppercase transition-colors whitespace-nowrap ${activeTab === 'specs' ? 'text-brand-gold' : 'text-gray-400 hover:text-brand-black dark:hover:text-white'}`}
                                >
                                    Specifications
                                </button>
                                <button
                                    onClick={() => setActiveTab('features')}
                                    className={`text-xs md:text-sm font-bold tracking-widest uppercase transition-colors whitespace-nowrap ${activeTab === 'features' ? 'text-brand-gold' : 'text-gray-400 hover:text-brand-black dark:hover:text-white'}`}
                                >
                                    Key Features
                                </button>
                                <button
                                    onClick={() => setActiveTab('accessories')}
                                    className={`text-xs md:text-sm font-bold tracking-widest uppercase transition-colors whitespace-nowrap ${activeTab === 'accessories' ? 'text-brand-gold' : 'text-gray-400 hover:text-brand-black dark:hover:text-white'}`}
                                >
                                    Accessories
                                </button>
                            </div>

                            <div className="min-h-[200px]">
                                {activeTab === 'specs' && (
                                    <div className="grid grid-cols-2 gap-y-6 md:gap-y-8">
                                        <div>
                                            <p className="text-xs text-gray-500 uppercase tracking-widest">Engine</p>
                                            <p className="text-lg md:text-xl font-sans">3.5L V6</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 uppercase tracking-widest">Horsepower</p>
                                            <p className="text-lg md:text-xl font-sans">302 HP</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 uppercase tracking-widest">0-60 MPH</p>
                                            <p className="text-lg md:text-xl font-sans">6.6 Sec</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 uppercase tracking-widest">Drivetrain</p>
                                            <p className="text-lg md:text-xl font-sans">AWD</p>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'features' && (
                                    <ul className="space-y-3 md:space-y-4">
                                        {car.features.map(feat => (
                                            <li key={feat} className="flex items-center gap-3 text-base md:text-lg">
                                                <CheckCircle2 size={20} className="text-brand-gold flex-shrink-0" />
                                                {feat}
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {activeTab === 'accessories' && (
                                    <div className="space-y-4 md:space-y-6">
                                        {ACCESSORIES.map(acc => (
                                            <div key={acc.id}
                                                className={`flex items-center gap-4 p-4 border rounded cursor-pointer transition-all ${selectedAccessories.includes(acc.id) ? 'border-brand-gold bg-brand-gold/5' : 'border-gray-200 dark:border-white/10 hover:border-gray-300'}`}
                                                onClick={() => toggleAccessory(acc.id)}
                                            >
                                                <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-100 dark:bg-white/5 rounded flex items-center justify-center text-brand-black dark:text-white">
                                                    <acc.icon size={28} strokeWidth={1.5} />
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="font-bold text-sm md:text-base">{acc.name}</h4>
                                                    <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">+${acc.price.toLocaleString()}</p>
                                                </div>
                                                <div className={`w-6 h-6 rounded-full border flex items-center justify-center ${selectedAccessories.includes(acc.id) ? 'bg-brand-gold border-brand-gold text-white' : 'border-gray-300'}`}>
                                                    {selectedAccessories.includes(acc.id) && <Check size={14} />}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Resources Column */}
                        <div className="space-y-6 md:space-y-8">
                            <div className="p-6 md:p-8 bg-white dark:bg-brand-gray rounded-sm shadow-sm md:mt-12">
                                <h3 className="text-lg md:text-xl font-sans mb-4 md:mb-6 flex items-center gap-2"> <BookOpen size={20} className="text-brand-gold" /> Resources & Manuals</h3>
                                <ul className="space-y-3 md:space-y-4 text-sm">
                                    <li>
                                        <a href="#" className="flex justify-between items-center group hover:text-brand-gold transition-colors">
                                            <span>Owner's Manual (PDF)</span>
                                            <Download size={16} />
                                        </a>
                                    </li>
                                    <li className="border-t border-gray-100 dark:border-white/5 pt-3 md:pt-4">
                                        <a href="#" className="flex justify-between items-center group hover:text-brand-gold transition-colors">
                                            <span>Multimedia Guide</span>
                                            <Download size={16} />
                                        </a>
                                    </li>
                                    <li className="border-t border-gray-100 dark:border-white/5 pt-3 md:pt-4">
                                        <a href="#" className="flex justify-between items-center group hover:text-brand-gold transition-colors">
                                            <span>Maintenance Schedule</span>
                                            <Download size={16} />
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="p-6 md:p-8 bg-white dark:bg-brand-gray rounded-sm shadow-sm">
                                <h3 className="text-lg md:text-xl font-sans mb-3 md:mb-4 flex items-center gap-2"> <ShieldCheck size={20} className="text-brand-gold" /> Driving Assistance</h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-3 md:mb-4">
                                    Includes Lane Tracing Assist, Road Sign Assist, and Intelligent High Beams.
                                </p>
                                <a href="#" className="text-brand-gold text-xs font-bold uppercase tracking-widest hover:underline">View All Safety Features</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quote Form */}
            <section ref={quoteRef} id="quote" className="py-24 bg-brand-gray text-white px-6 md:px-20">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-sans mb-4">Build Your Legacy</h2>
                        <p className="text-white/60">Request a personalized quote for your {car.name} today.</p>
                        <p className="text-2xl mt-4 font-sans">${totalPrice.toLocaleString()}</p>
                    </div>

                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-white/50">First Name</label>
                            <input type="text" className="w-full bg-white/5 border border-white/10 p-4 focus:outline-none focus:border-brand-gold transition-colors text-white" placeholder="John" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-white/50">Last Name</label>
                            <input type="text" className="w-full bg-white/5 border border-white/10 p-4 focus:outline-none focus:border-brand-gold transition-colors text-white" placeholder="Doe" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-white/50">Email</label>
                            <input type="email" className="w-full bg-white/5 border border-white/10 p-4 focus:outline-none focus:border-brand-gold transition-colors text-white" placeholder="john@example.com" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-white/50">Phone</label>
                            <input type="tel" className="w-full bg-white/5 border border-white/10 p-4 focus:outline-none focus:border-brand-gold transition-colors text-white" placeholder="+58 ..." />
                        </div>
                        <div className="md:col-span-2 space-y-2">
                            <label className="text-xs uppercase tracking-widest text-white/50">Message (Optional)</label>
                            <textarea rows="4" className="w-full bg-white/5 border border-white/10 p-4 focus:outline-none focus:border-brand-gold transition-colors text-white" placeholder="I am interested in financing options..."></textarea>
                        </div>

                        <div className="md:col-span-2 mt-4">
                            <button type="submit" className="w-full py-5 bg-white text-black font-bold uppercase tracking-widest hover:bg-brand-gold transition-colors">
                                Submit Request
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}

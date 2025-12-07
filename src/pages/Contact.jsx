import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, ChevronDown, ChevronRight } from 'lucide-react';

const FAQS = [
    { question: "How do I schedule a test drive?", answer: "You can schedule a test drive by contacting your nearest dealer directly or using the 'Request Quote' form on any vehicle page." },
    { question: "What financing options are available?", answer: "We offer a variety of financing and lease options tailored to your needs. Please visit our Finance Center for more details." },
    { question: "Can I customize my vehicle?", answer: "Absolutely. Our 'Build Your Own' tool allows you to customize colors, interiors, and accessory packages." },
    { question: "Where is the nearest service center?", answer: "We have certified service centers across the country. Use our Dealer Locator to find the one closest to you." }
];

const JOBS = [
    { title: "Sales Consultant", location: "Caracas, VE", type: "Full-time" },
    { title: "Service Technician", location: "Valencia, VE", type: "Full-time" },
    { title: "Marketing Manager", location: "Remote / Hybrid", type: "Full-time" }
];

const AccordionItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-200 dark:border-white/10">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex justify-between items-center text-left hover:text-brand-gold transition-colors"
            >
                <span className="text-lg font-medium">{question}</span>
                <ChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-gray-500 dark:text-gray-400 leading-relaxed">{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function Contact() {
    return (
        <div className="min-h-screen bg-brand-light dark:bg-brand-black text-brand-black dark:text-white transition-colors duration-300">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-brand-black text-white py-16 md:py-20 px-6 md:px-20 text-center mt-20"
            >
                <h1 className="text-3xl md:text-6xl font-sans mb-4">Contact Us</h1>
                <p className="text-white/60 max-w-2xl mx-auto text-sm md:text-base">We are here to assist you with any inquiries about our vehicles, services, or dealership network.</p>
            </motion.div>

            <div className="max-w-7xl mx-auto px-6 md:px-20 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Contact Info & Map */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h2 className="text-3xl font-sans mb-8">Get in Touch</h2>
                    <div className="space-y-6 mb-12">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-brand-gold/10 rounded-full text-brand-gold"><MapPin size={24} /></div>
                            <div>
                                <h3 className="font-bold text-lg">Visit Our Showroom</h3>
                                <p className="text-gray-500 dark:text-gray-400">123 Luxury Lane, Beverly Hills, CA 90210</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-brand-gold/10 rounded-full text-brand-gold"><Phone size={24} /></div>
                            <div>
                                <h3 className="font-bold text-lg">Call Us</h3>
                                <p className="text-gray-500 dark:text-gray-400">+1 (555) 123-4567</p>
                                <p className="text-xs text-brand-gold mt-1">Mon-Sun: 9am - 8pm</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-brand-gold/10 rounded-full text-brand-gold"><Mail size={24} /></div>
                            <div>
                                <h3 className="font-bold text-lg">Email Us</h3>
                                <p className="text-gray-500 dark:text-gray-400">concierge@luxurymotors.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Placeholder Map */}
                    <div className="w-full h-64 bg-gray-200 dark:bg-gray-800 rounded-sm relative overflow-hidden group">
                        <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2674&auto=format&fit=crop" alt="Map" className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <span className="bg-white/90 dark:bg-black/90 px-4 py-2 text-xs font-bold uppercase tracking-widest backdrop-blur-md">View on Google Maps</span>
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-white dark:bg-brand-gray p-8 shadow-lg rounded-sm border-t-4 border-brand-gold"
                >
                    <h2 className="text-2xl font-sans mb-6">Send a Message</h2>
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-gray-500">First Name</label>
                                <input type="text" className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 p-3 focus:outline-none focus:border-brand-gold transition-colors" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-gray-500">Last Name</label>
                                <input type="text" className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 p-3 focus:outline-none focus:border-brand-gold transition-colors" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-gray-500">Email</label>
                            <input type="email" className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 p-3 focus:outline-none focus:border-brand-gold transition-colors" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-gray-500">Subject</label>
                            <select className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 p-3 focus:outline-none focus:border-brand-gold transition-colors">
                                <option>General Inquiry</option>
                                <option>Test Drive Request</option>
                                <option>Service Appointment</option>
                                <option>Financing</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-gray-500">Message</label>
                            <textarea rows="4" className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 p-3 focus:outline-none focus:border-brand-gold transition-colors"></textarea>
                        </div>
                        <button className="w-full py-4 bg-brand-black dark:bg-white text-white dark:text-brand-black font-bold uppercase tracking-widest hover:bg-brand-gold dark:hover:bg-brand-gold hover:text-white transition-colors">
                            Send Message
                        </button>
                    </form>
                </motion.div>
            </div>

            <div className="bg-gray-50 dark:bg-black/20 py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* FAQ & Careers */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <div className="mb-16">
                            <h2 className="text-3xl font-sans mb-8">Frequently Asked Questions</h2>
                            <div className="space-y-2">
                                {FAQS.map((faq, index) => (
                                    <AccordionItem key={index} {...faq} />
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-sans mb-8">Work With Us</h2>
                            <p className="text-gray-500 dark:text-gray-400 mb-6">Join our team of dedicated professionals redefining the luxury automotive experience.</p>

                            <div className="space-y-4">
                                {JOBS.map((job, i) => (
                                    <div key={i} className="flex justify-between items-center p-6 bg-white dark:bg-brand-gray border border-gray-100 dark:border-white/5 hover:border-brand-gold transition-colors rounded-sm group cursor-pointer">
                                        <div>
                                            <h4 className="font-bold text-lg group-hover:text-brand-gold transition-colors">{job.title}</h4>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">{job.location} • {job.type}</p>
                                        </div>
                                        <ChevronRight className="text-gray-300 group-hover:text-brand-gold transition-colors" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

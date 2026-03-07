"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Droplet } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled
                ? "bg-white/95 backdrop-blur-md shadow-lg py-3 border-b border-gray-100"
                : "bg-transparent py-6"
                }`}
        >
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-white p-1 shadow-md">
                        <img
                            src="/waterlogo.png"
                            alt="Jayalakshmi Water Agency"
                            className="w-full h-full object-cover rounded-full"
                        />
                    </div>
                    <span className={`font-bold text-xl md:text-2xl tracking-tight leading-tight transition-colors ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                        Jayalakshmi <span className={scrolled ? 'text-blue-600' : 'text-blue-400'}>Water Agency</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="flex gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`font-semibold transition-colors hover:-translate-y-0.5 transform duration-200 ${scrolled
                                    ? 'text-gray-600 hover:text-blue-600'
                                    : 'text-gray-200 hover:text-white'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <Link
                        href="https://wa.me/919876543210?text=Hello%20Jayalakshmi%20Water%20Agency%2C%20I%20would%20like%20to%20book%20a%20water%20supply%20service."
                        target="_blank"
                        className={`px-8 py-3 rounded-full font-bold transition-all shadow-md hover:scale-105 ${scrolled
                            ? 'bg-blue-600 text-white hover:bg-blue-700'
                            : 'bg-white text-gray-900 hover:bg-gray-100'
                            }`}
                    >
                        Book Service
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={`md:hidden p-2 transition-colors ${scrolled ? 'text-gray-900' : 'text-white'}`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-2xl rounded-b-3xl overflow-hidden"
                    >
                        <div className="container py-6 px-4 flex flex-col gap-5 text-center">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-800 font-semibold text-lg py-2 hover:text-blue-600 transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 mt-2 border-t border-gray-100">
                                <Link
                                    href="https://wa.me/919876543210?text=Hello%20Jayalakshmi%20Water%20Agency%2C%20I%20would%20like%20to%20book%20a%20water%20supply%20service."
                                    target="_blank"
                                    onClick={() => setIsOpen(false)}
                                    className="bg-blue-600 text-white block px-6 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg"
                                >
                                    Book Service
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

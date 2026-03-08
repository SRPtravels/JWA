import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black text-gray-300 py-16 md:py-24 border-t border-gray-900">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

                    {/* Brand & Mission */}
                    <div className="flex flex-col gap-6 lg:pr-8">
                        <Link href="/" className="inline-block">
                            <span className="font-bold text-3xl tracking-tight leading-tight text-white">
                                Jayalakshmi <span className="text-blue-500">Water Agency</span>
                            </span>
                        </Link>
                        <p className="text-gray-400 leading-relaxed">
                            Premium bulk water supply solutions serving residential, commercial, and industrial needs with uncompromised reliability and purity since 2007.
                        </p>
                        <div className="flex items-center gap-4 mt-2">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-300">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-400 hover:text-white transition-colors duration-300">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors duration-300">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-700 hover:text-white transition-colors duration-300">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-white text-lg font-bold uppercase tracking-wider mb-2">Quick Links</h4>
                        <ul className="flex flex-col gap-4">
                            <li>
                                <Link href="/" className="hover:text-white hover:translate-x-2 transition-all duration-300 inline-flex items-center group">
                                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 text-blue-500 transition-opacity" /> Home
                                </Link>
                            </li>
                            <li>
                                <Link href="#about" className="hover:text-white hover:translate-x-2 transition-all duration-300 inline-flex items-center group">
                                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 text-blue-500 transition-opacity" /> About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#services" className="hover:text-white hover:translate-x-2 transition-all duration-300 inline-flex items-center group">
                                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 text-blue-500 transition-opacity" /> Services
                                </Link>
                            </li>
                            <li>
                                <Link href="#process" className="hover:text-white hover:translate-x-2 transition-all duration-300 inline-flex items-center group">
                                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 text-blue-500 transition-opacity" /> Operations
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-white text-lg font-bold uppercase tracking-wider mb-2">Our Capabilities</h4>
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                9,000 Litres Supply
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                12,000 Litres Supply
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                24,000 Litres Supply
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                36,000 Litres Supply
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                Scheduled Delivery Contracts
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-white text-lg font-bold uppercase tracking-wider mb-2">Contact Us</h4>
                        <ul className="flex flex-col gap-6">
                            <li className="flex items-start gap-4">
                                <div className="p-2 rounded-lg bg-white/5 shrink-0 mt-1">
                                    <MapPin className="w-5 h-5 text-blue-400" />
                                </div>
                                <div>
                                    <span className="block text-white font-medium mb-1">Head Office</span>
                                    <span className="text-gray-400">185 Abdulkalam Street,<br />Navalur, Chennai</span>
                                </div>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="p-2 rounded-lg bg-white/5 shrink-0">
                                    <Phone className="w-5 h-5 text-blue-400" />
                                </div>
                                <div>
                                    <span className="block text-white font-medium mb-1">Hotline (24/7)</span>
                                    <span className="text-gray-400">+91 95001 30717<br />+91 98413 57799</span>
                                </div>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="p-2 rounded-lg bg-white/5 shrink-0">
                                    <Mail className="w-5 h-5 text-blue-400" />
                                </div>
                                <div>
                                    <span className="block text-white font-medium mb-1">Email Support</span>
                                    <span className="text-gray-400">JayalakshmiWaterSupplychennai@gmail.com</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Jayalakshmi Water Agency. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

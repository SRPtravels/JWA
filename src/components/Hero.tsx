"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-black text-white">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/water-trucks.jpg"
                    alt="Jayalakshmi Water Supply Fleet"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90" />
            </div>

            <div className="container relative z-10 max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">


                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-outfit font-extrabold tracking-tight mb-8 leading-[1.05] drop-shadow-lg">
                        Premium Bulk Water <br className="hidden sm:block" />
                        <span className="text-blue-400">Reliable Supply.</span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-lg md:text-2xl text-gray-200 mb-12 max-w-3xl leading-relaxed font-medium drop-shadow-md"
                >
                    Delivering clean, high-capacity water supply to apartments, commercial hubs, and construction sites with precision, reliability, and punctuality.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-5 items-center justify-center w-full sm:w-auto"
                >
                    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                        <Link
                            href="https://wa.me/919500130717?text=Hello%20Jayalakshmi%20Water%20Agency%2C%20I%20am%20interested%20in%20your%20water%20supply%20services."
                            target="_blank"
                            className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold transition-all hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                        >
                            Request Supply Now
                        </Link>
                        <Link
                            href="#services"
                            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full font-bold transition-all backdrop-blur-md"
                        >
                            View Our Services
                        </Link>
                    </div>
                </motion.div>

            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
            </motion.div>

        </section>
    );
}

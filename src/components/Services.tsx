"use client";

import { motion } from "framer-motion";
import { Truck, Factory, Home, ArrowRight } from "lucide-react";

const services = [
    {
        icon: Home,
        title: "9,000 Litres",
        description: "Ideal for small households, boutique stores, and limited space requirements.",
    },
    {
        icon: Home,
        title: "12,000 Litres",
        description: "Compact delivery optimized for retail outlets, small commercial establishments, and residential units.",
    },
    {
        icon: Truck,
        title: "24,000 Litres",
        description: "High-efficiency supply tailored for medium-scale commercial hubs and large residential complexes.",
    },
    {
        icon: Factory,
        title: "36,000 Litres",
        description: "Industrial-grade volume engineered for large-scale construction sites and major infrastructure projects.",
    }
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-gray-50 text-black">
            <div className="container">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold mb-4">Our Premium Services</h2>
                    <p className="text-gray-600">Tailored water management and supply solutions designed for uncompromising quality and reliability.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
                        >
                            <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                                <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                            <a
                                href={`https://wa.me/919500130717?text=${encodeURIComponent(`Hello, I am interested in your ${service.title} service.`)}`}
                                target="_blank"
                                className="inline-flex w-full items-center justify-center font-semibold text-white bg-black hover:bg-gray-800 px-6 py-3 rounded-xl transition-all shadow-md group-hover:shadow-lg"
                            >
                                Enquire Now <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

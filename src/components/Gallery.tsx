"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
    "/img/1000283865.jpg.jpeg",
    "/img/1000284041.jpg.jpeg",
    "/img/IMG-20251003-WA0005.jpg.jpeg",
    "/img/IMG20250626172205.jpg.jpeg",
    "/img/IMG20250707193316.jpg.jpeg",
    "/img/IMG20250714171241.jpg.jpeg",
    "/img/IMG20250906131717.jpg.jpeg",
    "/img/IMG_20250717_214317_136.webp",
    "/img/IMG_20250909_055316_576.webp",
    "/img/IMG_20250912_092926.jpg.jpeg",
    "/img/Snapchat-1977989633.jpg.jpeg"
];

export default function Gallery() {
    return (
        <section className="py-24 bg-white text-black">
            <div className="container px-4 sm:px-6 mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold mb-4">Our Operations in Action</h2>
                    <p className="text-gray-600">A glimpse into our daily deliveries, specialized fleet, and commitment to reliable service.</p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: (index % 4) * 0.1 }}
                            className="relative w-full aspect-square rounded-2xl overflow-hidden group shadow-sm hover:shadow-xl transition-all"
                        >
                            <img
                                src={src}
                                alt={`Gallery Image ${index + 1}`}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

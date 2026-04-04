"use client";

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

// Combine arrays to allow for a continuous loop
const row1 = [...images, ...images];
const row2 = [...[...images].reverse(), ...[...images].reverse()];
const row3 = [...images.slice(5), ...images.slice(0, 5), ...images.slice(5), ...images.slice(0, 5)];

export default function Gallery() {
    return (
        <section className="py-24 bg-gray-50 text-black overflow-hidden relative">
            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes marquee-reverse {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0%); }
                }
                .marquee {
                    display: flex;
                    width: max-content;
                    animation: marquee 40s linear infinite;
                }
                .marquee-reverse {
                    display: flex;
                    width: max-content;
                    animation: marquee-reverse 45s linear infinite;
                }
                .marquee-fast {
                    display: flex;
                    width: max-content;
                    animation: marquee 35s linear infinite;
                }
                /* Pause on hover */
                .marquee-wrapper:hover > div {
                    animation-play-state: paused;
                }
            `}</style>
            
            <div className="container px-4 sm:px-6 mx-auto mb-16 relative z-10">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Operations in Action</h2>
                    <p className="text-gray-600 text-lg">A glimpse into our daily deliveries, specialized fleet, and commitment to reliable service.</p>
                </div>
            </div>
            
            <div className="flex flex-col gap-6 relative z-10">
                {/* Row 1: Left */}
                <div className="marquee-wrapper">
                    <div className="marquee gap-6">
                        {row1.map((src, index) => (
                            <div key={`r1-${index}`} className="w-[280px] md:w-[350px] aspect-[4/3] flex-shrink-0 rounded-2xl overflow-hidden shadow">
                                <img src={src} alt="Gallery image" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 2: Right */}
                <div className="marquee-wrapper">
                    <div className="marquee-reverse gap-6">
                        {row2.map((src, index) => (
                            <div key={`r2-${index}`} className="w-[280px] md:w-[350px] aspect-[4/3] flex-shrink-0 rounded-2xl overflow-hidden shadow">
                                <img src={src} alt="Gallery image" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 3: Left */}
                <div className="marquee-wrapper">
                    <div className="marquee-fast gap-6">
                        {row3.map((src, index) => (
                            <div key={`r3-${index}`} className="w-[280px] md:w-[350px] aspect-[4/3] flex-shrink-0 rounded-2xl overflow-hidden shadow">
                                <img src={src} alt="Gallery image" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

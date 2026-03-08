"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PlayCircle, RefreshCw, Youtube } from "lucide-react";

export default function LiveOperations() {
    const [videos, setVideos] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const res = await fetch("https://jayalakshmiwateragency.vercel.app/api/videos", {
                    cache: 'no-store',
                    headers: {
                        'Cache-Control': 'no-cache',
                        'Pragma': 'no-cache'
                    }
                });
                if (!res.ok) throw new Error("Failed to fetch");
                const data = await res.json();
                setVideos(data.videos || []);
            } catch (e) {
                console.error("Could not load videos:", e);
            } finally {
                setLoading(false);
            }
        };
        fetchVideos();
    }, []);

    return (
        <section id="process" className="py-24 bg-gray-50 border-y border-gray-200">
            <div className="container">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold mb-4">Our Process in Motion</h2>
                    <p className="text-gray-600 text-lg">
                        Real-time updates from our latest delivery operations and quality checks. Witness the Jayalakshmi Water Supply standard of excellence.
                    </p>
                </div>

                {loading ? (
                    <div className="flex justify-center items-center py-24">
                        <RefreshCw className="w-10 h-10 text-blue-500 animate-spin" />
                    </div>
                ) : videos.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center py-20 border-2 border-dashed border-gray-300 rounded-3xl bg-white"
                    >
                        <Youtube className="w-14 h-14 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-500 mb-2">No Videos Yet</h3>
                        <p className="text-gray-400 text-sm max-w-xs mx-auto">
                            Admin can add YouTube videos from the{" "}
                            <a href="/admin" className="text-blue-500 underline hover:text-blue-700">
                                Admin Dashboard
                            </a>
                            .
                        </p>
                    </motion.div>
                ) : (
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Featured — first video */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="lg:w-2/3"
                        >
                            <div className="relative rounded-3xl overflow-hidden bg-black aspect-video shadow-2xl border border-gray-200">
                                <iframe
                                    src={videos[0]}
                                    title="Featured Operation Video"
                                    className="w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                            <div className="mt-4 flex items-center gap-2 text-sm font-medium text-gray-500">
                                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                Latest Operation
                            </div>
                        </motion.div>

                        {/* Side panel — remaining videos */}
                        {videos.length > 1 && (
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="lg:w-1/3 flex flex-col gap-4"
                            >
                                <h3 className="font-bold text-xl text-black border-b border-gray-200 pb-4">
                                    Previous Operations
                                </h3>
                                <div className="flex flex-col gap-4 overflow-y-auto max-h-[420px] pr-1">
                                    {videos.slice(1).map((url, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                                            className="relative group rounded-2xl overflow-hidden aspect-video bg-black shadow-md border border-gray-200"
                                        >
                                            <iframe
                                                src={url}
                                                title={`Operation ${idx + 2}`}
                                                className="w-full h-full"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            />
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}

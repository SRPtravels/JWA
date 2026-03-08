"use client";

import { motion } from "framer-motion";

const stats = [
    { value: "Rigorous", label: "Safety Protocols" },
    { value: "GPS-Tracked", label: "Punctual Fleet" },
    { value: "Specialized", label: "Professional Operations" },
    { value: "99.9%", label: "Purity Guaranteed" }
];

export default function About() {
    return (
        <section id="about" className="py-24 bg-white relative overflow-hidden">
            <div className="container">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="lg:w-1/2"
                    >
                        <h2 className="text-4xl font-bold mb-6">The Jayalakshmi Water Supply Standard.</h2>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            We don't just supply water; we deliver peace of mind. With stringent hygiene protocols for storage and transit, a GPS-tracked fleet ensuring on-time arrival, and highly trained operators using specialized equipment, we guarantee seamless offloading and uncompromising quality.
                        </p>

                        <div className="grid grid-cols-2 gap-8">
                            {stats.map((stat, index) => (
                                <div key={index} className="border-l-4 border-primary pl-4">
                                    <div className="text-xl font-extrabold text-black mb-1">{stat.value}</div>
                                    <div className="text-gray-500 font-medium text-sm">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="lg:w-1/2 w-full"
                    >
                        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 relative overflow-hidden">
                            {/* Decorative background element */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10 opacity-50"></div>

                            <h3 className="text-2xl font-bold mb-2">Request Water Supply</h3>
                            <p className="text-gray-500 mb-8">Fill out the details below to message us directly on WhatsApp.</p>

                            <form className="space-y-5 flex flex-col" onSubmit={(e) => {
                                e.preventDefault();
                                const formData = new FormData(e.currentTarget);
                                const name = formData.get('name');
                                const company = formData.get('company');
                                const location = formData.get('location');
                                const requirement = formData.get('requirement');

                                let text = `*New Inquiry:*\nHello Jayalakshmi Water Supply, I am ${name}`;
                                if (company) text += ` from ${company}`;
                                text += `.\n\n*Delivery Location:*\n${location}\n\n*Requirement:*\n${requirement}`;

                                window.open(`https://wa.me/919500130717?text=${encodeURIComponent(text)}`, '_blank');
                            }}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name <span className="text-red-500">*</span></label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company / Project</label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                            placeholder="Optional"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Delivery Location <span className="text-red-500">*</span></label>
                                    <input
                                        type="text"
                                        id="location"
                                        name="location"
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                        placeholder="Area, Sector, or Pincode"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="requirement" className="block text-sm font-medium text-gray-700 mb-1">Requirement Details <span className="text-red-500">*</span></label>
                                    <textarea
                                        id="requirement"
                                        name="requirement"
                                        required
                                        rows={3}
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                                        placeholder="E.g., Need 24,000 Litres for construction site tomorrow morning."
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white font-bold py-4 px-6 rounded-xl transition-colors duration-300 shadow-lg shadow-green-500/30 flex items-center justify-center gap-2"
                                >
                                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                    Chat on WhatsApp
                                </button>
                            </form>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

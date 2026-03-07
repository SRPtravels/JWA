export default function PrivacyPolicy() {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-gray-50">
            <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
                    <h1 className="text-4xl font-bold mb-8 text-gray-900">Privacy Policy</h1>
                    <div className="prose prose-blue max-w-none text-gray-600">
                        <p className="mb-4">Last Updated: {new Date().toLocaleDateString()}</p>

                        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">1. Information We Collect</h2>
                        <p className="mb-4">At Jayalakshmi Water Agency, we collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our services, such as when you fill out our contact form or chat with us on WhatsApp.</p>

                        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">2. How We Use Your Information</h2>
                        <p className="mb-4">We use the information we collect or receive to communicate with you, fulfill and manage your orders, and provide you with customer service.</p>

                        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">3. Information Sharing</h2>
                        <p className="mb-4">We do not share, sell, rent, or trade any of your information with third parties for their promotional purposes.</p>

                        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">4. Contact Us</h2>
                        <p>If you have questions or comments about this notice, you may email us at supply@jayalakshmiwateragency.com.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

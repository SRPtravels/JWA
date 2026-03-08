export default function TermsOfService() {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-gray-50">
            <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
                    <h1 className="text-4xl font-bold mb-8 text-gray-900">Terms of Service</h1>
                    <div className="prose prose-blue max-w-none text-gray-600">
                        <p className="mb-4">Last Updated: {new Date().toLocaleDateString()}</p>

                        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">1. Acceptance of Terms</h2>
                        <p className="mb-4">By accessing or using the services provided by Jayalakshmi Water Supply, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.</p>

                        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">2. Service Usage</h2>
                        <p className="mb-4">Our services, primarily consisting of bulk water supply and delivery, are subject to availability and operating capacity. We reserve the right to refuse service based on logistical constraints.</p>

                        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">3. Liability</h2>
                        <p className="mb-4">While we ensure the highest standards of purity and delivery punctuality, Jayalakshmi Water Supply is not liable for indirect damages arising from unforeseen delays or incidents beyond our reasonable control.</p>

                        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">4. Contact Information</h2>
                        <p>For any inquiries regarding these terms, contact us at JayalakshmiWaterSupplychennai@gmail.com.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

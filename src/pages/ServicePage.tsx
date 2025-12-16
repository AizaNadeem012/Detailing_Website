// src/pages/ServicePage.tsx
import React from "react";
import { motion } from "framer-motion";
import { List, CheckCircle, Car, Shield, Droplet, Zap, Award, Smile, ChevronDown } from "lucide-react";

// Assuming these imports work in your project environment
import { Navbar } from "@/components/Navbar"; 
import { Footer } from "@/components/Footer"; 
import Service from "@/components/Services"; // Assuming this is a section component

// --- DUMMY SERVICE DATA ---
const servicesData = [
    // Protection Tier
    {
        id: 1,
        group: "Protection",
        title: "Ceramic Coating (Pro Level)",
        icon: <Shield className="w-8 h-8 text-primary" />,
        description:
            "Multi-year paint protection with extreme hydrophobicity and deep gloss. Protects against UV damage and chemical stains.",
        price: "From £499",
        features: ["5-Year Durability", "Extreme Hydrophobicity", "Chemical Resistance"],
        colorClass: "bg-green-900/10 border-green-500/50",
    },
    {
        id: 2,
        group: "Protection",
        title: "Paint Protection Film (PPF)",
        icon: <Car className="w-8 h-8 text-primary" />,
        description:
            "Invisible thermoplastic urethane film applied to high-impact areas to shield against stone chips and abrasions.",
        price: "From £850",
        features: ["Self-Healing Film", "Maximum Impact Protection", "10-Year Warranty"],
        colorClass: "bg-blue-900/10 border-blue-500/50",
    },
    // Correction & Maintenance Tier
    {
        id: 3,
        group: "Correction & Maintenance",
        title: "Single Stage Paint Correction",
        icon: <Zap className="w-8 h-8 text-primary" />,
        description:
            "A one-step polish designed to remove light swirl marks and increase paint clarity and gloss by 60-70%.",
        price: "From £300",
        features: ["Swirl Mark Reduction", "Enhanced Gloss", "Prepares for Coating"],
        colorClass: "bg-purple-900/10 border-purple-500/50",
    },
    {
        id: 4,
        group: "Correction & Maintenance",
        title: "Full Valeting Service",
        icon: <Droplet className="w-8 h-8 text-primary" />,
        description:
            "Comprehensive interior and exterior cleaning, including deep vacuum, window polishing, and exterior wax application.",
        price: "From £120",
        features: ["Interior Deep Clean", "Exterior Wash & Wax", "Tire Dressing"],
        colorClass: "bg-yellow-900/10 border-yellow-500/50",
    },
];

const protectionServices = servicesData.filter(s => s.group === "Protection");
const correctionServices = servicesData.filter(s => s.group === "Correction & Maintenance");


// --- FRAMER MOTION VARIANTS ---
const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};

const itemAnim = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

// --- TYPE DEFINITIONS ---
type ServiceData = typeof servicesData[number];
type ServiceCardProps = Omit<ServiceData, "id" | "group">;

// --- SERVICE CARD COMPONENT ---
const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon, description, price, features, colorClass }) => (
    <motion.div
        variants={itemAnim}
        className={`p-8 rounded-2xl shadow-xl border ${colorClass} bg-card transition duration-300 hover:shadow-primary/30 transform hover:-translate-y-1`}
    >
        <div className="flex items-center mb-6">
            <div className="w-14 h-14 rounded-full flex items-center justify-center bg-primary/10 mr-4">{icon}</div>
            <h3 className="text-xl font-extrabold text-foreground">{title}</h3>
        </div>

        <p className="text-muted-foreground mb-6 h-16">{description}</p>

        <div className="mb-6 space-y-2">
            {features.map((feature, index) => (
                <div key={index} className="flex items-center text-sm text-foreground">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                </div>
            ))}
        </div>

        <div className="border-t border-border pt-4 flex justify-between items-center">
            <span className="text-2xl font-bold text-primary">{price}</span>
            <button className="px-5 py-2 text-sm bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition duration-300">
                Book Now
            </button>
        </div>
    </motion.div>
);

// --- NEW COMPONENT: WHY CHOOSE US ---
const WhyChooseUs = () => (
    <section className="py-16 bg-card-foreground/5 mb-16 rounded-xl shadow-inner">
        <div className="container mx-auto px-4 max-w-7xl">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-heading font-extrabold text-center mb-12 text-foreground"
            >
                Why Choose Our <span className="text-primary">Detailing Experts?</span>
            </motion.h2>

            <motion.div
                className="grid md:grid-cols-3 gap-8 text-center"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.div variants={itemAnim} className="p-6 bg-card rounded-xl shadow-lg border border-border">
                    <Award className="w-10 h-10 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Certified Specialists</h3>
                    <p className="text-muted-foreground">Trained and certified in the latest ceramic and PPF application techniques for a flawless finish.</p>
                </motion.div>
                <motion.div variants={itemAnim} className="p-6 bg-card rounded-xl shadow-lg border border-border">
                    <Shield className="w-10 h-10 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Premium Products</h3>
                    <p className="text-muted-foreground">We use only industry-leading, branded protective films and ceramic solutions with guaranteed longevity.</p>
                </motion.div>
                <motion.div variants={itemAnim} className="p-6 bg-card rounded-xl shadow-lg border border-border">
                    <Smile className="w-10 h-10 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Customer Satisfaction</h3>
                    <p className="text-muted-foreground">Our process prioritizes transparency, quality, and ensuring every client leaves 100% satisfied.</p>
                </motion.div>
            </motion.div>
        </div>
    </section>
);

// --- NEW COMPONENT: FAQ SECTION ---
const FAQSection = () => {
    const faqItems = [
        { q: "How long does Ceramic Coating last?", a: "Our professional ceramic coatings typically last between 3 to 7 years, depending on the tier chosen and maintenance." },
        { q: "Is PPF better than Ceramic Coating?", a: "They serve different purposes. PPF offers physical protection against stone chips, while Ceramic Coating offers chemical resistance and gloss. Many clients combine both." },
        { q: "How long does the detailing service take?", a: "A Full Valet usually takes 4-6 hours, while Paint Correction and Coating can take 2-3 days, as curing time is essential." },
    ];

    return (
        <section className="py-16">
            <div className="container mx-auto px-4 max-w-7xl">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-heading font-extrabold text-center mb-12 text-foreground"
                >
                    Frequently Asked <span className="text-primary">Questions</span>
                </motion.h2>

                <div className="max-w-4xl mx-auto space-y-4">
                    {faqItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="bg-card p-6 rounded-xl shadow-lg border border-border cursor-pointer hover:border-primary/50"
                        >
                            <details>
                                <summary className="flex justify-between items-center text-lg font-semibold text-foreground cursor-pointer list-none">
                                    {item.q}
                                    <ChevronDown className="w-5 h-5 text-primary ml-4 transition-transform duration-300 details-open:rotate-180" />
                                </summary>
                                <p className="mt-3 text-muted-foreground border-t border-border pt-3">
                                    {item.a}
                                </p>
                            </details>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};


// --- NEW COMPONENT: CTA BANNER ---
const CTABanner = () => (
    <section className="py-16 mt-16 bg-primary rounded-xl shadow-2xl">
        <div className="container mx-auto px-4 max-w-7xl text-center">
            <motion.h2
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-5xl font-heading font-extrabold text-white mb-4"
            >
                Ready to Protect Your Investment?
            </motion.h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
                Contact our team today for a personalized quote and protect your car's finish for years to come.
            </p>
            <motion.button
                className="px-10 py-4 bg-white text-primary text-xl font-bold rounded-full shadow-xl hover:bg-gray-100 transition duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.2)" }}
                whileTap={{ scale: 0.98 }}
            >
                Schedule Consultation
            </motion.button>
        </div>
    </section>
);


// --- MAIN SERVICE PAGE COMPONENT ---
const ServicePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />

            <main className="pt-24 pb-16">
                <div className="container mx-auto px-4 max-w-7xl">
                    {/* 1. ELEGANT HERO SECTION */}
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16 pt-8 pb-12 rounded-xl bg-gradient-to-r from-gray-900 to-gray-800 shadow-2xl"
                    >
                        <h1 className="text-6xl font-heading font-extrabold text-white mb-4">
                            Our Expert <span className="text-primary">Detailing Services</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Transform and protect your vehicle with our professional ceramic coating, PPF, and paint correction solutions. Quality is our obsession.
                        </p>
                        <motion.button
                            className="mt-8 px-8 py-3 bg-primary text-white text-lg font-semibold rounded-full shadow-lg hover:bg-primary/90 transition duration-300 transform hover:scale-105"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View All Services & Pricing
                        </motion.button>
                    </motion.div>

                    {/* 2. WHY CHOOSE US - USP Section */}
                    <WhyChooseUs />

                    {/* 3. SERVICE GROUP: PROTECTION */}
                    <h2 className="text-4xl font-heading font-extrabold text-center mb-12 text-foreground pt-8 border-t border-border/50">
                        Tier 1: <span className="text-primary">Long-Term Protection</span>
                    </h2>

                    <motion.div
                        className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {protectionServices.map((service) => (
                            <ServiceCard key={service.id} {...service} />
                        ))}
                    </motion.div>

                    {/* 4. SERVICE GROUP: CORRECTION & MAINTENANCE */}
                    <h2 className="text-4xl font-heading font-extrabold text-center mb-12 text-foreground pt-8 border-t border-border/50">
                        Tier 2: <span className="text-primary">Correction & Maintenance</span>
                    </h2>

                    <motion.div
                        className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {correctionServices.map((service) => (
                            <ServiceCard key={service.id} {...service} />
                        ))}
                    </motion.div>

                    {/* 5. FAQ SECTION */}
                    <FAQSection />

                    {/* 6. FINAL CALL TO ACTION BANNER */}
                    <CTABanner />

                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ServicePage;

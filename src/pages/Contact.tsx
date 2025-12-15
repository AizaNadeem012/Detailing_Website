import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
// Corrected Import: Added 'Send' icon
import { Phone, Mail, MapPin, Clock, ArrowRight, Send } from "lucide-react"; 

// --- Framer Motion Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

// --- New Component: Contact Info Cards ---
const ContactInfoCards = () => (
  <motion.div
    className="grid md:grid-cols-3 gap-8 py-12 max-w-6xl mx-auto"
    variants={containerVariants}
    initial="hidden"
    whileInView="visible" 
    viewport={{ once: true, amount: 0.3 }}
  >
    {/* Card 1: Phone */}
    <motion.div variants={itemVariants} className="p-8 bg-card rounded-xl shadow-2xl border border-primary/20 transition-all duration-300 hover:shadow-primary/40 hover:scale-[1.02]">
      <Phone className="w-8 h-8 text-primary mb-4" />
      <h3 className="text-2xl font-bold text-foreground mb-3">Instant Consultation</h3>
      <p className="text-muted-foreground mb-4">
        Talk directly to our detailing specialists for quick quotes and professional advice.
      </p>
      <a href="tel:+1234567890" className="text-primary font-bold transition-colors hover:text-primary/80 flex items-center group">
        Call Us Now
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </a>
    </motion.div>

    {/* Card 2: Email */}
    <motion.div variants={itemVariants} className="p-8 bg-card rounded-xl shadow-2xl border border-primary/20 transition-all duration-300 hover:shadow-primary/40 hover:scale-[1.02]">
      <Mail className="w-8 h-8 text-primary mb-4" />
      <h3 className="text-2xl font-bold text-foreground mb-3">Detailed Inquiries</h3>
      <p className="text-muted-foreground mb-4">
        Send us specifications or detailed requests for business listings and complex services.
      </p>
      <a href="mailto:info@srvdetailing.com" className="text-primary font-bold transition-colors hover:text-primary/80 flex items-center group">
        Email Our Team
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </a>
    </motion.div>

    {/* Card 3: Location / Working Hours */}
    <motion.div variants={itemVariants} className="p-8 bg-card rounded-xl shadow-2xl border border-primary/20 transition-all duration-300 hover:shadow-primary/40 hover:scale-[1.02]">
      <Clock className="w-8 h-8 text-primary mb-4" />
      <h3 className="text-2xl font-bold text-foreground mb-3">Visit Our Studio</h3>
      <p className="text-muted-foreground mb-4">
        Check our operating hours before planning your visit to our secure facility.
      </p>
      <p className="font-medium text-foreground mb-1">Mon - Sat: 9:00 AM - 6:00 PM</p>
      <p className="text-sm text-muted-foreground">Sunday: Closed</p>
    </motion.div>
  </motion.div>
);

// --- New Component: Map and Address Section ---
const LocationSection = () => (
    <section className="py-20 bg-background/70">
        <div className="container mx-auto px-4 max-w-6xl">
            <motion.div 
                className="grid md:grid-cols-2 gap-12 items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
            >
                {/* Address Details */}
                <motion.div variants={itemVariants}>
                    <h2 className="text-5xl font-extrabold font-heading text-foreground mb-6">
                        Find Our <span className="text-primary">Precision Park</span> Studio
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8">
                        Our facility is centrally located, easily accessible, and designed for optimal car care. Drop by for a consultation or pre-booked service.
                    </p>
                    <div className="space-y-6">
                        <div className="flex items-start">
                            <MapPin className="w-7 h-7 text-primary flex-shrink-0 mt-1 mr-4" />
                            <div>
                                <h4 className="font-bold text-xl text-foreground">Official Location:</h4>
                                <p className="text-muted-foreground">
                                    SRV Detailing Hub, Unit 5B,
                                    <br />
                                    The Precision Park, London, W12 9QR, UK
                                </p>
                            </div>
                        </div>
                    </div>
                    <a 
                        href="https://maps.app.goo.gl/YourLocationLink" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="mt-8 inline-flex items-center px-8 py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-primary/90 transition duration-300 shadow-xl shadow-primary/30 group"
                    >
                        Get Directions on Map
                        <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>

                {/* Map Placeholder */}
                <motion.div variants={itemVariants}>
                    <div className="h-96 w-full bg-gray-900 rounded-3xl shadow-2xl overflow-hidden flex items-center justify-center border-4 border-primary/50" style={{ backgroundImage: "url('/placeholder-map.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <MapPin className="w-16 h-16 text-primary/70 animate-pulse" />
                        <span className="text-gray-300 ml-4 font-semibold text-lg">Map View Placeholder</span>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    </section>
);

// --- New Component: Hero Section (Refactored) ---
const ContactHeroSection = () => (
    <div className="relative pt-32 pb-40 bg-gray-900 overflow-hidden"> 
        
        {/* Background Visual (Placeholder) */}
        <div className="absolute inset-0 opacity-20" style={{ 
            backgroundImage: "url('/placeholder-car-shine.jpg')", 
            backgroundSize: 'cover', 
            backgroundPosition: 'center' 
        }} />
        <div className="absolute inset-0 bg-background/80" /> 

        <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="container mx-auto px-4 text-center relative z-10 max-w-5xl"
        >
            <span className="text-md font-semibold uppercase tracking-widest text-primary mb-4 block">
                — Connect with SRV Detailing —
            </span>
            <h1 className="text-6xl md:text-8xl font-heading font-extrabold text-white mb-8 leading-tight drop-shadow-lg">
                Ready to See the <span className="text-primary">Difference?</span>
            </h1>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
                Your journey to flawless vehicle protection and unmatched aesthetic excellence begins here. Tell us about your detailing needs.
            </p>

            <motion.a
                href="#contact-form" // Link to the form section
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
                className="inline-flex items-center px-10 py-5 bg-primary text-white rounded-full font-bold text-xl hover:bg-primary/90 transition duration-300 shadow-2xl shadow-primary/40"
            >
                <Send className="w-6 h-6 mr-3" /> {/* SEND ICON IS NOW CORRECTLY AVAILABLE */}
                Request a Personalized Quote
            </motion.a>
        </motion.div>
    </div>
);


// --- Main Contact Page Component (Updated) ---
const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        {/* 1. ELEGANT & GRAND HERO SECTION */}
        <ContactHeroSection />

        {/* 2. Contact Form (Existing Component) */}
        <section id="contact-form" className="py-24 bg-background">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
                className="container mx-auto px-4"
            >
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-4">Let's Discuss Your Vehicle</h2>
                    <p className="text-lg text-muted-foreground">Please fill out the form accurately so we can provide the most precise recommendations and service quotes.</p>
                </div>
                <ContactSection /> {/* Assumes ContactSection contains the form */}
            </motion.div>
        </section>

        {/* 3. Detailed Contact Information Cards */}
        <section className="py-24 bg-card border-t border-b border-border">
            <div className="container mx-auto px-4">
                <ContactInfoCards />
            </div>
        </section>

        {/* 4. Location and Map Section */}
        <LocationSection />

      </main>
     <Footer/>
    </div>
  );
};

export default Contact;
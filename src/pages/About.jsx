import { useState } from "react";
import { Car, Sparkles, Shield, Droplets, Wrench, Star, Clock } from "lucide-react";
import heroImage from "/hero.jpeg"; // Hero background image
import carValeting from "/car-valeting.jpg";
import paintCorrection from "/paint-correction.jpg";
import ceramicCoating from "/ceramicCoating.jpg";
import paintProtection from "/paint-protection.jpg";
import engineDetailing from "/engine-detailing.jpg";
import interiorCleaning from "/interior-cleaning.jpg";

const services = [
  { icon: Car, title: "Mobile Valeting", desc: "Convenient fully equipped mobile service at your location.", image: carValeting },
  { icon: Sparkles, title: "Paint Correction", desc: "Remove swirl marks & scratches for showroom finish.", image: paintCorrection },
  { icon: Shield, title: "Ceramic Coating", desc: "Long-lasting paint protection with accredited products.", image: ceramicCoating },
  { icon: Droplets, title: "Paint Protection", desc: "Protect your car from UV rays, dirt & contaminants.", image: paintProtection },
  { icon: Wrench, title: "Engine Detailing", desc: "Thorough cleaning for a spotless engine bay.", image: engineDetailing },
  { icon: Star, title: "Interior Cleaning", desc: "Deep cleaning for carpets, seats & interiors.", image: interiorCleaning },
];

const features = [
  { icon: Shield, title: "Ceramic Coating Accredited", desc: "Professional certified ceramic coating services for lasting protection." },
  { icon: Droplets, title: "Paint Protection", desc: "Protect your vehicle from UV rays, dirt, and contaminants." },
  { icon: Car, title: "Mobile Services", desc: "We come to your location fully equipped for detailing." },
  { icon: Clock, title: "Fast & Reliable", desc: "Quick response with flexible scheduling for your convenience." },
];

const testimonials = [
  {
    name: "John Doe",
    role: "Car Enthusiast",
    message: "Absolutely amazing service! My car has never looked this good. Highly recommended!",
  },
  {
    name: "Jane Smith",
    role: "Business Owner",
    message: "Professional and reliable. The mobile valeting service saved me so much time.",
  },
  {
    name: "Mike Johnson",
    role: "Car Collector",
    message: "Great paint correction and ceramic coating. My car shines like new!",
  },
];

export default function About() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="font-sans text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gray-900">
        <img src={heroImage} alt="Professional car detailing" className="absolute inset-0 w-full h-full object-cover brightness-50" />
        <div className="relative container mx-auto px-6 text-center text-white">
          <span className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full font-medium mb-4">22 Years of Excellence</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Professional Mobile <span className="text-primary">Car Detailing</span> & Valeting
          </h1>
          <p className="max-w-2xl mx-auto text-lg mb-8">
            Valeting & detailing specialist accredited in ceramic coating. Fully equipped mobile services and unit-based solutions for paint correction, enhancement, and protection.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="/contact" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition">Book a Service</a>
            <a href="/listings" className="px-6 py-3 border border-white text-white rounded-full font-medium hover:bg-white hover:text-primary transition">View Listings</a>
          </div>
          <div className="mt-8 flex justify-center gap-6">
            <a href="tel:+447375759686" className="flex items-center gap-2">
              <Car className="w-5 h-5 text-primary" /> +44 7375 759686
            </a>
            <a href="https://instagram.com/srv.detailing" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" /> @srv.detailing
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">Why <span className="text-primary">Choose Us</span></h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map(({ title, desc, icon: Icon }) => (
              <div key={title} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
                <Icon className="mx-auto text-primary w-10 h-10 mb-4" />
                <h3 className="font-semibold text-lg mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">Our <span className="text-primary">Services</span></h2>
          <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-3">
            {services.map(({ title, desc, icon: Icon, image }) => (
              <div key={title} className="bg-gray-50 rounded-3xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2">
                <div className="h-48 overflow-hidden">
                  <img src={image} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"/>
                </div>
                <div className="p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Icon className="text-primary w-8 h-8"/>
                  </div>
                  <h3 className="font-semibold text-xl mb-3">{title}</h3>
                  <p className="text-muted-foreground text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Voices of <span className="text-primary">Our Clients</span></h2>
          <div className="grid gap-10 md:grid-cols-3">
            {testimonials.map(({ name, role, message }) => (
              <div key={name} className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition">
                <h3 className="font-semibold text-lg mb-1">{name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{role}</p>
                <p className="text-gray-700 text-sm">{message}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">Get in <span className="text-primary">Touch</span></h2>
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto grid gap-6">
            <input 
              type="text" 
              name="name" 
              placeholder="Your name" 
              value={formData.name} 
              onChange={handleChange} 
              className="border border-gray-300 rounded-lg p-4 w-full focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Your email" 
              value={formData.email} 
              onChange={handleChange} 
              className="border border-gray-300 rounded-lg p-4 w-full focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <textarea 
              name="message" 
              placeholder="Tell us about your car and what services you need..." 
              value={formData.message} 
              onChange={handleChange} 
              rows={5} 
              className="border border-gray-300 rounded-lg p-4 w-full focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <button type="submit" className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition">Send Message</button>
          </form>
          <div className="mt-12 space-y-4 text-left max-w-2xl mx-auto">
            <p><strong>Phone:</strong> +44 7375 759686</p>
            <p><strong>Email:</strong> srvcarandautodetailing@gmail.com</p>
            <p><strong>Address:</strong> 123 Demo Street, London, UK</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-xl font-semibold mb-4">SRV Detailing</h3>
          <p className="mb-4">Professional valeting & detailing specialist with 22 years of experience. Accredited in ceramic coating with fully equipped mobile and unit-based services.</p>
          <p className="mb-2">Quick Links: Home | Dashboard | Listings | Contact</p>
          <p className="mb-2">Contact: +44 7375 759686 | srvcarandautodetailing@gmail.com | 123 Demo Street, London, UK</p>
          <p className="text-sm mt-6">&copy; 2025 SRV Detailing. All rights reserved. <br/> Privacy Policy | Terms of Service</p>
        </div>
      </footer>
    </div>
  );
}

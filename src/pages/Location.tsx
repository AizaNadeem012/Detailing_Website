import React from "react";
import { motion, Variants } from "framer-motion";
import {
  MapPin,
  Clock,
  Phone,
  Aperture,
  LocateFixed,
  AreaChart,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

/* =======================
   FRAMER MOTION VARIANTS
======================= */
const itemAnim: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

/* =======================
   LOCATION DATA (EXPANDED)
======================= */
const stockportAreas = [
  {
    name: "Marple",
    description:
      "Serving residents around the picturesque Marple locks and canal-side communities.",
  },
  {
    name: "Hazel Grove",
    description:
      "Convenient car detailing services for busy Hazel Grove commuters and families.",
  },
  {
    name: "Cheadle Hulme",
    description:
      "Premium ceramic coating and paint correction for Cheadle Hulme vehicles.",
  },
  {
    name: "Bramhall",
    description:
      "Specialised detailing treatments for luxury and performance cars in Bramhall.",
  },
  {
    name: "Reddish",
    description:
      "Professional valeting and protection services near Reddish Vale Country Park.",
  },
  {
    name: "Offerton",
    description:
      "Trusted paint correction and ceramic coating for Offerton drivers.",
  },
  {
    name: "Heaton Moor",
    description:
      "High-end car care services for premium vehicles in Heaton Moor.",
  },
  {
    name: "Heaton Chapel",
    description:
      "Reliable and professional detailing services across Heaton Chapel.",
  },
  {
    name: "Heaton Mersey",
    description:
      "Paint protection and detailing solutions for cars in Heaton Mersey.",
  },
  {
    name: "Davenport",
    description:
      "Local ceramic coating and valeting services in Davenport.",
  },
  {
    name: "Bredbury",
    description:
      "Affordable and premium detailing services for Bredbury residents.",
  },
  {
    name: "Romiley",
    description:
      "Mobile-friendly detailing options for Romiley and nearby villages.",
  },
  {
    name: "Woodley",
    description:
      "Complete interior and exterior car detailing services in Woodley.",
  },
  {
    name: "Edgeley",
    description:
      "Fast and convenient detailing services close to Stockport town centre.",
  },
  {
    name: "Stockport Town Centre",
    description:
      "Ideal detailing solutions for city commuters and local businesses.",
  },
];

/* =======================
   HERO
======================= */
const LocationHero = () => (
  <motion.div
    initial={{ opacity: 0, y: -40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-center mb-24 pt-20 pb-24 rounded-3xl bg-black border border-gray-800"
  >
    <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
      Stockport’s <span className="text-primary">Car Detailing</span> Studio
    </h1>
    <p className="text-gray-300 max-w-3xl mx-auto mb-10 text-lg">
      Ceramic Coating, Paint Correction & PPF services for Stockport & Greater Manchester.
    </p>
    <a
      href="#contact"
      className="px-12 py-4 bg-primary text-black rounded-full text-xl font-bold hover:bg-primary/90 transition"
    >
      Get a Quote
    </a>
  </motion.div>
);

/* =======================
   USP
======================= */
const LocalUSPSection = () => (
  <section className="py-20 mb-20 bg-black rounded-3xl px-4">
    <h2 className="text-5xl font-extrabold text-center text-white mb-16">
      Why Stockport Drivers <span className="text-primary">Choose Us</span>
    </h2>

    <div className="grid lg:grid-cols-4 gap-10">
      {[
        { icon: <MapPin />, title: "Easy M60 Access" },
        { icon: <Clock />, title: "Flexible Appointments" },
        { icon: <AreaChart />, title: "Trusted Locally" },
        { icon: <Aperture />, title: "Controlled Studio" },
      ].map((item, i) => (
        <motion.div
          key={i}
          variants={itemAnim}
          className="bg-gray-800 p-8 rounded-2xl text-center border border-gray-700"
        >
          <div className="flex justify-center mb-4">
            {React.cloneElement(item.icon, {
              className: "w-10 h-10 text-primary",
            })}
          </div>
          <h3 className="text-xl font-bold text-white">{item.title}</h3>
        </motion.div>
      ))}
    </div>
  </section>
);

/* =======================
   SERVICE AREAS
======================= */
const ServiceAreasSection = () => (
  <section className="py-20 mb-20 bg-black rounded-3xl px-4 border border-gray-800">
    <h2 className="text-5xl font-extrabold text-center text-white mb-16">
      Stockport <span className="text-primary">Service Areas</span>
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {stockportAreas.map((area, i) => (
        <motion.div
          key={i}
          variants={itemAnim}
          className="bg-gray-800 p-6 rounded-xl border-l-4 border-primary"
        >
          <div className="flex items-center mb-2">
            <LocateFixed className="w-6 h-6 text-primary mr-3" />
            <h3 className="text-xl font-bold text-white">{area.name}</h3>
          </div>
          <p className="text-gray-300">{area.description}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

/* =======================
   MAP & CONTACT
======================= */
const MapAndContact = () => (
  <section
    id="contact"
    className="py-20 mb-20 bg-black rounded-3xl px-4 border border-gray-800"
  >
    <h2 className="text-5xl font-extrabold text-center text-white mb-16">
      Find Our <span className="text-primary">Stockport Studio</span>
    </h2>

    <div className="grid lg:grid-cols-2 gap-12">
      {/* MAP */}
      <div className="relative rounded-3xl overflow-hidden border border-gray-700 shadow-2xl">
        <iframe
          title="Stockport Car Detailing Location"
          src="https://www.google.com/maps?q=Precision+Works+Manchester+Road+Stockport+SK4+1AA&output=embed"
          className="w-full h-[420px]"
          loading="lazy"
        />
        <a
          href="https://www.google.com/maps?q=Precision+Works+Manchester+Road+Stockport+SK4+1AA"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 right-4 bg-primary text-black px-5 py-2 rounded-full font-semibold hover:bg-primary/90"
        >
          Open in Google Maps
        </a>
      </div>

      {/* CONTACT */}
      <div className="bg-gray-800 p-10 rounded-3xl border border-primary/30 space-y-10">
        <div className="flex items-start">
          <MapPin className="w-8 h-8 text-primary mr-4 mt-1" />
          <div>
            <h3 className="text-2xl font-bold text-white">Address</h3>
            <p className="text-gray-300">
              Unit 5, Precision Works, Manchester Road, Stockport, SK4 1AA
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <Phone className="w-8 h-8 text-primary mr-4 mt-1" />
          <div>
            <h3 className="text-2xl font-bold text-white">Contact</h3>
            <p className="text-gray-300">
              Phone:{" "}
              <a
                href="tel:+447375759686"
                className="text-primary font-semibold"
              >
                +44 7375 759686
              </a>
            </p>
            <p className="text-gray-300">
              Email:{" "}
              <a
                href="mailto:srvcarandautodetailing@gmail.com"
                className="text-primary font-semibold"
              >
                srvcarandautodetailing@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* =======================
   PAGE
======================= */
const StockportLocationPage: React.FC = () => (
  <div className="min-h-screen bg-white text-black">
    <Navbar />
    <main className="pt-24 pb-16 container mx-auto px-4 max-w-7xl">
      <LocationHero />
      <LocalUSPSection />
      <ServiceAreasSection />
      <MapAndContact />
    </main>
    <Footer />
  </div>
);

export default StockportLocationPage;

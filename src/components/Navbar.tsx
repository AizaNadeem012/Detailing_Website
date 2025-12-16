import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Instagram, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";

/* =======================
   NAV LINKS
======================= */
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/dashboard", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/location", label: "Locations" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-16 h-16 rounded-lg overflow-hidden">
            <img
              src={logo}
              alt="SRV Detailing"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-heading font-bold text-2xl md:text-3xl text-foreground hidden sm:block">
            Detailing
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium uppercase tracking-wide transition-colors hover:text-primary ${
                location.pathname === link.href
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* DESKTOP CTA */}
        <div className="hidden md:flex items-center gap-5">
          {/* GOOGLE REVIEWS */}
          <a
            href="https://share.google/PfnRYKg7cZGw1Ozcq"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition"
          >
            {/* Google Logo */}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
              alt="Google Reviews"
              className="w-4 h-4"
            />

            {/* 5 Stars */}
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            <span className="hidden lg:block">5.0 Reviews</span>
          </a>

          {/* INSTAGRAM */}
          <a
            href="https://instagram.com/srv.detailing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition"
          >
            <Instagram className="w-5 h-5" />
          </a>

          {/* PHONE */}
          <a
            href="tel:+447375759686"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
          >
            <Phone className="w-4 h-4" />
            <span>+44 7375 759686</span>
          </a>

          {/* CTA BUTTON */}
          <Button variant="hero" size="sm" asChild>
            <Link to="/contact">Book Now</Link>
          </Button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium uppercase tracking-wide transition-colors hover:text-primary ${
                    location.pathname === link.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* MOBILE GOOGLE REVIEWS */}
              <a
                href="https://share.google/PfnRYKg7cZGw1Ozcq"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 pt-4 border-t border-border text-sm text-muted-foreground"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                  alt="Google Reviews"
                  className="w-4 h-4"
                />
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span>5.0 Reviews</span>
              </a>

              {/* MOBILE SOCIAL */}
              <div className="flex items-center gap-4 pt-2">
                <a
                  href="https://instagram.com/srv.detailing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Instagram className="w-5 h-5" />
                </a>

                <a
                  href="tel:+447375759686"
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <Phone className="w-4 h-4" />
                  <span>+44 7375 759686</span>
                </a>
              </div>

              <Button variant="hero" asChild className="mt-2">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Book Now
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

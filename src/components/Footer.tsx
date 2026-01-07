import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-lg">SRV</span>
              </div>
              <span className="font-heading font-bold text-xl">Detailing</span>
            </div>
            <p className="text-background/70 mb-6 max-w-sm">
              Professional valeting & detailing specialist with 22 years of experience. 
              Accredited in ceramic coating with fully equipped mobile and unit-based services.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/srv.detailing" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-background/70 hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-background/70 hover:text-primary transition-colors">Dashboard</Link>
              </li>
              <li>
                <Link to="/listings" className="text-background/70 hover:text-primary transition-colors">Listings</Link>
              </li>
              <li>
                <Link to="/contact" className="text-background/70 hover:text-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+447375759686" className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors">
                  <Phone className="w-4 h-4" />
                  +44 7375 759686
                </a>
              </li>
              <li>
                <a href="mailto:srv_detailing@icloud.com" className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors">
                  <Mail className="w-4 h-4" />
                 srv_detailing@icloud.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-background/70">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                123 Demo Street, London, UK
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">© 2025 SRV Detailing. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="text-background/50 text-sm hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="#" className="text-background/50 text-sm hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

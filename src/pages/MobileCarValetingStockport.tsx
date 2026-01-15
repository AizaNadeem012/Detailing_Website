import React from 'react';

// CSS Styles as JavaScript objects
const styles = {
  // Base styles
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  body: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
    lineHeight: 1.7,
    color: '#2c3e50',
    background: '#f8f9fa',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  
  // Header styles
  siteHeader: {
    background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
    color: 'white',
    padding: '20px 0',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  headerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '20px',
  },
  logo: {
    fontSize: '28px',
    fontWeight: 700,
    letterSpacing: '-0.5px',
  },
  headerContact: {
    display: 'flex',
    gap: '25px',
    flexWrap: 'wrap',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '16px',
  },
  phoneLink: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 600,
    transition: 'opacity 0.3s',
  },
  
  // Hero section
  hero: {
    background: 'linear-gradient(rgba(30, 60, 114, 0.92), rgba(42, 82, 152, 0.92)), url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1200 600\'><rect fill=\'%23334155\' width=\'1200\' height=\'600\'/></svg>")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    padding: '80px 0',
    textAlign: 'center',
  },
  h1: {
    fontSize: '48px',
    marginBottom: '20px',
    lineHeight: 1.2,
    fontWeight: 800,
  },
  heroSubtitle: {
    fontSize: '22px',
    marginBottom: '15px',
    fontWeight: 300,
  },
  heroDescription: {
    fontSize: '18px',
    marginBottom: '35px',
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto',
    opacity: 0.95,
  },
  heroCta: {
    display: 'flex',
    gap: '15px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  ctaPrimary: {
    display: 'inline-block',
    background: '#ff6b35',
    color: 'white',
    padding: '18px 40px',
    textDecoration: 'none',
    borderRadius: '8px',
    fontSize: '18px',
    fontWeight: 600,
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(255, 107, 53, 0.3)',
  },
  ctaSecondary: {
    display: 'inline-block',
    background: 'transparent',
    color: 'white',
    padding: '18px 40px',
    textDecoration: 'none',
    borderRadius: '8px',
    fontSize: '18px',
    fontWeight: 600,
    border: '2px solid white',
    transition: 'all 0.3s ease',
  },
  
  // Trust bar
  trustBar: {
    background: 'white',
    padding: '30px 0',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  },
  trustItems: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: '30px',
    textAlign: 'center',
  },
  trustItem: {
    flex: 1,
    minWidth: '200px',
  },
  trustIcon: {
    fontSize: '36px',
    marginBottom: '10px',
    color: '#ff6b35',
  },
  trustText: {
    fontWeight: 600,
    color: '#1e3c72',
    fontSize: '15px',
  },
  
  // Section styles
  section: {
    padding: '60px 0',
  },
  bgWhite: {
    background: 'white',
  },
  bgLight: {
    background: '#f8f9fa',
  },
  h2: {
    fontSize: '38px',
    marginBottom: '25px',
    color: '#1e3c72',
    fontWeight: 700,
  },
  h3: {
    fontSize: '26px',
    marginBottom: '18px',
    color: '#2a5298',
    fontWeight: 600,
  },
  sectionIntro: {
    fontSize: '18px',
    marginBottom: '20px',
    maxWidth: '900px',
    color: '#555',
  },
  
  // Services grid
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '30px',
    marginTop: '40px',
  },
  serviceCard: {
    background: 'white',
    padding: '35px',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
    transition: 'all 0.3s ease',
  },
  serviceIcon: {
    fontSize: '48px',
    marginBottom: '20px',
    color: '#ff6b35',
  },
  servicePrice: {
    color: '#ff6b35',
    fontWeight: 700,
    fontSize: '24px',
    margin: '15px 0',
  },
  serviceDescription: {
    color: '#555',
    marginBottom: '20px',
    lineHeight: 1.6,
  },
  serviceFeatures: {
    listStyle: 'none',
    marginTop: '20px',
  },
  serviceFeatureItem: {
    padding: '8px 0',
    paddingLeft: '28px',
    position: 'relative',
    color: '#555',
  },
  serviceFeatureCheck: {
    position: 'absolute',
    left: 0,
    color: '#4caf50',
    fontWeight: 'bold',
    fontSize: '18px',
  },
  
  // Benefits grid
  benefitsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '25px',
    marginTop: '40px',
  },
  benefitItem: {
    background: 'white',
    padding: '25px',
    borderLeft: '4px solid #ff6b35',
    borderRadius: '8px',
    boxShadow: '0 3px 10px rgba(0,0,0,0.06)',
  },
  benefitItemH3: {
    fontSize: '20px',
    marginBottom: '12px',
    color: '#1e3c72',
  },
  benefitItemP: {
    color: '#555',
    lineHeight: 1.7,
  },
  
  // Process steps
  processSteps: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
    marginTop: '40px',
  },
  step: {
    textAlign: 'center',
    padding: '30px',
    background: 'white',
    borderRadius: '12px',
    boxShadow: '0 3px 12px rgba(0,0,0,0.06)',
  },
  stepNumber: {
    width: '60px',
    height: '60px',
    background: 'linear-gradient(135deg, #ff6b35, #ff8a5b)',
    color: 'white',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '28px',
    fontWeight: 700,
    margin: '0 auto 20px',
  },
  stepH3: {
    fontSize: '20px',
    marginBottom: '15px',
  },
  stepP: {
    color: '#555',
    lineHeight: 1.6,
  },
  
  // Comparison table
  tableWrapper: {
    overflowX: 'auto',
    margin: '40px 0',
  },
  comparisonTable: {
    width: '100%',
    background: 'white',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
    borderCollapse: 'collapse',
  },
  comparisonTh: {
    background: 'linear-gradient(135deg, #1e3c72, #2a5298)',
    color: 'white',
    padding: '20px',
    textAlign: 'left',
    fontWeight: 600,
  },
  comparisonTd: {
    padding: '18px 20px',
    borderBottom: '1px solid #e9ecef',
  },
  check: {
    color: '#4caf50',
    fontWeight: 'bold',
    fontSize: '20px',
  },
  cross: {
    color: '#f44336',
    fontWeight: 'bold',
    fontSize: '20px',
  },
  
  // Service areas
  locationsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '15px',
    marginTop: '30px',
  },
  locationItem: {
    background: 'white',
    padding: '15px',
    borderRadius: '8px',
    textAlign: 'center',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    transition: 'all 0.3s ease',
    fontWeight: 500,
  },
  areasNote: {
    marginTop: '30px',
    textAlign: 'center',
    fontSize: '16px',
    color: '#555',
  },
  
  // Testimonials
  testimonialGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
    marginTop: '40px',
  },
  testimonial: {
    background: 'white',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
    position: 'relative',
  },
  testimonialBefore: {
    content: '"',
    fontSize: '60px',
    color: '#ff6b35',
    opacity: 0.2,
    position: 'absolute',
    top: '10px',
    left: '20px',
    fontFamily: 'Georgia, serif',
    lineHeight: 1,
  },
  stars: {
    color: '#ffc107',
    fontSize: '18px',
    marginBottom: '15px',
  },
  testimonialText: {
    fontStyle: 'italic',
    marginBottom: '20px',
    color: '#555',
    position: 'relative',
    zIndex: 1,
    lineHeight: 1.7,
  },
  testimonialAuthor: {
    fontWeight: 600,
    color: '#1e3c72',
    fontSize: '15px',
  },
  googleReviewCta: {
    textAlign: 'center',
    marginTop: '40px',
    fontSize: '18px',
  },
  
  // FAQ
  faqContainer: {
    maxWidth: '900px',
    margin: '40px auto',
  },
  faqItem: {
    background: 'white',
    marginBottom: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
    overflow: 'hidden',
  },
  faqQuestion: {
    padding: '25px',
    fontWeight: 600,
    color: '#1e3c72',
    fontSize: '18px',
    margin: 0,
  },
  faqAnswer: {
    padding: '0 25px 25px',
    color: '#555',
    lineHeight: 1.8,
  },
  faqAnswerP: {
    margin: 0,
  },
  
  // CTA section
  ctaSection: {
    background: 'linear-gradient(135deg, #1e3c72, #2a5298)',
    color: 'white',
    padding: '70px 0',
    textAlign: 'center',
  },
  ctaSectionH2: {
    color: 'white',
    marginBottom: '20px',
  },
  ctaSectionP: {
    fontSize: '20px',
    marginBottom: '35px',
    opacity: 0.95,
    maxWidth: '700px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  ctaButtons: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  
  // Footer
  footer: {
    background: '#1a2332',
    color: 'white',
    padding: '50px 0 20px',
  },
  footerGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '40px',
    marginBottom: '40px',
  },
  footerSection: {
    marginBottom: '20px',
  },
  footerSectionH4: {
    color: 'white',
    marginBottom: '20px',
    fontSize: '18px',
  },
  footerSectionUl: {
    listStyle: 'none',
  },
  footerSectionLi: {
    marginBottom: '12px',
  },
  footerSectionA: {
    color: '#b8c1d1',
    textDecoration: 'none',
    transition: 'color 0.3s',
  },
  footerSectionP: {
    color: '#b8c1d1',
    lineHeight: 1.7,
  },
  footerBottom: {
    borderTop: '1px solid #2d3748',
    paddingTop: '30px',
    textAlign: 'center',
    color: '#b8c1d1',
    fontSize: '14px',
  },
  
  // Inline links
  inlineLink: {
    color: '#ff6b35',
    fontWeight: 600,
    textDecoration: 'none',
    transition: 'color 0.3s',
  },
  
  // Responsive
  '@media (max-width: 768px)': {
    h1: {
      fontSize: '36px',
    },
    h2: {
      fontSize: '30px',
    },
    h3: {
      fontSize: '22px',
    },
    hero: {
      padding: '50px 0',
    },
    heroSubtitle: {
      fontSize: '18px',
    },
    heroDescription: {
      fontSize: '16px',
    },
    headerContent: {
      flexDirection: 'column',
      textAlign: 'center',
    },
    heroCta: {
      flexDirection: 'column',
    },
    ctaPrimary: {
      width: '100%',
      maxWidth: '300px',
    },
    ctaSecondary: {
      width: '100%',
      maxWidth: '300px',
    },
    servicesGrid: {
      gridTemplateColumns: '1fr',
    },
    benefitsGrid: {
      gridTemplateColumns: '1fr',
    },
    processSteps: {
      gridTemplateColumns: '1fr',
    },
    testimonialGrid: {
      gridTemplateColumns: '1fr',
    },
    comparisonTable: {
      fontSize: '14px',
    },
    comparisonTh: {
      padding: '12px 10px',
    },
    comparisonTd: {
      padding: '12px 10px',
    },
    section: {
      padding: '40px 0',
    },
  },
  
  '@media (max-width: 480px)': {
    h1: {
      fontSize: '28px',
    },
    h2: {
      fontSize: '24px',
    },
    ctaPrimary: {
      padding: '15px 30px',
      fontSize: '16px',
    },
    ctaSecondary: {
      padding: '15px 30px',
      fontSize: '16px',
    },
    serviceCard: {
      padding: '20px',
    },
    benefitItem: {
      padding: '20px',
    },
    step: {
      padding: '20px',
    },
    testimonial: {
      padding: '20px',
    },
  },
};

const MobileCarValetingStockport = () => {
  return (
    <div style={styles.body}>
      {/* Header */}
      <header style={styles.siteHeader}>
        <div style={styles.container}>
          <div style={styles.headerContent}>
            <div style={styles.logo}>SRV Detailing</div>
            <div style={styles.headerContact}>
              <div style={styles.contactItem}>
                <span className="icon">Phone:</span>
                <a href="tel:+447375759686" style={styles.phoneLink}>
                  07375 759686
                </a>
              </div>
              <div style={styles.contactItem}>
                <span className="icon">Location:</span>
                <span>Stockport & Greater Manchester</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.container}>
          <h1 style={styles.h1}>Mobile Car Valeting Stockport – Professional Detailing at Your Doorstep</h1>
          <p style={styles.heroSubtitle}>
            Expert Interior & Exterior Valeting Services Across Stockport and Greater Manchester
          </p>
          <p style={styles.heroDescription}>
            Save time with our fully-equipped mobile car valeting service. We bring professional 
            car detailing, eco-friendly cleaning products, and expert care directly to your home, 
            workplace, or preferred location throughout Stockport.
          </p>
          <div style={styles.heroCta}>
            <a href="tel:+447375759686" style={styles.ctaPrimary}>
              Call Now: 07375 759686
            </a>
            <a 
              href="https://share.google/C5GE3wzMfDb2Ninmj" 
              style={styles.ctaSecondary}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Our Reviews
            </a>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div style={styles.trustBar}>
        <div style={styles.container}>
          <div style={styles.trustItems}>
            <div style={styles.trustItem}>
              <div style={styles.trustIcon} aria-label="5 star rated">⭐</div>
              <div style={styles.trustText}>5-Star Rated Service</div>
            </div>
            <div style={styles.trustItem}>
              <div style={styles.trustIcon} aria-label="Mobile service">🚗</div>
              <div style={styles.trustText}>Fully Mobile Service</div>
            </div>
            <div style={styles.trustItem}>
              <div style={styles.trustIcon} aria-label="Eco friendly">🌱</div>
              <div style={styles.trustText}>Eco-Friendly Products</div>
            </div>
            <div style={styles.trustItem}>
              <div style={styles.trustIcon} aria-label="Fast service">⚡</div>
              <div style={styles.trustText}>Same-Day Availability</div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section style={{...styles.section, ...styles.bgWhite}}>
        <div style={styles.container}>
          <h2 style={styles.h2}>Our Mobile Car Valeting Services in Stockport</h2>
          <p style={styles.sectionIntro}>
            Whether you need a quick mini valet between meetings or a comprehensive full valet 
            for your family car, SRV Detailing delivers professional mobile car cleaning services 
            tailored to your schedule and location across Stockport and the surrounding areas.
          </p>

          <div style={styles.servicesGrid}>
            {/* Full Valet */}
            <article style={styles.serviceCard}>
              <div style={styles.serviceIcon} aria-hidden="true">✨</div>
              <h3 style={styles.h3}>Full Valet Service</h3>
              <p style={styles.servicePrice}>From £75</p>
              <p style={styles.serviceDescription}>
                Our most comprehensive mobile valeting package combines deep interior cleaning 
                with thorough exterior detailing for a showroom finish.
              </p>
              <ul style={styles.serviceFeatures}>
                <li style={styles.serviceFeatureItem}>
                  <span style={styles.serviceFeatureCheck}>✓</span> Complete interior vacuum and steam clean
                </li>
                <li style={styles.serviceFeatureItem}>
                  <span style={styles.serviceFeatureCheck}>✓</span> Leather conditioning and fabric protection
                </li>
                <li style={styles.serviceFeatureItem}>
                  <span style={styles.serviceFeatureCheck}>✓</span> Full exterior hand wash and wax
                </li>
                <li style={styles.serviceFeatureItem}>
                  <span style={styles.serviceFeatureCheck}>✓</span> Wheel cleaning and tyre dressing
                </li>
                <li style={styles.serviceFeatureItem}>
                  <span style={styles.serviceFeatureCheck}>✓</span> Glass cleaning inside and out
                </li>
                <li style={styles.serviceFeatureItem}>
                  <span style={styles.serviceFeatureCheck}>✓</span> Dashboard and trim restoration
                </li>
                <li style={styles.serviceFeatureItem}>
                  <span style={styles.serviceFeatureCheck}>✓</span> Door shuts and boot detailed
                </li>
              </ul>
            </article>

            {/* Interior Valeting */}
            <article style={styles.serviceCard}>
              <div style={styles.serviceIcon} aria-hidden="true">🏠</div>
              <h3 style={styles.h3}>Interior Valeting</h3>
              <p style={styles.servicePrice}>From £45</p>
              <p style={styles.serviceDescription}>
                Deep cleaning of your vehicle's interior with professional equipment and 
                eco-friendly products, perfect for families and professionals.
              </p>
              <ul style={styles.serviceFeatures}>
                <li style={styles.serviceFeatureItem}>
                  <span style={styles.serviceFeatureCheck}>✓</span> Thorough vacuum of seats, carpets, and boot
                </li>
                <li style={styles.serviceFeatureItem}>
                  <span style={styles.serviceFeatureCheck}>✓</span> Steam cleaning of upholstery and mats
                </li>
                <li style={styles.serviceFeatureItem}>
                  <span style={styles.serviceFeatureCheck}>✓</span> Dashboard and console deep clean
                </li>
                <li style={styles.serviceFeatureItem}>
                  <span style={styles.serviceFeatureCheck}>✓</span> Door card and trim detailing
                </li>
                <li style={styles.serviceFeatureItem}>
                  <span style={styles.serviceFeatureCheck}>✓</span> Pet hair removal (if required)
                </li>
                <li style={styles.serviceFeatureItem}>
                  <span style={styles.serviceFeatureCheck}>✓</span> Air vent cleaning and deodorising
                </li>
                <li style={styles.serviceFeatureItem}>
                  <span style={styles.serviceFeatureCheck}>✓</span> Stain treatment and odour elimination
                </li>
              </ul>
            </article>

            {/* Exterior Valeting */}
            <article style={styles.serviceCard}>
              <div style={styles.serviceIcon} aria-hidden="true">💧</div>
              <h3 style={styles.h3}>Exterior Valeting</h3>
              <p style={styles.servicePrice}>From £35</p>
              <p style={styles.serviceDescription}>
                Professional hand washing and exterior detailing using pH-neutral shampoos 
                and premium waxes for lasting protection.
              </p>
              <ul style={styles.serviceFeatures}>
                <li style={styles.serviceFeatureItem}>
                  <span style={styles.serviceFeatureCheck}>✓</span> Pre-wash and snow foam application
                </li>
                <li style={styles.serviceFeatureItem}>
                  <span style={styles.serviceFeatureCheck}>✓</span> Hand wash with two-bucket method
                </li>
                <li style={styles.serviceFeatureItem}>
                  <span style={styles.serviceFeatureCheck}>✓</span> Wheel and arch deep cleaning
                </li>
                <li style={styles.serviceFeatureItem}>
                  <span style={styles.serviceFeatureCheck}>✓</span> Tyre shine and dressing
                </li>
                <li style={styles.serviceFeatureItem}>
                  <span style={styles.serviceFeatureCheck}>✓</span> Paintwork wax or sealant
                </li>
                <li style={styles.serviceFeatureItem}>
                  <span style={styles.serviceFeatureCheck}>✓</span> Glass and mirror polishing
                </li>
                <li style={styles.serviceFeatureItem}>
                  <span style={styles.serviceFeatureCheck}>✓</span> Trim and plastic restoration
                </li>
              </ul>
            </article>

            {/* Mini Valet */}
            <article style={styles.serviceCard}>
              <div style={styles.serviceIcon} aria-hidden="true">⚡</div>
              <h3 style={styles.h3}>Mini Valet</h3>
              <p style={styles.servicePrice}>From £30</p>
              <p style={styles.serviceDescription}>
                Quick yet effective mobile car cleaning service ideal for busy professionals, 
                commuters, and regular maintenance between full valets.
              </p>
              <ul style={styles.serviceFeatures}>
                <li style={styles.serviceFeatureItem}>
                  <span style={styles.serviceFeatureCheck}>✓</span> Interior vacuum and wipe-down
                </li>
                <li style={styles.serviceFeatureItem}>
                  <span style={styles.serviceFeatureCheck}>✓</span> Exterior hand wash
                </li>
                <li style={styles.serviceFeatureItem}>
                  <span style={styles.serviceFeatureCheck}>✓</span> Window cleaning inside and out
                </li>
                <li style={styles.serviceFeatureItem}>
                  <span style={styles.serviceFeatureCheck}>✓</span> Dashboard quick clean
                </li>
                <li style={styles.serviceFeatureItem}>
                  <span style={styles.serviceFeatureCheck}>✓</span> Wheel cleaning
                </li>
                <li style={styles.serviceFeatureItem}>
                  <span style={styles.serviceFeatureCheck}>✓</span> Perfect for weekly or fortnightly maintenance
                </li>
              </ul>
            </article>

            {/* Car Detailing */}
            <article style={styles.serviceCard}>
              <div style={styles.serviceIcon} aria-hidden="true">🎨</div>
              <h3 style={styles.h3}>Car Detailing Services</h3>
              <p style={styles.servicePrice}>From £120</p>
              <p style={styles.serviceDescription}>
                Advanced mobile car detailing including paint correction, ceramic coating 
                application, and headlight restoration for enthusiasts seeking perfection.
              </p>
              <ul style={styles.serviceFeatures}>
                <li style={styles.serviceFeatureItem}>
                  <span style={styles.serviceFeatureCheck}>✓</span> Machine polishing and paint correction
                </li>
                <li style={styles.serviceFeatureItem}>
                  <span style={styles.serviceFeatureCheck}>✓</span> Swirl mark and scratch removal
                </li>
                <li style={styles.serviceFeatureItem}>
                  <span style={styles.serviceFeatureCheck}>✓</span> Ceramic coating protection
                </li>
                <li style={styles.serviceFeatureItem}>
                  <span style={styles.serviceFeatureCheck}>✓</span> Headlight restoration and protection
                </li>
                <li style={styles.serviceFeatureItem}>
                  <span style={styles.serviceFeatureCheck}>✓</span> Engine bay detailing
                </li>
                <li style={styles.serviceFeatureItem}>
                  <span style={styles.serviceFeatureCheck}>✓</span> Chrome and metal polishing
                </li>
                <li style={styles.serviceFeatureItem}>
                  <span style={styles.serviceFeatureCheck}>✓</span> Long-lasting showroom results
                </li>
              </ul>
            </article>

            {/* Eco-Friendly */}
            <article style={styles.serviceCard}>
              <div style={styles.serviceIcon} aria-hidden="true">🌿</div>
              <h3 style={styles.h3}>Eco-Friendly Valeting</h3>
              <p style={styles.servicePrice}>Standard Pricing</p>
              <p style={styles.serviceDescription}>
                All our mobile valeting services use biodegradable, environmentally responsible 
                cleaning products without compromising on results.
              </p>
              <ul style={styles.serviceFeatures}>
                <li style={styles.serviceFeatureItem}>
                  <span style={styles.serviceFeatureCheck}>✓</span> Waterless and low-water wash options
                </li>
                <li style={styles.serviceFeatureItem}>
                  <span style={styles.serviceFeatureCheck}>✓</span> Biodegradable cleaning solutions
                </li>
                <li style={styles.serviceFeatureItem}>
                  <span style={styles.serviceFeatureCheck}>✓</span> pH-neutral shampoos safe for all surfaces
                </li>
                <li style={styles.serviceFeatureItem}>
                  <span style={styles.serviceFeatureCheck}>✓</span> Eco-friendly waxes and sealants
                </li>
                <li style={styles.serviceFeatureItem}>
                  <span style={styles.serviceFeatureCheck}>✓</span> Responsible waste water management
                </li>
                <li style={styles.serviceFeatureItem}>
                  <span style={styles.serviceFeatureCheck}>✓</span> Safe for the environment and your vehicle
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section style={{...styles.section, ...styles.bgLight}}>
        <div style={styles.container}>
          <h2 style={styles.h2}>Why Choose Mobile Car Valeting in Stockport?</h2>
          <p style={styles.sectionIntro}>
            Mobile valeting brings professional car cleaning directly to you, saving time and 
            offering convenience that traditional fixed car washes simply cannot match.
          </p>

          <div style={styles.benefitsGrid}>
            <div style={styles.benefitItem}>
              <h3 style={styles.benefitItemH3}>Ultimate Convenience</h3>
              <p style={styles.benefitItemP}>
                No more driving to car washes or waiting in queues. We come to your home, workplace, 
                or any location in Stockport at a time that suits your schedule—early morning, lunch 
                break, or evening appointments available.
              </p>
            </div>

            <div style={styles.benefitItem}>
              <h3 style={styles.benefitItemH3}>Perfect for Professionals</h3>
              <p style={styles.benefitItemP}>
                Have your car valeted whilst you work. Ideal for busy professionals, sales teams, 
                and executives who need their vehicle looking pristine without disrupting their 
                working day.
              </p>
            </div>

            <div style={styles.benefitItem}>
              <h3 style={styles.benefitItemH3}>Family-Friendly Service</h3>
              <p style={styles.benefitItemP}>
                Perfect for families juggling school runs, shopping, and activities. We handle 
                everything from sticky spills to muddy footprints, removing pet hair and restoring 
                your car's interior to pristine condition.
              </p>
            </div>

            <div style={styles.benefitItem}>
              <h3 style={styles.benefitItemH3}>Workplace Valeting</h3>
              <p style={styles.benefitItemP}>
                We serve businesses across Stockport, providing regular mobile valeting for company 
                fleets, dealerships, and employee car care programmes at offices and business parks.
              </p>
            </div>

            <div style={styles.benefitItem}>
              <h3 style={styles.benefitItemH3}>Home Service Excellence</h3>
              <p style={styles.benefitItemP}>
                Enjoy professional car cleaning on your driveway. Watch your vehicle transform whilst 
                you relax at home, enjoy your weekend, or attend to household tasks.
              </p>
            </div>

            <div style={styles.benefitItem}>
              <h3 style={styles.benefitItemH3}>Professional Equipment</h3>
              <p style={styles.benefitItemP}>
                We arrive fully equipped with professional-grade valeting tools, steam cleaners, 
                polishers, and eco-friendly products—everything needed for a thorough, high-quality clean.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section style={{...styles.section, ...styles.bgWhite}}>
        <div style={styles.container}>
          <h2 style={styles.h2}>How Our Mobile Valeting Service Works</h2>
          <p style={styles.sectionIntro}>
            Booking professional car valeting in Stockport is straightforward. Here's what to 
            expect from our mobile service:
          </p>

          <div style={styles.processSteps}>
            <div style={styles.step}>
              <div style={styles.stepNumber}>1</div>
              <h3 style={styles.stepH3}>Contact Us</h3>
              <p style={styles.stepP}>
                Call <a href="tel:+447375759686" style={styles.inlineLink}>07375 759686</a> or 
                visit our <a href="https://srvdetailing.co.uk/" style={styles.inlineLink}>website</a>. 
                Tell us what service you need and your preferred location in Stockport.
              </p>
            </div>

            <div style={styles.step}>
              <div style={styles.stepNumber}>2</div>
              <h3 style={styles.stepH3}>Choose Your Package</h3>
              <p style={styles.stepP}>
                Select from our mini valet, full valet, interior or exterior cleaning, or specialist 
                detailing services based on your vehicle's needs and your budget.
              </p>
            </div>

            <div style={styles.step}>
              <div style={styles.stepNumber}>3</div>
              <h3 style={styles.stepH3}>Schedule Your Appointment</h3>
              <p style={styles.stepP}>
                We offer flexible booking slots including early mornings, evenings, and weekends. 
                Same-day service often available for urgent requirements.
              </p>
            </div>

            <div style={styles.step}>
              <div style={styles.stepNumber}>4</div>
              <h3 style={styles.stepH3}>We Come to You</h3>
              <p style={styles.stepP}>
                Our mobile valeting team arrives at your chosen location—home, office, or elsewhere 
                in Stockport—fully equipped with water, power, and professional cleaning products.
              </p>
            </div>

            <div style={styles.step}>
              <div style={styles.stepNumber}>5</div>
              <h3 style={styles.stepH3}>Professional Valeting</h3>
              <p style={styles.stepP}>
                We perform a thorough, meticulous clean using proven techniques and premium products. 
                Service times range from 45 minutes for a mini valet to 3+ hours for full detailing.
              </p>
            </div>

            <div style={styles.step}>
              <div style={styles.stepNumber}>6</div>
              <h3 style={styles.stepH3}>Enjoy Your Clean Car</h3>
              <p style={styles.stepP}>
                Your vehicle is returned to you looking refreshed, protected, and showroom-ready. 
                We provide aftercare advice to help maintain the results between services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section style={{...styles.section, ...styles.bgLight}}>
        <div style={styles.container}>
          <h2 style={styles.h2}>Mobile Valeting vs Traditional Car Washes</h2>
          <p style={styles.sectionIntro}>
            Understand why mobile car valeting delivers superior results compared to automated 
            car washes and standard hand wash services.
          </p>

          <div style={styles.tableWrapper}>
            <table style={styles.comparisonTable}>
              <thead>
                <tr>
                  <th style={styles.comparisonTh}>Feature</th>
                  <th style={styles.comparisonTh}>SRV Mobile Valeting</th>
                  <th style={styles.comparisonTh}>Fixed Car Wash</th>
                  <th style={styles.comparisonTh}>Automated Wash</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={styles.comparisonTd}><strong>Comes to You</strong></td>
                  <td style={{...styles.comparisonTd, ...styles.check}}>✓</td>
                  <td style={{...styles.comparisonTd, ...styles.cross}}>✗</td>
                  <td style={{...styles.comparisonTd, ...styles.cross}}>✗</td>
                </tr>
                <tr>
                  <td style={styles.comparisonTd}><strong>Professional Equipment</strong></td>
                  <td style={{...styles.comparisonTd, ...styles.check}}>✓</td>
                  <td style={styles.comparisonTd}>Variable</td>
                  <td style={{...styles.comparisonTd, ...styles.cross}}>✗</td>
                </tr>
                <tr>
                  <td style={styles.comparisonTd}><strong>Hand Washing</strong></td>
                  <td style={{...styles.comparisonTd, ...styles.check}}>✓</td>
                  <td style={{...styles.comparisonTd, ...styles.check}}>✓</td>
                  <td style={{...styles.comparisonTd, ...styles.cross}}>✗</td>
                </tr>
                <tr>
                  <td style={styles.comparisonTd}><strong>Deep Interior Cleaning</strong></td>
                  <td style={{...styles.comparisonTd, ...styles.check}}>✓</td>
                  <td style={styles.comparisonTd}>Limited</td>
                  <td style={{...styles.comparisonTd, ...styles.cross}}>✗</td>
                </tr>
                <tr>
                  <td style={styles.comparisonTd}><strong>Paint Protection</strong></td>
                  <td style={{...styles.comparisonTd, ...styles.check}}>✓</td>
                  <td style={styles.comparisonTd}>Rarely</td>
                  <td style={{...styles.comparisonTd, ...styles.cross}}>✗</td>
                </tr>
                <tr>
                  <td style={styles.comparisonTd}><strong>Eco-Friendly Products</strong></td>
                  <td style={{...styles.comparisonTd, ...styles.check}}>✓</td>
                  <td style={styles.comparisonTd}>Variable</td>
                  <td style={{...styles.comparisonTd, ...styles.cross}}>✗</td>
                </tr>
                <tr>
                  <td style={styles.comparisonTd}><strong>Personalised Service</strong></td>
                  <td style={{...styles.comparisonTd, ...styles.check}}>✓</td>
                  <td style={styles.comparisonTd}>Limited</td>
                  <td style={{...styles.comparisonTd, ...styles.cross}}>✗</td>
                </tr>
                <tr>
                  <td style={styles.comparisonTd}><strong>No Travel Required</strong></td>
                  <td style={{...styles.comparisonTd, ...styles.check}}>✓</td>
                  <td style={{...styles.comparisonTd, ...styles.cross}}>✗</td>
                  <td style={{...styles.comparisonTd, ...styles.cross}}>✗</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section style={{...styles.section, ...styles.bgWhite}}>
        <div style={styles.container}>
          <h2 style={styles.h2}>Mobile Car Valeting Coverage Across Stockport and Greater Manchester</h2>
          <p style={styles.sectionIntro}>
            We provide professional mobile valeting services throughout Stockport and the wider 
            Greater Manchester region, bringing convenience to your doorstep wherever you are.
          </p>

          <div style={styles.locationsGrid}>
            <div style={styles.locationItem}>Stockport Town Centre</div>
            <div style={styles.locationItem}>Bramhall</div>
            <div style={styles.locationItem}>Cheadle</div>
            <div style={styles.locationItem}>Cheadle Hulme</div>
            <div style={styles.locationItem}>Hazel Grove</div>
            <div style={styles.locationItem}>Marple</div>
            <div style={styles.locationItem}>Romiley</div>
            <div style={styles.locationItem}>Bredbury</div>
            <div style={styles.locationItem}>Woodley</div>
            <div style={styles.locationItem}>Reddish</div>
            <div style={styles.locationItem}>Heaton Moor</div>
            <div style={styles.locationItem}>Heaton Chapel</div>
            <div style={styles.locationItem}>Gatley</div>
            <div style={styles.locationItem}>Stepping Hill</div>
            <div style={styles.locationItem}>Davenport</div>
            <div style={styles.locationItem}>Offerton</div>
            <div style={styles.locationItem}>Brinnington</div>
            <div style={styles.locationItem}>Portwood</div>
            <div style={styles.locationItem}>Edgeley</div>
            <div style={styles.locationItem}>Greater Manchester</div>
          </div>

          <p style={styles.areasNote}>
            Not sure if we cover your area? Give us a call on <a href="tel:+447375759686" style={styles.inlineLink}>07375 759686</a> and 
            we'll be happy to confirm our mobile valeting availability for your location.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{...styles.section, ...styles.bgLight}}>
        <div style={styles.container}>
          <h2 style={styles.h2}>What Our Stockport Customers Say</h2>
          <p style={styles.sectionIntro}>
            Real feedback from satisfied customers across Stockport who've experienced our 
            mobile car valeting service.
          </p>

          <div style={styles.testimonialGrid}>
            <article style={styles.testimonial}>
              <div style={styles.stars} aria-label="5 stars">★★★★★</div>
              <p style={styles.testimonialText}>
                Absolutely brilliant service. They came to my office in Cheadle Hulme and had 
                my car looking brand new by the time I finished work. The interior was spotless 
                and they even removed some stubborn stains I thought were permanent. Highly recommend!
              </p>
              <p style={styles.testimonialAuthor}>— Sarah M., Cheadle Hulme</p>
            </article>

            <article style={styles.testimonial}>
              <div style={styles.stars} aria-label="5 stars">★★★★★</div>
              <p style={styles.testimonialText}>
                As a busy mum with two young kids, having the mobile valet come to my house in 
                Bramhall was a lifesaver. No more dragging the children to a car wash. The team 
                were professional, friendly, and the car looked immaculate. Worth every penny.
              </p>
              <p style={styles.testimonialAuthor}>— Emma L., Bramhall</p>
            </article>

            <article style={styles.testimonial}>
              <div style={styles.stars} aria-label="5 stars">★★★★★</div>
              <p style={styles.testimonialText}>
                I've used SRV Detailing for our company fleet in Stockport for six months now. 
                Always reliable, always thorough, and the drivers appreciate having clean vehicles. 
                The convenience of them coming to our premises is fantastic for our business.
              </p>
              <p style={styles.testimonialAuthor}>— James R., Business Owner, Stockport</p>
            </article>
          </div>

          <div style={styles.googleReviewCta}>
            <p>
              See more reviews on our{' '}
              <a 
                href="https://share.google/C5GE3wzMfDb2Ninmj" 
                target="_blank" 
                rel="noopener noreferrer"
                style={styles.inlineLink}
              >
                Google Business Profile
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section style={{...styles.section, ...styles.bgWhite}}>
        <div style={styles.container}>
          <h2 style={styles.h2}>Frequently Asked Questions About Mobile Car Valeting in Stockport</h2>

          <div style={styles.faqContainer}>
            <div style={styles.faqItem}>
              <h3 style={styles.faqQuestion}>What is mobile car valeting?</h3>
              <div style={styles.faqAnswer}>
                <p style={styles.faqAnswerP}>
                  Mobile car valeting is a professional car cleaning service that comes directly 
                  to you, rather than requiring you to visit a fixed location. Our fully-equipped 
                  mobile unit brings all necessary equipment, water, power, and eco-friendly 
                  cleaning products to your home, workplace, or chosen location in Stockport. 
                  We perform the same high-quality interior and exterior cleaning services you'd 
                  expect from a professional car wash, but with the added convenience of not 
                  having to leave your property.
                </p>
              </div>
            </div>

            <div style={styles.faqItem}>
              <h3 style={styles.faqQuestion}>How long does a mobile valet take?</h3>
              <div style={styles.faqAnswer}>
                <p style={styles.faqAnswerP}>
                  Service duration depends on the package you choose and your vehicle's condition. 
                  A mini valet typically takes 45 minutes to 1 hour, ideal for regular maintenance. 
                  Our interior or exterior valeting services usually require 1.5 to 2 hours each. 
                  A full valet, which includes comprehensive interior and exterior cleaning, takes 
                  approximately 2.5 to 3 hours. Specialist car detailing services including paint 
                  correction and ceramic coating can take 3 to 5 hours or more, depending on the 
                  level of enhancement required.
                </p>
              </div>
            </div>

            <div style={styles.faqItem}>
              <h3 style={styles.faqQuestion}>Do I need to provide water or electricity?</h3>
              <div style={styles.faqAnswer}>
                <p style={styles.faqAnswerP}>
                  We arrive fully self-sufficient with our own water supply and power generation 
                  equipment, so you don't need to provide anything. However, if you're happy to 
                  offer access to an outdoor tap or electrical socket, it can occasionally speed 
                  up the service for certain deep cleaning tasks. We'll discuss this when booking, 
                  but it's entirely optional and never a requirement for our mobile valeting service.
                </p>
              </div>
            </div>

            <div style={styles.faqItem}>
              <h3 style={styles.faqQuestion}>What's the difference between a valet and a car wash?</h3>
              <div style={styles.faqAnswer}>
                <p style={styles.faqAnswerP}>
                  A standard car wash typically focuses on a quick exterior clean, often using 
                  automated brushes that can potentially scratch paintwork. Car valeting is a 
                  comprehensive, hands-on service that includes detailed interior cleaning 
                  (vacuuming, upholstery treatment, dashboard restoration), careful hand washing 
                  of the exterior, wheel cleaning, glass polishing, and often protective wax 
                  application. Valeting takes significantly longer but delivers showroom-quality 
                  results that a basic car wash cannot achieve.
                </p>
              </div>
            </div>

            <div style={styles.faqItem}>
              <h3 style={styles.faqQuestion}>Are your cleaning products safe for my car?</h3>
              <div style={styles.faqAnswer}>
                <p style={styles.faqAnswerP}>
                  Absolutely. We use only pH-neutral, professional-grade cleaning products 
                  specifically formulated for automotive use. Our eco-friendly solutions are 
                  safe for all vehicle surfaces including paintwork, glass, leather, fabric, 
                  plastic trim, and alloy wheels. We never use harsh chemicals that could damage 
                  your vehicle's finish or harm the environment. All products are biodegradable 
                  and meet current environmental standards whilst delivering exceptional cleaning results.
                </p>
              </div>
            </div>

            <div style={styles.faqItem}>
              <h3 style={styles.faqQuestion}>Can you remove pet hair and stubborn stains?</h3>
              <div style={styles.faqAnswer}>
                <p style={styles.faqAnswerP}>
                  Yes, pet hair removal and stain treatment are core parts of our interior 
                  valeting service. We use specialist tools including rubber rakes and powerful 
                  vacuum systems to extract embedded pet hair from upholstery and carpets. For 
                  stains, we assess the type and fabric before applying appropriate cleaning 
                  solutions and techniques. Most common stains (food, drink, mud) can be removed 
                  or significantly reduced. We'll always discuss realistic expectations for 
                  particularly stubborn or set-in stains during our assessment.
                </p>
              </div>
            </div>

            <div style={styles.faqItem}>
              <h3 style={styles.faqQuestion}>Do you offer same-day mobile valeting in Stockport?</h3>
              <div style={styles.faqAnswer}>
                <p style={styles.faqAnswerP}>
                  We often have same-day availability, particularly for mini valet and standard 
                  cleaning services. Availability depends on our daily schedule and your location 
                  within Stockport. For the best chance of same-day service, we recommend calling 
                  us before midday. Full valet and specialist detailing services typically require 
                  advance booking to ensure we allocate sufficient time. Contact us on 07375 759686 
                  and we'll do our best to accommodate your timeline.
                </p>
              </div>
            </div>

            <div style={styles.faqItem}>
              <h3 style={styles.faqQuestion}>What payment methods do you accept?</h3>
              <div style={styles.faqAnswer}>
                <p style={styles.faqAnswerP}>
                  We accept cash, all major debit and credit cards, and bank transfers. Payment 
                  is taken after the service is completed and you're completely satisfied with 
                  the results. We'll provide a clear invoice detailing the services performed. 
                  For regular customers and businesses requiring fleet valeting, we can arrange 
                  monthly invoicing arrangements.
                </p>
              </div>
            </div>

            <div style={styles.faqItem}>
              <h3 style={styles.faqQuestion}>Can you valet at my workplace?</h3>
              <div style={styles.faqAnswer}>
                <p style={styles.faqAnswerP}>
                  Yes, workplace valeting is one of our most popular services. We regularly 
                  visit office car parks, business premises, and commercial sites across Stockport. 
                  This allows professionals to have their vehicle cleaned during the working day 
                  without any disruption to their schedule. We work quietly and professionally, 
                  and can coordinate with your office management for regular visits or one-off 
                  bookings. Many businesses arrange this as an employee benefit.
                </p>
              </div>
            </div>

            <div style={styles.faqItem}>
              <h3 style={styles.faqQuestion}>How often should I have my car valeted?</h3>
              <div style={styles.faqAnswer}>
                <p style={styles.faqAnswerP}>
                  The ideal frequency depends on your usage and preferences. For busy families 
                  or those with pets, a monthly full valet helps maintain cleanliness and vehicle 
                  condition. Professionals might opt for a fortnightly mini valet to keep their 
                  car presentable for client meetings. Those with lower usage might find a full 
                  valet every two to three months sufficient. Regular valeting not only maintains 
                  appearance but also protects your vehicle's interior and paintwork, potentially 
                  enhancing resale value.
                </p>
              </div>
            </div>

            <div style={styles.faqItem}>
              <h3 style={styles.faqQuestion}>What's included in your eco-friendly approach?</h3>
              <div style={styles.faqAnswer}>
                <p style={styles.faqAnswerP}>
                  Our eco-friendly commitment includes using biodegradable cleaning solutions, 
                  waterless wash options where appropriate, and responsible waste water management. 
                  We use pH-neutral shampoos that won't harm local waterways, microfibre cloths 
                  instead of disposable materials, and concentrated products to reduce plastic 
                  packaging. Our equipment is regularly serviced for efficiency, and we continually 
                  seek new ways to reduce environmental impact whilst maintaining our high cleaning standards.
                </p>
              </div>
            </div>

            <div style={styles.faqItem}>
              <h3 style={styles.faqQuestion}>Do you valet all types of vehicles?</h3>
              <div style={styles.faqAnswer}>
                <p style={styles.faqAnswerP}>
                  Yes, we valet all vehicle types including small city cars, family saloons, 
                  estate cars, SUVs, 4x4s, MPVs, vans, luxury vehicles, and sports cars. Each 
                  vehicle type may have specific requirements, and our pricing adjusts accordingly 
                  based on size and complexity. We're experienced with all upholstery types 
                  (fabric, leather, alcantara) and all exterior finishes. If you have a specialist 
                  or classic vehicle, just mention this when booking so we can tailor our approach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.ctaSection}>
        <div style={styles.container}>
          <h2 style={styles.ctaSectionH2}>Book Your Mobile Car Valet in Stockport Today</h2>
          <p style={styles.ctaSectionP}>
            Experience the convenience of professional car valeting at your doorstep. Call us 
            now for same-day availability or to discuss your requirements.
          </p>
          <div style={styles.ctaButtons}>
            <a href="tel:+447375759686" style={styles.ctaPrimary}>
              Call Now: 07375 759686
            </a>
            <a href="https://srvdetailing.co.uk/" style={styles.ctaSecondary}>
              Visit Our Website
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.container}>
          <div style={styles.footerGrid}>
            <div style={styles.footerSection}>
              <h4 style={styles.footerSectionH4}>SRV Detailing</h4>
              <p style={styles.footerSectionP}>
                Professional mobile car valeting services throughout Stockport and Greater 
                Manchester. We bring showroom-quality cleaning to your doorstep.
              </p>
            </div>

            <div style={styles.footerSection}>
              <h4 style={styles.footerSectionH4}>Our Services</h4>
              <ul style={styles.footerSectionUl}>
                <li style={styles.footerSectionLi}><a href="#services" style={styles.footerSectionA}>Full Valet</a></li>
                <li style={styles.footerSectionLi}><a href="#services" style={styles.footerSectionA}>Interior Valeting</a></li>
                <li style={styles.footerSectionLi}><a href="#services" style={styles.footerSectionA}>Exterior Valeting</a></li>
                <li style={styles.footerSectionLi}><a href="#services" style={styles.footerSectionA}>Mini Valet</a></li>
                <li style={styles.footerSectionLi}><a href="#services" style={styles.footerSectionA}>Car Detailing</a></li>
                <li style={styles.footerSectionLi}><a href="#services" style={styles.footerSectionA}>Eco-Friendly Cleaning</a></li>
              </ul>
            </div>

            <div style={styles.footerSection}>
              <h4 style={styles.footerSectionH4}>Service Areas</h4>
              <ul style={styles.footerSectionUl}>
                <li style={styles.footerSectionLi}>Stockport Town Centre</li>
                <li style={styles.footerSectionLi}>Bramhall</li>
                <li style={styles.footerSectionLi}>Cheadle & Cheadle Hulme</li>
                <li style={styles.footerSectionLi}>Hazel Grove</li>
                <li style={styles.footerSectionLi}>Marple & Romiley</li>
                <li style={styles.footerSectionLi}>Greater Manchester</li>
              </ul>
            </div>

            <div style={styles.footerSection}>
              <h4 style={styles.footerSectionH4}>Contact Us</h4>
              <ul style={styles.footerSectionUl}>
                <li style={styles.footerSectionLi}>
                  <a href="tel:+447375759686" style={styles.footerSectionA}>07375 759686</a>
                </li>
                <li style={styles.footerSectionLi}>
                  <a href="https://srvdetailing.co.uk/" target="_blank" rel="noopener noreferrer" style={styles.footerSectionA}>
                    www.srvdetailing.co.uk
                  </a>
                </li>
                <li style={styles.footerSectionLi}>
                  <a 
                    href="https://share.google/C5GE3wzMfDb2Ninmj" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={styles.footerSectionA}
                  >
                    Google Business Profile
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div style={styles.footerBottom}>
            <p>&copy; {new Date().getFullYear()} SRV Detailing. Professional Mobile Car Valeting in Stockport.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MobileCarValetingStockport;
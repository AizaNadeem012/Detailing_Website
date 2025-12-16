import React, { useState } from 'react';
import blog1 from "@/assets/blog1.png"
import blog2 from "@/assets/blog2.png"
import blog3 from "@/assets/blog3.png"
import blog4 from "@/assets/blog4.png"
import blog5 from "@/assets/blog5.png"
import blog6 from "@/assets/blog6.png"
import { Navbar } from "@/components/Navbar"

// --- CSS STYLES (UPDATED FOR NAVBAR & IN-PAGE VIEW) ---
const BlogPageStyles = `
/* --- General Page Structure --- */
.blog-page-container {
    font-family: 'Helvetica Neue', Arial, sans-serif;
    color: #333;
    line-height: 1.6;
}
* {
    box-sizing: border-box; /* Ensures padding/border are included in element's total width/height */
}

/* --- Navbar Styling (New) --- */
.app-navbar {
    background-color: #1E7B4C; /* Deep green */
    padding: 15px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.navbar-logo {
    color: white;
    font-size: 1.8em;
    font-weight: bold;
    text-decoration: none;
}

.navbar-links a {
    color: white;
    text-decoration: none;
    margin-left: 25px;
    font-size: 1em;
    padding: 5px 0;
    transition: opacity 0.3s ease;
    border-bottom: 2px solid transparent;
}

.navbar-links a:hover {
    opacity: 0.9;
    border-bottom: 2px solid #90EE90; /* Light green hover accent */
}


/* --- Hero Section Styling (Refined) --- */
.app-hero-section {
    background-color: #f0f4f0;
    padding: 80px 20px 60px; /* Adjusted padding */
    text-align: center;
    border-bottom: 5px solid #1E7B4C;
}

.hero-title {
    font-size: 3em;
    margin-bottom: 15px;
    color: #222;
    font-weight: 700;
}

.hero-title .highlight {
    color: #1E7B4C;
}

.hero-subtitle {
    font-size: 1.2em;
    color: #666;
    margin-bottom: 40px;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
}

/* Search Bar (No changes) */
.search-bar {
    display: flex;
    justify-content: center;
    max-width: 550px;
    margin: 0 auto;
    border: 1px solid #ccc;
    border-radius: 5px;
    overflow: hidden;
    background-color: white;
}

.search-bar input {
    flex-grow: 1;
    padding: 14px 15px;
    border: none;
    font-size: 1em;
    outline: none;
}

.search-button {
    background-color: #1E7B4C;
    color: white;
    padding: 14px 25px;
    border: none;
    cursor: pointer;
    font-size: 1em;
    font-weight: bold;
    transition: background-color 0.3s ease;
}

.search-button:hover {
    background-color: #145938; 
}

/* --- Marquee Section (No changes) --- */
.marquee-section {
    background-color: #1E7B4C;
    color: white;
    padding: 10px 0;
    overflow: hidden;
}

.marquee-content {
    white-space: nowrap;
    animation: marquee 20s linear infinite;
    padding: 0 100%;
}

@keyframes marquee {
    0%   { transform: translate(0, 0); }
    100% { transform: translate(-100%, 0); }
}

/* --- Blog List Section --- */
.blog-list-section {
    padding: 80px 20px;
    max-width: 1200px;
    margin: 0 auto;
}

.blog-list-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 40px;
}

/* --- Blog Card Styling (Link behaviour change) --- */
.blog-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    background-color: white;
    cursor: pointer; /* Indicate clickable */
}

.blog-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
}

.blog-card-image-container {
    position: relative;
}

.blog-card-image {
    width: 100%;
    height: 220px;
    object-fit: cover;
    display: block;
}

.blog-card-category {
    position: absolute;
    top: 15px;
    right: 15px;
    background-color: #145938;
    color: white;
    padding: 5px 12px;
    border-radius: 3px;
    font-size: 0.85em;
    font-weight: bold;
}

.blog-card-content {
    padding: 25px;
}

.blog-card-title {
    font-size: 1.5em;
    color: #222;
    margin-top: 0;
    margin-bottom: 12px;
    line-height: 1.3;
}

.blog-card-excerpt {
    color: #555;
    margin-bottom: 25px;
    font-size: 0.95em;
}

.blog-card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #eee;
    padding-top: 15px;
}

.blog-card-date {
    font-size: 0.9em;
    color: #888;
}

.read-more-link {
    color: #1E7B4C;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;
    cursor: pointer; /* Use pointer cursor for the link inside card */
}

/* --- Selected Post View (No changes) --- */
.selected-post-container {
    padding: 80px 20px;
    max-width: 900px;
    margin: 0 auto;
    background-color: #fff;
    border: 1px solid #eee;
    margin-bottom: 80px;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

.post-back-button {
    background: none;
    border: none;
    color: #1E7B4C;
    font-size: 1.1em;
    font-weight: bold;
    cursor: pointer;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    transition: opacity 0.3s;
}

.post-back-button:hover {
    opacity: 0.8;
}

.post-back-button span {
    margin-right: 5px;
}

.post-featured-image {
    width: 100%;
    height: 450px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 40px;
}

.post-content h2 {
    color: #1E7B4C;
    margin-top: 30px;
    border-bottom: 2px solid #eee;
    padding-bottom: 10px;
}

.post-content p {
    font-size: 1.05em;
    line-height: 1.8;
    margin-bottom: 20px;
    color: #444;
}

/* --- Load More Button (No changes) --- */
.load-more-container {
    text-align: center;
    margin-top: 60px;
}

.load-more-button {
    background-color: #1E7B4C;
    color: white;
    padding: 14px 35px;
    border: none;
    border-radius: 5px;
    font-size: 1.1em;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-weight: 600;
}

.load-more-button:hover {
    background-color: #145938;
}

/* --- Footer Styling (No changes) --- */
.app-footer {
    background-color: #1E7B4C;
    color: white;
    padding: 40px 20px;
    text-align: center;
}

.footer-content {
    max-width: 1200px;
    margin: 0 auto;
}

.footer-links {
    margin-bottom: 20px;
}

.footer-links a {
    color: white;
    text-decoration: none;
    margin: 0 15px;
    font-size: 1em;
    transition: opacity 0.3s ease;
}

.footer-links a:hover {
    opacity: 0.8;
    text-decoration: underline;
}

.copyright {
    font-size: 0.9em;
    opacity: 0.7;
}

/* --- Responsive Adjustments --- */
@media (max-width: 768px) {
    .navbar-logo {
        font-size: 1.4em;
    }
    .navbar-links {
        display: none; /* Hide full links on mobile for simplicity */
    }
    .hero-title {
        font-size: 2.2em;
    }
    .blog-list-section {
        padding: 50px 15px;
    }
    .blog-list-grid {
        grid-template-columns: 1fr;
    }
    .search-bar {
        flex-direction: column;
    }
    .search-bar input, .search-button {
        width: 100%;
        box-sizing: border-box;
        padding: 12px 15px;
    }
    .search-button {
        margin-top: 10px;
        border-radius: 0 0 5px 5px;
    }
    .search-bar {
        border-radius: 5px;
    }
    .footer-links a {
        display: block;
        margin: 10px 0;
    }
}
`;

// --- DUMMY BLOG POST DATA (Updated to 6 posts with new content) ---
const dummyBlogPosts = [
    {
        id: 1,
        title: 'The Ultimate Guide to Paint Protection Film (PPF)',
        excerpt: 'Protecting your vehicle\'s paint is crucial for maintaining both aesthetics and resale value. Learn why PPF is the best investment.',
        date: 'December 10, 2025',
        imageUrl: blog1,
        category: 'Paint Protection',
        content: `Paint Protection Film, often referred to as PPF or clear bra, is a thermoplastic urethane film applied to painted surfaces of a new or used car to protect the paint from stone chips, bug splatters, and minor abrasions. It is a highly resilient, clear film that offers invisible protection.
        
        <h2>Why PPF is Superior to Wax or Sealants</h2>
        <p>Unlike traditional waxes or synthetic sealants, PPF offers a physical, self-healing barrier. This means that if the film sustains minor scratches from washing or debris, the film can heal itself when exposed to heat (like sunlight or warm water), making the marks disappear.</p>

        <h2>The Installation Process</h2>
        <p>Installation requires meticulous preparation. The car's surface must be perfectly clean and decontaminated. The film is custom-cut using a plotter, then carefully applied using a slip solution and squeegee to remove all air bubbles and moisture. This process is best left to certified professionals to ensure seamless edges and flawless coverage.</p>`
    },
    {
        id: 2,
        title: 'Ceramic Coating vs. Wax: Which Should You Choose?',
        excerpt: 'A deep dive into the properties of ceramic coatings and traditional waxes. Understand the long-term benefits and differences.',
        date: 'November 25, 2025',
        imageUrl: blog2,
        category: 'Ceramic Coating',
        content: `The debate between ceramic coating and traditional car wax often comes down to longevity, protection level, and cost. Ceramic coatings are a semi-permanent solution based on SiO2 (Silicon Dioxide) technology.
        
        <h2>Longevity and Durability</h2>
        <p>A high-quality wax might last a few weeks or months, needing frequent reapplication. Conversely, a professional ceramic coating can last several years, providing superior resistance to UV damage, chemical stains, and environmental fallout.</p>
        
        <h2>Application Complexity</h2>
        <p>While wax is easy to apply at home, ceramic coating requires careful surface preparation (often including paint correction) and a controlled environment. The curing process is crucial, making professional application highly recommended for optimal results.</p>`
    },
    {
        id: 3,
        title: '5 Expert Tips for Mobile Valeting at Home',
        excerpt: 'Want a professional look without leaving your driveway? Follow these simple steps for effective mobile valeting results.',
        date: 'November 15, 2025',
        imageUrl: blog3,
        category: 'Mobile Services',
        content: `Mobile valeting brings the professional detail shop experience right to your home or office. While a full professional detail is recommended periodically, you can maintain that fresh look with these tips:
        
        <ol>
            <li>**Two-Bucket Wash Method:** Always use two buckets—one for soapy water, one for rinsing your wash mitt—to drastically reduce swirl marks.</li>
            <li>**pH Neutral Soap:** Use a dedicated, pH-neutral car wash soap to prevent stripping any existing wax or sealants.</li>
            <li>**Dedicated Wheel Cleaner:** Never use the same wash mitt or soap for your bodywork and your wheels, as wheels harbor the most brake dust and grime.</li>
            <li>**Microfiber Towels:** Use high-quality, clean microfiber towels for drying to prevent scratching and ensure a streak-free finish.</li>
            <li>**Quick Detailer Spray:** Keep a quick detailer spray handy for bird droppings or light dust between full washes.</li>
        </ol>`
    },
    {
        id: 4,
        title: 'Understanding the Process of Paint Correction',
        excerpt: 'How do professionals remove swirl marks and minor scratches? We break down the stages of a professional paint correction service.',
        date: 'October 30, 2025',
        imageUrl: blog4,
        category: 'Paint Correction',
        content: `Paint correction is the process of leveling the top layer of clear coat to remove surface imperfections. This is achieved through machine polishing, using various grades of abrasive compounds and pads.
        
        <h2>The Three Stages of Correction</h2>
        <p>1. **Compounding (Cutting):** This heavy stage uses aggressive pads and compounds to remove deep scratches and oxidation. 2. **Polishing:** This medium stage refines the finish left by compounding, removing haziness. 3. **Finishing:** This final step uses ultra-fine polishes to achieve a deep, wet, mirror-like gloss.</p>
        
        <h2>The Importance of Lighting</h2>
        <p>Professional paint correction cannot be done correctly without proper lighting. Halogen lights, LEDs, and sunlight are used to reveal the defects, ensuring they are completely removed from all angles before the protective coating is applied.</p>`
    },
    {
        id: 5,
        title: 'Deep Clean: Essential Steps for Interior Detailing',
        excerpt: 'The inside of your car deserves just as much attention as the outside. Learn the professional techniques for a spotless interior.',
        date: 'October 15, 2025',
        imageUrl: blog5,
        category: 'Interior Care',
        content: `Interior detailing goes beyond a quick vacuum. It involves deep cleaning all surfaces, including carpets, upholstery, vinyl, plastic, and leather, to restore the cabin to a like-new condition.
        
        <h2>Tools and Products</h2>
        <p>Key tools include a powerful vacuum with crevice attachments, steam cleaners for sanitization, specialized brushes, and dedicated cleaners for different materials (e.g., leather conditioner, fabric cleaner). Always test cleaners on a small, inconspicuous area first.</p>
        
        <h2>Cleaning the Dashboard and Plastics</h2>
        <p>Use a gentle, pH-neutral cleaner and a soft microfiber towel. Avoid silicone-heavy dressings as they can attract dust and create glare. Opt for matte-finish protectants that offer UV protection without the greasy shine.</p>`
    },
    {
        id: 6,
        title: 'Restoring Cloudy Headlights: A Step-by-Step Guide',
        excerpt: 'Cloudy, yellowed headlights severely impact visibility and your car\'s appearance. Follow this guide to restore them safely.',
        date: 'October 01, 2025',
        imageUrl: blog6,
        category: 'Maintenance',
        content: `Headlight clarity is crucial for safety, as oxidized lenses reduce light output significantly. Restoration involves removing the damaged layer of plastic and then protecting the fresh surface.
        
        <h2>Sanding and Polishing</h2>
        <p>The process starts with taping off the surrounding paintwork. You'll use progressive sanding grits (e.g., 600, 1000, 2000) to remove the oxidation. This is followed by a plastic-specific polish using a machine buffer or by hand to achieve clear transparency.</p>
        
        <h2>Crucial Final Step: Protection</h2>
        <p>Once restored, the plastic is vulnerable to re-oxidation. Applying a UV-resistant sealant or a dedicated clear coat designed for headlights is essential to lock in the clarity and prevent them from yellowing again within a few months.</p>`
    },
];

<Navbar/>

// --- BLOG POST CARD COMPONENT (Click handler added) ---
const BlogPostCard = ({ post, onPostClick }) => {
    return (
        <div className="blog-card" onClick={() => onPostClick(post)}>
            {/* Image section with Category Tag */}
            <div className="blog-card-image-container">
                <img src={post.imageUrl} alt={post.title} className="blog-card-image" />
                <span className="blog-card-category">{post.category}</span>
            </div>
            
            <div className="blog-card-content">
                <h3 className="blog-card-title">{post.title}</h3>
                <p className="blog-card-excerpt">{post.excerpt}</p>
                
                <div className="blog-card-footer">
                    <span className="blog-card-date">Posted on {post.date}</span>
                    <span className="read-more-link">
                        Read More →
                    </span>
                </div>
            </div>
        </div>
    );
};

// --- SELECTED POST VIEW (No changes) ---
const SelectedPost = ({ post, onBackClick }) => {
    return (
        <div className="selected-post-container">
            <button className="post-back-button" onClick={onBackClick}>
                <span>&larr;</span> Back to all Articles
            </button>
            
            <img 
                src={post.imageUrl} 
                alt={post.title} 
                className="post-featured-image" 
            />
            
            <h1 className="hero-title">{post.title}</h1>
            <p className="blog-card-date">Posted on {post.date} in {post.category}</p>
            
            <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
    );
};


// --- FOOTER COMPONENT (No changes) ---
const Footer = () => {
    return (
        <footer className="app-footer">
            <div className="footer-content">
                <div className="footer-links">
                    <a href="/about">About Us</a>
                    <a href="/services">Services</a>
                    <a href="/contact">Contact</a>
                    <a href="/privacy">Privacy Policy</a>
                </div>
                <p className="copyright">© 2025 Detailing Knowledge Hub. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

// --- MAIN BLOG PAGE COMPONENT ---
const BlogPage = () => {
    const [selectedPost, setSelectedPost] = useState(null);

    const handlePostClick = (post) => {
        setSelectedPost(post);
        // Scroll to the top of the page when a post is opened
        window.scrollTo(0, 0); 
    };

    const handleBackClick = () => {
        setSelectedPost(null);
        // Optional: Scroll back to the blog list section
        // Note: document.querySelector('.blog-list-section') is only available when it's rendered. 
        // We can safely assume it's there after clicking back.
        const blogListSection = document.querySelector('.blog-list-section');
        if (blogListSection) {
             window.scrollTo(0, blogListSection.offsetTop - 150);
        } else {
             window.scrollTo(0, 0);
        }
    };

    return (
        <>
            {/* Inject CSS */}
            <style dangerouslySetInnerHTML={{ __html: BlogPageStyles }} />

            <div className="blog-page-container">
                {/* Navbar */}
                <Navbar />

                {/* Conditional Rendering: Show selected post or the main blog list */}
                {selectedPost ? (
                    <SelectedPost 
                        post={selectedPost} 
                        onBackClick={handleBackClick} 
                    />
                ) : (
                    <>
                        {/* Hero Section */}
                        <header className="app-hero-section">
                            <h1 className="hero-title">
                                Our <span className="highlight">Detailing</span> Knowledge Hub
                            </h1>
                            <p className="hero-subtitle">
                                Expert advice, guides, and the latest news on car detailing, ceramic coating, and paint protection.
                            </p>
                            <div className="search-bar">
                                <input type="text" placeholder="Search the Blog..." />
                                <button className="search-button">Search</button>
                            </div>
                        </header>

                        {/* Marquee Section */}
                        <section className="marquee-section">
                            <div className="marquee-content">
                                📣 NEW POSTS ADDED! Get the Deep Clean guide now! | ✨ Limited Time: 20% off PPF on front bumpers! ✨
                            </div>
                        </section>

                        {/* Main Blog Post List Section */}
                        <main className="blog-list-section">
                            <div className="blog-list-grid">
                                {/* Render all 6 dummyBlogPosts */}
                                {dummyBlogPosts.map(post => (
                                    <BlogPostCard 
                                        key={post.id} 
                                        post={post} 
                                        onPostClick={handlePostClick}
                                    />
                                ))}
                            </div>
                            
                            {/* Load More/Pagination */}
                            <div className="load-more-container">
                                <button className="load-more-button">Load More Articles</button>
                            </div>
                        </main>
                    </>
                )}
                
                {/* Footer */}
                <Footer />
            </div>
        </>
    );
};

export default BlogPage;
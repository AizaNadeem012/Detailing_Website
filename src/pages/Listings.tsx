import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ListingsTable, type Listing } from "@/components/ListingsTable";
import { useToast } from "@/hooks/use-toast";
import { Plus, Clock, CheckCircle, List, TrendingUp, Search, X } from "lucide-react"; // Added X icon

// --- Initial Data (Rest of the component remains the same) ---
const initialListings: Listing[] = [
  {
    id: "1",
    website: "bizify.co.uk",
    keyword: "demo keyword 1",
    password: "demo@123",
    status: "Pending", // Status: Pending, Submitted, Live
  },
  {
    id: "2",
    website: "uksmallbusinessdirectory.co.uk",
    keyword: "mobile car detailing services near me",
    password: "srvdetailing1.com",
    status: "Submitted",
  },
  {
    id: "3",
    website: "yell.com",
    keyword: "car detailing London",
    password: "yell@password",
    status: "Live",
  },
  {
    id: "4",
    website: "thomsonlocal.com",
    keyword: "ceramic coating services",
    password: "thomson@123",
    status: "Pending",
  },
];

// --- Framer Motion Variants (Rest of the component remains the same) ---
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemAnim = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

// --- New Component: Stat Card ---
type StatCardProps = {
  icon: React.ReactNode;
  title: string;
  value: number;
  colorClass: string;
};

const StatCard = ({ icon, title, value, colorClass }: StatCardProps) => (
  <motion.div
    variants={itemAnim}
    className={`p-6 rounded-2xl shadow-xl border ${colorClass} bg-card transition duration-300 hover:scale-[1.03]`}
  >
    <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 text-white ${colorClass.replace('border-', 'bg-')}`}>
      {icon}
    </div>
    <p className="text-sm font-medium uppercase text-muted-foreground">{title}</p>
    <h2 className="text-4xl font-extrabold text-foreground mt-1">{value}</h2>
  </motion.div>
);

// --- NEW COMPONENT: Add Listing Form ---
type AddFormProps = {
  onAdd: (listing: Omit<Listing, 'id'>) => void;
  onClose: () => void;
}

const AddListingForm = ({ onAdd, onClose }: AddFormProps) => {
  const [formData, setFormData] = useState({
    website: '',
    keyword: '',
    password: '',
    status: 'Pending' as Listing['status'], // Default status
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.website || !formData.keyword) {
      alert("Website and Keyword are required.");
      return;
    }
    onAdd(formData);
    onClose(); // Close the form after submission
  };

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="p-6 bg-gray-900/90 rounded-xl shadow-inner border border-primary/50 mb-8 overflow-hidden"
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-white">Add New Business Listing</h3>
        <button onClick={onClose} className="text-gray-400 hover:text-white transition">
          <X className="w-5 h-5" />
        </button>
      </div>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <input
          type="text"
          name="website"
          placeholder="Website URL (e.g., example.com)"
          value={formData.website}
          onChange={handleChange}
          className="p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-primary focus:border-primary"
          required
        />
        <input
          type="text"
          name="keyword"
          placeholder="Primary Keyword"
          value={formData.keyword}
          onChange={handleChange}
          className="p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-primary focus:border-primary"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Login Password (Optional)"
          value={formData.password}
          onChange={handleChange}
          className="p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-primary focus:border-primary"
        />
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-primary focus:border-primary"
        >
          <option value="Pending">Pending</option>
          <option value="Submitted">Submitted</option>
          <option value="Live">Live</option>
        </select>
        <div className="md:col-span-4 flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-primary text-white font-semibold rounded-full shadow-lg hover:bg-primary/90 transition duration-300"
          >
            Save Listing
          </button>
        </div>
      </form>
    </motion.div>
  );
};


// --- Main Listings Component ---
const Listings = () => {
  const { toast } = useToast();
  const [isFormOpen, setIsFormOpen] = useState(false); // NEW: State to control form visibility
  const [listings, setListings] = useState<Listing[]>(() => {
    // Check localStorage first
    const saved = localStorage.getItem("listings");
    return saved ? JSON.parse(saved) : initialListings;
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  // Save to localStorage whenever listings state changes
  useEffect(() => {
    localStorage.setItem("listings", JSON.stringify(listings));
  }, [listings]);

  // --- Handlers ---
  const handleDelete = (id: string) => {
    const listing = listings.find((l) => l.id === id);
    setListings(listings.filter((l) => l.id !== id));
    toast({
      title: "Listing Removed",
      description: `${listing?.website} has been permanently removed.`,
      variant: "destructive",
    });
  };

  // 💥 UPDATED FUNCTION: Takes actual data from the form
  const handleAdd = (newListingData: Omit<Listing, 'id'>) => {
    const newId = String(Date.now()); // Simple unique ID
    const newListing: Listing = {
      id: newId,
      ...newListingData,
    };

    setListings((prevListings) => [newListing, ...prevListings]); // New item on top

    toast({
      title: "New Listing Saved!",
      description: `${newListing.website} has been successfully added and saved.`,
      variant: "default",
    });
  };

  // --- Filtering Logic (useMemo for better performance) ---
  const filteredListings = useMemo(() => {
    return listings.filter((listing) => {
      const statusMatch = filterStatus === "All" || listing.status === filterStatus;
      const searchMatch = listing.website.toLowerCase().includes(searchTerm.toLowerCase()) ||
        listing.keyword.toLowerCase().includes(searchTerm.toLowerCase());
      return statusMatch && searchMatch;
    });
  }, [listings, searchTerm, filterStatus]); // Re-calculate only when these change

  // --- Stats Calculation ---
  const totalListings = listings.length;
  const pendingCount = listings.filter(l => l.status === "Pending").length;
  const submittedCount = listings.filter(l => l.status === "Submitted").length;
  const liveCount = listings.filter(l => l.status === "Live").length;


  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* 1. ELEGANT HEADER SECTION */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 border-b border-border pb-6"
          >
            <h1 className="text-5xl font-heading font-extrabold text-foreground mb-1">
              Listings <span className="text-primary">Dashboard</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Monitor and manage all UK business directory submissions and their status.
            </p>
          </motion.div>

          {/* 2. TRENDY STATS CARDS */}
          <motion.div
            className="grid md:grid-cols-4 gap-8 mb-12"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <StatCard
              icon={<List className="w-5 h-5" />}
              title="Total Submissions"
              value={totalListings}
              colorClass="border-primary/50 text-primary"
            />
            <StatCard
              icon={<Clock className="w-5 h-5" />}
              title="Pending Approval"
              value={pendingCount}
              colorClass="border-yellow-500/50 text-yellow-500"
            />
            <StatCard
              icon={<CheckCircle className="w-5 h-5" />}
              title="Submitted (Awaiting Live)"
              value={submittedCount}
              colorClass="border-blue-500/50 text-blue-500"
            />
            <StatCard
              icon={<TrendingUp className="w-5 h-5" />}
              title="Live Listings"
              value={liveCount}
              colorClass="border-green-500/50 text-green-500"
            />
          </motion.div>

          {/* 3. FILTER AND CTA BAR */}
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center mb-6 p-4 bg-card rounded-xl shadow-lg border border-border"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {/* Search Bar */}
            <div className="relative flex items-center w-full md:w-1/3 mb-4 md:mb-0">
              <Search className="w-5 h-5 text-muted-foreground absolute left-3" />
              <input
                type="text"
                placeholder="Search by website or keyword..."
                className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition duration-200"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Status Filter */}
            <select
              className="py-2 px-4 bg-background border border-border rounded-lg text-foreground transition duration-200 focus:ring-2 focus:ring-primary focus:border-primary w-full md:w-auto mb-4 md:mb-0"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="All">All Statuses</option>
              <option value="Live">Live</option>
              <option value="Submitted">Submitted</option>
              <option value="Pending">Pending</option>
            </select>

            {/* Add New Button - Toggles the form */}
            <button
              onClick={() => setIsFormOpen(!isFormOpen)}
              className={`flex items-center px-6 py-2 font-semibold rounded-full shadow-lg transition duration-300 w-full md:w-auto ${isFormOpen ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-primary hover:bg-primary/90 text-white'}`}
            >
              {isFormOpen ? (
                <>
                  <X className="w-5 h-5 mr-2" />
                  Close Form
                </>
              ) : (
                <>
                  <Plus className="w-5 h-5 mr-2" />
                  Add New Listing
                </>
              )}
            </button>
          </motion.div>

          {/* 3.5. NEW: Add Listing Form Section */}
          {isFormOpen && (
            <AddListingForm
              onAdd={handleAdd}
              onClose={() => setIsFormOpen(false)}
            />
          )}

          {/* 4. LISTINGS TABLE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="bg-card p-6 rounded-2xl shadow-2xl border border-border"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Current Listings ({filteredListings.length})
            </h3>
            <ListingsTable listings={filteredListings} onDelete={handleDelete} />
          </motion.div>

          {/* Fallback for no results */}
          {filteredListings.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-10 text-muted-foreground"
            >
              <p>No listings found matching the current filters or search term.</p>
            </motion.div>
          )}

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Listings;
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PackageCard from "@/components/PackageCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import beachImage from "@/assets/beach-coast.jpg";
import cityImage from "@/assets/city-urban.jpg";
import mountainImage from "@/assets/mountain-adventure.jpg";
import heroImage from "@/assets/hero-safari.jpg";

const Index = () => {
  const featuredPackages = [
    {
      id: "1",
      title: "Maasai Mara Safari Experience",
      description: "Experience the breathtaking wildlife of Maasai Mara with expert guides",
      imageUrl: heroImage,
      priceKes: 85000,
      durationDays: 5,
      durationNights: 4,
      difficulty: "Easy" as const,
      seatsAvailable: 8,
      rating: 4.9,
    },
    {
      id: "2",
      title: "Coastal Paradise Escape",
      description: "Relax on pristine beaches with crystal clear waters in Diani",
      imageUrl: beachImage,
      priceKes: 55000,
      durationDays: 3,
      durationNights: 2,
      difficulty: "Easy" as const,
      seatsAvailable: 6,
      rating: 4.8,
    },
    {
      id: "3",
      title: "Urban Discovery Tour",
      description: "Explore the vibrant culture and history of Nairobi",
      imageUrl: cityImage,
      priceKes: 35000,
      durationDays: 2,
      durationNights: 1,
      difficulty: "Easy" as const,
      seatsAvailable: 10,
      rating: 4.7,
    },
    {
      id: "4",
      title: "Mountain Trekking Adventure",
      description: "Challenge yourself with an unforgettable trek up Mount Kenya",
      imageUrl: mountainImage,
      priceKes: 95000,
      durationDays: 7,
      durationNights: 6,
      difficulty: "Challenging" as const,
      seatsAvailable: 5,
      rating: 4.9,
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Featured Packages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Packages</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Handpicked adventures that showcase the best of East Africa
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredPackages.map((pkg) => (
              <PackageCard key={pkg.id} {...pkg} />
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link to="/packages">
                View All Packages
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Travel With Us</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We make your African adventure seamless and unforgettable
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-lg bg-card shadow-soft">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Guides</h3>
              <p className="text-muted-foreground">
                Local experts with deep knowledge of African wildlife and culture
              </p>
            </div>
            
            <div className="text-center p-8 rounded-lg bg-card shadow-soft">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Safe & Secure</h3>
              <p className="text-muted-foreground">
                Your safety is our priority with fully licensed operators
              </p>
            </div>
            
            <div className="text-center p-8 rounded-lg bg-card shadow-soft">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Value</h3>
              <p className="text-muted-foreground">
                Competitive prices with flexible payment options including M-Pesa
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

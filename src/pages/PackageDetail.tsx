import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, MapPin, Check, Star, Loader2, ArrowLeft } from "lucide-react";

// Import package images
import maasaiMaraImg from "@/assets/destinations/maasai-mara-real.jpg";
import serengetiImg from "@/assets/destinations/serengeti-real.jpg";
import mountKenyaImg from "@/assets/destinations/mount-kenya-real.jpg";
import zanzibarImg from "@/assets/destinations/zanzibar-beach-real.jpg";
import amboseliImg from "@/assets/destinations/amboseli-real.jpg";
import bwindiImg from "@/assets/destinations/bwindi-forest.jpg";

// Map package image identifiers to images
const packageImages: Record<string, string> = {
  "maasai-mara": maasaiMaraImg,
  "serengeti": serengetiImg,
  "mount-kenya": mountKenyaImg,
  "zanzibar": zanzibarImg,
  "amboseli": amboseliImg,
  "bwindi": bwindiImg,
};

const PackageDetail = () => {
  const { id } = useParams();

  const { data: packageData, isLoading } = useQuery({
    queryKey: ["package", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("packages")
        .select(`
          *,
          destinations (
            title,
            country,
            region
          )
        `)
        .eq("id", id)
        .eq("status", "published")
        .maybeSingle();

      if (error) throw error;
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!packageData) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Package Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The package you're looking for doesn't exist.
          </p>
          <Button asChild>
            <Link to="/packages">Browse All Packages</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const destinationName = packageData.destinations 
    ? `${packageData.destinations.title}, ${packageData.destinations.country}`
    : "Kenya";

  // Mock data for fields not yet in database
  const mockData = {
    groupSize: `${packageData.seats_total} people max`,
    reviews: 127,
  };

  const displayData = {
    ...packageData,
    ...mockData,
    destination: destinationName,
    duration: `${packageData.duration_days} Days / ${packageData.duration_nights} Nights`,
    itinerary: packageData.itinerary || [
      {
        day: 1,
        title: "Arrival & Orientation",
        description: "Pick up from Nairobi, drive to Maasai Mara with scenic stops. Check into lodge, evening game drive."
      },
      {
        day: 2,
        title: "Full Day Safari",
        description: "Morning and afternoon game drives. Picnic lunch in the reserve. Sunset photography session."
      },
      {
        day: 3,
        title: "Cultural Experience",
        description: "Morning game drive, afternoon visit to Maasai village. Learn about traditions and customs."
      },
      {
        day: 4,
        title: "Great Migration Viewing",
        description: "Early morning departure to witness the migration (seasonal). Full day exploring different areas of the reserve."
      },
      {
        day: 5,
        title: "Departure",
        description: "Final morning game drive, breakfast at the lodge, return journey to Nairobi."
      }
    ],
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Image */}
      <div className="relative h-[60vh] mt-16">
        <img 
          src={packageImages[displayData.image_url || ""] || maasaiMaraImg} 
          alt={displayData.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70" />
        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 pb-8">
          <Button asChild variant="ghost" className="text-white hover:text-white/80 mb-4">
            <Link to="/packages">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Packages
            </Link>
          </Button>
          <Badge className="bg-accent text-accent-foreground mb-4">
            {displayData.difficulty}
          </Badge>
          <h1 className="text-5xl font-bold text-white mb-4">
            {displayData.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-white">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>{displayData.destination}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>{displayData.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span>{displayData.groupSize}</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span>{displayData.rating} ({displayData.reviews} reviews)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <section>
              <h2 className="text-3xl font-bold mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                {displayData.description}
              </p>
            </section>

            {/* Highlights */}
            {displayData.highlights && displayData.highlights.length > 0 && (
              <section>
                <h2 className="text-3xl font-bold mb-4">Highlights</h2>
                <ul className="space-y-3">
                  {displayData.highlights.map((highlight: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent shrink-0 mt-1" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Itinerary */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Itinerary</h2>
              <div className="space-y-6">
                {Array.isArray(displayData.itinerary) && displayData.itinerary.map((day: any) => (
                  <div key={day.day} className="border-l-4 border-primary pl-6 pb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                        {day.day}
                      </div>
                      <h3 className="text-xl font-semibold">{day.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{day.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* What's Included */}
            {(displayData.included || displayData.not_included) && (
              <section>
                <h2 className="text-3xl font-bold mb-6">What's Included</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {displayData.included && displayData.included.length > 0 && (
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-accent">Included</h3>
                      <ul className="space-y-2">
                        {displayData.included.map((item: string, index: number) => (
                          <li key={index} className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {displayData.not_included && displayData.not_included.length > 0 && (
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-destructive">Not Included</h3>
                      <ul className="space-y-2">
                        {displayData.not_included.map((item: string, index: number) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-muted-foreground">• {item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </section>
            )}
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-card border border-border rounded-lg p-6 shadow-soft">
              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold text-primary">
                    KES {displayData.price_kes.toLocaleString()}
                  </span>
                </div>
                <p className="text-muted-foreground">per person</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Duration</span>
                  <span className="font-semibold">{displayData.duration}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Group Size</span>
                  <span className="font-semibold">{displayData.groupSize}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Seats Available</span>
                  <span className="font-semibold text-accent">{displayData.seats_available}</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-muted-foreground">Difficulty</span>
                  <Badge>{displayData.difficulty}</Badge>
                </div>
              </div>

              <div className="space-y-3">
                <Button asChild className="w-full" size="lg">
                  <Link to={`/booking/${id}`}>
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Now
                  </Link>
                </Button>
                <Button variant="outline" className="w-full" size="lg">
                  Contact Us
                </Button>
              </div>

              <p className="text-sm text-muted-foreground text-center mt-6">
                🔒 Secure booking • Free cancellation up to 48h
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PackageDetail;

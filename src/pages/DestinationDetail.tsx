import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowLeft, Loader2 } from "lucide-react";
import PackageCard from "@/components/PackageCard";

// Import destination images - REAL East African photographs from Unsplash
import maasaiMaraImg from "@/assets/destinations/maasai-mara-real.jpg";
import serengetiImg from "@/assets/destinations/serengeti-real.jpg";
import mountKenyaImg from "@/assets/destinations/mount-kenya-real.jpg";
import nairobiImg from "@/assets/destinations/nairobi-real.jpg";
import zanzibarImg from "@/assets/destinations/zanzibar-beach-real.jpg";
import bwindiImg from "@/assets/destinations/bwindi-forest.jpg";
import amboseliImg from "@/assets/destinations/amboseli-real.jpg";
import victoriaFallsImg from "@/assets/destinations/victoria-falls-real.jpg";
import dianiBeachImg from "@/assets/destinations/diani-real.jpg";
import samburuImg from "@/assets/destinations/samburu-reserve.jpg";
import lakeVictoriaImg from "@/assets/destinations/lake-victoria.jpg";
import nileRiverImg from "@/assets/destinations/nile-river.jpg";
import lamuIslandImg from "@/assets/destinations/lamu-island.jpg";
import kilimanjaroImg from "@/assets/destinations/kilimanjaro.jpg";
import volcanoesRwandaImg from "@/assets/destinations/volcanoes-rwanda.jpg";
import simienMountainsImg from "@/assets/destinations/simien-mountains.jpg";

// Map destination titles to images
const destinationImages: Record<string, string> = {
  "Maasai Mara National Reserve": maasaiMaraImg,
  "Serengeti National Park": serengetiImg,
  "Mount Kenya National Park": mountKenyaImg,
  "Mount Kenya": mountKenyaImg,
  "Nairobi City": nairobiImg,
  "Zanzibar Archipelago": zanzibarImg,
  "Bwindi Impenetrable Forest": bwindiImg,
  "Amboseli National Park": amboseliImg,
  "Victoria Falls": victoriaFallsImg,
  "Diani Beach": dianiBeachImg,
  "Samburu National Reserve": samburuImg,
  "Lake Victoria": lakeVictoriaImg,
  "River Nile": nileRiverImg,
  "Lamu Island": lamuIslandImg,
  "Mount Kilimanjaro": kilimanjaroImg,
  "Volcanoes National Park": volcanoesRwandaImg,
  "Simien Mountains": simienMountainsImg,
  "Lake Nakuru National Park": lakeVictoriaImg,
  "Tsavo National Parks": amboseliImg,
  "Hell's Gate National Park": mountKenyaImg,
};

const DestinationDetail = () => {
  const { id } = useParams();

  const { data: destination, isLoading: destinationLoading } = useQuery({
    queryKey: ["destination", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("destinations")
        .select("*")
        .eq("id", id)
        .eq("status", "published")
        .maybeSingle();

      if (error) throw error;
      return data;
    },
  });

  const { data: packages, isLoading: packagesLoading } = useQuery({
    queryKey: ["destination-packages", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("packages")
        .select("*")
        .eq("destination_id", id)
        .eq("status", "published")
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data;
    },
  });

  if (destinationLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!destination) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Destination Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The destination you're looking for doesn't exist.
          </p>
          <Button asChild>
            <Link to="/destinations">Browse All Destinations</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Image */}
      <div className="relative h-[60vh] mt-16">
        <img 
          src={destinationImages[destination.title] || maasaiMaraImg} 
          alt={destination.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70" />
        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 pb-8">
          <Button asChild variant="ghost" className="text-white hover:text-white/80 mb-4">
            <Link to="/destinations">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Destinations
            </Link>
          </Button>
          <h1 className="text-5xl font-bold text-white mb-4">
            {destination.title}
          </h1>
          <div className="flex items-center gap-2 text-white text-lg">
            <MapPin className="h-5 w-5" />
            <span>
              {destination.region ? `${destination.region}, ` : ""}
              {destination.country}
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Description */}
        <section className="max-w-4xl mb-16">
          <h2 className="text-3xl font-bold mb-6">About This Destination</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {destination.description}
          </p>
        </section>

        {/* Highlights */}
        {destination.highlights && destination.highlights.length > 0 && (
          <section className="max-w-4xl mb-16">
            <h2 className="text-3xl font-bold mb-6">Highlights</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {destination.highlights.map((highlight: string, index: number) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg"
                >
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Available Packages */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Available Safari Packages</h2>
          {packagesLoading ? (
            <div className="flex justify-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : packages && packages.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <PackageCard 
                  key={pkg.id}
                  id={pkg.id}
                  title={pkg.title}
                  description={pkg.description || ""}
                  imageUrl={pkg.image_url || ""}
                  priceKes={pkg.price_kes}
                  durationDays={pkg.duration_days}
                  durationNights={pkg.duration_nights}
                  difficulty={pkg.difficulty}
                  seatsAvailable={pkg.seats_available}
                  rating={pkg.rating || 4.5}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-muted rounded-lg">
              <p className="text-muted-foreground mb-4">
                No packages available for this destination yet.
              </p>
              <Button asChild>
                <Link to="/packages">Browse All Packages</Link>
              </Button>
            </div>
          )}
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default DestinationDetail;

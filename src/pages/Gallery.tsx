import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Import gallery images - Authentic East African culture and people
import maasaiCulture from "@/assets/gallery/maasai-real.jpg";
import maasaiWarriors from "@/assets/gallery/maasai-warriors-ceremony.jpg";
import kenyanSafariGuide from "@/assets/gallery/kenyan-safari-guide.jpg";
import maasaiWomenCeremony from "@/assets/gallery/maasai-women-ceremony.jpg";
import africanSafariGuide from "@/assets/gallery/african-safari-guide.jpg";
import elephantsSunset from "@/assets/gallery/elephants-real.jpg";
import africanMarket from "@/assets/gallery/african-market.jpg";
import lionsSavanna from "@/assets/gallery/lions-real.jpg";
import villageKilimanjaro from "@/assets/gallery/village-kilimanjaro.jpg";
import giraffesSunset from "@/assets/gallery/giraffes-sunset.jpg";
import traditionalDance from "@/assets/gallery/traditional-dance.jpg";
import africanCrafts from "@/assets/gallery/african-crafts.jpg";
import maasaiVillage from "@/assets/gallery/maasai-village.jpg";
import africanSunsetCulture from "@/assets/gallery/african-sunset-culture.jpg";
import traditionalDress from "@/assets/gallery/traditional-dress.jpg";
import culturalCeremony from "@/assets/gallery/cultural-ceremony.jpg";
import maasaiWomen from "@/assets/gallery/maasai-women.jpg";
import africanMusicians from "@/assets/gallery/african-musicians.jpg";
import tribalClothing from "@/assets/gallery/tribal-clothing.jpg";

// Import destination images - Authentic East African destinations
import maasaiMara from "@/assets/destinations/maasai-mara-authentic.jpg";
import mountKenya from "@/assets/destinations/mount-kenya-authentic.jpg";
import dianiBeach from "@/assets/destinations/diani-beach-coast.jpg";
import nairobiCity from "@/assets/destinations/nairobi-authentic.jpg";
import serengeti from "@/assets/destinations/serengeti-landscape.jpg";
import zanzibar from "@/assets/destinations/zanzibar-authentic.jpg";
import bwindiForest from "@/assets/destinations/bwindi-authentic.jpg";
import volcanoesRwanda from "@/assets/destinations/volcanoes-rwanda.jpg";
import simienMountains from "@/assets/destinations/simien-mountains.jpg";
import victoriaFalls from "@/assets/destinations/victoria-falls-view.jpg";
import amboseli from "@/assets/destinations/amboseli-elephants.jpg";
import lakeVictoria from "@/assets/destinations/lake-victoria.jpg";
import nileRiver from "@/assets/destinations/nile-river.jpg";
import lamuIsland from "@/assets/destinations/lamu-island.jpg";
import kilimanjaro from "@/assets/destinations/kilimanjaro.jpg";
import maasaiMaraWildlife from "@/assets/destinations/maasai-mara-wildlife.jpg";
import samburuReserve from "@/assets/destinations/samburu-reserve.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const cultureImages = [
    { src: maasaiWarriors, title: "Maasai Warriors Ceremony", description: "Traditional Adumu jumping dance" },
    { src: maasaiWomenCeremony, title: "Maasai Women", description: "Colorful traditional dress and beadwork" },
    { src: maasaiCulture, title: "Maasai Culture", description: "Authentic tribal traditions" },
    { src: kenyanSafariGuide, title: "Kenyan Safari Guide", description: "Expert wildlife guide in Maasai Mara" },
    { src: africanSafariGuide, title: "African Safari Experience", description: "Local guides sharing knowledge" },
    { src: traditionalDance, title: "Traditional Dance", description: "East African cultural performance" },
    { src: africanMarket, title: "African Market", description: "Colorful crafts and textiles" },
    { src: africanCrafts, title: "Handmade Crafts", description: "Traditional East African artistry" },
    { src: maasaiVillage, title: "Maasai Village", description: "Authentic cultural homestead" },
    { src: traditionalDress, title: "Traditional Attire", description: "Vibrant cultural clothing" },
    { src: culturalCeremony, title: "Cultural Ceremony", description: "Community celebration" },
    { src: maasaiWomen, title: "Maasai Jewelry", description: "Intricate beadwork and adornments" },
    { src: africanMusicians, title: "Traditional Musicians", description: "Rhythms of East Africa" },
    { src: tribalClothing, title: "Tribal Heritage", description: "Colorful cultural expressions" },
    { src: villageKilimanjaro, title: "Traditional Village", description: "Life at the foot of Kilimanjaro" },
  ];

  const wildlifeImages = [
    { src: elephantsSunset, title: "Elephants at Sunset", description: "Majestic African elephants" },
    { src: lionsSavanna, title: "Lion Pride", description: "Kings of the savanna" },
    { src: giraffesSunset, title: "Giraffe Silhouettes", description: "Grace under African skies" },
  ];

  const landscapeImages = [
    { src: maasaiMara, title: "Maasai Mara", description: "Wildebeest migration spectacle" },
    { src: maasaiMaraWildlife, title: "Maasai Mara Wildlife", description: "Golden savanna landscape" },
    { src: mountKenya, title: "Mount Kenya", description: "Trekking with local guides" },
    { src: kilimanjaro, title: "Mount Kilimanjaro", description: "Africa's highest peak" },
    { src: dianiBeach, title: "Diani Beach", description: "Pristine coastal paradise" },
    { src: nairobiCity, title: "Nairobi", description: "Modern East African hub" },
    { src: serengeti, title: "Serengeti", description: "Tanzania's endless plains" },
    { src: zanzibar, title: "Stone Town Zanzibar", description: "Historic Swahili culture" },
    { src: lakeVictoria, title: "Lake Victoria", description: "Africa's largest lake" },
    { src: nileRiver, title: "River Nile", description: "Source of the Nile in Uganda" },
    { src: lamuIsland, title: "Lamu Island", description: "UNESCO World Heritage Site" },
    { src: bwindiForest, title: "Bwindi Forest Uganda", description: "Gorilla trekking with rangers" },
    { src: volcanoesRwanda, title: "Volcanoes Park", description: "Misty volcanic peaks" },
    { src: amboseli, title: "Amboseli Park", description: "Elephants and Kilimanjaro views" },
    { src: samburuReserve, title: "Samburu Reserve", description: "Northern Kenya wilderness" },
    { src: simienMountains, title: "Simien Mountains", description: "Ethiopia's dramatic highlands" },
    { src: victoriaFalls, title: "Victoria Falls", description: "Thunder that smokes" },
    { src: africanSunsetCulture, title: "East African Sunset", description: "Golden moments in the savanna" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Immerse yourself in the beauty of Africa through our curated collection of stunning imagery
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-8">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="landscapes">Landscapes</TabsTrigger>
              <TabsTrigger value="wildlife">Wildlife</TabsTrigger>
              <TabsTrigger value="culture">Culture</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-6">Landscapes</h2>
                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {landscapeImages.map((image, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-lg cursor-pointer aspect-[4/3]"
                      onClick={() => setSelectedImage(image.src)}
                    >
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                          <h3 className="font-bold text-lg">{image.title}</h3>
                          <p className="text-sm text-white/80">{image.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-6">Wildlife</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {wildlifeImages.map((image, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-lg cursor-pointer aspect-[4/3]"
                      onClick={() => setSelectedImage(image.src)}
                    >
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                          <h3 className="font-bold text-lg">{image.title}</h3>
                          <p className="text-sm text-white/80">{image.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-6">Culture</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {cultureImages.map((image, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-lg cursor-pointer aspect-[4/3]"
                      onClick={() => setSelectedImage(image.src)}
                    >
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                          <h3 className="font-bold text-lg">{image.title}</h3>
                          <p className="text-sm text-white/80">{image.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </TabsContent>

            <TabsContent value="landscapes">
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                {landscapeImages.map((image, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-lg cursor-pointer aspect-[4/3]"
                    onClick={() => setSelectedImage(image.src)}
                  >
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h3 className="font-bold text-lg">{image.title}</h3>
                        <p className="text-sm text-white/80">{image.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="wildlife">
              <div className="grid md:grid-cols-3 gap-4">
                {wildlifeImages.map((image, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-lg cursor-pointer aspect-[4/3]"
                    onClick={() => setSelectedImage(image.src)}
                  >
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h3 className="font-bold text-lg">{image.title}</h3>
                        <p className="text-sm text-white/80">{image.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="culture">
              <div className="grid md:grid-cols-3 gap-4">
                {cultureImages.map((image, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-lg cursor-pointer aspect-[4/3]"
                    onClick={() => setSelectedImage(image.src)}
                  >
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h3 className="font-bold text-lg">{image.title}</h3>
                        <p className="text-sm text-white/80">{image.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Full size"
            className="max-w-full max-h-full object-contain"
          />
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-white/70 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
        </div>
      )}

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Gallery;

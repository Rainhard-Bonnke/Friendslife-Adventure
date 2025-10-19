import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Import gallery images
import maasaiCulture from "@/assets/gallery/maasai-culture.jpg";
import elephantsSunset from "@/assets/gallery/elephants-sunset.jpg";
import africanMarket from "@/assets/gallery/african-market.jpg";
import lionsSavanna from "@/assets/gallery/lions-savanna.jpg";
import villageKilimanjaro from "@/assets/gallery/village-kilimanjaro.jpg";
import giraffesSunset from "@/assets/gallery/giraffes-sunset.jpg";

// Import destination images
import maasaiMara from "@/assets/destinations/maasai-mara.jpg";
import mountKenya from "@/assets/destinations/mount-kenya.jpg";
import dianiBeach from "@/assets/destinations/diani-beach.jpg";
import nairobiCity from "@/assets/destinations/nairobi-city.jpg";
import serengeti from "@/assets/destinations/serengeti.jpg";
import zanzibar from "@/assets/destinations/zanzibar.jpg";
import bwindiForest from "@/assets/destinations/bwindi-forest.jpg";
import volcanoesRwanda from "@/assets/destinations/volcanoes-rwanda.jpg";
import simienMountains from "@/assets/destinations/simien-mountains.jpg";
import victoriaFalls from "@/assets/destinations/victoria-falls.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const cultureImages = [
    { src: maasaiCulture, title: "Maasai Warriors", description: "Traditional jumping ceremony" },
    { src: africanMarket, title: "African Market", description: "Colorful crafts and textiles" },
    { src: villageKilimanjaro, title: "Traditional Village", description: "Life at the foot of Kilimanjaro" },
  ];

  const wildlifeImages = [
    { src: elephantsSunset, title: "Elephants at Sunset", description: "Majestic African elephants" },
    { src: lionsSavanna, title: "Lion Pride", description: "Kings of the savanna" },
    { src: giraffesSunset, title: "Giraffe Silhouettes", description: "Grace under African skies" },
  ];

  const landscapeImages = [
    { src: maasaiMara, title: "Maasai Mara", description: "Golden hour in the Mara" },
    { src: mountKenya, title: "Mount Kenya", description: "Misty mountain majesty" },
    { src: dianiBeach, title: "Diani Beach", description: "Paradise on the coast" },
    { src: nairobiCity, title: "Nairobi", description: "Modern African metropolis" },
    { src: serengeti, title: "Serengeti", description: "The great migration" },
    { src: zanzibar, title: "Zanzibar", description: "Spice island beaches" },
    { src: bwindiForest, title: "Bwindi Forest", description: "Gorilla habitat" },
    { src: volcanoesRwanda, title: "Volcanoes Park", description: "Misty volcanic peaks" },
    { src: simienMountains, title: "Simien Mountains", description: "Ethiopia's dramatic highlands" },
    { src: victoriaFalls, title: "Victoria Falls", description: "Thunder that smokes" },
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
    </div>
  );
};

export default Gallery;

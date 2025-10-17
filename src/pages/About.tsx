import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Award, Globe, Heart } from "lucide-react";
import logo from "@/assets/logo.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative h-[50vh] bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">About Us</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Your trusted partner in African adventures since 1999
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src={logo} 
                  alt="Friends Life Adventure" 
                  className="w-full max-w-md mx-auto rounded-lg shadow-medium"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Founded in 1999, Friends Life Adventure has been creating unforgettable 
                    safari experiences across Kenya for over two decades. What started as a 
                    passion for sharing Africa's natural wonders has grown into one of Kenya's 
                    most trusted tour operators.
                  </p>
                  <p>
                    We specialize in authentic safari experiences that connect travelers with 
                    Kenya's incredible wildlife, stunning landscapes, and rich cultures. From 
                    the world-famous Maasai Mara to the snow-capped peaks of Mount Kenya, we 
                    help you discover the heart of Africa.
                  </p>
                  <p>
                    Our team of experienced guides, commitment to sustainable tourism, and 
                    personalized service ensure that every journey with us is not just a trip, 
                    but a life-changing adventure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-secondary-foreground">Our Values</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-secondary-foreground">Expert Team</h3>
                <p className="text-secondary-foreground/80">
                  Licensed, experienced guides passionate about wildlife and conservation
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-secondary-foreground">Quality Service</h3>
                <p className="text-secondary-foreground/80">
                  Personalized attention and premium experiences for every traveler
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-secondary-foreground">Sustainability</h3>
                <p className="text-secondary-foreground/80">
                  Committed to eco-friendly practices and supporting local communities
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-secondary-foreground">Passion</h3>
                <p className="text-secondary-foreground/80">
                  Deep love for Africa's wildlife and dedication to conservation
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">25+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-accent mb-2">10,000+</div>
                <div className="text-muted-foreground">Happy Travelers</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Tour Packages</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-accent mb-2">4.9</div>
                <div className="text-muted-foreground">Average Rating</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;

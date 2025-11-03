import { Shield, Award, Heart, Globe, Clock, Star } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Fully licensed, insured, and certified by Kenya Tourism Board. Your safety is our top priority.",
    },
    {
      icon: Award,
      title: "Expert Guides",
      description: "Local guides with 10+ years experience who know every corner of East Africa and its wildlife.",
    },
    {
      icon: Heart,
      title: "Sustainable Tourism",
      description: "We support local communities and conservation efforts to preserve Africa's natural heritage.",
    },
    {
      icon: Globe,
      title: "Diverse Destinations",
      description: "From savannas to beaches, mountains to cities - explore 50+ destinations across East Africa.",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer support before, during, and after your safari adventure.",
    },
    {
      icon: Star,
      title: "Best Value",
      description: "Competitive prices with no hidden fees. What you see is what you pay - always transparent.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Safari Kenya
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            15 years of creating unforgettable African adventures with thousands of happy travelers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center">
            <p className="text-4xl font-bold text-primary mb-2">15+</p>
            <p className="text-muted-foreground">Years Experience</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary mb-2">50+</p>
            <p className="text-muted-foreground">Destinations</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary mb-2">5,000+</p>
            <p className="text-muted-foreground">Happy Travelers</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary mb-2">4.9</p>
            <p className="text-muted-foreground">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
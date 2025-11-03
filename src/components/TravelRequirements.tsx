import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FileText, Heart, Plane, Shield } from "lucide-react";

const TravelRequirements = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Travel Requirements & Tips
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know before your East African adventure
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <FileText className="w-6 h-6 text-primary" />
                <CardTitle>Visa Requirements</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <Badge className="mb-2">Kenya</Badge>
                <p className="text-sm text-muted-foreground">
                  eVisa available online ($50 USD). Most nationalities can apply online before travel. Valid for 90 days.
                </p>
              </div>
              <div>
                <Badge className="mb-2">Tanzania</Badge>
                <p className="text-sm text-muted-foreground">
                  Visa on arrival or eVisa ($50 USD). Single entry valid for 90 days.
                </p>
              </div>
              <div>
                <Badge className="mb-2">Uganda & Rwanda</Badge>
                <p className="text-sm text-muted-foreground">
                  East African Tourist Visa available ($100 USD) - covers all three countries for 90 days.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Heart className="w-6 h-6 text-primary" />
                <CardTitle>Health & Vaccinations</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="font-semibold mb-2">Required:</p>
                <p className="text-sm text-muted-foreground">
                  • Yellow Fever vaccination (certificate required)<br />
                  • Valid travel insurance
                </p>
              </div>
              <div>
                <p className="font-semibold mb-2">Recommended:</p>
                <p className="text-sm text-muted-foreground">
                  • Malaria prophylaxis<br />
                  • Typhoid, Hepatitis A & B<br />
                  • Tetanus booster<br />
                  • COVID-19 vaccination
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Plane className="w-6 h-6 text-primary" />
                <CardTitle>What to Pack</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Lightweight, neutral-colored clothing</li>
                <li>• Sun protection (hat, sunscreen, sunglasses)</li>
                <li>• Comfortable walking shoes</li>
                <li>• Binoculars and camera with zoom lens</li>
                <li>• Insect repellent</li>
                <li>• Light jacket for early mornings</li>
                <li>• Power adapter (UK-style 3-pin plugs)</li>
                <li>• Copy of important documents</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-primary" />
                <CardTitle>Travel Insurance</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                We strongly recommend comprehensive travel insurance that covers:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Medical expenses and evacuation</li>
                <li>• Trip cancellation/interruption</li>
                <li>• Lost or delayed baggage</li>
                <li>• Adventure activities coverage</li>
                <li>• 24/7 emergency assistance</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is the best time to visit?</AccordionTrigger>
                <AccordionContent>
                  The best time for wildlife viewing is during the dry seasons: January-February and June-October. 
                  The Great Migration in Maasai Mara peaks from July to October. Beach destinations like Zanzibar 
                  are great year-round, though avoid the heavy rains in April-May.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is it safe to travel in East Africa?</AccordionTrigger>
                <AccordionContent>
                  Yes, when traveling with reputable tour operators. We prioritize safety with experienced guides, 
                  well-maintained vehicles, and established accommodations. Follow standard travel precautions and 
                  our guide's instructions, especially during game drives.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>What currency should I bring?</AccordionTrigger>
                <AccordionContent>
                  Kenya uses Kenyan Shillings (KES), Tanzania uses Tanzanian Shillings (TZS). US Dollars are widely 
                  accepted. ATMs are available in major cities. Credit cards work in hotels and lodges but carry 
                  some cash for small purchases and tips.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Can I see the Big Five?</AccordionTrigger>
                <AccordionContent>
                  Yes! Maasai Mara, Serengeti, and many other reserves offer excellent opportunities to see lions, 
                  leopards, elephants, buffalo, and rhinos. While sightings can never be 100% guaranteed in the 
                  wild, our experienced guides know the best locations and times to maximize your chances.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>What about internet and phone connectivity?</AccordionTrigger>
                <AccordionContent>
                  Most lodges and hotels have WiFi, though it may be slower in remote areas. Local SIM cards are 
                  cheap and widely available (Safaricom in Kenya, Vodacom in Tanzania). Consider buying one at 
                  the airport for reliable connectivity during your trip.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TravelRequirements;
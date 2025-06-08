
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, Users, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Security First",
      description: "We prioritize the security and privacy of our customers above all else."
    },
    {
      icon: Target,
      title: "Quality Focused",
      description: "Every product undergoes rigorous testing to ensure exceptional quality."
    },
    {
      icon: Users,
      title: "Customer Centric",
      description: "Our customers' success is our success. We're here to support your journey."
    },
    {
      icon: Award,
      title: "Excellence Driven",
      description: "We strive for excellence in everything we do, from products to service."
    }
  ];

  const stats = [
    { number: "10K+", label: "Happy Customers" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Available" },
    { number: "50+", label: "Premium Products" }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-primary text-glow">Vanish</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Vanish is the #1 hub for Redzone players looking to fully customize and elevate their FiveM experience.
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed mt-4">
            We offer premium graphic packs, sound packs, reshades, latest nve's optimization tools, and exclusive leaks — all designed to help you stand out and perform better.
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed mt-4">
            We're also open to partnering with Redzone servers, developers, and tool creators pushing the FiveM scene forward.
          </p>
          <p className="text-lg font-semibold text-primary max-w-4xl mx-auto leading-relaxed mt-6">
            Join us and let's change the game.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our <span className="text-primary">Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

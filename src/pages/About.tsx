
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, Users, Award, Zap, Heart } from "lucide-react";

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
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're a team of passionate professionals dedicated to providing premium digital products 
            and services that elevate your experience and unlock your potential.
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="mb-16 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              To empower individuals and businesses with cutting-edge digital solutions that transform 
              the way they operate, compete, and succeed in the digital landscape. We believe in making 
              advanced technology accessible, reliable, and incredibly effective.
            </p>
          </CardContent>
        </Card>

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

        {/* Why Choose Us */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose <span className="text-primary">Vanish</span>?
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Zap className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Lightning Fast Delivery</h3>
                  <p className="text-muted-foreground">
                    Get instant access to your digital products the moment your payment is confirmed.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Enterprise-Grade Security</h3>
                  <p className="text-muted-foreground">
                    Your data and transactions are protected with military-grade encryption and security protocols.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Heart className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Dedicated Support</h3>
                  <p className="text-muted-foreground">
                    Our passionate support team is available 24/7 to ensure your success with our products.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
                alt="Team working"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-xl" />
            </div>
          </div>
        </div>

        {/* Trust Section */}
        <Card className="bg-card/50 backdrop-blur-sm text-center">
          <CardContent className="p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6">Built on Trust</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Since our founding, we've built lasting relationships with customers worldwide by 
              delivering on our promises and exceeding expectations. Your trust is our most valuable asset.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-2" />
                SSL Secured
              </div>
              <div className="flex items-center">
                <Award className="h-4 w-4 mr-2" />
                Verified Business
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2" />
                Trusted by 10K+ Users
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;

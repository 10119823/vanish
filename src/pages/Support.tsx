
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageCircle, Mail, Clock, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Support = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Support ticket submitted:", formData);
    toast({
      title: "Ticket Submitted",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary text-glow">Support</span> Center
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're here to help! Choose your preferred way to get in touch with our support team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Discord Support */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 text-center">
            <CardHeader>
              <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Discord Support</CardTitle>
              <CardDescription>
                Join our community for instant help and real-time chat with our team
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full glow-effect" onClick={() => window.open('https://discord.gg/vanish', '_blank')}>
                Join Discord
              </Button>
              <div className="flex items-center justify-center mt-4 text-sm text-muted-foreground">
                <Users className="h-4 w-4 mr-1" />
                2,847 members online
              </div>
            </CardContent>
          </Card>

          {/* Email Support */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 text-center">
            <CardHeader>
              <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Email Support</CardTitle>
              <CardDescription>
                Send us a detailed message and we'll respond within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" onClick={() => window.location.href = 'mailto:support@vanish.com'}>
                Send Email
              </Button>
              <div className="flex items-center justify-center mt-4 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 mr-1" />
                Avg. response: 4 hours
              </div>
            </CardContent>
          </Card>

          {/* Live Chat */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 text-center">
            <CardHeader>
              <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Live Chat</CardTitle>
              <CardDescription>
                Chat with our support agents during business hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                Start Chat
              </Button>
              <div className="flex items-center justify-center mt-4 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                Currently online
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Support Ticket Form */}
        <Card className="max-w-2xl mx-auto bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Submit a Support Ticket</CardTitle>
            <CardDescription className="text-center">
              Fill out the form below and we'll get back to you as soon as possible
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="Brief description of your issue"
                  value={formData.subject}
                  onChange={(e) => handleInputChange("subject", e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Please provide detailed information about your issue..."
                  className="min-h-32"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  required
                />
              </div>
              
              <Button type="submit" className="w-full glow-effect" size="lg">
                Submit Ticket
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Support Hours */}
        <div className="text-center mt-12">
          <h3 className="text-xl font-semibold mb-4">Support Hours</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto text-sm text-muted-foreground">
            <div>
              <strong>Discord:</strong><br />24/7 Community Support
            </div>
            <div>
              <strong>Email:</strong><br />24/7 (Response within 24h)
            </div>
            <div>
              <strong>Live Chat:</strong><br />Mon-Fri 9AM-6PM EST
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;

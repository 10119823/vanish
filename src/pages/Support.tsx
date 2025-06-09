
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Mail, Clock, Users } from "lucide-react";

const Support = () => {
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
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
              <Button className="w-full glow-effect" onClick={() => window.open('https://discord.gg/fgtRKPUqQc', '_blank')}>
                Join Discord
              </Button>
              <div className="flex items-center justify-center mt-4 text-sm text-muted-foreground">
                <Users className="h-4 w-4 mr-1" />
                1,247 members online
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
        </div>

        {/* Support Hours */}
        <div className="text-center mt-12">
          <h3 className="text-xl font-semibold mb-4">Support Hours</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl mx-auto text-sm text-muted-foreground">
            <div>
              <strong>Discord:</strong><br />24/7 Community Support
            </div>
            <div>
              <strong>Email:</strong><br />24/7 (Response within 24h)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;

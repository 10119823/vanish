
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft, Star, Shield, Zap, Download, MessageCircle } from "lucide-react";

// Same products array as in Store.tsx
const products = [
  {
    id: 1,
    name: "Vanish Optimization v1",
    category: "Performance",
    price: 12.99,
    rating: 4.9,
    image: `https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=300&fit=crop`,
    description: "Advanced performance enhancement tools",
    popular: true
  },
  {
    id: 2,
    name: "Digital Security Suite",
    category: "Security",
    price: 79.99,
    rating: 4.8,
    image: `https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop`,
    description: "Complete security and privacy solutions"
  },
  {
    id: 3,
    name: "VIP",
    category: "Tools",
    price: 3.99,
    rating: 4.7,
    image: `https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop`,
    description: "VIP Discord Access in Vanish"
  },
  {
    id: 4,
    name: "VIP+",
    category: "Tools",
    price: 6.99,
    rating: 4.8,
    image: `https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop`,
    description: "VIP+ Discord Access in Vanish"
  }
];

const ProductPage = () => {
  const { id } = useParams();
  
  // Find the product by ID
  const product = products.find(p => p.id === parseInt(id || '1'));
  
  // Fallback to first product if not found
  const currentProduct = product || products[0];

  const reviews = 234;

  // Dynamic features and benefits based on product
  const getProductFeatures = (productName: string) => {
    switch (productName) {
      case "Vanish Optimization v1":
        return [
          "Advanced algorithm optimization",
          "Real-time performance monitoring",
          "Automated system tuning",
          "24/7 priority support",
          "Lifetime updates included"
        ];
      case "Digital Security Suite":
        return [
          "Complete privacy protection",
          "Advanced encryption tools",
          "Secure browsing features",
          "Identity protection",
          "24/7 security monitoring"
        ];
      case "VIP":
        return [
          "VIP Discord access",
          "Exclusive channels",
          "Priority support",
          "Community benefits",
          "Regular updates"
        ];
      case "VIP+":
        return [
          "VIP+ Discord access",
          "All VIP features included",
          "Premium exclusive channels",
          "Advanced priority support",
          "Beta access to new features"
        ];
      default:
        return [
          "Premium features",
          "Priority support",
          "Regular updates",
          "Community access",
          "Documentation included"
        ];
    }
  };

  const getProductBenefits = (productName: string) => {
    switch (productName) {
      case "Vanish Optimization v1":
        return [
          "Increase performance by up to 300%",
          "Reduce system overhead",
          "Improve user experience",
          "Save time and resources"
        ];
      case "Digital Security Suite":
        return [
          "Complete online privacy",
          "Protection from threats",
          "Secure digital identity",
          "Peace of mind browsing"
        ];
      case "VIP":
        return [
          "Access to exclusive community",
          "Direct support from team",
          "Early access to updates",
          "Enhanced Discord experience"
        ];
      case "VIP+":
        return [
          "All VIP benefits plus more",
          "Premium community access",
          "Beta testing opportunities",
          "Maximum Discord privileges"
        ];
      default:
        return [
          "Enhanced functionality",
          "Improved experience",
          "Priority access",
          "Community benefits"
        ];
    }
  };

  const faqs = [
    {
      question: "How quickly will I receive my product?",
      answer: "All digital products are delivered instantly after successful payment verification."
    },
    {
      question: "Is there a money-back guarantee?",
      answer: "Yes, we offer a 30-day money-back guarantee if you're not completely satisfied."
    },
    {
      question: "Do you provide customer support?",
      answer: "Absolutely! We provide 24/7 customer support through our Discord server and ticket system."
    },
    {
      question: "Are updates included?",
      answer: "Yes, all future updates and improvements are included with your purchase at no additional cost."
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <Link to="/store" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Store
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={currentProduct.image}
                alt={currentProduct.name}
                className="w-full h-96 object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge className="mb-3">{currentProduct.category}</Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{currentProduct.name}</h1>
              <div className="flex items-center mb-4">
                <div className="flex items-center mr-4">
                  <Star className="h-5 w-5 fill-primary text-primary mr-1" />
                  <span className="text-lg font-semibold">{currentProduct.rating}</span>
                  <span className="text-muted-foreground ml-2">({reviews} reviews)</span>
                </div>
              </div>
              <p className="text-xl text-muted-foreground mb-6">{currentProduct.description}</p>
              <div className="text-4xl font-bold text-primary mb-6">${currentProduct.price}</div>
            </div>

            {/* Purchase Section */}
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20">
              <div className="space-y-4">
                <Button size="lg" className="w-full text-lg py-6 glow-effect">
                  <Download className="mr-2 h-5 w-5" />
                  Buy Now - Instant Delivery
                </Button>
                <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Shield className="h-4 w-4 mr-1" />
                    Secure Payment
                  </div>
                  <div className="flex items-center">
                    <Zap className="h-4 w-4 mr-1" />
                    Instant Access
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="h-4 w-4 mr-1" />
                    24/7 Support
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Product Details */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Features */}
          <Card className="bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Features Included</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {getProductFeatures(currentProduct.name).map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Benefits */}
          <Card className="bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Key Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {getProductBenefits(currentProduct.name).map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;


import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Search, Filter, Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Vanish Optimization v1",
    category: "Performance",
    price: 12.99,
    rating: 4.9,
    image: "https://i.postimg.cc/qMBsJwk6/Vanish-Logo.png",
    description: "Advanced performance enhancement tools",
    popular: true
  },
  {
    id: 3,
    name: "VIP",
    category: "Tools",
    price: 3.99,
    rating: 4.7,
    image: "https://i.postimg.cc/qMBsJwk6/Vanish-Logo.png",
    description: "VIP Discord Access in Vanish"
  },
  {
    id: 4,
    name: "VIP+",
    category: "Tools",
    price: 6.99,
    rating: 4.8,
    image: "https://i.postimg.cc/qMBsJwk6/Vanish-Logo.png",
    description: "VIP+ Discord Access in Vanish"
  }
];

const Store = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Performance", "Tools"];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Digital <span className="text-primary text-glow">Store</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our premium collection of digital products and services
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "glow-effect" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-105">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  {product.popular && (
                    <Badge className="absolute top-3 left-3 z-10 bg-primary">
                      Popular
                    </Badge>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">{product.category}</Badge>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-primary text-primary mr-1" />
                    <span className="text-sm">{product.rating}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <div className="text-2xl font-bold text-primary">
                  ${product.price}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Link to={`/product/${product.id}`} className="w-full">
                  <Button className="w-full glow-effect">
                    View Details
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">No products found matching your criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Store;

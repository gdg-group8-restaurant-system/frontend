import { Utensils, Clock, CreditCard } from "lucide-react";
import FoodCard from "../components/FoodCard";
import HeroSection from "../components/HeroSection";
export default function HomePage() {
   const features = [
    {
      icon: <Utensils className="h-8 w-8 text-orange-600" />,
      title: "Wide Selection",
      description:
        "Choose from a variety of delicious meals, snacks, and beverages",
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-600" />,
      title: "Quick Pickup",
      description:
        "Order ahead and skip the line. Your food will be ready when you arrive",
    },
    {
      icon: <CreditCard className="h-8 w-8 text-orange-600" />,
      title: "Easy Payment",
      description:
        "Pay with your student card or credit card for a seamless experience",
    },
  ];
  return (
    <div>
       {/* Hero Section */}
      <HeroSection />
       {/* Features Section */}
      <section className="border-b bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 text-center rounded-xl shadow-md hover:shadow-lg transition"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

         {/* Featured Items */}
           <FoodCard item={{
          image: "https://images.unsplash.com/photo-1763890869755-f1dce911f196?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
          name: "Sample Food",
          description: "This is a delicious sample food.",
          price: "9.988"
        }} />
    </div>
  );
}
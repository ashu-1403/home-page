import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Functions = () => {
  const features = [
    {
      title: "CREATE",
      subtitle: "custom products",
      description:
        "Easily add your designs to a wide range of products using our free tools",
      image: "https://printify.com/pfh/assets/legacy/custom-products.png",
    },
    {
      title: "SELL",
      subtitle: "on your terms",
      description:
        "You choose the products, sale price, and where to sell",
      image: "https://printify.com/pfh/assets/legacy/your-products.png",
    },
    {
      title: "WE HANDLE",
      subtitle: "fulfillment",
      description:
        "Once an order is placed, we automatically handle all the printing and delivery logistics",
      image: "https://printify.com/pfh/assets/legacy/fullfillment.png",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="max-w-screen-xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105"
            variants={itemVariants}
          >
            <div className="p-8">
              <img
                src={feature.image}
                alt={feature.subtitle}
                className="w-24 h-24 mx-auto mb-6 object-contain"
              />
              <h3 className="text-green-600 font-bold text-lg mb-2">{feature.title}</h3>
              <h4 className="text-2xl font-semibold mb-4">{feature.subtitle}</h4>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <motion.button
                className="inline-flex items-center text-green-600 font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Functions;
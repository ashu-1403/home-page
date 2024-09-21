import React from 'react';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      title: "Higher Profits",
      image: "https://printify.com/pfh/assets/legacy/higher-profits.svg",
      description: "We offer some of the lowest prices in the industry because print providers continuously compete to win your business."
    },
    {
      title: "Robust Scaling",
      image: "https://printify.com/pfh/assets/legacy/robust-scaling.svg",
      description: "Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality."
    },
    {
      title: "Best Selection",
      image: "https://printify.com/pfh/assets/legacy/best-selection.svg",
      description: "With 900+ products and top-quality brands, you can choose the best products for your business."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <motion.div 
      className="flex flex-col md:flex-row justify-between items-center mt-1 px-4 md:px-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {features.map((feature, index) => (
        <motion.div 
          key={index}
          className="flex flex-col items-center text-center p-4 max-w-xs"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.img
            src={feature.image}
            alt={feature.title}
            className="w-28 h-28 mb-4"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.h3 
            className="text-xl font-semibold mb-2"
            whileHover={{ scale: 1.1, color: "#4CAF50" }}
          >
            {feature.title}
          </motion.h3>
          <motion.p 
            className="text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {feature.description}
          </motion.p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Features;
import React, { useState } from "react";
import { motion } from "framer-motion";
import { DollarSign, ArrowRight } from "lucide-react";

const ProfitCalculator = () => {
  const [sellingPrice, setSellingPrice] = useState(30);
  const [productionCost, setProductionCost] = useState(12);

  const profit = sellingPrice - productionCost;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <motion.div 
        className="bg-white shadow-xl rounded-lg max-w-5xl w-full overflow-hidden flex flex-col lg:flex-row"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="bg-[#152d37] w-full lg:w-1/2 p-8 text-white flex flex-col justify-center">
          <motion.h1 
            className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
            variants={itemVariants}
          >
            Make Money, Risk-Free
          </motion.h1>
          <motion.p className="mb-6" variants={itemVariants}>
            You pay for fulfillment only when you make a sale.
          </motion.p>
          <motion.div 
            className="bg-[#1f414d] p-6 rounded-lg mb-6"
            variants={itemVariants}
          >
            <div className="flex justify-between mb-3 items-center">
              <p>You sell a t-shirt</p>
              <div className="flex items-center">
                <DollarSign className="h-4 w-4 mr-1" />
                <input
                  type="number"
                  value={sellingPrice}
                  onChange={(e) => setSellingPrice(Number(e.target.value))}
                  className="w-16 bg-transparent border-b border-gray-400 text-right focus:outline-none focus:border-green-400"
                />
              </div>
            </div>
            <div className="flex justify-between mb-3 items-center">
              <p>You pay for its production</p>
              <div className="flex items-center">
                <DollarSign className="h-4 w-4 mr-1" />
                <input
                  type="number"
                  value={productionCost}
                  onChange={(e) => setProductionCost(Number(e.target.value))}
                  className="w-16 bg-transparent border-b border-gray-400 text-right focus:outline-none focus:border-green-400"
                />
              </div>
            </div>
            <hr className="border-gray-500 mb-3" />
            <div className="flex justify-between">
              <p className="text-lg font-bold text-green-400">Your profit</p>
              <p className="text-lg font-bold text-green-400">${profit.toFixed(2)}</p>
            </div>
          </motion.div>
          <motion.button 
            className="bg-green-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={itemVariants}
          >
            Start selling <ArrowRight className="ml-2 h-5 w-5" />
          </motion.button>
          <motion.p 
            className="text-sm text-gray-400 mt-4"
            variants={itemVariants}
          >
            100% Free to use · 900+ Products · Largest print network
          </motion.p>
        </div>

        <div className="bg-[#f5faf8] w-full lg:w-1/2 p-8 flex justify-center items-center">
          <motion.img
            src="https://static.vecteezy.com/system/resources/previews/013/076/910/non_2x/girl-watering-plant-vector.jpg"
            alt="Illustration"
            className="h-auto w-full md:w-3/4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default ProfitCalculator;
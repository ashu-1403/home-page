import React from 'react';
import { motion } from 'framer-motion';

const HomePage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="bg-white min-h-screen flex items-center justify-center py-10 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <motion.div 
          className="lg:w-1/2 text-center lg:text-left"
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
        >
          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-4"
            variants={fadeIn}
          >
            Create and sell <br /> custom products
          </motion.h1>
          <motion.ul className="mb-6" variants={staggerChildren}>
            {[
              "100% Free to use",
              "900+ High-Quality Products",
              "Largest global print network"
            ].map((item, index) => (
              <motion.li 
                key={index}
                className="text-base md:text-lg text-gray-600 flex items-center mb-2"
                variants={fadeIn}
              >
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                {item}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div 
            className="flex justify-center lg:justify-start space-x-4"
            variants={staggerChildren}
          >
            <motion.button 
              className="bg-green-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-md text-sm md:text-lg hover:bg-green-600 transition duration-300"
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start for free
            </motion.button>
            <motion.button 
              className="flex items-center border border-gray-300 text-gray-600 px-4 py-2 md:px-6 md:py-3 rounded-md text-sm md:text-lg hover:border-gray-400 transition duration-300"
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-1.684a1 1 0 00-1.555.832v5.368a1 1 0 001.555.832l3.197-1.684a1 1 0 000-1.664z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
              How it works?
            </motion.button>
          </motion.div>

          <motion.p 
            className="text-gray-500 mt-4 text-sm md:text-base"
            variants={fadeIn}
          >
            Trusted by over 8M sellers around the world
          </motion.p>
        </motion.div>

        <motion.div 
          className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative">
            <motion.img
              src="https://printify.com/pfh/assets/animations/images/img_5.png"
              alt="Custom T-shirt"
              className="w-48 md:w-64 lg:w-80 shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <motion.div 
              className="absolute -right-8 -bottom-8"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <svg
                className="w-32 h-32 md:w-40 md:h-40 text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 4v16h16V4H4z"
                ></path>
              </svg>
              <motion.div 
                className="absolute top-0 right-0 w-16 h-16 md:w-24 md:h-24 bg-blue-100 rounded-full opacity-50"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              ></motion.div>
              <motion.div 
                className="absolute -bottom-6 -right-6 w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-full opacity-50"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              ></motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";

const CustomProductDesignPage = () => {
  const products = [
    {
      name: "Mug",
      image:
        "https://media.istockphoto.com/id/1169792828/photo/white-mug-cup-mockup-for-your-design-isolated-on-white-background-with-clipping-path.jpg?s=612x612&w=0&k=20&c=H_qy4TBf7RfsF7_tZCkuMLPWaFSILm78enKPV2p9mlM=",
    },
    {
      name: "Phone case",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCC4xsMcxFdsV88B8EFnrqFRZ8Ux8qz0XkZg&s",
    },
    {
      name: "T-shirt",
      image: "https://me99.in/wp-content/uploads/2021/08/White-Plain-T-Shirt.png",
    },
    {
      name: "Cap",
      image: "https://5.imimg.com/data5/BD/AP/MY-46186639/sports-cap.png",
    },
    {
      name: "Hoodie",
      image: "https://m.media-amazon.com/images/I/31sXvrhgyUL._AC_UY1100_.jpg",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="max-w-screen-xl mx-auto p-4 md:p-8 flex flex-col md:flex-row bg-white h-full mt-32 mb-16 shadow-2xl rounded-2xl overflow-hidden">
      <motion.div
        className="md:w-1/2 bg-gradient-to-br from-green-400 to-green-600 p-6 md:p-10 rounded-lg"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-3 gap-4">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg p-2 relative shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto object-cover rounded-lg"
              />
              <motion.div
                className="absolute top-2 right-2 bg-green-500 rounded-full p-1"
                whileHover={{ scale: 1.2, rotate: 90 }}
              >
                <Plus className="text-white" size={16} />
              </motion.div>
              <motion.p
                className="text-center mt-2 text-sm font-medium text-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {product.name}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.h1
          className="text-4xl font-bold mb-6 text-gray-800"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Easily add your design to a wide range of products
        </motion.h1>
        <motion.p
          className="text-gray-600 mb-8 text-lg"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          With our free design tools, you can easily add your custom designs to
          t-shirts, mugs, phone cases, and hundreds of other products.
        </motion.p>
        <motion.a
          href="#"
          className="text-green-500 flex items-center hover:underline text-lg font-semibold group"
          whileHover={{ x: 5 }}
        >
          All products{" "}
          <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-2" size={24} />
        </motion.a>
      </motion.div>
    </div>
  );
};

export default CustomProductDesignPage;
import React from "react";
import { motion } from "framer-motion";

const Store = () => {
  const platforms = [
    { name: "BigCommerce", logo: "https://s3.amazonaws.com/cmscritic.mediasite.org/assets/products/bigcommerce/logo-1453744322212.jpeg?v=1684511971273" },
    { name: "Wix", logo: "https://i.pcmag.com/imagery/reviews/00Z1mnZCcGR9r9D5hNbsFbW-36.fit_lim.size_1050x591.v1612863800.jpg" },
    { name: "Squarespace", logo: "https://avatars.githubusercontent.com/u/722929?s=200&v=4" },
    { name: "WooCommerce", logo: "https://www.waymore.io/wp-content/uploads/2021/10/woo.svg" },
    { name: "Shopify", logo: "https://yt3.googleusercontent.com/mhMmC61T_WOvi3EDpWhAYqt-clMQPp59lhOvK1nrbd_IMO00HOW4KmhOlNNwhBI37GVeh7qHRQ=s900-c-k-c0x00ffffff-no-rj" },
    { name: "Etsy", logo: "https://duckindia.com/wp-content/uploads/2023/08/1659109867etsy-logo-transparent-1024x1024.webp" },
    { name: "PrestaShop", logo: "https://cdn-icons-png.flaticon.com/512/825/825533.png" },
    { name: "API", logo: "https://media.licdn.com/dms/image/C5112AQF49DOfOhCFSA/article-cover_image-shrink_720_1280/0/1579816811751?e=2147483647&v=beta&t=e47GGJDzoqsm4dl3qV2EjVWrxyMzIwsPmEE9Gywo83w" },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          className="text-4xl font-extrabold text-gray-900 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Connect your store seamlessly
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-600 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Printify integrates effortlessly with major e-commerce platforms and marketplaces
        </motion.p>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-items-center mb-12">
          {platforms.map((platform, index) => (
            <motion.div 
              key={platform.name}
              className="w-24 h-24 flex items-center justify-center bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <img src={platform.logo} alt={platform.name} className="w-16 h-16 object-contain" />
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="w-40 h-40 mx-auto mb-12"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <img 
            src="https://play-lh.googleusercontent.com/mNEe0pw6FpUqGUpeXaRC3yIBIOdsp9gqF1ppnu9B3t_LNHIVUZ0IxqHwvErVRLtXiQ" 
            alt="Printify" 
            className="w-full h-full object-contain"
          />
        </motion.div>

        <motion.div
          className="text-gray-500 text-lg font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          And many more platforms supported!
        </motion.div>
      </div>
    </div>
  );
};

export default Store;
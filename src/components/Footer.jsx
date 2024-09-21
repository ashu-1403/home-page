import React from 'react';

const Footer = () => {
  const footerSections = [
    {
      title: "Integrations",
      items: ['Shopify', 'Etsy', 'eBay', 'Amazon', 'TikTok Shop', 'PrestaShop', 'BigCommerce', 'Wix', 'WooCommerce', 'Squarespace', 'Printify API', 'Printify Pop-Up', 'Shutterstock']
    },
    {
      title: "Discover",
      items: ['Blog', 'Guides', 'Products', 'Etsy print-on-demand', 'Shopify print-on-demand', 'Woocommerce print-on-demand', 'Wix print-on-demand', 'Squarespace print-on-demand', 'Make Your Own Shirt', 'Brands']
    },
    {
      title: "Start selling",
      items: ['Custom T-shirts', 'Custom Hoodies', 'Custom Mugs', 'Custom Socks', 'Custom Backpacks', 'Custom Branding', 'Sell on Etsy', 'Sell on Social Media', 'Free T-shirt Designs', 'Custom Products', 'Custom All-Over-Print Hoodies', 'Start a Clothing Line', 'Start POD Business', 'Bulk Orders', 'Transfering To Printify']
    },
    {
      title: "Printify",
      items: ['Print on Demand', 'Print Providers', 'Experts Program', 'Printify Express Delivery', 'Become a Partner', 'About', 'Printify Quality Promise', 'Jobs', 'Webinars', 'Printing Profits Podcast', 'Contact Us', 'Affiliate', 'Contact Sales', 'POD Glossary', 'Network Fulfillment Status', 'Merchant Protection']
    }
  ];

  const socialIcons = [
    { name: 'Facebook', src: "https://1000logos.net/wp-content/uploads/2017/02/Facebook-Logosu.png" },
    { name: 'Instagram', src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" },
    { name: 'LinkedIn', src: "https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png" },
    { name: 'Twitter', src: "https://www.shutterstock.com/image-vector/indonesia-9-january-2024-twitter-260nw-2410058195.jpg" },
    { name: 'YouTube', src: "https://t3.ftcdn.net/jpg/04/74/05/94/360_F_474059464_qldYuzxaUWEwNTtYBJ44VN89ARuFktHW.jpg" },
    { name: 'TikTok', src: "https://cdn.pixabay.com/photo/2021/06/15/12/28/tiktok-6338429_960_720.png" },
    { name: 'Reddit', src: "https://www.reddiquette.com/wp-content/uploads/2020/09/What-Is-The-Reddit-Logo-Called.png" },
  ];

  return (
    <footer className="bg-white py-8 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Logo and Name */}
        <div className="flex justify-center items-center mb-6 space-x-2">
          <img
            src="https://play-lh.googleusercontent.com/mNEe0pw6FpUqGUpeXaRC3yIBIOdsp9gqF1ppnu9B3t_LNHIVUZ0IxqHwvErVRLtXiQ"
            alt="Printify Logo"
            className="h-8 md:h-10"
          />
          <h2 className="text-2xl md:text-3xl font-bold text-green-500">Printify</h2>
        </div>

        <div className="flex justify-center space-x-4 mb-8">
          {socialIcons.map((icon, index) => (
            <a key={index} href="#" className="w-8 h-8 bg-green-500 rounded-full overflow-hidden md:h-10 md:w-10">
              <img src={icon.src} alt={icon.name} className="w-full h-full object-cover" />
            </a>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-bold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a
                      href="#"
                      className={`hover:underline ${item === 'Webinars' ? 'text-green-500' : 'text-gray-600 hover:text-green-500'}`}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
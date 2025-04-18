import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLeaf, FaGem, FaBoxOpen, FaTruck, FaUsers, FaHandshake } from 'react-icons/fa';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/80" />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative bg-[url('/images/hero-velvet.jpg')] bg-cover bg-fixed bg-center h-[90vh]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-white max-w-3xl">
              <motion.h1 
                {...fadeIn}
                className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold leading-tight"
              >
                Luxury Velvet & Premium Fabrics
              </motion.h1>
              <motion.p 
                {...fadeIn}
                transition={{ delay: 0.2 }}
                className="mt-6 text-xl sm:text-2xl text-gray-100"
              >
                Your premier destination for premium velvet, velvo, fulldul, supersoft, and festive fabrics. Wholesale & retail available.
              </motion.p>
              <motion.div 
                {...fadeIn}
                transition={{ delay: 0.4 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <Link
                  to="/products"
                  className="bg-primary-500 text-white px-8 py-4 rounded-lg hover:bg-primary-600 transition-colors transform hover:scale-105 duration-200 shadow-lg"
                >
                  View Fabric Collection
                </Link>
                <Link
                  to="/contact"
                  className="bg-white text-primary-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors transform hover:scale-105 duration-200 shadow-lg"
                >
                  Get Wholesale Prices
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Featured Fabrics Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-serif font-bold text-center text-gray-900 mb-12"
          >
            Our Premium Fabric Collection
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fabricCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                      <p className="text-gray-200 mt-2">{category.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-serif font-bold text-gray-900">
              Why Choose Us?
            </h2>
          </motion.div>
          <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                  <div className="relative bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white mx-auto group-hover:scale-110 transition-transform duration-200">
                      {feature.icon}
                    </div>
                    <h3 className="mt-6 text-lg font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-50 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-100 via-transparent to-transparent opacity-60" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-serif font-bold text-center text-gray-900 mb-16"
          >
            What Our Clients Say
          </motion.h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                    <FaUsers className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-gray-900">{testimonial.author}</p>
                    <p className="text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const fabricCategories = [
  {
    name: 'Luxury Velvet',
    description: 'Premium velvet fabrics in rich, vibrant colors perfect for upholstery and fashion',
    image: '/images/velvet-fabric.jpg'
  },
  {
    name: 'Velvo Collection',
    description: 'Soft and durable velvo fabrics ideal for home décor and garments',
    image: '/images/velvo-fabric.jpg'
  },
  {
    name: 'Fulldul Series',
    description: 'High-quality fulldul fabrics with elegant sheen and texture',
    image: '/images/fulldul-fabric.jpg'
  },
  {
    name: 'Supersoft Fabrics',
    description: 'Ultra-comfortable supersoft materials for premium clothing',
    image: '/images/supersoft-fabric.jpg'
  },
  {
    name: 'Festive Collection',
    description: 'Special fabrics including Xmas Santa cloth and seasonal materials',
    image: '/images/festive-fabric.jpg'
  },
  {
    name: 'Designer Prints',
    description: 'Exclusive printed fabrics for unique fashion statements',
    image: '/images/printed-fabric.jpg'
  }
];

const features = [
  {
    title: 'Premium Quality',
    description: 'Handpicked velvet and fancy fabrics ensuring the highest quality standards.',
    icon: <FaGem className="w-6 h-6" />,
  },
  {
    title: 'Wholesale Pricing',
    description: 'Competitive bulk pricing for retailers and manufacturers.',
    icon: <FaBoxOpen className="w-6 h-6" />,
  },
  {
    title: 'Extensive Collection',
    description: 'Wide range of velvet, velvo, fulldul, and festive fabrics in various colors.',
    icon: <FaLeaf className="w-6 h-6" />,
  },
  {
    title: 'Quick Delivery',
    description: 'Prompt shipping for both wholesale and retail orders.',
    icon: <FaTruck className="w-6 h-6" />,
  },
  {
    title: 'Expert Support',
    description: 'Dedicated fabric specialists to assist with your requirements.',
    icon: <FaUsers className="w-6 h-6" />,
  },
  {
    title: 'Trade Benefits',
    description: 'Special pricing and terms for regular business clients.',
    icon: <FaHandshake className="w-6 h-6" />,
  },
];

const testimonials = [
  {
    content: 'Their velvet collection is unmatched in quality. Perfect for our luxury furniture line.',
    author: 'Rajesh Kumar',
    title: 'Furniture Manufacturer',
  },
  {
    content: 'Best wholesale prices for premium fabrics. The Fulldul series is a bestseller at our store.',
    author: 'Priya Sharma',
    title: 'Fabric Store Owner',
  },
  {
    content: 'Their festive collection, especially the Santa cloth, is perfect for our seasonal requirements.',
    author: 'Amit Patel',
    title: 'Event Decorator',
  },
];
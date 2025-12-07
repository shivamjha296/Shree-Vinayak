import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLeaf, FaGem, FaBoxOpen, FaTruck, FaUsers, FaHandshake } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const carouselImages = [
  '/images/carousel-home/1.jpg',
  '/images/carousel-home/2.jpg',
  '/images/carousel-home/3.jpg',
  '/images/carousel-home/4.jpg',
  '/images/carousel-home/5.jpg',
  '/images/carousel-home/6.jpg',
  '/images/carousel-home/7.jpeg'
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="text-gray-900">
              <motion.h1 
                {...fadeIn}
                className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold leading-tight text-primary-900"
              >
                Luxury Velvet & Premium Fabrics
              </motion.h1>
              <motion.p 
                {...fadeIn}
                transition={{ delay: 0.2 }}
                className="mt-6 text-xl sm:text-2xl text-gray-700"
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
                  className="bg-primary-900 text-white px-8 py-4 rounded-lg hover:bg-primary-800 transition-colors transform hover:scale-105 duration-200 shadow-lg"
                >
                  Get Wholesale Prices
                </Link>
              </motion.div>
            </div>

            {/* Right Side - Image Carousel */}
            <div className="relative h-[400px] lg:h-[450px] rounded-2xl overflow-hidden shadow-2xl group">
              <AnimatePresence initial={false}>
                <motion.img
                  key={currentImageIndex}
                  src={carouselImages[currentImageIndex]}
                  alt={`Fabric ${currentImageIndex + 1}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              
              {/* Carousel Indicators */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'bg-white w-8' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={() => setCurrentImageIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-3 rounded-full transition-all duration-300 z-10 opacity-0 hover:opacity-100 group-hover:opacity-100"
                aria-label="Previous image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-3 rounded-full transition-all duration-300 z-10 opacity-0 hover:opacity-100 group-hover:opacity-100"
                aria-label="Next image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
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
      <div className="py-16 bg-white">
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
                className="group h-full"
              >
                <div className="relative h-full">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                  <div className="relative bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white mx-auto group-hover:scale-110 transition-transform duration-200">
                      {feature.icon}
                    </div>
                    <h3 className="mt-6 text-lg font-semibold text-gray-900 text-center">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-gray-600 text-center flex-grow">
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
          <div className="relative">
            <div className="overflow-hidden">
              <motion.div
                animate={{
                  x: [0, -3200],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 50,
                    ease: "linear",
                  },
                }}
                className="flex gap-8"
              >
                {[...testimonials, ...testimonials].map((testimonial, index) => (
                  <div
                    key={`${testimonial.author}-${index}`}
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex-shrink-0 w-full lg:w-[calc(33.333%-1.5rem)]"
                    style={{ minWidth: '350px', maxWidth: '400px' }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                        <FaUsers className="h-6 w-6" />
                      </div>
                      <div className="ml-4">
                        <p className="font-medium text-gray-900">{testimonial.author}</p>
                        <p className="text-sm text-gray-500">{testimonial.title}</p>
                        <p className="text-xs text-gray-400">{testimonial.location}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 italic leading-relaxed">"{testimonial.content}"</p>
                  </div>
                ))}
              </motion.div>
            </div>
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
    image: '/images/luxuryvelvet.png'
  },
  {
    name: 'Velvo Collection',
    description: 'Soft and durable velvo fabrics ideal for home décor and garments',
    image: '/images/velvocollection.png'
  },
  {
    name: 'Fulldul Series',
    description: 'High-quality fulldul fabrics with elegant sheen and texture',
    image: '/images/fulldulseries.png'
  },
  {
    name: 'Supersoft Fabrics',
    description: 'Ultra-comfortable supersoft materials for premium clothing',
    image: '/images/super-soft-fabric.jpg'
  },
  {
    name: 'Festive Collection',
    description: 'Special fabrics including Xmas Santa cloth and seasonal materials',
    image: '/images/festivecollection.png'
  },
  {
    name: 'Designer Prints',
    description: 'Exclusive printed fabrics for unique fashion statements',
    image: '/images/designerprints.jpeg'
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
];

const testimonials = [
  {
    content: 'We have been sourcing velvet fabrics from Shree Vinayak for over 3 years. The quality is consistently excellent and their rates are very competitive. Highly recommend for bulk orders.',
    author: 'Rajesh Kumar',
    title: 'Owner, Kumar Furnishings',
    location: 'Mumbai, Maharashtra',
  },
  {
    content: 'Best wholesale supplier in Surat! The Fulldul and velvo collection is always in demand at our store. Quick delivery and professional service. Very satisfied with their business approach.',
    author: 'Priya Sharma',
    title: 'Proprietor, Sharma Textiles',
    location: 'Surat, Gujarat',
  },
  {
    content: 'Their festive collection is outstanding. We ordered Santa cloth and velvet fabrics for Christmas decorations and the quality exceeded our expectations. Will definitely order again.',
    author: 'Amit Patel',
    title: 'Event Decorator',
    location: 'Ahmedabad, Gujarat',
  },
  {
    content: 'Excellent quality velvet at reasonable prices. We use their fabrics for designer suits and our customers love the rich texture and durability. Great support team as well.',
    author: 'Meera Desai',
    title: 'Fashion Designer',
    location: 'Jaipur, Rajasthan',
  },
  {
    content: 'Reliable supplier with consistent quality. Their supersoft fabric range is perfect for our premium clothing line. Timely delivery and good communication throughout the process.',
    author: 'Sandeep Singh',
    title: 'Director, Singh Garments Pvt Ltd',
    location: 'Delhi NCR',
  },
  {
    content: 'We have tried many suppliers but Shree Vinayak stands out for their quality and pricing. The velvet and velvo fabrics are top-notch. Perfect for upholstery work.',
    author: 'Kavita Reddy',
    title: 'Interior Designer',
    location: 'Bangalore, Karnataka',
  },
  {
    content: 'Very professional dealing and good quality materials. Their fabric collection is extensive and they always have new designs. Wholesale rates are genuinely competitive.',
    author: 'Mohammed Ansari',
    title: 'Managing Partner, Ansari Fabrics',
    location: 'Hyderabad, Telangana',
  },
  {
    content: 'Outstanding service! We ordered velvet fabric for our boutique and received exactly what we needed. The quality is premium and the colors are vibrant. Highly recommended for retailers.',
    author: 'Anjali Gupta',
    title: 'Owner, Gupta Fashion House',
    location: 'Pune, Maharashtra',
  },
];
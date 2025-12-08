import { FaCheckCircle } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

const features = [
  {
    title: 'Mumbai\'s Premier Collection',
    description: 'The largest stockist of premium velvet, Velboa, and fancy fabrics in Chembur, serving the entire Mumbai region.'
  },
  {
    title: 'Trusted Quality',
    description: 'Rigorous quality checks on every meter. The preferred choice for boutique owners and decorators in Mumbai.'
  },
  {
    title: 'Direct Wholesale Rates',
    description: 'Get genuine factory-direct prices. We are the go-to wholesaler for bulk fabric buyers in Maharashtra.'
  }
];

const milestones = [
  {
    year: '2010',
    title: 'Foundation in Chembur',
    description: 'Started as a small specialized shop in Suman Nagar, Chembur, focusing on high-quality velvet fabrics.'
  },
  {
    year: '2015',
    title: 'Expanding Across Mumbai',
    description: 'Became a key supplier for major furnishing stores and fashion boutiques across Mumbai and Navi Mumbai.'
  },
  {
    year: '2020',
    title: 'Maharashtra-wide Distribution',
    description: 'Established a strong wholesale network, supplying to retailers in Pune, Nashik, and Nagpur.'
  },
  {
    year: '2024',
    title: 'Digital Wholesale Hub',
    description: 'Launched our online catalog to help customers across India browse our latest fancy fabric collections.'
  }
];

export default function About() {
  return (
    <div className="py-12">
      <Helmet>
        <title>About Us - Shree Vinayak Fabrics Mumbai</title>
        <meta name="description" content="Established in Chembur, Shree Vinayak is Mumbai's trusted source for premium quality velvet and fancy fabrics since 2010." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            About Shree Vinayak Fabrics
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted <strong>wholesale fabric supplier in Chembur, Mumbai</strong>. Since 2010, we have been
            providing the finest quality velvet and fancy fabrics to retailers, decorators, and designers.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-primary-50 rounded-lg p-4 sm:p-6 md:p-8 mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-primary-900 mb-3 sm:mb-4 text-center">
            Our Mission
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-primary-800 text-center max-w-3xl mx-auto">
            To be Mumbai's most reliable source for premium fabrics, offering
            unmatched variety and wholesale prices to help local businesses and creators thrive.
          </p>
        </div>

        {/* Company History */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-6 sm:mb-8 text-center">
            Our Journey in Mumbai
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            {/* Timeline and Features Combined */}
            <div className="space-y-6 sm:space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-center md:items-start space-y-3 md:space-y-0 md:space-x-6"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-base sm:text-lg font-bold text-primary-900">
                      {milestone.year}
                    </span>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{milestone.description}</p>
                  </div>
                </div>
              ))}

              {/* Features below timeline */}
              <div className="space-y-4 sm:space-y-6 mt-6 sm:mt-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-start space-x-3 sm:space-x-4"
                  >
                    <FaCheckCircle className="text-primary-500 text-lg sm:text-xl flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Shop Image */}
            <div className="flex items-center justify-center">
              <img
                src="/images/shop.jpeg"
                alt="Shree Vinayak Fabric Shop in Chembur"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-gradient-to-br from-primary-50 to-white rounded-lg p-4 sm:p-6 md:p-8 shadow-md border border-primary-100">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-6 sm:mb-8 text-center">
            Why Mumbai Chooses Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <FaCheckCircle className="text-primary-600 text-lg sm:text-xl" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 text-center">Premium Quality</h3>
              <p className="text-gray-600 text-xs sm:text-sm text-center">
                Hand-picked fabrics ensuring the best finish for your garments and furniture.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <FaCheckCircle className="text-primary-600 text-lg sm:text-xl" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 text-center">Wholesale Pricing</h3>
              <p className="text-gray-600 text-xs sm:text-sm text-center">
                Best rates in Mumbai for bulk orders, helping you maximize your profits.
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <FaCheckCircle className="text-primary-600 text-lg sm:text-xl" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 text-center">Local Trust</h3>
              <p className="text-gray-600 text-xs sm:text-sm text-center">
                A reputed name in Chembur's fabric market, known for honesty and reliability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
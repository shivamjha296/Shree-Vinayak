import { FaCheckCircle } from 'react-icons/fa';

const features = [
  {
    title: 'Wide Fabric Collection',
    description: 'Extensive selection of velvets and premium fabrics to meet diverse needs.'
  },
  {
    title: 'Superior Quality',
    description: 'Trusted by designers, manufacturers, and retailers for consistent quality.'
  },
  {
    title: 'Wholesale Pricing',
    description: 'Competitive rates for bulk buyers with flexible payment terms.'
  },
  {
    title: 'Reliable Service',
    description: 'On-time delivery and exceptional customer satisfaction guaranteed.'
  }
];

const milestones = [
  {
    year: '2010',
    title: 'Company Founded',
    description: 'Started with a small collection of premium velvet fabrics.'
  },
  {
    year: '2015',
    title: 'Market Expansion',
    description: 'Expanded product range and established nationwide presence.'
  },
  {
    year: '2018',
    title: 'Quality Certification',
    description: 'Received ISO certification for quality management systems.'
  },
  {
    year: '2023',
    title: 'Digital Transformation',
    description: 'Launched online presence to better serve our customers.'
  }
];

export default function About() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            About SHREE VINAYAK
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner in premium velvet and fancy fabrics since 2010.
            Delivering quality, variety, and excellence in wholesale fabric solutions.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-primary-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-serif font-bold text-primary-900 mb-4 text-center">
            Our Mission
          </h2>
          <p className="text-lg text-primary-800 text-center max-w-3xl mx-auto">
            "Delivering premium velvet and fancy fabrics with unmatched quality and
            variety at wholesale prices, while maintaining the highest standards of
            customer service and satisfaction."
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4"
            >
              <FaCheckCircle className="text-primary-500 text-2xl flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Company History */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">
            Our Journey
          </h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8"
              >
                <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-primary-900">
                    {milestone.year}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quality</h3>
              <p className="text-gray-600">
                Committed to providing the finest fabrics that meet international
                standards.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">
                Continuously exploring new designs and technologies to serve you better.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Integrity</h3>
              <p className="text-gray-600">
                Building lasting relationships through honest business practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
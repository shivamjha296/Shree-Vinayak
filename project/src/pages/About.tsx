import { FaCheckCircle } from 'react-icons/fa';

const features = [
  {
    title: 'Extensive Fabric Collection',
    description: 'Wide range of premium velvet, velvo, fulldul, and supersoft fabrics in diverse colors and textures.'
  },
  {
    title: 'Uncompromising Quality',
    description: 'Rigorous quality checks. Trusted by leading designers, manufacturers, and retailers across India.'
  },
  {
    title: 'Competitive Wholesale Pricing',
    description: 'Industry-leading bulk rates with flexible payment terms for retailers and manufacturers.'
  }
];

const milestones = [
  {
    year: '2010',
    title: 'Foundation & Early Years',
    description: 'Established in Surat with a vision to provide premium quality velvet fabrics to local retailers.'
  },
  {
    year: '2015',
    title: 'Nationwide Expansion',
    description: 'Expanded product range and established distribution network across major cities in India.'
  },
  {
    year: '2020',
    title: 'Quality Excellence',
    description: 'Became preferred supplier for premium boutiques and fashion houses across the country.'
  },
  {
    year: '2024',
    title: 'Digital Innovation',
    description: 'Launched online platform to streamline wholesale ordering and enhance customer experience.'
  }
];

export default function About() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            About Shree Vinayak
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Leading wholesale supplier of premium velvet and specialty fabrics since 2010. 
            Serving retailers and manufacturers across India with quality and competitive pricing.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-primary-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-serif font-bold text-primary-900 mb-4 text-center">
            Our Mission
          </h2>
          <p className="text-base text-primary-800 text-center max-w-3xl mx-auto">
            To be India's trusted wholesale fabric supplier by delivering premium quality fabrics 
            at competitive prices with exceptional service and long-term partnerships.
          </p>
        </div>

        {/* Company History */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8 text-center">
            Our Journey
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Timeline and Features Combined */}
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-center md:items-start space-y-3 md:space-y-0 md:space-x-6"
                >
                  <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold text-primary-900">
                      {milestone.year}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{milestone.description}</p>
                  </div>
                </div>
              ))}
              
              {/* Features below timeline */}
              <div className="space-y-6 mt-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-start space-x-4"
                  >
                    <FaCheckCircle className="text-primary-500 text-xl flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
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
                alt="Shree Vinayak Shop"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-gradient-to-br from-primary-50 to-white rounded-lg p-8 shadow-md border border-primary-100">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCheckCircle className="text-primary-600 text-xl" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">Quality First</h3>
              <p className="text-gray-600 text-sm text-center">
                Every fabric is meticulously sourced and inspected to meet the highest quality standards.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCheckCircle className="text-primary-600 text-xl" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">Customer Success</h3>
              <p className="text-gray-600 text-sm text-center">
                Expert guidance, reliable inventory, and prompt service to help your business thrive.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCheckCircle className="text-primary-600 text-xl" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">Trust & Integrity</h3>
              <p className="text-gray-600 text-sm text-center">
                Building long-term relationships through transparent practices and honest pricing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
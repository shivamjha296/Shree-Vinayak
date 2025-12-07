type FabricType = {
  id: string;
  name: string;
  description: string;
  image: string;
  uses: string[];
  colors: string[];
  minOrder?: string;
};

const fabricTypes: FabricType[] = [
  {
    id: 'velvet',
    name: 'Premium Velvet',
    description: 'Luxurious velvet fabric with deep, rich colors and superior quality. Features both plain and textured options, perfect for upholstery and high-end fashion.',
    image: '/images/luxuryvelvet.png',
    uses: ['Upholstery', 'Fashion Garments', 'Home Decor', 'Drapery'],
    colors: ['Royal Blue', 'Deep Red', 'Emerald Green', 'Gold', 'Purple', 'Black', 'Silver']
  },
  {
    id: 'Velboa',
    name: 'Velboa Collection',
    description: 'Signature Velboa fabric blends the luxurious feel of velvet with enhanced durability. Perfect for commercial and residential applications.',
    image: '/images/velboacollection.png',
    uses: ['Commercial Furniture', 'Residential Upholstery', 'Cushions', 'Wall Panels'],
    colors: ['Midnight Blue', 'Burgundy', 'Forest Green', 'Champagne', 'Charcoal']
  },
  {
    id: 'Full Dull',
    name: 'Full Dull Series',
    description: 'Premium Full Dull fabric with a distinctive sheen and sophisticated texture. Ideal for creating elegant interiors and luxurious fashion pieces.',
    image: '/images/fulldullseries.png',
    uses: ['Luxury Furniture', 'High-end Fashion', 'Interior Decoration', 'Boutique Items'],
    colors: ['Pearl White', 'Rose Gold', 'Sapphire Blue', 'Bronze', 'Platinum']
  },
  {
    id: 'supersoft',
    name: 'Supersoft Fabrics',
    description: 'Ultra-comfortable Supersoft fabric that combines luxury with practicality. Perfect for clothing and soft furnishings.',
    image: '/images/super-soft-fabric.jpg',
    uses: ['Casual Wear', 'Bedding', 'Soft Furnishings', 'Children\'s Clothing'],
    colors: ['Sky Blue', 'Soft Pink', 'Mint Green', 'Lavender', 'Beige']
  },
  {
    id: 'santa',
    name: 'Xmas Santa Collection',
    description: 'Specialized fabric perfect for festive seasons. Features rich textures and colors ideal for Christmas decorations & costumes.',
    image: '/images/festivecollection.png',
    uses: ['Santa Costumes', 'Christmas Decorations', 'Festive Accessories', 'Holiday Display'],
    colors: ['Classic Red', 'Snow White', 'Forest Green', 'Gold Trim']
  },
  {
    id: 'designer',
    name: 'Designer Prints',
    description: 'Custom-designed printed fabrics on premium base materials. Available in various patterns and color combinations.',
    image: '/images/designerprints.jpeg',
    uses: ['Fashion Collections', 'Home Décor', 'Custom Projects', 'Seasonal Collections'],
    colors: ['Custom Patterns', 'Seasonal Designs', 'Bespoke Prints']
  }
];

import { useState } from 'react';

type InquiryFormData = {
  company_name: string;
  email: string;
  phone: string;
  fabric_type: string;
  quantity: string;
  message: string;
};

export default function Products() {
  const [formData, setFormData] = useState<InquiryFormData>({
    company_name: '',
    email: '',
    phone: '',
    fabric_type: '',
    quantity: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const scrollToForm = () => {
    const formElement = document.getElementById('inquiry-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    const form = e.currentTarget;
    const formDataToSend = new FormData(form);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });
      
      const data = await response.json();
      
      if (data.success) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        setFormData({
          company_name: '',
          email: '',
          phone: '',
          fabric_type: '',
          quantity: '',
          message: ''
        });

        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        throw new Error(data.message || 'Form submission failed');
      }
    } catch (err) {
      console.error('Failed to send inquiry:', err);
      setIsSubmitting(false);
      setError('Failed to submit the form. Please try again later.');
    }
  };

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Premium Fabric Collections
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our extensive range of premium fabrics, including velvet, Velboa, Full Dull, and festive collections.
            Available for both wholesale and retail with competitive bulk pricing.
          </p>
        </div>

        {/* Fabric Types Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {fabricTypes.map((fabric) => (
            <div
              key={fabric.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative">
                <img
                  src={fabric.image}
                  alt={fabric.name}
                  loading="lazy"
                  className="w-full h-48 sm:h-56 md:h-64 object-cover"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{fabric.name}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 text-justify">{fabric.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-sm sm:text-base text-gray-900 mb-2">Available Colors:</h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {fabric.colors.map((color) => (
                      <span key={color} className="inline-block bg-gray-100 rounded-full px-2 py-0.5 sm:px-3 sm:py-1 text-xs sm:text-sm text-gray-700">
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-sm sm:text-base text-gray-900 mb-2">Common Uses:</h4>
                  <ul className="list-disc list-inside text-sm sm:text-base text-gray-600">
                    {fabric.uses.map((use) => (
                      <li key={use}>{use}</li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={scrollToForm}
                  className="bg-primary-500 text-white px-4 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base rounded-lg hover:bg-primary-600 transition-colors w-full"
                >
                  Get Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Inquiry Form */}
        <div id="inquiry-form" className="bg-gray-50 rounded-lg p-4 sm:p-6 md:p-8 border-2 border-black shadow-xl max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4 sm:mb-6 text-center">
            Wholesale Inquiry Form
          </h2>
          
          {isSubmitted ? (
            <div className="bg-green-50 border border-green-200 rounded-md p-8 text-center">
              <div className="flex items-center justify-center mb-6">
                <svg className="h-16 w-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h3>
              <p className="text-green-700 font-medium text-lg mb-2">
                Your wholesale inquiry has been submitted successfully.
              </p>
              <p className="text-gray-600">
                Our team will contact you shortly with pricing and availability information.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY} />
              <input type="hidden" name="subject" value="New Wholesale Inquiry - Shree Vinayak" />
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-6">
                  <p className="text-red-600">{error}</p>
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1.5 sm:mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company_name"
                    required
                    value={formData.company_name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base rounded-md border-2 border-gray-400 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1.5 sm:mb-2">
                    Contact Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base rounded-md border-2 border-gray-400 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1.5 sm:mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base rounded-md border-2 border-gray-400 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1.5 sm:mb-2">
                    Fabric Type
                  </label>
                  <select
                    name="fabric_type"
                    required
                    value={formData.fabric_type}
                    onChange={handleChange}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base rounded-md border-2 border-gray-400 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  >
                    <option value="">Select a fabric type</option>
                    {fabricTypes.map((fabric) => (
                      <option key={fabric.id} value={fabric.name}>
                        {fabric.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1.5 sm:mb-2">
                    Required Quantity (meters)
                  </label>
                  <input
                    type="text"
                    name="quantity"
                    required
                    value={formData.quantity}
                    onChange={handleChange}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base rounded-md border-2 border-gray-400 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    placeholder="Minimum order quantities apply"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1.5 sm:mb-2">
                    Additional Requirements
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base rounded-md border-2 border-gray-400 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    placeholder="Please specify any special requirements, color preferences, or delivery timeline"
                  ></textarea>
                </div>
                <div className="md:col-span-2">
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className={`text-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg rounded-lg transition-colors w-full font-semibold shadow-lg ${
                      isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary-500 hover:bg-primary-600'
                    }`}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Wholesale Inquiry'}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
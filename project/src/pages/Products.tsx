import { useState } from 'react';
import { useForm } from 'react-hook-form';

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
    description: 'Luxurious velvet fabric with deep, rich colors and superior quality. Our velvet collection features both plain and textured options, perfect for upholstery and high-end fashion.',
    image: '/images/velvet-fabric.jpg',
    uses: ['Upholstery', 'Fashion Garments', 'Home Décor', 'Drapery'],
    colors: ['Royal Blue', 'Deep Red', 'Emerald Green', 'Gold', 'Purple', 'Black', 'Silver'],
    minOrder: '50 meters'
  },
  {
    id: 'velvo',
    name: 'Velvo Collection',
    description: 'Our signature Velvo fabric combines the luxurious feel of velvet with enhanced durability. Perfect for both commercial and residential applications.',
    image: '/images/velvo-fabric.jpg',
    uses: ['Commercial Furniture', 'Residential Upholstery', 'Cushions', 'Wall Panels'],
    colors: ['Midnight Blue', 'Burgundy', 'Forest Green', 'Champagne', 'Charcoal'],
    minOrder: '100 meters'
  },
  {
    id: 'fulldul',
    name: 'Fulldul Series',
    description: 'Premium Fulldul fabric with a distinctive sheen and sophisticated texture. Ideal for creating elegant interiors and fashion pieces.',
    image: '/images/fulldul-fabric.jpg',
    uses: ['Luxury Furniture', 'High-end Fashion', 'Interior Decoration', 'Boutique Items'],
    colors: ['Pearl White', 'Rose Gold', 'Sapphire Blue', 'Bronze', 'Platinum'],
    minOrder: '75 meters'
  },
  {
    id: 'supersoft',
    name: 'Supersoft Fabrics',
    description: 'Ultra-comfortable Supersoft fabric that combines luxury with practicality. Perfect for clothing and soft furnishings.',
    image: '/images/supersoft-fabric.jpg',
    uses: ['Casual Wear', 'Bedding', 'Soft Furnishings', 'Children\'s Clothing'],
    colors: ['Sky Blue', 'Soft Pink', 'Mint Green', 'Lavender', 'Beige'],
    minOrder: '50 meters'
  },
  {
    id: 'santa',
    name: 'Xmas Santa Collection',
    description: 'Specialized fabric perfect for festive season products. Features rich textures and colors ideal for Christmas decorations and costumes.',
    image: '/images/santa-fabric.jpg',
    uses: ['Santa Costumes', 'Christmas Decorations', 'Festive Accessories', 'Holiday Display'],
    colors: ['Classic Red', 'Snow White', 'Forest Green', 'Gold Trim'],
    minOrder: '25 meters'
  },
  {
    id: 'designer',
    name: 'Designer Prints',
    description: 'Custom-designed printed fabrics on premium base materials. Available in various patterns and color combinations.',
    image: '/images/designer-fabric.jpg',
    uses: ['Fashion Collections', 'Home Décor', 'Custom Projects', 'Seasonal Collections'],
    colors: ['Custom Patterns', 'Seasonal Designs', 'Bespoke Prints'],
    minOrder: '100 meters'
  }
];

type InquiryForm = {
  name: string;
  email: string;
  phone: string;
  fabricType: string;
  quantity: string;
  message: string;
};

export default function Products() {
  const [selectedFabric, setSelectedFabric] = useState<FabricType | null>(null);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<InquiryForm>();

  const onSubmit = (data: InquiryForm) => {
    console.log(data);
    reset();
    alert('Thank you for your inquiry. Our team will contact you shortly with pricing and availability information.');
  };

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Premium Fabric Collections
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our extensive range of premium fabrics, including velvet, velvo, fulldul, and festive collections.
            Available for both wholesale and retail with competitive bulk pricing.
          </p>
        </div>

        {/* Fabric Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {fabricTypes.map((fabric) => (
            <div
              key={fabric.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative">
                <img
                  src={fabric.image}
                  alt={fabric.name}
                  className="w-full h-64 object-cover"
                />
                {fabric.minOrder && (
                  <div className="absolute top-4 right-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm">
                    Min. Order: {fabric.minOrder}
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{fabric.name}</h3>
                <p className="text-gray-600 mb-4">{fabric.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Available Colors:</h4>
                  <div className="flex flex-wrap gap-2">
                    {fabric.colors.map((color) => (
                      <span key={color} className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm text-gray-700">
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Common Uses:</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {fabric.uses.map((use) => (
                      <li key={use}>{use}</li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => setSelectedFabric(fabric)}
                  className="bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors w-full"
                >
                  Request Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Inquiry Form */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">
            Wholesale Inquiry Form
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  {...register('name', { required: true })}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
                {errors.name && (
                  <span className="text-red-500 text-sm">Company name is required</span>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Email
                </label>
                <input
                  type="email"
                  {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">Valid email is required</span>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  {...register('phone', { required: true })}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
                {errors.phone && (
                  <span className="text-red-500 text-sm">Phone number is required</span>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Fabric Type
                </label>
                <select
                  {...register('fabricType', { required: true })}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                >
                  <option value="">Select a fabric type</option>
                  {fabricTypes.map((fabric) => (
                    <option key={fabric.id} value={fabric.id}>
                      {fabric.name}
                    </option>
                  ))}
                </select>
                {errors.fabricType && (
                  <span className="text-red-500 text-sm">Please select a fabric type</span>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Required Quantity (meters)
                </label>
                <input
                  type="text"
                  {...register('quantity', { required: true })}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  placeholder="Minimum order quantities apply"
                />
                {errors.quantity && (
                  <span className="text-red-500 text-sm">Quantity is required</span>
                )}
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Requirements
                </label>
                <textarea
                  {...register('message')}
                  rows={4}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  placeholder="Please specify any special requirements, color preferences, or delivery timeline"
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button 
                  type="submit" 
                  className="bg-primary-500 text-white px-8 py-4 rounded-lg hover:bg-primary-600 transition-colors w-full font-semibold"
                >
                  Submit Wholesale Inquiry
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
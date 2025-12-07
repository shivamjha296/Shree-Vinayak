import { useState } from 'react';

const galleryImages = [
  {
    id: 1,
    src: '/images/luxuryvelvet.png',
    alt: 'Premium Velvet Fabric',
    category: 'Velvet'
  },
  {
    id: 2,
    src: '/images/velvocollection.png',
    alt: 'Velvo Collection',
    category: 'Velvo'
  },
  {
    id: 3,
    src: '/images/fulldulseries.png',
    alt: 'Fulldul Fabric',
    category: 'Fulldul'
  },
  {
    id: 4,
    src: '/images/super-soft-fabric.jpg',
    alt: 'Supersoft Fabric',
    category: 'Supersoft'
  },
  {
    id: 5,
    src: '/images/festivecollection.png',
    alt: 'Festive Collection',
    category: 'Festive'
  },
  {
    id: 6,
    src: '/images/designerprints.jpeg',
    alt: 'Designer Prints',
    category: 'Designer'
  },
  {
    id: 7,
    src: '/images/luxuryvelvet.png',
    alt: 'Velvet Fabric Texture',
    category: 'Velvet'
  },
  {
    id: 8,
    src: '/images/velvocollection.png',
    alt: 'Velvo Fabric Rolls',
    category: 'Velvo'
  },
  {
    id: 9,
    src: '/images/fulldulseries.png',
    alt: 'Fulldul Fabric Samples',
    category: 'Fulldul'
  },
  {
    id: 10,
    src: '/images/super-soft-fabric.jpg',
    alt: 'Supersoft Material',
    category: 'Supersoft'
  },
  {
    id: 11,
    src: '/images/festivecollection.png',
    alt: 'Festive Fabrics',
    category: 'Festive'
  },
  {
    id: 12,
    src: '/images/designerprints.jpeg',
    alt: 'Printed Fabric Patterns',
    category: 'Designer'
  }
];

const categories = ['All', ...Array.from(new Set(galleryImages.map(img => img.category)))];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Fabric Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our extensive collection of premium velvet, velvo, fulldul, supersoft, festive, and designer fabrics.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6 text-center">
            Filter by Category
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-primary-100 hover:text-primary-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="font-semibold text-lg">{image.alt}</p>
                  <p className="text-sm opacity-90 mt-1">
                    <span className="inline-block bg-white/20 px-3 py-1 rounded-full">
                      {image.category}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">No images found in this category.</p>
          </div>
        )}

        {/* Info Section */}
        <div className="mt-16 bg-primary-50 rounded-lg p-8">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 text-center">
            Need More Information?
          </h2>
          <p className="text-center text-gray-700 mb-6 max-w-2xl mx-auto">
            Browse through our collection and contact us for detailed fabric specifications, 
            pricing, and bulk order inquiries. All fabrics are available for wholesale purchase.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/products"
              className="bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors font-semibold"
            >
              View Products
            </a>
            <a
              href="/contact"
              className="bg-white text-primary-600 border-2 border-primary-500 px-6 py-3 rounded-lg hover:bg-primary-50 transition-colors font-semibold"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}